(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function oM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qh={exports:{}},le={};var I0;function lM(){if(I0)return le;I0=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function A(P){return P===null||typeof P!="object"?null:(P=M&&P[M]||P["@@iterator"],typeof P=="function"?P:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,S={};function I(P,ct,J){this.props=P,this.context=ct,this.refs=S,this.updater=J||w}I.prototype.isReactComponent={},I.prototype.setState=function(P,ct){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ct,"setState")},I.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function z(){}z.prototype=I.prototype;function D(P,ct,J){this.props=P,this.context=ct,this.refs=S,this.updater=J||w}var V=D.prototype=new z;V.constructor=D,x(V,I.prototype),V.isPureReactComponent=!0;var G=Array.isArray;function O(){}var k={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function C(P,ct,J){var it=J.ref;return{$$typeof:o,type:P,key:ct,ref:it!==void 0?it:null,props:J}}function H(P,ct){return C(P.type,ct,P.props)}function at(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function ut(P){var ct={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(J){return ct[J]})}var gt=/\/+/g;function lt(P,ct){return typeof P=="object"&&P!==null&&P.key!=null?ut(""+P.key):ct.toString(36)}function q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(ct){P.status==="pending"&&(P.status="fulfilled",P.value=ct)},function(ct){P.status==="pending"&&(P.status="rejected",P.reason=ct)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function rt(P,ct,J,it,Mt){var Nt=typeof P;(Nt==="undefined"||Nt==="boolean")&&(P=null);var Rt=!1;if(P===null)Rt=!0;else switch(Nt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(P.$$typeof){case o:case n:Rt=!0;break;case v:return Rt=P._init,rt(Rt(P._payload),ct,J,it,Mt)}}if(Rt)return Mt=Mt(P),Rt=it===""?"."+lt(P,0):it,G(Mt)?(J="",Rt!=null&&(J=Rt.replace(gt,"$&/")+"/"),rt(Mt,ct,J,"",function(L){return L})):Mt!=null&&(at(Mt)&&(Mt=H(Mt,J+(Mt.key==null||P&&P.key===Mt.key?"":(""+Mt.key).replace(gt,"$&/")+"/")+Rt)),ct.push(Mt)),1;Rt=0;var Et=it===""?".":it+":";if(G(P))for(var Yt=0;Yt<P.length;Yt++)it=P[Yt],Nt=Et+lt(it,Yt),Rt+=rt(it,ct,J,Nt,Mt);else if(Yt=A(P),typeof Yt=="function")for(P=Yt.call(P),Yt=0;!(it=P.next()).done;)it=it.value,Nt=Et+lt(it,Yt++),Rt+=rt(it,ct,J,Nt,Mt);else if(Nt==="object"){if(typeof P.then=="function")return rt(q(P),ct,J,it,Mt);throw ct=String(P),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function j(P,ct,J){if(P==null)return P;var it=[],Mt=0;return rt(P,it,"","",function(Nt){return ct.call(J,Nt,Mt++)}),it}function vt(P){if(P._status===-1){var ct=P._result,J=ct();J.then(function(it){(P._status===0||P._status===-1)&&(P._status=1,P._result=it,J.status===void 0&&(J.status="fulfilled",J.value=it))},function(it){(P._status===0||P._status===-1)&&(P._status=2,P._result=it,J.status===void 0&&(J.status="rejected",J.reason=it))}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var yt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Gt(P){var ct=k.T,J={};J.types=ct!==null?ct.types:null,k.T=J;try{var it=P(),Mt=k.S;Mt!==null&&Mt(J,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(O,yt)}catch(Nt){yt(Nt)}finally{ct!==null&&J.types!==null&&(ct.types=J.types),k.T=ct}}function se(P){var ct=k.T;if(ct!==null){var J=ct.types;J===null?ct.types=[P]:J.indexOf(P)===-1&&J.push(P)}else Gt(se.bind(null,P))}var Te={map:j,forEach:function(P,ct,J){j(P,function(){ct.apply(this,arguments)},J)},count:function(P){var ct=0;return j(P,function(){ct++}),ct},toArray:function(P){return j(P,function(ct){return ct})||[]},only:function(P){if(!at(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return le.Activity=m,le.Children=Te,le.Component=I,le.Fragment=a,le.Profiler=u,le.PureComponent=D,le.StrictMode=s,le.Suspense=_,le.ViewTransition=y,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,le.__COMPILER_RUNTIME={__proto__:null,c:function(P){return k.H.useMemoCache(P)}},le.addTransitionType=se,le.cache=function(P){return function(){return P.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(P,ct,J){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var it=x({},P.props),Mt=P.key;if(ct!=null)for(Nt in ct.key!==void 0&&(Mt=""+ct.key),ct)!R.call(ct,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&ct.ref===void 0||(it[Nt]=ct[Nt]);var Nt=arguments.length-2;if(Nt===1)it.children=J;else if(1<Nt){for(var Rt=Array(Nt),Et=0;Et<Nt;Et++)Rt[Et]=arguments[Et+2];it.children=Rt}return C(P.type,Mt,it)},le.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:f,_context:P},P},le.createElement=function(P,ct,J){var it,Mt={},Nt=null;if(ct!=null)for(it in ct.key!==void 0&&(Nt=""+ct.key),ct)R.call(ct,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(Mt[it]=ct[it]);var Rt=arguments.length-2;if(Rt===1)Mt.children=J;else if(1<Rt){for(var Et=Array(Rt),Yt=0;Yt<Rt;Yt++)Et[Yt]=arguments[Yt+2];Mt.children=Et}if(P&&P.defaultProps)for(it in Rt=P.defaultProps,Rt)Mt[it]===void 0&&(Mt[it]=Rt[it]);return C(P,Nt,Mt)},le.createRef=function(){return{current:null}},le.forwardRef=function(P){return{$$typeof:d,render:P}},le.isValidElement=at,le.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:vt}},le.memo=function(P,ct){return{$$typeof:g,type:P,compare:ct===void 0?null:ct}},le.startTransition=Gt,le.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},le.use=function(P){return k.H.use(P)},le.useActionState=function(P,ct,J){return k.H.useActionState(P,ct,J)},le.useCallback=function(P,ct){return k.H.useCallback(P,ct)},le.useContext=function(P){return k.H.useContext(P)},le.useDebugValue=function(){},le.useDeferredValue=function(P,ct){return k.H.useDeferredValue(P,ct)},le.useEffect=function(P,ct){return k.H.useEffect(P,ct)},le.useEffectEvent=function(P){return k.H.useEffectEvent(P)},le.useId=function(){return k.H.useId()},le.useImperativeHandle=function(P,ct,J){return k.H.useImperativeHandle(P,ct,J)},le.useInsertionEffect=function(P,ct){return k.H.useInsertionEffect(P,ct)},le.useLayoutEffect=function(P,ct){return k.H.useLayoutEffect(P,ct)},le.useMemo=function(P,ct){return k.H.useMemo(P,ct)},le.useOptimistic=function(P,ct){return k.H.useOptimistic(P,ct)},le.useReducer=function(P,ct,J){return k.H.useReducer(P,ct,J)},le.useRef=function(P){return k.H.useRef(P)},le.useState=function(P){return k.H.useState(P)},le.useSyncExternalStore=function(P,ct,J){return k.H.useSyncExternalStore(P,ct,J)},le.useTransition=function(){return k.H.useTransition()},le.version="19.3.0",le}var B0;function Sp(){return B0||(B0=1,qh.exports=lM()),qh.exports}var On=Sp();const ft=oM(On);var Yh={exports:{}},Qo={},Wh={exports:{}},Zh={};var F0;function uM(){return F0||(F0=1,(function(o){function n(q,rt){var j=q.length;q.push(rt);t:for(;0<j;){var vt=j-1>>>1,yt=q[vt];if(0<u(yt,rt))q[vt]=rt,q[j]=yt,j=vt;else break t}}function a(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var rt=q[0],j=q.pop();if(j!==rt){q[0]=j;t:for(var vt=0,yt=q.length,Gt=yt>>>1;vt<Gt;){var se=2*(vt+1)-1,Te=q[se],P=se+1,ct=q[P];if(0>u(Te,j))P<yt&&0>u(ct,Te)?(q[vt]=ct,q[P]=j,vt=P):(q[vt]=Te,q[se]=j,vt=se);else if(P<yt&&0>u(ct,j))q[vt]=ct,q[P]=j,vt=P;else break t}}return rt}function u(q,rt){var j=q.sortIndex-rt.sortIndex;return j!==0?j:q.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],g=[],v=1,m=null,y=3,M=!1,A=!1,w=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(q){for(var rt=a(g);rt!==null;){if(rt.callback===null)s(g);else if(rt.startTime<=q)s(g),rt.sortIndex=rt.expirationTime,n(_,rt);else break;rt=a(g)}}function V(q){if(w=!1,D(q),!A)if(a(_)!==null)A=!0,G||(G=!0,at());else{var rt=a(g);rt!==null&&lt(V,rt.startTime-q)}}var G=!1,O=-1,k=5,R=-1;function C(){return x?!0:!(o.unstable_now()-R<k)}function H(){if(x=!1,G){var q=o.unstable_now();R=q;var rt=!0;try{t:{A=!1,w&&(w=!1,I(O),O=-1),M=!0;var j=y;try{e:{for(D(q),m=a(_);m!==null&&!(m.expirationTime>q&&C());){var vt=m.callback;if(typeof vt=="function"){m.callback=null,y=m.priorityLevel;var yt=vt(m.expirationTime<=q);if(q=o.unstable_now(),typeof yt=="function"){m.callback=yt,D(q),rt=!0;break e}m===a(_)&&s(_),D(q)}else s(_);m=a(_)}if(m!==null)rt=!0;else{var Gt=a(g);Gt!==null&&lt(V,Gt.startTime-q),rt=!1}}break t}finally{m=null,y=j,M=!1}rt=void 0}}finally{rt?at():G=!1}}}var at;if(typeof z=="function")at=function(){z(H)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,gt=ut.port2;ut.port1.onmessage=H,at=function(){gt.postMessage(null)}}else at=function(){S(H,0)};function lt(q,rt){O=S(function(){q(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(q){switch(y){case 1:case 2:case 3:var rt=3;break;default:rt=y}var j=y;y=rt;try{return q()}finally{y=j}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(q,rt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var j=y;y=q;try{return rt()}finally{y=j}},o.unstable_scheduleCallback=function(q,rt,j){var vt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,q){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=j+yt,q={id:v++,callback:rt,priorityLevel:q,startTime:j,expirationTime:yt,sortIndex:-1},j>vt?(q.sortIndex=j,n(g,q),a(_)===null&&q===a(g)&&(w?(I(O),O=-1):w=!0,lt(V,j-vt))):(q.sortIndex=yt,n(_,q),A||M||(A=!0,G||(G=!0,at()))),q},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(q){var rt=y;return function(){var j=y;y=rt;try{return q.apply(this,arguments)}finally{y=j}}}})(Zh)),Zh}var H0;function cM(){return H0||(H0=1,Wh.exports=uM()),Wh.exports}var jh={exports:{}},Cn={};var G0;function fM(){if(G0)return Cn;G0=1;var o=Sp();function n(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:m,implementation:y}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.browser=function(v){return{$$typeof:f,_reason:v}},Cn.createPortal=function(v,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return d(v,m,null,y)},Cn.flushSync=function(v){var m=_.T,y=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=m,s.p=y,s.d.f()}},Cn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Cn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Cn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var y=m.as,M=g(y,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:A,fetchPriority:w}):y==="script"&&s.d.X(v,{crossOrigin:M,integrity:A,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Cn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,M=g(y,m.crossOrigin);s.d.L(v,y,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(v,m){if(typeof v=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Cn.requestFormReset=function(v){s.d.r(v)},Cn.unstable_batchedUpdates=function(v,m){return v(m)},Cn.useFormState=function(v,m,y){return _.H.useFormState(v,m,y)},Cn.useFormStatus=function(){return _.H.useHostTransitionStatus()},Cn.version="19.3.0",Cn}var V0;function hM(){if(V0)return jh.exports;V0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),jh.exports=fM(),jh.exports}var X0;function dM(){if(X0)return Qo;X0=1;var o=cM(),n=Sp(),a=hM();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(s(188))}function g(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return _(l),t;if(c===r)return _(l),e;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var p=!1,E=l.child;E;){if(E===i){p=!0,i=l,r=c;break}if(E===r){p=!0,r=l,i=c;break}E=E.sibling}if(!p){for(E=c.child;E;){if(E===i){p=!0,i=c,r=l;break}if(E===r){p=!0,r=c,i=l;break}E=E.sibling}if(!p)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}function m(t,e,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&m(t.child,e,i,r,l,c))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function A(t){var e=[null,null],i=y(t);return i===null||w(e,t,i.child,{foundSelf:!1}),e}function w(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(t,e,i.child,r))return!0;i=i.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,I=null;function z(t,e,i){return t===i?!0:t===e?(S=t,!0):!1}function D(t,e,i){return t===i?(I=t,!1):t===e?(I!==null&&(S=t),!0):!1}function V(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=e;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var O=Object.assign,k=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),se=Symbol.for("react.legacy_hidden"),Te=Symbol.for("react.memo_cache_sentinel"),P=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),J=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case ut:return"Profiler";case at:return"StrictMode";case rt:return"Suspense";case j:return"SuspenseList";case Gt:return"Activity";case P:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case lt:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return e=t.displayName||null,e!==null?e:Nt(t.type)||"Memo";case yt:e=t._payload,t=t._init;try{return Nt(t(e))}catch{}}return null}var Rt=Array.isArray,Et=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},He=[],re=-1;function Qt(t){return{current:t}}function Lt(t){0>re||(t.current=He[re],He[re]=null,re--)}function ie(t,e){re++,He[re]=t.current,t.current=e}var Ft=Qt(null),oe=Qt(null),qe=Qt(null),We=Qt(null);function U(t,e){switch(ie(qe,e),ie(oe,t),ie(Ft,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Y_(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Y_(e),t=W_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ft),ie(Ft,t)}function T(){Lt(Ft),Lt(oe),Lt(qe)}function tt(t){var e=t.memoizedState;e!==null&&(Ns._currentValue=e.memoizedState,ie(We,t)),e=Ft.current;var i=W_(e,t.type);e!==i&&(ie(oe,t),ie(Ft,i))}function pt(t){oe.current===t&&(Lt(Ft),Lt(oe)),We.current===t&&(Lt(We),Ns._currentValue=L)}var St,ht;function Xt(t){if(St===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);St=e&&e[1]||"",ht=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+t+ht}var Ct=!1;function Zt(t,e){if(!t||Ct)return"";Ct=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Ut){var X=Ut}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Ut){X=Ut}mt=!1;try{var $=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&($!==void 0?Object.defineProperty(t.prototype,"props",$):delete t.prototype.props)}}}else{try{throw Error()}catch(Ut){X=Ut}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Ut){if(Ut&&X&&typeof Ut.stack=="string")return[Ut.stack,X.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],E=c[1];if(p&&E){var N=p.split(`
`),W=E.split(`
`);for(l=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;if(r===N.length||l===W.length)for(r=N.length-1,l=W.length-1;1<=r&&0<=l&&N[r]!==W[l];)l--;for(;1<=r&&0<=l;r--,l--)if(N[r]!==W[l]){if(r!==1||l!==1)do if(r--,l--,0>l||N[r]!==W[l]){var nt=`
`+N[r].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=r&&0<=l);break}}}finally{Ct=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Xt(i):""}function Kt(t,e){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return t.child!==e&&e!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Zt(t.type,!1);case 11:return Zt(t.type.render,!1);case 1:return Zt(t.type,!0);case 31:return Xt("Activity");case 30:return Xt("ViewTransition");default:return""}}function bt(t){try{var e="",i=null;do e+=Kt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,ce=o.unstable_requestPaint,F=o.unstable_now,At=o.unstable_getCurrentPriorityLevel,Dt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,xt=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Wt=o.unstable_IdlePriority,ue=o.log,Ge=o.unstable_setDisableYieldValue,ye=null,$e=null;function dn(t){if(typeof ue=="function"&&Ge(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(ye,t)}catch{}}var wn=Math.clz32?Math.clz32:_l,Ji=Math.log,so=Math.LN2;function _l(t){return t>>>=0,t===0?32:31-(Ji(t)/so|0)|0}var ur=256,$i=262144,cr=4194304;function ci(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fr(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=ci(r):(p&=E,p!==0?l=ci(p):i||(i=E&~t,i!==0&&(l=ci(i))))):(E=r&~c,E!==0?l=ci(E):p!==0?l=ci(p):i||(i=r&~t,i!==0&&(l=ci(i)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:l}function Ea(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function vl(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-wn(i),l=1<<r;e|=t[r],i&=~l}return e}function vc(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sl(){var t=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),t}function oo(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function hr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Sc(t,e,i,r,l,c){var p=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,W=t.hiddenUpdates;for(i=p&~i;0<i;){var nt=31-wn(i),mt=1<<nt;E[nt]=0,N[nt]=-1;var X=W[nt];if(X!==null)for(W[nt]=null,nt=0;nt<X.length;nt++){var $=X[nt];$!==null&&($.lane&=-536870913)}i&=~mt}r!==0&&b(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(p&~e))}function b(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-wn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function Z(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-wn(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function st(t,e){var i=e&-e;return i=(i&42)!==0?1:ot(i),(i&(t.suspendedLanes|e))!==0?0:i}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function K(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=Yt.p;return t!==0?t:(t=window.event,t===void 0?32:D0(t.type))}function Pt(t,e){var i=Yt.p;try{return Yt.p=t,e()}finally{Yt.p=i}}var Bt=Math.random().toString(36).slice(2),wt="__reactFiber$"+Bt,kt="__reactProps$"+Bt,ee="__reactContainer$"+Bt,$t="__reactEvents$"+Bt,_e="__reactListeners$"+Bt,ze="__reactHandles$"+Bt,Qe="__reactResources$"+Bt,Ne="__reactMarker$"+Bt,Re="__reactLoad$"+Bt;function te(t){delete t[wt],delete t[kt],delete t[_e],delete t[ze]}function Le(t){var e;if(e=t[wt])return e;for(var i=t.parentNode;i;){if(e=i[ee]||i[wt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=c0(t);t!==null;){if(i=t[wt])return i;t=c0(t)}return e}t=i,i=t.parentNode}return null}function me(t){if(t=t[wt]||t[ee]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function pn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Qn(t){var e=t[Qe];return e||(e=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ce(t){t[Ne]=!0}function Ta(t){t[Re]=void 0}var Ze=new Set,zn={};function on(t,e){en(t,e),en(t+"Capture",e)}function en(t,e){for(zn[t]=e,t=0;t<e.length;t++)Ze.add(e[t])}var Dn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jr={},Li={};function AS(t){return Ot.call(Li,t)?!0:Ot.call(jr,t)?!1:Dn.test(t)?Li[t]=!0:(jr[t]=!0,!1)}var we=!1;function Np(){var t=we;return we=!1,t}function yl(t,e,i){if(AS(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function xl(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function ta(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RS(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){i=""+p,c.call(this,p)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yc(t){if(!t._valueTracker){var e=Lp(t)?"checked":"value";t._valueTracker=RS(t,e,""+t[e])}}function Op(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=Lp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var CS=/[\n"\\]/g;function fi(t){return t.replace(CS,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xc(t,e,i,r,l,c,p,E){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Jn(e)):t.value!==""+Jn(e)&&(t.value=""+Jn(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?p==="number"&&t.value==e?Mc(t,Jn(t.value)):Mc(t,Jn(e)):i!=null?Mc(t,Jn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Jn(E):t.removeAttribute("name")}function zp(t,e,i,r,l,c,p,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){yc(t);return}i=i!=null?""+Jn(i):"",e=e!=null?""+Jn(e):i,E||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),yc(t)}function Mc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Kr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Jn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Pp(t,e,i){if(e!=null&&(e=""+Jn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Jn(i):""}function Ip(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(Rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Jn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),yc(t)}function Qr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var wS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bp(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||wS.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Fp(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",we=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(Bp(t,l,r),we=!0)}else for(var c in e)e.hasOwnProperty(c)&&Bp(t,c,e[c])}function Ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var DS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),US=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(t){return US.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Tc=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,$r=null;function Hp(t){var e=me(t);if(e&&(t=e.stateNode)){var i=t[kt]||null;t:switch(t=e.stateNode,e.type){case"input":if(xc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+fi(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[kt]||null;if(!l)throw Error(s(90));xc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Op(r)}break t;case"textarea":Pp(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Kr(t,!!i.multiple,e,!1)}}}var Ac=!1;function Gp(t,e,i){if(Ac)return t(e,i);Ac=!0;try{var r=t(e);return r}finally{if(Ac=!1,(Jr!==null||$r!==null)&&(Mu(),Jr&&(e=Jr,t=$r,$r=Jr=null,Hp(e),t)))for(e=0;e<t.length;e++)Hp(t[e])}}function lo(t,e){var i=t.stateNode;if(i===null)return null;var r=i[kt]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=!1;if(ea)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Rc=!1}var ba=null,Cc=null,El=null;function Vp(){if(El)return El;var t,e=Cc,i=e.length,r,l="value"in ba?ba.value:ba.textContent,c=l.length;for(t=0;t<i&&e[t]===l[t];t++);var p=i-t;for(r=1;r<=p&&e[i-r]===l[c-r];r++);return El=l.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function Xp(){return!1}function Pn(t){function e(i,r,l,c,p){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?bl:Xp,this.isPropagationStopped=Xp,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Pn(Aa),co=O({},Aa,{view:0,detail:0}),NS=Pn(co),wc,Dc,fo,Rl=O({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(wc=t.screenX-fo.screenX,Dc=t.screenY-fo.screenY):Dc=wc=0,fo=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),kp=Pn(Rl),LS=O({},Rl,{dataTransfer:0}),OS=Pn(LS),zS=O({},co,{relatedTarget:0}),Uc=Pn(zS),PS=O({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),IS=Pn(PS),BS=O({},Aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FS=Pn(BS),HS=O({},Aa,{data:0}),qp=Pn(HS),GS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XS[t])?!!e[t]:!1}function Nc(){return kS}var qS=O({},co,{key:function(t){if(t.key){var e=GS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YS=Pn(qS),WS=O({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=Pn(WS),ZS=O({},Aa,{submitter:0}),jS=Pn(ZS),KS=O({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),QS=Pn(KS),JS=O({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=Pn(JS),ty=O({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ey=Pn(ty),ny=O({},Aa,{newState:0,oldState:0,source:0}),iy=Pn(ny),ay=[9,13,27,32],Lc=ea&&"CompositionEvent"in window,ho=null;ea&&"documentMode"in document&&(ho=document.documentMode);var ry=ea&&"TextEvent"in window&&!ho,Wp=ea&&(!Lc||ho&&8<ho&&11>=ho),Zp=" ",jp=!1;function Kp(t,e){switch(t){case"keyup":return ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function sy(t,e){switch(t){case"compositionend":return Qp(e);case"keypress":return e.which!==32?null:(jp=!0,Zp);case"textInput":return t=e.data,t===Zp&&jp?null:t;default:return null}}function oy(t,e){if(ts)return t==="compositionend"||!Lc&&Kp(t,e)?(t=Vp(),El=Cc=ba=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wp&&e.locale!=="ko"?null:e.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ly[t.type]:e==="textarea"}function $p(t,e,i,r){Jr?$r?$r.push(r):$r=[r]:Jr=r,e=Cu(e,"onChange"),0<e.length&&(i=new Al("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var po=null,mo=null;function uy(t){H_(t,0)}function Cl(t){var e=pn(t);if(Op(e))return t}function tm(t,e){if(t==="change")return e}var em=!1;if(ea){var Oc;if(ea){var zc="oninput"in document;if(!zc){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),zc=typeof nm.oninput=="function"}Oc=zc}else Oc=!1;em=Oc&&(!document.documentMode||9<document.documentMode)}function im(){po&&(po.detachEvent("onpropertychange",am),mo=po=null)}function am(t){if(t.propertyName==="value"&&Cl(mo)){var e=[];$p(e,mo,t,bc(t)),Gp(uy,e)}}function cy(t,e,i){t==="focusin"?(im(),po=e,mo=i,po.attachEvent("onpropertychange",am)):t==="focusout"&&im()}function fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(mo)}function hy(t,e){if(t==="click")return Cl(e)}function dy(t,e){if(t==="input"||t==="change")return Cl(e)}function py(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:py;function go(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Ot.call(e,l)||!$n(t[l],e[l]))return!1}return!0}function Pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,e){var i=rm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=rm(i)}}function om(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?om(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pc(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Pc(t.document)}return e}function Ic(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var my=ea&&"documentMode"in document&&11>=document.documentMode,es=null,Bc=null,_o=null,Fc=!1;function um(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Fc||es==null||es!==Pc(r)||(r=es,"selectionStart"in r&&Ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&go(_o,r)||(_o=r,r=Cu(Bc,"onSelect"),0<r.length&&(e=new Al("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=es)))}function dr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var ns={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Hc={},cm={};ea&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function pr(t){if(Hc[t])return Hc[t];if(!ns[t])return t;var e=ns[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in cm)return Hc[t]=e[i];return t}var fm=pr("animationend"),hm=pr("animationiteration"),dm=pr("animationstart"),gy=pr("transitionrun"),_y=pr("transitionstart"),vy=pr("transitioncancel"),pm=pr("transitionend"),mm=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function xi(t,e){mm.set(t,e),on(e,[t])}var Sy=0;function na(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=bi.identifierPrefix;var i=Sy++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function gm(t){if(t==null||typeof t=="string")return t;var e=null,i=Ms;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function ia(t,e){return t=gm(t),e=gm(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],is=0,Vc=0;function Dl(){for(var t=is,e=Vc=is=0;e<t;){var i=hi[e];hi[e++]=null;var r=hi[e];hi[e++]=null;var l=hi[e];hi[e++]=null;var c=hi[e];if(hi[e++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}c!==0&&_m(i,l,c)}}function Ul(t,e,i,r){hi[is++]=t,hi[is++]=e,hi[is++]=i,hi[is++]=r,Vc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Xc(t,e,i,r){return Ul(t,e,i,r),Nl(t)}function mr(t,e){return Ul(t,null,null,e),Nl(t)}function _m(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-wn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),c):null}function Nl(t){if(50<Fo)throw Fo=0,xu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var as={};function yy(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,i,r){return new yy(t,e,i,r)}function kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,e){var i=t.alternate;return i===null?(i=Gn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function vm(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ll(t,e,i,r,l,c){var p=0;if(r=t,typeof r=="function")kc(r)&&(p=1);else if(typeof r=="string")p=Zx(t,i,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Gt:return t=Gn(31,i,e,l),t.elementType=Gt,t.lanes=c,t;case H:return gr(i.children,l,c,e);case at:p=8,l|=24;break;case ut:return t=Gn(12,i,e,l|2),t.elementType=ut,t.lanes=c,t;case rt:return t=Gn(13,i,e,l),t.elementType=rt,t.lanes=c,t;case j:return t=Gn(19,i,e,l),t.elementType=j,t.lanes=c,t;case se:case P:return t=l|32,t=Gn(30,i,e,t),t.elementType=P,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case lt:p=10;break t;case gt:p=9;break t;case q:p=11;break t;case vt:p=14;break t;case yt:p=16,r=null;break t}p=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=Gn(p,i,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function gr(t,e,i,r){return t=Gn(7,t,r,e),t.lanes=i,t}function qc(t,e,i){return t=Gn(6,t,null,e),t.lanes=i,t}function Sm(t){var e=Gn(18,null,null,0);return e.stateNode=t,e}function Yc(t,e,i){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ym=new WeakMap;function di(t,e){if(typeof t=="object"&&t!==null){var i=ym.get(t);return i!==void 0?i:(e={value:t,source:e,stack:bt(e)},ym.set(t,e),e)}return{value:t,source:e,stack:bt(e)}}var rs=[],ss=0,Ol=null,vo=0,pi=[],mi=0,Ra=null,zi=1,Pi="";function ra(t,e){rs[ss++]=vo,rs[ss++]=Ol,Ol=t,vo=e}function xm(t,e,i){pi[mi++]=zi,pi[mi++]=Pi,pi[mi++]=Ra,Ra=t;var r=zi;t=Pi;var l=32-wn(r)-1;r&=~(1<<l),i+=1;var c=32-wn(e)+l;if(30<c){var p=l-l%5;c=(r&(1<<p)-1).toString(32),r>>=p,l-=p,zi=1<<32-wn(e)+l|i<<l|r,Pi=c+t}else zi=1<<c|i<<l|r,Pi=t}function zl(t){t.return!==null&&(ra(t,1),xm(t,1,0))}function Wc(t){for(;t===Ol;)Ol=rs[--ss],rs[ss]=null,vo=rs[--ss],rs[ss]=null;for(;t===Ra;)Ra=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null,zi=pi[--mi],pi[mi]=null}function Mm(t,e){pi[mi++]=zi,pi[mi++]=Pi,pi[mi++]=Ra,zi=e.id,Pi=e.overflow,Ra=t}var vn=null,je=null,ge=!1,Ca=null,gi=!1,Zc=Error(s(519));function wa(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(di(e,t)),Zc}function Em(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[wt]=t,e[kt]=r,i){case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":case"embed":Se("load",e);break;case"video":case"audio":for(i=0;i<Go.length;i++)Se(Go[i],e);break;case"source":Se("error",e);break;case"img":case"image":case"link":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"input":Se("invalid",e),zp(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Se("invalid",e);break;case"textarea":Se("invalid",e),Ip(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||k_(e.textContent,i)?(r.popover!=null&&(Se("beforetoggle",e),Se("toggle",e)),r.onScroll!=null&&Se("scroll",e),r.onScrollEnd!=null&&Se("scrollend",e),r.onClick!=null&&(e.onclick=Oi),e=!0):e=!1,e||wa(t,!0)}function Pl(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:vn=vn.return}}function os(t){if(t!==vn)return!1;if(!ge)return Pl(t),ge=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||bh(t.type,t.memoizedProps)),i=!i),i&&je&&wa(t),Pl(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=u0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=u0(t)}else e===27?(e=je,qa(t.type)?(t=Oh,Oh=null,je=t):je=e):je=vn?vi(t.stateNode.nextSibling):null;return!0}function _r(){je=vn=null,ge=!1}function jc(){var t=Ca;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Ca=null),t}function So(t){Ca===null?Ca=[t]:Ca.push(t)}var Kc=Qt(null),vr=null,sa=null;function Da(t,e,i){ie(Kc,e._currentValue),e._currentValue=i}function oa(t){t._currentValue=Kc.current,Lt(Kc)}function Il(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function Qc(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var N=0;N<e.length;N++)if(E.context===e[N]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Il(c.return,i,t),r||(p=null);break t}c=E.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=i,c=p.alternate,c!==null&&(c.lanes|=i),Il(p,i,t),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,p=l.alternate,p!==null&&(p.lanes|=i),Il(l.return,i,t),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Sr(t,e,i,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var E=l.type;$n(l.pendingProps.value,p.value)||(t!==null?t.push(E):t=[E])}}else if(l===We.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ns):t=[Ns])}l=l.return}return t!==null&&Qc(e,t,i,r),e.flags|=262144,t!==null}function Bl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yr(t){vr=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Tm(vr,t)}function Fl(t,e){return vr===null&&yr(t),Tm(t,e)}function Tm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},sa===null){if(t===null)throw Error(s(308));sa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else sa=sa.next=e;return i}var xy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},My=o.unstable_scheduleCallback,Ey=o.unstable_NormalPriority,ln={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new xy,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&My(Ey,function(){t.controller.abort()})}function bm(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var xo=null;function Ty(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Mo=null,$c=0,xr=0,ls=null;function by(t,e){if(Mo===null){var i=Mo=[];$c=0,xr=gh(),ls={status:"pending",value:void 0,then:function(r){i.push(r)}}}return $c++,e.then(Am,Am),e}function Am(){if(--$c===0&&(xo=null,Mo!==null)){ls!==null&&(ls.status="fulfilled");var t=Mo;Mo=null,xr=0,ls=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ay(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Rm=Et.S;Et.S=function(t,e){if(S_=F(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&by(t,e),xo!==null)for(var i=As;i!==null;)bm(i,xo),i=i.next;if(i=t.types,i!==null){for(var r=As;r!==null;)bm(r,i),r=r.next;if(xr!==0){r=xo,r===null&&(r=xo=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Rm!==null&&Rm(t,e)};var Mr=Qt(null);function tf(){var t=Mr.current;return t!==null?t:Ye.pooledCache}function Hl(t,e){e===null?ie(Mr,Mr.current):ie(Mr,e.pool)}function Cm(){var t=tf();return t===null?null:{parent:ln._currentValue,pool:t}}var us=Error(s(460)),ef=Error(s(474)),Gl=Error(s(542)),Vl={then:function(){}};function wm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Dm(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Oi,Oi),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Nm(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Oi,Oi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Nm(t),t}throw Tr=e,us}}function Er(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Tr=i,us):i}}var Tr=null;function Um(){if(Tr===null)throw Error(s(459));var t=Tr;return Tr=null,t}function Nm(t){if(t===us||t===Gl)throw Error(s(483))}var cs=null,Eo=0;function Xl(t){var e=Eo;return Eo+=1,cs===null&&(cs=[]),Dm(cs,t,e)}function Ua(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function kl(t,e){throw e.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Lm(t){function e(Y,B){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[B],Y.flags|=16):Q.push(B)}}function i(Y,B){if(!t)return null;for(;B!==null;)e(Y,B),B=B.sibling;return null}function r(Y){for(var B=new Map;Y!==null;)Y.key===null?B.set(Y.index,Y):B.set(Y.key,Y),Y=Y.sibling;return B}function l(Y,B){return Y=aa(Y,B),Y.index=0,Y.sibling=null,Y}function c(Y,B,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<B?(Y.flags|=2,B):Q):(Y.flags|=134217730,B)):(Y.flags|=1048576,B)}function p(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,B,Q,dt){return B===null||B.tag!==6?(B=qc(Q,Y.mode,dt),B.return=Y,B):(B=l(B,Q),B.return=Y,B)}function N(Y,B,Q,dt){var Ht=Q.type;return Ht===H?(Y=nt(Y,B,Q.props.children,dt,Q.key),Ua(Y,Q),Y):B!==null&&(B.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===yt&&Er(Ht)===B.type)?(B=l(B,Q.props),Ua(B,Q),B.return=Y,B):(B=Ll(Q.type,Q.key,Q.props,null,Y.mode,dt),Ua(B,Q),B.return=Y,B)}function W(Y,B,Q,dt){return B===null||B.tag!==4||B.stateNode.containerInfo!==Q.containerInfo||B.stateNode.implementation!==Q.implementation?(B=Yc(Q,Y.mode,dt),B.return=Y,B):(B=l(B,Q.children||[]),B.return=Y,B)}function nt(Y,B,Q,dt,Ht){return B===null||B.tag!==7?(B=gr(Q,Y.mode,dt,Ht),B.return=Y,B):(B=l(B,Q),B.return=Y,B)}function mt(Y,B,Q){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=qc(""+B,Y.mode,Q),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case R:return Q=Ll(B.type,B.key,B.props,null,Y.mode,Q),Ua(Q,B),Q.return=Y,Q;case C:return B=Yc(B,Y.mode,Q),B.return=Y,B;case yt:return B=Er(B),mt(Y,B,Q)}if(Rt(B)||it(B))return B=gr(B,Y.mode,Q,null),B.return=Y,B;if(typeof B.then=="function")return mt(Y,Xl(B),Q);if(B.$$typeof===lt)return mt(Y,Fl(Y,B),Q);kl(Y,B)}return null}function X(Y,B,Q,dt){var Ht=B!==null?B.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:E(Y,B,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case R:return Q.key===Ht?N(Y,B,Q,dt):null;case C:return Q.key===Ht?W(Y,B,Q,dt):null;case yt:return Q=Er(Q),X(Y,B,Q,dt)}if(Rt(Q)||it(Q))return Ht!==null?null:nt(Y,B,Q,dt,null);if(typeof Q.then=="function")return X(Y,B,Xl(Q),dt);if(Q.$$typeof===lt)return X(Y,B,Fl(Y,Q),dt);kl(Y,Q)}return null}function $(Y,B,Q,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(Q)||null,E(B,Y,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case R:return Y=Y.get(dt.key===null?Q:dt.key)||null,N(B,Y,dt,Ht);case C:return Y=Y.get(dt.key===null?Q:dt.key)||null,W(B,Y,dt,Ht);case yt:return dt=Er(dt),$(Y,B,Q,dt,Ht)}if(Rt(dt)||it(dt))return Y=Y.get(Q)||null,nt(B,Y,dt,Ht,null);if(typeof dt.then=="function")return $(Y,B,Q,Xl(dt),Ht);if(dt.$$typeof===lt)return $(Y,B,Q,Fl(B,dt),Ht);kl(B,dt)}return null}function Ut(Y,B,Q,dt){for(var Ht=null,Me=null,Jt=B,ae=B=0,fn=null;Jt!==null&&ae<Q.length;ae++){Jt.index>ae?(fn=Jt,Jt=null):fn=Jt.sibling;var be=X(Y,Jt,Q[ae],dt);if(be===null){Jt===null&&(Jt=fn);break}t&&Jt&&be.alternate===null&&e(Y,Jt),B=c(be,B,ae),Me===null?Ht=be:Me.sibling=be,Me=be,Jt=fn}if(ae===Q.length)return i(Y,Jt),ge&&ra(Y,ae),Ht;if(Jt===null){for(;ae<Q.length;ae++)Jt=mt(Y,Q[ae],dt),Jt!==null&&(B=c(Jt,B,ae),Me===null?Ht=Jt:Me.sibling=Jt,Me=Jt);return ge&&ra(Y,ae),Ht}for(Jt=r(Jt);ae<Q.length;ae++)fn=$(Jt,Y,ae,Q[ae],dt),fn!==null&&(t&&(be=fn.alternate,be!==null&&Jt.delete(be.key===null?ae:be.key)),B=c(fn,B,ae),Me===null?Ht=fn:Me.sibling=fn,Me=fn);return t&&Jt.forEach(function(Ka){return e(Y,Ka)}),ge&&ra(Y,ae),Ht}function qt(Y,B,Q,dt){if(Q==null)throw Error(s(151));for(var Ht=null,Me=null,Jt=B,ae=B=0,fn=null,be=Q.next();Jt!==null&&!be.done;ae++,be=Q.next()){Jt.index>ae?(fn=Jt,Jt=null):fn=Jt.sibling;var Ka=X(Y,Jt,be.value,dt);if(Ka===null){Jt===null&&(Jt=fn);break}t&&Jt&&Ka.alternate===null&&e(Y,Jt),B=c(Ka,B,ae),Me===null?Ht=Ka:Me.sibling=Ka,Me=Ka,Jt=fn}if(be.done)return i(Y,Jt),ge&&ra(Y,ae),Ht;if(Jt===null){for(;!be.done;ae++,be=Q.next())be=mt(Y,be.value,dt),be!==null&&(B=c(be,B,ae),Me===null?Ht=be:Me.sibling=be,Me=be);return ge&&ra(Y,ae),Ht}for(Jt=r(Jt);!be.done;ae++,be=Q.next())be=$(Jt,Y,ae,be.value,dt),be!==null&&(t&&(fn=be.alternate,fn!==null&&Jt.delete(fn.key===null?ae:fn.key)),B=c(be,B,ae),Me===null?Ht=be:Me.sibling=be,Me=be);return t&&Jt.forEach(function(sM){return e(Y,sM)}),ge&&ra(Y,ae),Ht}function he(Y,B,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===H&&Q.key===null&&Q.props.ref===void 0&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case R:t:{for(var Ht=Q.key;B!==null;){if(B.key===Ht){if(Ht=Q.type,Ht===H){if(B.tag===7){i(Y,B.sibling),dt=l(B,Q.props.children),Ua(dt,Q),dt.return=Y,Y=dt;break t}}else if(B.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===yt&&Er(Ht)===B.type){i(Y,B.sibling),dt=l(B,Q.props),Ua(dt,Q),dt.return=Y,Y=dt;break t}i(Y,B);break}else e(Y,B);B=B.sibling}Q.type===H?(dt=gr(Q.props.children,Y.mode,dt,Q.key),Ua(dt,Q),dt.return=Y,Y=dt):(dt=Ll(Q.type,Q.key,Q.props,null,Y.mode,dt),Ua(dt,Q),dt.return=Y,Y=dt)}return p(Y);case C:t:{for(Ht=Q.key;B!==null;){if(B.key===Ht)if(B.tag===4&&B.stateNode.containerInfo===Q.containerInfo&&B.stateNode.implementation===Q.implementation){i(Y,B.sibling),dt=l(B,Q.children||[]),dt.return=Y,Y=dt;break t}else{i(Y,B);break}else e(Y,B);B=B.sibling}dt=Yc(Q,Y.mode,dt),dt.return=Y,Y=dt}return p(Y);case yt:return Q=Er(Q),he(Y,B,Q,dt)}if(Rt(Q))return Ut(Y,B,Q,dt);if(it(Q)){if(Ht=it(Q),typeof Ht!="function")throw Error(s(150));return Q=Ht.call(Q),qt(Y,B,Q,dt)}if(typeof Q.then=="function")return he(Y,B,Xl(Q),dt);if(Q.$$typeof===lt)return he(Y,B,Fl(Y,Q),dt);kl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,B!==null&&B.tag===6?(i(Y,B.sibling),dt=l(B,Q),dt.return=Y,Y=dt):(i(Y,B),dt=qc(Q,Y.mode,dt),dt.return=Y,Y=dt),p(Y)):i(Y,B)}return function(Y,B,Q,dt){try{Eo=0;var Ht=he(Y,B,Q,dt);return cs=null,Ht}catch(Jt){if(Jt===us||Jt===Gl)throw Jt;var Me=Gn(29,Jt,null,Y.mode);return Me.lanes=dt,Me.return=Y,Me}}}var br=Lm(!0),Om=Lm(!1),Na=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Nl(t),_m(t,null,i),e}return Ul(t,r,e,i),Nl(t)}function To(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Z(t,i)}}function rf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var p={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,i=i.next}while(i!==null);c===null?l=c=e:c=c.next=e}else l=c=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var sf=!1;function bo(){if(sf){var t=ls;if(t!==null)throw t}}function Ao(t,e,i,r){sf=!1;var l=t.updateQueue;Na=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var N=E,W=N.next;N.next=null,p===null?c=W:p.next=W,p=N;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,E=nt.lastBaseUpdate,E!==p&&(E===null?nt.firstBaseUpdate=W:E.next=W,nt.lastBaseUpdate=N))}if(c!==null){var mt=l.baseState;p=0,nt=W=N=null,E=c;do{var X=E.lane&-536870913,$=X!==E.lane;if($?(xe&X)===X:(r&X)===X){X!==0&&X===xr&&(sf=!0),nt!==null&&(nt=nt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ut=t,qt=E;X=e;var he=i;switch(qt.tag){case 1:if(Ut=qt.payload,typeof Ut=="function"){mt=Ut.call(he,mt,X);break t}mt=Ut;break t;case 3:Ut.flags=Ut.flags&-65537|128;case 0:if(Ut=qt.payload,X=typeof Ut=="function"?Ut.call(he,mt,X):Ut,X==null)break t;mt=O({},mt,X);break t;case 2:Na=!0}}X=E.callback,X!==null&&(t.flags|=64,$&&(t.flags|=8192),$=l.callbacks,$===null?l.callbacks=[X]:$.push(X))}else $={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},nt===null?(W=nt=$,N=mt):nt=nt.next=$,p|=X;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;$=E,E=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);nt===null&&(N=mt),l.baseState=N,l.firstBaseUpdate=W,l.lastBaseUpdate=nt,c===null&&(l.shared.lanes=0),Ga|=p,t.lanes=p,t.memoizedState=mt}}function zm(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Pm(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)zm(i[t],e)}var za=Qt(null),ql=Qt(0);function Im(t,e){t=ha,ie(ql,t),ie(za,e),ha=t|e.baseLanes}function of(){ie(ql,ha),ie(za,za.current)}function lf(){ha=ql.current,Lt(za),Lt(ql)}var Tn=Qt(null),Un=null;function Pa(t){var e=t.alternate;ie(bn,bn.current&1),ie(Tn,t),Un===null&&(e===null||za.current!==null||e.memoizedState!==null)&&(Un=t)}function uf(t){ie(bn,bn.current),ie(Tn,t),Un===null&&(Un=t)}function Bm(t){t.tag===22?(ie(bn,bn.current),ie(Tn,t),Un===null&&(Un=t)):Ia()}function Ia(){ie(bn,bn.current),ie(Tn,Tn.current)}function ti(t){Lt(Tn),Un===t&&(Un=null),Lt(bn)}var bn=Qt(0);function Ro(t,e){ie(Tn,Tn.current),ie(bn,e)}function cf(t){Lt(bn),Lt(Tn),Un===t&&(Un=null)}function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Nh(i)||Lh(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var la=0,fe=null,Ve=null,un=null,Wl=!1,fs=!1,Ar=!1,Zl=0,Co=0,hs=null,Ry=0;function nn(){throw Error(s(321))}function ff(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!$n(t[i],e[i]))return!1;return!0}function hf(t,e,i,r,l,c){return la=c,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Et.H=t===null||t.memoizedState===null?xg:Mg,Ar=!1,c=i(r,l),Ar=!1,fs&&(c=Hm(e,i,r,l)),Fm(t),c}function Fm(t){Et.H=eu;var e=Ve!==null&&Ve.next!==null;if(la=0,un=Ve=fe=null,Wl=!1,Co=0,hs=null,e)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&Bl(t)&&(cn=!0))}function Hm(t,e,i,r){fe=t;var l=0;do{if(fs&&(hs=null),Co=0,fs=!1,25<=l)throw Error(s(301));if(l+=1,un=Ve=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Et.H=zy,c=e(i,r)}while(fs);return c}function Cy(){var t=Et.H,e=t.useState()[0];return e=typeof e.then=="function"?wo(e):e,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(fe.flags|=1024),e}function df(){var t=Zl!==0;return Zl=0,t}function pf(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function mf(t){if(Wl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Wl=!1}la=0,un=Ve=fe=null,fs=!1,Co=Zl=0,hs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?fe.memoizedState=un=t:un=un.next=t,un}function sn(){if(Ve===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=un===null?fe.memoizedState:un.next;if(e!==null)un=e,Ve=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},un===null?fe.memoizedState=un=t:un=un.next=t}return un}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var e=Co;return Co+=1,hs===null&&(hs=[]),t=Dm(hs,t,e),e=fe,(un===null?e.memoizedState:un.next)===null&&(e=e.alternate,Et.H=e===null||e.memoizedState===null?xg:Mg),t}function Kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===ct)return;if(t.$$typeof===lt)return En(t)}throw Error(s(438,String(t)))}function gf(t){var e=null,i=fe.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=jl(),fe.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=Te;return e.index++,i}function ua(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=sn();return _f(e,Ve,t)}function _f(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var E=p=null,N=null,W=e,nt=!1;do{var mt=W.lane&-536870913;if(mt!==W.lane?(xe&mt)===mt:(la&mt)===mt){var X=W.revertLane;if(X===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),mt===xr&&(nt=!0);else if((la&X)===X){W=W.next,X===xr&&(nt=!0);continue}else mt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(E=N=mt,p=c):N=N.next=mt,fe.lanes|=X,Ga|=X;mt=W.action,Ar&&i(c,mt),c=W.hasEagerState?W.eagerState:i(c,mt)}else X={lane:mt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(E=N=X,p=c):N=N.next=X,fe.lanes|=mt,Ga|=mt;W=W.next}while(W!==null&&W!==e);if(N===null?p=c:N.next=E,!$n(c,t.memoizedState)&&(cn=!0,nt&&(i=ls,i!==null)))throw i;t.memoizedState=c,t.baseState=p,t.baseQueue=N,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function vf(t){var e=sn(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=e.memoizedState;if(l!==null){i.pending=null;var p=l=l.next;do c=t(c,p.action),p=p.next;while(p!==l);$n(c,e.memoizedState)||(cn=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function Gm(t,e,i){var r=fe,l=sn(),c=ge;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=e();var p=!$n((Ve||l).memoizedState,i);if(p&&(l.memoizedState=i,cn=!0),l=l.queue,xf(km.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||p||un!==null&&(un.memoizedState.tag&1)!==0,ds(t?9:8,{destroy:void 0},Xm.bind(null,r,l,i,e),null),t){if(r.flags|=2048,Ye===null)throw Error(s(349));c||(la&127)!==0||Vm(r,e,i)}return i}function Vm(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=fe.updateQueue,e===null?(e=jl(),fe.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Xm(t,e,i,r){e.value=i,e.getSnapshot=r,qm(e)&&Ym(t)}function km(t,e,i){return i(function(){qm(e)&&Ym(t)})}function qm(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!$n(t,i)}catch{return!0}}function Ym(t){var e=mr(t,2);e!==null&&qn(e,t,2)}function Sf(t){var e=In();if(typeof t=="function"){var i=t;if(t=i(),Ar){dn(!0);try{i()}finally{dn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e}function Wm(t,e,i,r){return t.baseState=i,_f(t,Ve,typeof r=="function"?r:ua)}function wy(t,e,i,r,l){if(tu(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};Et.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,Zm(e,c)):(c.next=i.next,e.pending=i.next=c)}}function Zm(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=Et.T,p={};p.types=c!==null?c.types:null,Et.T=p;try{var E=i(l,r),N=Et.S;N!==null&&N(p,E),jm(t,e,E)}catch(W){yf(t,e,W)}finally{c!==null&&p.types!==null&&(c.types=p.types),Et.T=c}}else try{c=i(l,r),jm(t,e,c)}catch(W){yf(t,e,W)}}function jm(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Km(t,e,r)},function(r){return yf(t,e,r)}):Km(t,e,i)}function Km(t,e,i){e.status="fulfilled",e.value=i,Qm(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Zm(t,i)))}function yf(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,Qm(e),e=e.next;while(e!==r)}t.action=null}function Qm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Jm(t,e){return e}function $m(t,e){if(ge){var i=Ye.formState;if(i!==null){t:{var r=fe;if(ge){if(je){e:{for(var l=je,c=gi;l.nodeType!==8;){if(!c){l=null;break e}if(l=vi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){je=vi(l.nextSibling),r=l.data==="F!";break t}}wa(r)}r=!1}r&&(e=i[0])}}return i=In(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jm,lastRenderedState:e},i.queue=r,i=vg.bind(null,fe,r),r.dispatch=i,r=Sf(!1),c=Af.bind(null,fe,!1,r.queue),r=In(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=wy.bind(null,fe,l,c,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function tg(t){var e=sn();return eg(e,Ve,t)}function eg(t,e,i){if(e=_f(t,e,Jm)[0],t=Ql(ua)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=wo(e)}catch(p){throw p===us?Gl:p}else r=e;e=sn();var l=e.queue,c=l.dispatch;return i!==e.memoizedState&&(fe.flags|=2048,ds(9,{destroy:void 0},Dy.bind(null,l,i),null)),[r,c,t]}function Dy(t,e){t.action=e}function ng(t){var e=sn(),i=Ve;if(i!==null)return eg(e,i,t);sn(),e=e.memoizedState,i=sn();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function ds(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=fe.updateQueue,e===null&&(e=jl(),fe.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function ig(){return sn().memoizedState}function Jl(t,e,i,r){var l=In();fe.flags|=t,l.memoizedState=ds(1|e,{destroy:void 0},i,r===void 0?null:r)}function $l(t,e,i,r){var l=sn();r=r===void 0?null:r;var c=l.memoizedState.inst;Ve!==null&&r!==null&&ff(r,Ve.memoizedState.deps)?l.memoizedState=ds(e,c,i,r):(fe.flags|=t,l.memoizedState=ds(1|e,c,i,r))}function ag(t,e){Jl(8390656,8,t,e)}function xf(t,e){$l(2048,8,t,e)}function Uy(t){fe.flags|=4;var e=fe.updateQueue;if(e===null)e=jl(),fe.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function rg(t){var e=sn().memoizedState;return Uy({ref:e,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function sg(t,e){return $l(4,2,t,e)}function og(t,e){return $l(4,4,t,e)}function lg(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ug(t,e,i){i=i!=null?i.concat([t]):null,$l(4,4,lg.bind(null,e,t),i)}function Mf(){}function cg(t,e){var i=sn();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&ff(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function fg(t,e){var i=sn();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&ff(e,r[1]))return r[0];if(r=t(),Ar){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[r,e],r}function Ef(t,e,i){return i===void 0||(la&1073741824)!==0&&(xe&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=x_(),fe.lanes|=t,Ga|=t,i)}function hg(t,e,i,r){return $n(i,e)?i:za.current!==null?(t=Ef(t,i,r),$n(t,e)||(cn=!0),t):(la&106)===0||(la&1073741824)!==0&&(xe&261930)===0?(cn=!0,t.memoizedState=i):(t=x_(),fe.lanes|=t,Ga|=t,e)}function dg(t,e,i,r,l){var c=Yt.p;Yt.p=c!==0&&8>c?c:8;var p=Et.T,E={};E.types=p!==null?p.types:null,Et.T=E,Af(t,!1,e,i);try{var N=l(),W=Et.S;if(W!==null&&W(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var nt=Ay(N,r);Do(t,e,nt,ai(t))}else Do(t,e,r,ai(t))}catch(mt){Do(t,e,{then:function(){},status:"rejected",reason:mt},ai())}finally{Yt.p=c,p!==null&&E.types!==null&&(p.types=E.types),Et.T=p}}function Ny(){}function Tf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=pg(t).queue;dg(t,l,e,L,i===null?Ny:function(){return mg(t),i(r)})}function pg(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:L},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function mg(t){var e=pg(t);e.next===null&&(e=t.alternate.memoizedState),Do(t,e.next.queue,{},ai())}function bf(){return En(Ns)}function gg(){return sn().memoizedState}function _g(){return sn().memoizedState}function Ly(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ai();t=La(i);var r=Oa(e,t,i);r!==null&&(qn(r,e,i),To(r,e,i)),e={cache:Jc()},t.payload=e;return}e=e.return}}function Oy(t,e,i){var r=ai();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},tu(t)?Sg(e,i):(i=Xc(t,e,i,r),i!==null&&(qn(i,t,r),yg(i,e,r)))}function vg(t,e,i){var r=ai();Do(t,e,i,r)}function Do(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(tu(t))Sg(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var p=e.lastRenderedState,E=c(p,i);if(l.hasEagerState=!0,l.eagerState=E,$n(E,p))return Ul(t,e,l,0),Ye===null&&Dl(),!1}catch{}if(i=Xc(t,e,l,r),i!==null)return qn(i,t,r),yg(i,e,r),!0}return!1}function Af(t,e,i,r){if(r={lane:2,revertLane:gh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},tu(t)){if(e)throw Error(s(479))}else e=Xc(t,i,r,2),e!==null&&qn(e,t,2)}function tu(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function Sg(t,e){fs=Wl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function yg(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Z(t,i)}}var eu={readContext:En,use:Kl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn,useEffectEvent:nn},xg={readContext:En,use:Kl,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:ag,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Jl(4194308,4,lg.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){Jl(4,2,t,e)},useMemo:function(t,e){var i=In();e=e===void 0?null:e;var r=t();if(Ar){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=In();if(i!==void 0){var l=i(e);if(Ar){dn(!0);try{i(e)}finally{dn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Oy.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:function(t){t=Sf(t);var e=t.queue,i=vg.bind(null,fe,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Mf,useDeferredValue:function(t,e){var i=In();return Ef(i,t,e)},useTransition:function(){var t=Sf(!1);return t=dg.bind(null,fe,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=fe,l=In();if(ge){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),Ye===null)throw Error(s(349));(xe&127)!==0||Vm(r,e,i)}l.memoizedState=i;var c={value:i,getSnapshot:e};return l.queue=c,ag(km.bind(null,r,c,t),[t]),r.flags|=2048,ds(9,{destroy:void 0},Xm.bind(null,r,c,i,e),null),i},useId:function(){var t=In(),e=Ye.identifierPrefix;if(ge){var i=Pi,r=zi;i=(r&~(1<<32-wn(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Zl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=Ry++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:bf,useFormState:$m,useActionState:$m,useOptimistic:function(t){var e=In();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Af.bind(null,fe,!0,i),i.dispatch=e,[t,e]},useMemoCache:gf,useCacheRefresh:function(){return In().memoizedState=Ly.bind(null,fe)},useEffectEvent:function(t){var e=In(),i={impl:t};return e.memoizedState=i,function(){if((Oe&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Mg={readContext:En,use:Kl,useCallback:cg,useContext:En,useEffect:xf,useImperativeHandle:ug,useInsertionEffect:sg,useLayoutEffect:og,useMemo:fg,useReducer:Ql,useRef:ig,useState:function(){return Ql(ua)},useDebugValue:Mf,useDeferredValue:function(t,e){var i=sn();return hg(i,Ve.memoizedState,t,e)},useTransition:function(){var t=Ql(ua)[0],e=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),e]},useSyncExternalStore:Gm,useId:gg,useHostTransitionStatus:bf,useFormState:tg,useActionState:tg,useOptimistic:function(t,e){var i=sn();return Wm(i,Ve,t,e)},useMemoCache:gf,useCacheRefresh:_g,useEffectEvent:rg},zy={readContext:En,use:Kl,useCallback:cg,useContext:En,useEffect:xf,useImperativeHandle:ug,useInsertionEffect:sg,useLayoutEffect:og,useMemo:fg,useReducer:vf,useRef:ig,useState:function(){return vf(ua)},useDebugValue:Mf,useDeferredValue:function(t,e){var i=sn();return Ve===null?Ef(i,t,e):hg(i,Ve.memoizedState,t,e)},useTransition:function(){var t=vf(ua)[0],e=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),e]},useSyncExternalStore:Gm,useId:gg,useHostTransitionStatus:bf,useFormState:ng,useActionState:ng,useOptimistic:function(t,e){var i=sn();return Ve!==null?Wm(i,Ve,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:gf,useCacheRefresh:_g,useEffectEvent:rg};function Rf(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:O({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Cf={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ai(),l=La(r);l.payload=e,i!=null&&(l.callback=i),e=Oa(t,l,r),e!==null&&(qn(e,t,r),To(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ai(),l=La(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=Oa(t,l,r),e!==null&&(qn(e,t,r),To(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ai(),r=La(i);r.tag=2,e!=null&&(r.callback=e),e=Oa(t,r,i),e!==null&&(qn(e,t,i),To(e,t,i))}};function Eg(t,e,i,r,l,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,p):e.prototype&&e.prototype.isPureReactComponent?!go(i,r)||!go(l,c):!0}function Tg(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Cf.enqueueReplaceState(e,e.state,null)}function Rr(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=O({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function bg(t){wl(t)}function Ag(t){console.error(t)}function Rg(t){wl(t)}function nu(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Cg(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wf(t,e,i){return i=La(i),i.tag=3,i.payload={element:null},i.callback=function(){nu(t,e)},i}function wg(t){return t=La(t),t.tag=3,t}function Dg(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Cg(e,i,r)}}var p=i.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Cg(e,i,r),typeof l!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Py(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&Sr(e,i,l,!0),i=Tn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Un===null?Eu():i.alternate===null&&an===0&&(an=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Vl?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),dh(t,r,l)),!1;case 22:return i.flags|=65536,r===Vl?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),dh(t,r,l)),!1}throw Error(s(435,i.tag))}return dh(t,r,l),Eu(),!1}if(ge)return e=Tn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==Zc&&(t=Error(s(422),{cause:r}),So(di(t,i)))):(r!==Zc&&(e=Error(s(423),{cause:r}),So(di(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=di(r,i),l=wf(t.stateNode,r,l),rf(t,l),an!==4&&(an=2)),!1;var c=Error(s(520),{cause:r});if(c=di(c,i),Bo===null?Bo=[c]:Bo.push(c),an!==4&&(an=2),e===null)return!0;r=di(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=wf(i.stateNode,r,t),rf(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Va===null||!Va.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=wg(l),Dg(l,t,i,r),rf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Df=Error(s(461)),cn=!1;function mn(t,e,i,r){e.child=t===null?Om(e,null,i,r):br(e,t.child,i,r)}function Ug(t,e,i,r,l){i=i.render;var c=e.ref;if("ref"in r){var p={};for(var E in r)E!=="ref"&&(p[E]=r[E])}else p=r;return yr(e),r=hf(t,e,i,p,c,l),E=df(),t!==null&&!cn?(pf(t,e,l),ca(t,e,l)):(ge&&E&&zl(e),e.flags|=1,mn(t,e,r,l),e.child)}function Ng(t,e,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!kc(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,Lg(t,e,c,r,l)):(t=Ll(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Bf(t,l)){var p=c.memoizedProps;if(i=i.compare,i=i!==null?i:go,i(p,r)&&t.ref===e.ref)return ca(t,e,l)}return e.flags|=1,t=aa(c,r),t.ref=e.ref,t.return=e,e.child=t}function Lg(t,e,i,r,l){if(t!==null){var c=t.memoizedProps;if(go(c,r)&&t.ref===e.ref)if(cn=!1,e.pendingProps=r=c,Bf(t,l))(t.flags&131072)!==0&&(cn=!0);else return e.lanes=t.lanes,ca(t,e,l)}return Uf(t,e,i,r,l)}function Og(t,e,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,e.child=null;return zg(t,e,c,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Hl(e,c!==null?c.cachePool:null),c!==null?Im(e,c):of(),Bm(e);else return r=e.lanes=536870912,zg(t,e,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Hl(e,c.cachePool),Im(e,c),Ia(),e.memoizedState=null):(t!==null&&Hl(e,null),of(),Ia());return mn(t,e,l,i),e.child}function Uo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function zg(t,e,i,r,l){var c=tf();return c=c===null?null:{parent:ln._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&Hl(e,null),of(),Bm(e),t!==null&&Sr(t,e,r,!0),e.childLanes=l,null}function iu(t,e){return e=au({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Pg(t,e,i){return br(e,t.child,null,i),t=iu(e,e.pendingProps),t.flags|=2,ti(e),e.memoizedState=null,t}function Iy(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ge){if(r.mode==="hidden")return t=iu(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Uo(null,t);if(uf(e),(t=je)?(t=l0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=Sm(t),i.return=e,e.child=i,vn=e,je=null)):t=null,t===null)throw wa(e);return e.lanes=536870912,null}return iu(e,r)}var c=t.memoizedState;if(c!==null){var p=c.dehydrated;if(uf(e),l)if(e.flags&256)e.flags&=-257,e=Pg(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(cn||Sr(t,e,i,!1),l=(i&t.childLanes)!==0,cn||l){if(za.current===null){if(r=Ye,r!==null&&(p=st(r,i),p!==0&&p!==c.retryLane))throw c.retryLane=p,mr(t,p),qn(r,t,p),Df;Eu()}e=Pg(t,e,i)}else t=c.treeContext,je=vi(p.nextSibling),vn=e,ge=!0,Ca=null,gi=!1,t!==null&&Mm(e,t),e=iu(e,r),e.flags|=134221824;return e}return t=aa(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ps(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Uf(t,e,i,r,l){return yr(e),i=hf(t,e,i,r,void 0,l),r=df(),t!==null&&!cn?(pf(t,e,l),ca(t,e,l)):(ge&&r&&zl(e),e.flags|=1,mn(t,e,i,l),e.child)}function Ig(t,e,i,r,l,c){return yr(e),e.updateQueue=null,i=Hm(e,r,i,l),Fm(t),r=df(),t!==null&&!cn?(pf(t,e,c),ca(t,e,c)):(ge&&r&&zl(e),e.flags|=1,mn(t,e,i,c),e.child)}function Bg(t,e,i,r,l){if(yr(e),e.stateNode===null){var c=as,p=i.contextType;typeof p=="object"&&p!==null&&(c=En(p)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Cf,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},nf(e),p=i.contextType,c.context=typeof p=="object"&&p!==null?En(p):as,c.state=e.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Rf(e,i,p,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Cf.enqueueReplaceState(c,c.state,null),Ao(e,r,c,l),bo(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var E=e.memoizedProps,N=Rr(i,E);c.props=N;var W=c.context,nt=i.contextType;p=as,typeof nt=="object"&&nt!==null&&(p=En(nt));var mt=i.getDerivedStateFromProps;nt=typeof mt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,nt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==p)&&Tg(e,c,r,p),Na=!1;var X=e.memoizedState;c.state=X,Ao(e,r,c,l),bo(),W=e.memoizedState,E||X!==W||Na?(typeof mt=="function"&&(Rf(e,i,mt,r),W=e.memoizedState),(N=Na||Eg(e,i,N,r,X,W,p))?(nt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=W),c.props=r,c.state=W,c.context=p,r=N):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,af(t,e),p=e.memoizedProps,nt=Rr(i,p),c.props=nt,mt=e.pendingProps,X=c.context,W=i.contextType,N=as,typeof W=="object"&&W!==null&&(N=En(W)),E=i.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==mt||X!==N)&&Tg(e,c,r,N),Na=!1,X=e.memoizedState,c.state=X,Ao(e,r,c,l),bo();var $=e.memoizedState;p!==mt||X!==$||Na||t!==null&&t.dependencies!==null&&Bl(t.dependencies)?(typeof E=="function"&&(Rf(e,i,E,r),$=e.memoizedState),(nt=Na||Eg(e,i,nt,r,X,$,N)||t!==null&&t.dependencies!==null&&Bl(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,$,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,$,N)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=$),c.props=r,c.state=$,c.context=N,r=nt):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,ps(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=br(e,t.child,null,l),e.child=br(e,null,i,l)):mn(t,e,i,l),e.memoizedState=c.state,t=e.child):t=ca(t,e,l),t}function Fg(t,e,i,r){return _r(),e.flags|=256,mn(t,e,i,r),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:Cm()}}function Of(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ii),t}function Hg(t,e,i){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,p;if((p=c)||(p=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(ge){if(l?Pa(e):Ia(),(t=je)?(t=l0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=Sm(t),i.return=e,e.child=i,vn=e,je=null)):t=null,t===null)throw wa(e);return Lh(t)?e.lanes=32:e.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ia(),l=e.mode,c=au({mode:"hidden",children:c},l),r=gr(r,l,i,null),c.return=e,r.return=e,c.sibling=r,e.child=c,r=e.child,r.memoizedState=Lf(i),r.childLanes=Of(t,p,i),e.memoizedState=Nf,Uo(null,r)):(Pa(e),zf(e,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return By(t,e,c,p,r,N,E,i)}return l?(Ia(),l=r.fallback,c=e.mode,E=t.child,N=E.sibling,r=aa(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,N!==null?l=aa(N,l):(l=gr(l,c,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Uo(null,r),r=e.child,l=t.child.memoizedState,l===null?l=Lf(i):(c=l.cachePool,c!==null?(E=ln._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Cm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Of(t,p,i),e.memoizedState=Nf,Uo(t.child,r)):(Pa(e),i=t.child,t=i.sibling,i=aa(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=i,e.memoizedState=null,i)}function zf(t,e){return e=au({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function au(t,e){return t=Gn(22,t,null,e),t.lanes=0,t}function ru(t,e,i){return br(e,t.child,null,i),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function By(t,e,i,r,l,c,p,E){if(i)return e.flags&256?(Pa(e),e.flags&=-257,ru(t,e,E)):e.memoizedState!==null?(Ia(),e.child=t.child,e.flags|=128,null):(Ia(),c=l.fallback,p=e.mode,l=au({mode:"visible",children:l.children},p),c=gr(c,p,E,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,br(e,t.child,null,E),l=e.child,l.memoizedState=Lf(E),l.childLanes=Of(t,r,E),e.memoizedState=Nf,Uo(null,l));if(Pa(e),Lh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;return r=N,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,So({value:l,source:null,stack:null})),ru(t,e,E)}if(cn||Sr(t,e,E,!1),r=(E&t.childLanes)!==0,cn||r){if(za.current!==null)return ru(t,e,E);if(r=Ye,r!==null&&(l=st(r,E),l!==0&&l!==p.retryLane))throw p.retryLane=l,mr(t,l),qn(r,t,l),Df;return Nh(c)||Eu(),ru(t,e,E)}return Nh(c)?(e.flags|=192,e.child=t.child,null):(t=p.treeContext,je=vi(c.nextSibling),vn=e,ge=!0,Ca=null,gi=!1,t!==null&&Mm(e,t),e=zf(e,l.children),e.flags|=134221824,e)}function Gg(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Il(t.return,e,i)}function Vg(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&Yl(i)===null&&(e=t),t=t.sibling}return e}function su(t,e,i,r,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(p.isBackwards=e,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=i,p.tailMode=l,p.treeForkCount=c)}function Pf(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function If(t,e,i){var r=e.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var p=bn.current;if(e.flags&128)return Ro(e,p),null;var E=(p&2)!==0;if(E?(p=p&1|2,e.flags|=128):p&=1,Ro(e,p),l==="backwards"&&t!==null?(Pf(t),mn(t,e,r,i),Pf(t)):mn(t,e,r,i),r=ge?vo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,i,e);else if(t.tag===19)Gg(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Vg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,Pf(e)),su(e,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Yl(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}su(e,!0,i,null,c,r);break;case"together":su(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=Vg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),su(e,!1,l,i,c,r)}return e.child}function Xg(t,e,i){var r=e.pendingProps;return Da(e,e.type,r.value),mn(t,e,r.children,i),e.child}function ca(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Ga|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(Sr(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=aa(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=aa(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Bf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Bl(t)))}function Fy(t,e,i){switch(e.tag){case 3:U(e,e.stateNode.containerInfo),Da(e,ln,t.memoizedState.cache),_r();break;case 27:case 5:tt(e);break;case 4:U(e,e.stateNode.containerInfo);break;case 10:Da(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,uf(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Pa(e),e.flags|=128,null;r=Sr(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?Hg(t,e,i):(Pa(e),t=ca(t,e,i),t!==null?t.sibling:null)}Pa(e);break;case 19:if(e.flags&128)return If(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(Sr(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return If(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ro(e,bn.current),r)break;return null;case 22:return e.lanes=0,Og(t,e,i,e.pendingProps);case 24:Da(e,ln,t.memoizedState.cache)}return ca(t,e,i)}function kg(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)cn=!0;else{if(!Bf(t,i)&&(e.flags&128)===0)return cn=!1,Fy(t,e,i);cn=(t.flags&131072)!==0}else cn=!1,ge&&(e.flags&1048576)!==0&&xm(e,vo,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Er(e.elementType),e.type=t,typeof t=="function")kc(t)?(r=Rr(t,r),e.tag=1,e=Bg(null,e,t,r,i)):(e.tag=0,e=Uf(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===q){e.tag=11,e=Ug(null,e,t,r,i);break t}else if(l===vt){e.tag=14,e=Ng(null,e,t,r,i);break t}else if(l===lt){e.tag=10,e.type=t,e=Xg(null,e,i);break t}}throw e=Nt(t)||t,Error(s(306,e,""))}}return e;case 0:return Uf(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=Rr(r,e.pendingProps),Bg(t,e,r,l,i);case 3:t:{if(U(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var c=e.memoizedState;l=c.element,af(t,e),Ao(e,r,null,i);var p=e.memoizedState;if(r=p.cache,Da(e,ln,r),r!==c.cache&&Qc(e,[ln],i,!0),bo(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Fg(t,e,r,i);break t}else if(r!==l){l=di(Error(s(424)),e),So(l),e=Fg(t,e,r,i);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=vi(t.firstChild),vn=e,ge=!0,Ca=null,gi=!0,i=Om(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(_r(),r===l){e=ca(t,e,i);break t}mn(t,e,r,i)}e=e.child}return e;case 26:return ps(t,e),t===null?(i=m0(e.type,null,e.pendingProps,null))?e.memoizedState=i:ge||(e.stateNode=Z_(e.type,e.pendingProps,qe.current,e)):e.memoizedState=m0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return tt(e),t===null&&ge&&(r=e.stateNode=f0(e.type,e.pendingProps,qe.current),vn=e,gi=!0,l=je,qa(e.type)?(Oh=l,je=vi(r.firstChild)):je=l),mn(t,e,e.pendingProps.children,i),ps(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ge&&((l=r=je)&&(r=Lx(r,e.type,e.pendingProps,gi),r!==null?(e.stateNode=r,vn=e,je=vi(r.firstChild),gi=!1,l=!0):l=!1),l||wa(e)),tt(e),l=e.type,c=e.pendingProps,p=t!==null?t.memoizedProps:null,r=c.children,bh(l,c)?r=null:p!==null&&bh(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=hf(t,e,Cy,null,null,i),Ns._currentValue=l),ps(t,e),mn(t,e,r,i),e.child;case 6:return t===null&&ge&&((t=i=je)&&(i=Ox(i,e.pendingProps,gi),i!==null?(e.stateNode=i,vn=e,je=null,t=!0):t=!1),t||wa(e)),null;case 13:return Hg(t,e,i);case 4:return U(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=br(e,null,r,i):mn(t,e,r,i),e.child;case 11:return Ug(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,ps(t,e),mn(t,e,r,i),e.child;case 8:return mn(t,e,e.pendingProps.children,i),e.child;case 12:return mn(t,e,e.pendingProps.children,i),e.child;case 10:return Xg(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,yr(e),l=En(l),r=r(l),e.flags|=1,mn(t,e,r,i),e.child;case 14:return Ng(t,e,e.type,e.pendingProps,i);case 15:return Lg(t,e,e.type,e.pendingProps,i);case 19:return If(t,e,i);case 31:return Iy(t,e,i);case 22:return Og(t,e,i,e.pendingProps);case 24:return yr(e),r=En(ln),t===null?(l=tf(),l===null&&(l=Ye,c=Jc(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),e.memoizedState={parent:r,cache:l},nf(e),Da(e,ln,l)):((t.lanes&i)!==0&&(af(t,e),Ao(e,null,null,i),bo()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Da(e,ln,r)):(r=c.cache,Da(e,ln,r),r!==l.cache&&Qc(e,[ln],i,!0))),mn(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:ge&&zl(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:ps(t,e),mn(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function fa(t){t.flags|=4}function Ff(t,e,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?S0(e,r):S0(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(b_())t.flags|=8192;else throw Tr=Vl,ef}else t.flags&=-16777217}function qg(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!y0(e))if(b_())t.flags|=8192;else throw Tr=Vl,ef}function ou(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Sl():536870912,t.lanes|=e,Ss|=e)}function No(t,e){if(!ge)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function Hy(t,e,i){var r=e.pendingProps;switch(Wc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return Ke(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),oa(ln),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(os(e)?fa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,jc())),Ke(e),null;case 26:var l=e.type,c=e.memoizedState;return t===null?(fa(e),c!==null?(Ke(e),qg(e,c)):(Ke(e),Ff(e,l,null,r,i))):c?c!==t.memoizedState?(fa(e),Ke(e),qg(e,c)):(Ke(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&fa(e),Ke(e),Ff(e,l,t,r,i)),null;case 27:if(pt(e),i=qe.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&fa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ke(e),e.subtreeFlags&=-33554433,null}t=Ft.current,os(e)?Em(e):(t=f0(l,r,i),e.stateNode=t,fa(e))}return Ke(e),e.subtreeFlags&=-33554433,null;case 5:if(pt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&fa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ke(e),e.subtreeFlags&=-33554433,null}if(c=Ft.current,os(e))Em(e);else{var p=Xo(qe.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}c[wt]=e,c[kt]=r;t:for(p=e.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break t;for(;p.sibling===null;){if(p.return===null||p.return===e)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}e.stateNode=c;t:switch(Rn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&fa(e)}}return Ke(e),e.subtreeFlags&=-33554433,Ff(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&fa(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=qe.current,os(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=vn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[wt]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||k_(t.nodeValue,i)),t||wa(e,!0)}else t=Xo(t).createTextNode(r),t[wt]=e,e.stateNode=t}return Ke(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=os(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[wt]=e}else _r(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ke(e),t=!1}else i=jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(ti(e),e):(ti(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Ke(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=os(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[wt]=e}else _r(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ke(e),l=!1}else l=jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(ti(e),e):(ti(e),null)}return ti(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),ou(e,e.updateQueue),Ke(e),null);case 4:return T(),t===null&&yh(e.stateNode.containerInfo),e.flags|=67108864,Ke(e),null;case 10:return oa(e.type),Ke(e),null;case 19:if(cf(e),r=e.memoizedState,r===null)return Ke(e),null;if(l=(e.flags&128)!==0,c=r.rendering,c===null)if(l)No(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Yl(t),c!==null){for(e.flags|=128,No(r,!1),t=c.updateQueue,e.updateQueue=t,ou(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)vm(i,t),i=i.sibling;return Ro(e,bn.current&1|2),ge&&ra(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&F()>Su&&(e.flags|=128,l=!0,No(r,!1),e.lanes=4194304)}else{if(!l)if(t=Yl(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,ou(e,t),No(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!ge)return Ke(e),null}else 2*F()-r.renderingStartTime>Su&&i!==536870912&&(e.flags|=128,l=!0,No(r,!1),e.lanes=4194304);r.isBackwards?(c.sibling=e.child,e.child=c):(t=r.last,t!==null?t.sibling=c:e.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=F(),t.sibling=null,c=bn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||ge?Ro(e,c):(i=c,ie(Tn,e),ie(bn,i),Un===null&&(Un=e)),ge&&ra(e,r.treeForkCount),t}return Ke(e),null;case 22:case 23:return ti(e),lf(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),i=e.updateQueue,i!==null&&ou(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Lt(Mr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),oa(ln),Ke(e),null;case 25:return null;case 30:return e.flags|=33554432,Ke(e),null}throw Error(s(156,e.tag))}function Gy(t,e){switch(Wc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oa(ln),T(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return pt(e),null;case 31:if(e.memoizedState!==null){if(ti(e),e.alternate===null)throw Error(s(340));_r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ti(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));_r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return cf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return T(),null;case 10:return oa(e.type),null;case 22:case 23:return ti(e),lf(),t!==null&&Lt(Mr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return oa(ln),null;case 25:return null;default:return null}}function Yg(t,e){switch(Wc(e),e.tag){case 3:oa(ln),T();break;case 26:case 27:case 5:pt(e);break;case 4:T();break;case 31:e.memoizedState!==null&&ti(e);break;case 13:ti(e);break;case 19:cf(e);break;case 10:oa(e.type);break;case 22:case 23:ti(e),lf(),t!==null&&Lt(Mr);break;case 24:oa(ln)}}function Lo(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,p=i.inst;r=c(),p.destroy=r}i=i.next}while(i!==l)}}catch(E){Be(e,e.return,E)}}function Ba(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var p=r.inst,E=p.destroy;if(E!==void 0){p.destroy=void 0,l=e;var N=i,W=E;try{W()}catch(nt){Be(l,N,nt)}}}r=r.next}while(r!==c)}}catch(nt){Be(e,e.return,nt)}}function Wg(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Pm(e,i)}catch(r){Be(t,t.return,r)}}}function Zg(t,e,i){i.props=Rr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Be(t,e,r)}}function Ii(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=na(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=e0(c)),r=l.ref;break;case 7:if(t.stateNode===null){var p=new ri(t);m(t.child,!1,Ux,p,void 0,void 0),t.stateNode=p}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Be(t,e,E)}}function An(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Be(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Be(t,e,l)}else i.current=null}function lu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)o0(t.stateNode,e[i])}function jg(t){for(var e=t.return;e!==null&&(Gf(e)&&o0(t.stateNode,e.stateNode),!Hf(e));)e=e.return}function Oo(t){for(var e=t.return;e!==null&&(Gf(e)&&Nx(t.stateNode,e.stateNode),!Hf(e));)e=e.return}function Hf(t){return t.tag===5||t.tag===3||t.tag===27}function Gf(t){return t&&t.tag===7&&t.stateNode!==null}function Vf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Be(t,t.return,l)}}function Xf(t,e,i){try{var r=t.stateNode;dx(r,t.type,i,e),r[kt]=e}catch(l){Be(t,t.return,l)}}function Kg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function kf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Oi)),lu(t,r),we=!0;else if(l!==4&&(l===27&&(lu(t,r),r=null,qa(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(qf(t,e,i,r),t=t.sibling;t!==null;)qf(t,e,i,r),t=t.sibling}function uu(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),lu(t,r),we=!0;else if(l!==4&&(l===27&&(lu(t,r),r=null,qa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(uu(t,e,i,r),t=t.sibling;t!==null;)uu(t,e,i,r),t=t.sibling}function Qg(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Rn(e,r,i),e[wt]=t,e[kt]=i}catch(c){Be(t,t.return,c)}}var cu=!1,ei=null;function Jg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(cu=!0)}var Bi=null;function $g(){var t=Bi;return Bi=null,t}var Vn=0;function ms(t,e,i,r,l){return Vn=0,t_(t.child,e,i,r,l)}function t_(t,e,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(r!==null){var E=Ch(p);r.push(E),E.view&&(c=!0)}else c||Ch(p).view&&(c=!0);cu=!0,$_(p,Vn===0?e:e+"_"+Vn,i),Vn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||t_(t.child,e,i,r,l)&&(c=!0));t=t.sibling}return c}function Fi(t,e){for(;t!==null;)t.tag===5?t0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Fi(t.child,e)),t=t.sibling}function fu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(fu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=ia(e.default,e.share),e!=="none"&&(ms(t,i,e,null,!1)||Fi(t.child,!1))}t=t.sibling}}function Yf(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=na(r,i),c=ia(r.default,i.paired?r.share:r.enter);c!=="none"?ms(t,l,c,null,!1)?(fu(t),i.paired||e||Es(t,r.onEnter)):Fi(t.child,!1):fu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling;else fu(t)}function Wf(t){if(ei!==null&&ei.size!==0){var e=ei;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var c=ia(i.default,i.share);if(c!=="none"&&(ms(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Es(t,i.onShare)):Fi(t.child,!1)),e.delete(r),e.size===0)break}}}Wf(t)}t=t.sibling}}}function Zf(t){if(t.tag===30){var e=t.memoizedProps,i=na(e,t.stateNode),r=ei!==null?ei.get(i):void 0,l=ia(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(ms(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ei.delete(i),Es(t,e.onShare)):Es(t,e.onExit):Fi(t.child,!1)),ei!==null&&Wf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Zf(t),t=t.sibling;else ei!==null&&Wf(t)}function e_(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=na(e,t.stateNode);e=ia(e.default,e.update),t.flags&=-5,e!=="none"&&ms(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&e_(t);t=t.sibling}}function jf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Fi(t.child,!1))}jf(t)}t=t.sibling}}function hu(t){if(t.tag===30)t.stateNode.paired=null,Fi(t.child,!1),jf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)hu(t),t=t.sibling;else jf(t)}function n_(t){for(t=t.child;t!==null;)t.tag===30?Fi(t.child,!1):(t.subtreeFlags&33554432)!==0&&n_(t),t=t.sibling}function Kf(t,e,i,r,l,c,p){for(var E=!1;e!==null;){if(e.tag===5){var N=e.stateNode;if(c!==null&&Vn<c.length){var W=c[Vn],nt=Ch(N);(W.view||nt.view)&&(E=!0);var mt;if(mt=(t.flags&4)===0)if(nt.clip)mt=!0;else{mt=W.rect;var X=nt.rect;mt=mt.y!==X.y||mt.x!==X.x||mt.height!==X.height||mt.width!==X.width}mt&&(t.flags|=4),nt.abs?nt=!W.abs:(W=W.rect,nt=nt.rect,nt=W.height!==nt.height||W.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&$_(N,Vn===0?i:i+"_"+Vn,l),E&&(t.flags&4)!==0||(Bi===null&&(Bi=[]),Bi.push(N,Vn===0?r:r+"_"+Vn,e.memoizedProps)),Vn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&p?t.flags|=e.flags&32:Kf(t,e.child,i,r,l,c,p)&&(E=!0));e=e.sibling}return E}function i_(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=na(i,r),c=ia(i.default,i.update),p;p=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Vn=0,l=Kf(r,E,l,l,c,p,!1),(t.flags&4)!==0&&l&&Es(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&i_(t);t=t.sibling}}var Sn=!1,Pe=!1,Hi=!1,Qf=!1,a_=typeof WeakSet=="function"?WeakSet:Set,yn=null,Gi=!1,zo=!1,du=!1,Jf=!1;function Vy(t,e,i){if(t=t.containerInfo,Eh=Ls,t=lm(t),Ic(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var E=0,N=-1,W=-1,nt=0,mt=0,X=t,$=null;e:for(;;){for(var Ut;X!==r||c!==0&&X.nodeType!==3||(N=E+c),X!==p||l!==0&&X.nodeType!==3||(W=E+l),X.nodeType===3&&(E+=X.nodeValue.length),(Ut=X.firstChild)!==null;)$=X,X=Ut;for(;;){if(X===t)break e;if($===r&&++nt===c&&(N=E),$===p&&++mt===l&&(W=E),(Ut=X.nextSibling)!==null)break;X=$,$=X.parentNode}X=Ut}r=N===-1||W===-1?null:{start:N,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(Th={focusedElem:t,selectionRange:r},Ls=!1,i=(i&335544064)===i,yn=e,e=i?9270:1024;yn!==null;){if(t=yn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&Zf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&Jg(t),pu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&Zf(r),pu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&Jg(t),pu(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,yn=r):(i&&e_(t),pu(i))}}ei=null}function pu(t){for(;yn!==null;){var e=yn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=e.stateNode;try{var p=Rr(e.type,l);i=c.getSnapshotBeforeUpdate(p,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Be(e,e.return,E)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Uh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Uh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=na(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=ia(l.default,l.update),l!=="none"&&ms(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,yn=r;break}yn=e.return}}function r_(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i),r&4&&Lo(5,i);break;case 1:if(Vi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(p){Be(i,i.return,p)}else{var l=Rr(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Be(i,i.return,p)}}r&64&&Wg(i),r&512&&Ii(i,i.return);break;case 3:if(Vi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Pm(t,e)}catch(p){Be(i,i.return,p)}}break;case 27:e===null&&r&4&&Qg(i);case 26:case 5:Vi(t,i),e===null&&r&4&&Vf(i),r&512&&Ii(i,i.return);break;case 12:Vi(t,i);break;case 31:Vi(t,i),r&4&&u_(t,i);break;case 13:Vi(t,i),r&4&&c_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=tx.bind(null,i),zx(t,i))));break;case 22:if(r=i.memoizedState!==null||Sn,!r){var c=e!==null&&e.memoizedState!==null||Pe;e=Sn,l=Pe,Sn=r,(Pe=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ti(t,i,r)):Vi(t,i),Sn=e,Pe=l}break;case 30:Vi(t,i),r&512&&Ii(i,i.return);break;case 7:r&512&&Ii(i,i.return);default:Vi(t,i)}}function $f(t,e){for(t=t.child;t!==null;)s_(t,e),t=t.sibling}function s_(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(N){Be(t,t.return,N)}th(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,we=!0}catch(N){Be(t,t.return,N)}break;case 18:try{var E=t.stateNode;e?J_(E,!0):J_(t.stateNode,!1)}catch(N){Be(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&$f(t,e);break;default:$f(t,e)}}function th(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:s_(i,r);break t;case 22:i.memoizedState===null&&th(i,r);break t;default:th(i,r)}}t=t.sibling}}function o_(t){var e=t.alternate;e!==null&&(t.alternate=null,o_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&te(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Xn=!1;function Mi(t,e,i){for(i=i.child;i!==null;)l_(t,e,i),i=i.sibling}function l_(t,e,i){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ye,i)}catch{}switch(i.tag){case 26:Pe||An(i,e),Mi(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Pe&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Pe||An(i,e),Oo(i);var r=Je,l=Xn;qa(i.type)&&(Je=i.stateNode,Xn=!1),Mi(t,e,i),h0(i.stateNode,i.type,i.memoizedProps),Je=r,Xn=l;break;case 5:Pe||An(i,e),Oo(i);case 6:if(i.tag===6&&Oo(i),r=Je,l=Xn,Je=null,Mi(t,e,i),Je=r,Xn=l,Je!==null)if(Xn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(i.stateNode),we=!0}catch(c){Be(i,e,c)}else try{Je.removeChild(i.stateNode),we=!0}catch(c){Be(i,e,c)}break;case 18:Je!==null&&(Xn?(t=Je,Q_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Os(t)):Q_(Je,i.stateNode));break;case 4:r=Je,l=Xn,Je=i.stateNode.containerInfo,Xn=!0,Mi(t,e,i),Je=r,Xn=l;break;case 0:case 11:case 14:case 15:Ba(2,i,e),Pe||Ba(4,i,e),Mi(t,e,i);break;case 1:Pe||(An(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&Zg(i,e,r)),Mi(t,e,i);break;case 21:Mi(t,e,i);break;case 22:Pe=(r=Pe)||i.memoizedState!==null,Mi(t,e,i),Pe=r;break;case 30:An(i,e),Mi(t,e,i);break;case 7:Pe||An(i,e),Mi(t,e,i);break;default:Mi(t,e,i)}}function u_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Os(t)}catch(i){Be(e,e.return,i)}}}function c_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Os(t)}catch(i){Be(e,e.return,i)}}function Xy(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new a_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new a_),e;default:throw Error(s(435,t.tag))}}function mu(t,e){var i=Xy(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=ex.bind(null,t,r);r.then(l,l)}})}function Bn(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],p=t,E=e,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(qa(N.type)){Je=N.stateNode,Xn=!1;break t}break;case 5:Je=N.stateNode,Xn=!1;break t;case 3:case 4:Je=N.stateNode.containerInfo,Xn=!0;break t}N=N.return}if(Je===null)throw Error(s(160));l_(p,E,c),Je=null,Xn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)f_(e,t,i),e=e.sibling}var Ei=null;function f_(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var p=r[c];p.ref.impl=p.nextImpl}Bn(e,t,i),Fn(t),l&4&&(Ba(3,t,t.return),Lo(3,t),Ba(5,t,t.return));break;case 1:Bn(e,t,i),Fn(t),l&512&&(Pe||r===null||An(r,r.return)),l&64&&Sn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(c=Ei,Bn(e,t,i),Fn(t),l&512&&(Pe||r===null||An(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(Sn)t.stateNode=Z_(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ne]||r[wt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),Rn(r,e,i),r[wt]=t,Ce(r),e=r;break t;case"link":if(c=v0("link","href",l).get(e+(i.href||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(p,1);break e}}r=l.createElement(e),Rn(r,e,i),l.head.appendChild(r);break;case"meta":if(c=v0("meta","content",l).get(e+(i.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(p,1);break e}}r=l.createElement(e),Rn(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[wt]=t,Ce(r),e=r}t.stateNode=e}else Sn||Bh(c,t.type,t.stateNode);else t.stateNode=_0(c,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||Pe||e.parentNode.removeChild(e)):l.count--,i===null?Sn||Bh(c,t.type,t.stateNode):_0(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 27:Bn(e,t,i),Fn(t),l&512&&(Pe||r===null||An(r,r.return)),r!==null&&l&4&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Hi,Hi=!1,Bn(e,t,i),Hi=c,Fn(t),l&512&&(Pe||r===null||An(r,r.return)),t.flags&32){e=t.stateNode;try{Qr(e,""),we=!0}catch(nt){Be(t,t.return,nt)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Xf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(Qf=!0);break;case 6:if(Bn(e,t,i),Fn(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,we=!0}catch(nt){Be(t,t.return,nt)}}break;case 3:if(we=!1,Du=null,c=Ei,Ei=ko(e.containerInfo),Bn(e,t,i),Ei=c,Fn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(e.containerInfo)}catch(nt){Be(t,t.return,nt)}Qf&&(Qf=!1,h_(t)),we=!1;break;case 4:l=Hi,Hi=Sn,r=Np(),c=Ei,Ei=ko(t.stateNode.containerInfo),Bn(e,t,i),Fn(t),Ei=c,we&&zo&&(du=!0),we=r,Hi=l;break;case 12:Bn(e,t,i),Fn(t);break;case 31:Bn(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mu(t,e)));break;case 13:Bn(e,t,i),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vu=F()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mu(t,e)));break;case 22:c=t.memoizedState!==null,p=r!==null&&r.memoizedState!==null;var E=Sn,N=Pe,W=Hi;Sn=E||c,Hi=W||c,Pe=N||p,Bn(e,t,i),Pe=N,Hi=W,Sn=E,Fn(t),l&8192&&(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,!c||r===null||p||Sn||Pe||(e=p||Pe,i=Sn,r=Pe,Sn=c||Sn,Pe=e,Fa(t,2),Sn=i,Pe=r),!c&&Hi||$f(t,c)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,mu(t,i))));break;case 19:Bn(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mu(t,e)));break;case 30:l&512&&(Pe||r===null||An(r,r.return)),l=Np(),c=zo,p=(i&335544064)===i,E=t.memoizedProps,zo=p&&ia(E.default,E.update)!=="none",Bn(e,t,i),Fn(t),p&&r!==null&&we&&(t.flags|=4),zo=c,we=l;break;case 21:break;case 7:l&512&&(Pe||r===null||An(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Bn(e,t,i),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(Kg(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Gf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Hf(l))break;l=l.return}var p=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,N=kf(t);uu(t,N,E,p);break;case 5:var W=i.stateNode;i.flags&32&&(Qr(W,""),i.flags&=-33);var nt=kf(t);uu(t,nt,W,p);break;case 3:case 4:var mt=i.stateNode.containerInfo,X=kf(t);qf(t,X,mt,p);break;default:throw Error(s(161))}}catch($){Be(t,t.return,$)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;h_(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Ls=!0,e.reset(),Ls=!1),t=t.sibling}}function gs(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)d_(e,t),e=e.sibling;else i_(e)}function d_(t,e){var i=t.alternate;if(i===null)Yf(t,!1);else switch(t.tag){case 3:if(Jf=Gi=!1,$g(),gs(e,t),!Gi&&!du){if(t=Bi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];t0(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jf=!0}Bi=null;break;case 5:gs(e,t);break;case 4:r=Gi,Gi=!1,gs(e,t),Gi&&(du=!0),Gi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Yf(t,!1):gs(e,t));break;case 30:r=Gi,l=$g(),Gi=!1,gs(e,t),Gi&&(t.flags|=4);var c=t.memoizedProps,p=t.stateNode;e=na(c,p),p=na(i.memoizedProps,p);var E=ia(c.default,c.update);E==="none"?e=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Vn=0,e=Kf(t,i,e,p,E,c,!0),Vn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(Es(t,t.memoizedProps.onUpdate),Bi=l):l!==null&&(l.push.apply(l,Bi),Bi=l),Gi=(t.flags&32)!==0?!0:r;break;default:gs(e,t)}}function Vi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)r_(t,e.alternate,e),e=e.sibling}function Fa(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:Ba(4,i,i.return),Fa(i,r);break;case 1:An(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&Zg(i,i.return,l),Fa(i,r);break;case 27:(r&2)!==0&&h0(i.stateNode,i.type,i.memoizedProps);case 5:An(i,i.return),i.tag!==5&&i.tag!==27||Oo(i),Fa(i,r);break;case 6:Oo(i);break;case 26:An(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Pe||l.parentNode.removeChild(l),Fa(i,r);break;case 22:i.memoizedState===null&&Fa(i,r);break;case 30:An(i,i.return),Fa(i,r);break;case 7:An(i,i.return);default:Fa(i,r)}t=t.sibling}}function Ti(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,p=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Ti(l,c,i),Lo(4,c);break;case 1:if(Ti(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(nt){Be(r,r.return,nt)}if(r=c,l=r.updateQueue,l!==null){var N=r.stateNode;try{var W=l.shared.hiddenCallbacks;if(W!==null)for(l.shared.hiddenCallbacks=null,l=0;l<W.length;l++)zm(W[l],N)}catch(nt){Be(r,r.return,nt)}}E&&p&64&&Wg(c),Ii(c,c.return);break;case 27:(i&2)!==0&&Qg(c);case 5:c.tag!==5&&c.tag!==27||jg(c),Ti(l,c,i),E&&r===null&&p&4&&Vf(c),Ii(c,c.return);break;case 6:jg(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||Sn||Bh(ko(N.ownerDocument),c.type,N),Ti(l,c,i),E&&r===null&&p&4&&Vf(c),Ii(c,c.return);break;case 12:Ti(l,c,i);break;case 31:Ti(l,c,i),E&&p&4&&u_(l,c);break;case 13:Ti(l,c,i),E&&p&4&&c_(l,c);break;case 22:c.memoizedState===null&&Ti(l,c,i),Ii(c,c.return);break;case 30:Ti(l,c,i),Ii(c,c.return);break;case 7:Ii(c,c.return);default:Ti(l,c,i)}e=e.sibling}}function eh(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&yo(i))}function nh(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&yo(t))}function _i(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)p_(t,e,i,r),e=e.sibling;else l&&n_(e)}function p_(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&hu(e);var c=e.flags;switch(e.tag){case 0:case 11:case 15:_i(t,e,i,r),c&2048&&Lo(9,e);break;case 1:_i(t,e,i,r);break;case 3:_i(t,e,i,r),l&&Jf&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,e.alternate!==null&&(c=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==c&&(e.refCount++,c!=null&&yo(c)));break;case 12:if(c&2048){_i(t,e,i,r),c=e.stateNode;try{var p=e.memoizedProps,E=p.id,N=p.onPostCommit;typeof N=="function"&&N(E,e.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Be(e,e.return,W)}}else _i(t,e,i,r);break;case 31:_i(t,e,i,r);break;case 13:_i(t,e,i,r);break;case 23:break;case 22:p=e.stateNode,E=e.alternate,e.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&hu(E),p._visibility&2?_i(t,e,i,r):Po(t,e)):(l&&E!==null&&E.memoizedState!==null&&hu(e),p._visibility&2?_i(t,e,i,r):(p._visibility|=2,_s(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),c&2048&&eh(E,e);break;case 24:_i(t,e,i,r),c&2048&&nh(e.alternate,e);break;case 30:l&&(c=e.alternate,c!==null&&(Fi(c.child,!0),Fi(e.child,!0))),_i(t,e,i,r);break;default:_i(t,e,i,r)}}function _s(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,p=e,E=i,N=r,W=p.flags;switch(p.tag){case 0:case 11:case 15:_s(c,p,E,N,l),Lo(8,p);break;case 23:break;case 22:var nt=p.stateNode;p.memoizedState!==null?nt._visibility&2?_s(c,p,E,N,l):Po(c,p):(nt._visibility|=2,_s(c,p,E,N,l)),l&&W&2048&&eh(p.alternate,p);break;case 24:_s(c,p,E,N,l),l&&W&2048&&nh(p.alternate,p);break;default:_s(c,p,E,N,l)}e=e.sibling}}function Po(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:Po(i,r),l&2048&&eh(r.alternate,r);break;case 24:Po(i,r),l&2048&&nh(r.alternate,r);break;default:Po(i,r)}e=e.sibling}}var Cr=8192;function wr(t,e,i){if(t.subtreeFlags&Cr)for(t=t.child;t!==null;)m_(t,e,i),t=t.sibling}function m_(t,e,i){switch(t.tag){case 26:wr(t,e,i),t.flags&Cr&&(t.memoizedState!==null?jx(i,Ei,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&M0(i,t)));break;case 5:wr(t,e,i),t.flags&Cr&&(t=t.stateNode,(e&335544128)===e&&M0(i,t));break;case 3:case 4:var r=Ei;Ei=ko(t.stateNode.containerInfo),wr(t,e,i),Ei=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,wr(t,e,i),Cr=r):wr(t,e,i));break;case 30:if((t.flags&Cr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ei===null&&(ei=new Map),ei.set(r,l)}wr(t,e,i);break;default:wr(t,e,i)}}function g_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Io(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];yn=r,v_(r,t)}g_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)__(t),t=t.sibling}function __(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gu(t)):Io(t);break;default:Io(t)}}function gu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];yn=r,v_(r,t)}g_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ba(8,e,e.return),gu(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,gu(e));break;default:gu(e)}t=t.sibling}}function v_(t,e){for(;yn!==null;){var i=yn;switch(i.tag){case 0:case 11:case 15:Ba(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:yo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,yn=r;else t:for(i=t;yn!==null;){r=yn;var l=r.sibling,c=r.return;if(o_(r),r===i){yn=null;break t}if(l!==null){l.return=c,yn=l;break t}yn=c}}}var ky={getCacheForType:function(t){var e=En(ln),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return En(ln).controller.signal}},qy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,ve=null,xe=0,Ie=0,ni=null,Ha=!1,vs=!1,ih=!1,ha=0,an=0,Ga=0,Dr=0,_u=0,ii=0,Ss=0,Bo=null,kn=null,ah=!1,vu=0,S_=0,Su=1/0,yu=null,Va=null,tn=0,bi=null,Ur=null,Xi=0,rh=0,sh=null,y_=null,ys=null,xs=null,Ms=null,Fo=0,xu=null;function ai(){return(Oe&2)!==0&&xe!==0?xe&-xe:Et.T!==null?gh():Tt()}function x_(){if(ii===0)if((xe&536870912)===0||ge){var t=$i;$i<<=1,($i&3932160)===0&&($i=262144),ii=t}else ii=536870912;return t=Tn.current,t!==null&&(t.flags|=32),ii}function Es(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=e0(na(t.memoizedProps,i))),xs===null&&(xs=[]),xs.push(e.bind(null,r))}}function qn(t,e,i){(t===Ye&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Ts(t,0),Xa(t,xe,ii,!1)),hr(t,i),((Oe&2)===0||t!==Ye)&&(t===Ye&&((Oe&2)===0&&(Dr|=i),an===4&&Xa(t,xe,ii,!1)),ki(t))}function M_(t,e,i){if((Oe&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Ea(t,e),l=r?Zy(t,e):lh(t,e,!0),c=r;do{if(l===0){vs&&!r&&Xa(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!Yy(i)){l=lh(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var E=t;l=Bo;var N=E.current.memoizedState.isDehydrated;if(N&&(Ts(E,p).flags|=256),p=lh(E,p,!1),p!==2&&p!==6){if(ih&&!N){E.errorRecoveryDisabledLanes|=c,Dr|=c,l=4;break t}c=kn,kn=l,c!==null&&(kn===null?kn=c:kn.push.apply(kn,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){Ts(t,0),Xa(t,e,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Xa(r,e,ii,!Ha);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=vu+300-F(),10<l)){if(Xa(r,e,ii,!Ha),fr(r,0,!0)!==0)break t;Xi=e,r.timeoutHandle=Rh(E_.bind(null,r,i,kn,yu,ah,e,ii,Dr,Ss,Ha,c,"Throttled",-0,0),l);break t}E_(r,i,kn,yu,ah,e,ii,Dr,Ss,Ha,c,null,-0,0)}}break}while(!0);ki(t)}function E_(t,e,i,r,l,c,p,E,N,W,nt,mt,X,$){t.timeoutHandle=-1;var Ut=e.subtreeFlags,qt=(c&335544064)===c;if(mt=null,(qt||Ut&8192||(Ut&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},ei=null,m_(e,c,mt),qt&&(Ut=mt,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(Ut.count++,Ut.waitingForViewTransition=!0,Ut=Wo.bind(Ut),qt.finished.then(Ut,Ut))),Ut=(c&62914560)===c?vu-F():(c&4194048)===c?S_-F():0,Ut=Kx(mt,Ut),Ut!==null)){Xi=c,t.cancelPendingCommit=Ut(U_.bind(null,t,e,c,i,r,l,p,E,N,W,nt,mt,null,X,$)),Xa(t,c,p,!W);return}U_(t,e,c,i,r,l,p,E,N,W,nt,mt)}function Yy(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!$n(c(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xa(t,e,i,r){e=vl(t,e),e&=~_u,e&=~Dr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-wn(l),p=1<<c;r[c]=-1,l&=~p}i!==0&&b(t,i,e)}function Mu(){return(Oe&6)===0?(Ho(0),!1):!0}function oh(){if(ve!==null){if(Ie===0)var t=ve.return;else t=ve,sa=vr=null,mf(t),cs=null,Eo=0,t=ve;for(;t!==null;)Yg(t.alternate,t),t=t.return;ve=null}}function Ts(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,gx(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Xi=0,oh(),Ye=t,ve=i=aa(t.current,null),xe=e,Ie=0,ni=null,Ha=!1,vs=Ea(t,e),ih=!1,Ss=ii=_u=Dr=Ga=an=0,kn=Bo=null,ah=!1,ha=vl(t,e),Dl(),i}function T_(t,e){fe=null,Et.H=eu,e===us||e===Gl?(e=Um(),Ie=3):e===ef?(e=Um(),Ie=4):Ie=e===Df?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ni=e,ve===null&&(an=1,nu(t,di(e,t.current)))}function b_(){var t=Tn.current;return t===null?!0:(xe&4194048)===xe?Un===null:(xe&62914560)===xe||(xe&536870912)!==0?t===Un:!1}function A_(){var t=Et.H;return Et.H=eu,t===null?eu:t}function R_(){var t=Et.A;return Et.A=ky,t}function Eu(){an=4,Ha||(xe&4194048)!==xe&&Tn.current!==null||(vs=!0),(Ga&134217727)===0&&(Dr&134217727)===0||Ye===null||Xa(Ye,xe,ii,!1)}function lh(t,e,i){var r=Oe;Oe|=2;var l=A_(),c=R_();(Ye!==t||xe!==e)&&(yu=null,Ts(t,e)),e=!1;var p=an;t:do try{if(Ie!==0&&ve!==null){var E=ve,N=ni;switch(Ie){case 8:oh(),p=6;break t;case 3:case 2:case 9:case 6:Tn.current===null&&(e=!0);var W=Ie;if(Ie=0,ni=null,bs(t,E,N,W),i&&vs){p=0;break t}break;default:W=Ie,Ie=0,ni=null,bs(t,E,N,W)}}Wy(),p=an;break}catch(nt){T_(t,nt)}while(!0);return e&&t.shellSuspendCounter++,sa=vr=null,Oe=r,Et.H=l,Et.A=c,ve===null&&(Ye=null,xe=0,Dl()),p}function Wy(){for(;ve!==null;)C_(ve)}function Zy(t,e){var i=Oe;Oe|=2;var r=A_(),l=R_();Ye!==t||xe!==e?(yu=null,Su=F()+500,Ts(t,e)):vs=Ea(t,e);t:do try{if(Ie!==0&&ve!==null){e=ve;var c=ni;e:switch(Ie){case 1:Ie=0,ni=null,bs(t,e,c,1);break;case 2:case 9:if(wm(c)){Ie=0,ni=null,w_(e);break}e=function(){Ie!==2&&Ie!==9||Ye!==t||(Ie=7),ki(t)},c.then(e,e);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:wm(c)?(Ie=0,ni=null,w_(e)):(Ie=0,ni=null,bs(t,e,c,7));break;case 5:var p=null;switch(ve.tag){case 26:p=ve.memoizedState;case 5:case 27:var E=ve;if(p?y0(p):E.stateNode.complete){Ie=0,ni=null;var N=E.sibling;if(N!==null)ve=N;else{var W=E.return;W!==null?(ve=W,Tu(W)):ve=null}break e}}Ie=0,ni=null,bs(t,e,c,5);break;case 6:Ie=0,ni=null,bs(t,e,c,6);break;case 8:oh(),an=6;break t;default:throw Error(s(462))}}jy();break}catch(nt){T_(t,nt)}while(!0);return sa=vr=null,Et.H=r,Et.A=l,Oe=i,ve!==null?0:(Ye=null,xe=0,Dl(),an)}function jy(){for(;ve!==null&&!zt();)C_(ve)}function C_(t){var e=kg(t.alternate,t,ha);t.memoizedProps=t.pendingProps,e===null?Tu(t):ve=e}function w_(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Ig(i,e,e.pendingProps,e.type,void 0,xe);break;case 11:e=Ig(i,e,e.pendingProps,e.type.render,e.ref,xe);break;case 5:mf(e);var r=e;r===vn&&(ge?(Pl(r),r.tag===5&&r.stateNode!=null&&(je=r.stateNode)):(Pl(r),ge=!0));default:Yg(i,e),e=ve=vm(e,ha),e=kg(i,e,ha)}t.memoizedProps=t.pendingProps,e===null?Tu(t):ve=e}function bs(t,e,i,r){sa=vr=null,mf(e),cs=null,Eo=0;var l=e.return;try{if(Py(t,l,e,i,xe)){an=1,nu(t,di(i,t.current)),ve=null;return}}catch(c){if(l!==null)throw ve=l,c;an=1,nu(t,di(i,t.current)),ve=null;return}e.flags&32768?(ge||r===1?t=!0:vs||(xe&536870912)!==0?t=!1:(Ha=t=!0,(r===2||r===9||r===3||r===6)&&(r=Tn.current,r!==null&&r.tag===13&&(r.flags|=16384))),D_(e,t)):Tu(e)}function Tu(t){var e=t;do{if((e.flags&32768)!==0){D_(e,Ha);return}t=e.return;var i=Hy(e.alternate,e,ha);if(i!==null){ve=i;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);an===0&&(an=5)}function D_(t,e){do{var i=Gy(t.alternate,t);if(i!==null){i.flags&=32767,ve=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){ve=t;return}ve=t=i}while(t!==null);an=6,ve=null}function U_(t,e,i,r,l,c,p,E,N,W,nt,mt){t.cancelPendingCommit=null;do bu();while(tn!==0);if((Oe&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===Ye&&(ve=Ye=null,xe=0),Ur=e,bi=t,Xi=i,sh=l,y_=r,Ky(t,e,i,p,E,N,mt)}}function Ky(t,e,i,r,l,c,p){var E=e.lanes|e.childLanes;if(rh=E,E|=Vc,Sc(t,i,E,r,l,c),xs=null,(i&335544064)===i?(Ms=Ty(t),r=10262):(Ms=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,nx(xt,function(){return hh(),null})):(t.callbackNode=null,t.callbackPriority=0),cu=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null,l=Yt.p,Yt.p=2,c=Oe,Oe|=4;try{Vy(t,e,i)}finally{Oe=c,Yt.p=l,Et.T=r}}tn=1,cu?ys=Mx(p,t.containerInfo,Ms,uh,ch,Jy,fh,hh,Qy):(uh(),ch(),fh())}function Qy(t){if(tn!==0){var e=bi.onRecoverableError;e(t,{componentStack:null})}}function Jy(){tn===3&&(tn=0,d_(Ur,bi),tn=4)}function uh(){if(tn===1){tn=0;var t=bi,e=Ur,i=Xi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null;var l=Yt.p;Yt.p=2;var c=Oe;Oe|=4;try{zo=du=!1,f_(e,t,i),i=Th;var p=lm(t.containerInfo),E=i.focusedElem,N=i.selectionRange;if(p!==E&&E&&E.ownerDocument&&om(E.ownerDocument.documentElement,E)){if(N!==null&&Ic(E)){var W=N.start,nt=N.end;if(nt===void 0&&(nt=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(nt,E.value.length);else{var mt=E.ownerDocument||document,X=mt&&mt.defaultView||window;if(X.getSelection){var $=X.getSelection(),Ut=E.textContent.length,qt=Math.min(N.start,Ut),he=N.end===void 0?qt:Math.min(N.end,Ut);!$.extend&&qt>he&&(p=he,he=qt,qt=p);var Y=sm(E,qt),B=sm(E,he);if(Y&&B&&($.rangeCount!==1||$.anchorNode!==Y.node||$.anchorOffset!==Y.offset||$.focusNode!==B.node||$.focusOffset!==B.offset)){var Q=mt.createRange();Q.setStart(Y.node,Y.offset),$.removeAllRanges(),qt>he?($.addRange(Q),$.extend(B.node,B.offset)):(Q.setEnd(B.node,B.offset),$.addRange(Q))}}}}for(mt=[],$=E;$=$.parentNode;)$.nodeType===1&&mt.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var dt=mt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Ls=!!Eh,Th=Eh=null}finally{Oe=c,Yt.p=l,Et.T=r}}t.current=e,tn=2}}function ch(){if(tn===2){tn=0;var t=bi,e=Ur,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=Et.T,Et.T=null;var r=Yt.p;Yt.p=2;var l=Oe;Oe|=4;try{r_(t,e.alternate,e)}finally{Oe=l,Yt.p=r,Et.T=i}}tn=3}}function fh(){if(tn===4||tn===3){tn=0;var t=ys;ys=null,ce();var e=bi,i=Ur,r=Xi,l=y_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?tn=5:(tn=0,Ur=bi=null,N_(e,e.pendingLanes)),c=e.pendingLanes,c===0&&(Va=null),K(r),i=i.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Et.T,c=Yt.p,Yt.p=2,Et.T=null;try{for(var p=e.onRecoverableError,E=0;E<l.length;E++){var N=l[E];p(N.value,{componentStack:N.stack})}}finally{Et.T=i,Yt.p=c}}if(l=xs,p=Ms,Ms=null,l!==null&&(xs=null,p===null&&(p=[]),t!==null))for(N=0;N<l.length;N++)i=(0,l[N])(p),i!==void 0&&t.finished.finally(i);(Xi&3)!==0&&bu(),ki(e),c=e.pendingLanes,(r&261930)!==0&&(c&42)!==0?e===xu?Fo++:(Fo=0,xu=e):(Fo=0,xu=null),Ho(0)}}function N_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,yo(e)))}function bu(){return ys!==null&&(ys.skipTransition(),ys=null),uh(),ch(),fh(),hh()}function hh(){if(tn!==5)return!1;var t=bi,e=rh;rh=0;var i=K(Xi),r=Et.T,l=Yt.p;try{Yt.p=32>i?32:i,Et.T=null,i=sh,sh=null;var c=bi,p=Xi;if(tn=0,Ur=bi=null,Xi=0,(Oe&6)!==0)throw Error(s(331));var E=Oe;if(Oe|=4,__(c.current),p_(c,c.current,p,i),Oe=E,Ho(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ye,c)}catch{}return!0}finally{Yt.p=l,Et.T=r,N_(t,e)}}function L_(t,e,i){e=di(i,e),e=wf(t.stateNode,e,2),t=Oa(t,e,2),t!==null&&(hr(t,2),ki(t))}function Be(t,e,i){if(t.tag===3)L_(t,t,i);else for(;e!==null;){if(e.tag===3){L_(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){t=di(i,t),i=wg(2),r=Oa(e,i,2),r!==null&&(Dg(i,r,e,t),hr(r,2),ki(r));break}}e=e.return}}function dh(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new qy;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(ih=!0,l.add(i),t=$y.bind(null,t,e,i),e.then(t,t))}function $y(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ye===t&&(xe&i)===i&&((an===4||an===3&&(xe&62914560)===xe&&300>F()-vu)&&(Oe&2)===0?Ts(t,0):_u|=i,Ss===xe&&(Ss=0)),ki(t)}function O_(t,e){e===0&&(e=Sl()),t=mr(t,e),t!==null&&(hr(t,e),ki(t))}function tx(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),O_(t,i)}function ex(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),O_(t,i)}function nx(t,e){return ne(t,e)}var As=null,Rs=null,ph=!1,Au=!1,mh=!1,ka=0;function ki(t){t!==Rs&&t.next===null&&(Rs===null?As=Rs=t:Rs=Rs.next=t),Au=!0,ph||(ph=!0,ax())}function Ho(t,e){if(!mh&&Au){mh=!0;do for(var i=!1,r=As;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var p=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-wn(42|t)+1)-1,c&=l&~(p&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,B_(r,c))}else c=xe,c=fr(r,r===Ye?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ea(r,c)||(i=!0,B_(r,c));r=r.next}while(i);mh=!1}}function ix(){z_()}function z_(){Au=ph=!1;var t=0;ka!==0&&mx()&&(t=ka);for(var e=F(),i=null,r=As;r!==null;){var l=r.next,c=P_(r,e);c===0?(r.next=null,i===null?As=l:i.next=l,l===null&&(Rs=i)):(i=r,(t!==0||(c&3)!==0)&&(Au=!0)),r=l}tn!==0&&tn!==5||Ho(t),ka!==0&&(ka=0)}function P_(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var p=31-wn(c),E=1<<p,N=l[p];N===-1?((E&i)===0||(E&r)!==0)&&(l[p]=vc(E,e)):N<=e&&(t.expiredLanes|=E),c&=~E}if(e=Ye,i=xe,i=fr(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&jt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ea(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&jt(r),K(i)){case 2:case 8:i=Vt;break;case 32:i=xt;break;case 268435456:i=Wt;break;default:i=xt}return r=I_.bind(null,t),i=ne(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&jt(r),t.callbackPriority=2,t.callbackNode=null,2}function I_(t,e){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(bu()&&t.callbackNode!==i)return null;var r=xe;return r=fr(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(M_(t,r,e),P_(t,F()),t.callbackNode!=null&&t.callbackNode===i?I_.bind(null,t):null)}function B_(t,e){if(bu())return null;M_(t,e,!0)}function ax(){_x(function(){(Oe&6)!==0?ne(Dt,ix):z_()})}function gh(){if(ka===0){var t=xr;t===0&&(t=ur,ur<<=1,(ur&261888)===0&&(ur=256)),ka=t}return ka}function F_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ml(t)}function rx(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var c=F_((l[kt]||null).action),p=r.submitter;p&&(e=(e=p[kt]||null)?F_(e.formAction):p.getAttribute("formAction"),e!==null&&(c=e,p=null));var E=new Al("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var N=new FormData(l,p);Tf(i,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(l,p),Tf(i,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var _h=0;_h<Gc.length;_h++){var vh=Gc[_h],sx=vh.toLowerCase(),ox=vh[0].toUpperCase()+vh.slice(1);xi(sx,"on"+ox)}xi(fm,"onAnimationEnd"),xi(hm,"onAnimationIteration"),xi(dm,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(gy,"onTransitionRun"),xi(_y,"onTransitionStart"),xi(vy,"onTransitionCancel"),xi(pm,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function H_(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var p=r.length-1;0<=p;p--){var E=r[p],N=E.instance,W=E.currentTarget;if(E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(nt){wl(nt)}l.currentTarget=null,c=N}else for(p=0;p<r.length;p++){if(E=r[p],N=E.instance,W=E.currentTarget,E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(nt){wl(nt)}l.currentTarget=null,c=N}}}}function Se(t,e){var i=e[$t];i===void 0&&(i=e[$t]=new Set);var r=t+"__bubble";i.has(r)||(G_(e,t,2,!1),i.add(r))}function Sh(t,e,i){var r=0;e&&(r|=4),G_(i,t,r,e)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function yh(t){if(!t[Ru]){t[Ru]=!0,Ze.forEach(function(i){i!=="selectionchange"&&(lx.has(i)||Sh(i,!1,t),Sh(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ru]||(e[Ru]=!0,Sh("selectionchange",!1,e))}}function G_(t,e,i,r){switch(D0(e)){case 2:var l=tM;break;case 8:l=eM;break;default:l=Hh}i=l.bind(null,e,i,t),l=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function xh(t,e,i,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var E=r.stateNode.containerInfo;if(E===l)break;if(p===4)for(p=r.return;p!==null;){var N=p.tag;if((N===3||N===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;E!==null;){if(p=Le(E),p===null)return;if(N=p.tag,N===5||N===6||N===26||N===27){r=c=p;continue t}E=E.parentNode}}r=r.return}Gp(function(){var W=c,nt=bc(i),mt=[];t:{var X=mm.get(t);if(X!==void 0){var $=Al,Ut=t;switch(t){case"keypress":if(Tl(i)===0)break t;case"keydown":case"keyup":$=YS;break;case"focusin":Ut="focus",$=Uc;break;case"focusout":Ut="blur",$=Uc;break;case"beforeblur":case"afterblur":$=Uc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=OS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=QS;break;case fm:case hm:case dm:$=IS;break;case pm:$=$S;break;case"scroll":case"scrollend":$=NS;break;case"wheel":$=ey;break;case"copy":case"cut":case"paste":$=FS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Yp;break;case"submit":$=jS;break;case"toggle":case"beforetoggle":$=iy}var qt=(e&4)!==0,he=!qt&&(t==="scroll"||t==="scrollend"),Y=qt?X!==null?X+"Capture":null:X;qt=[];for(var B=W,Q;B!==null;){var dt=B;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||Y===null||(dt=lo(B,Y),dt!=null&&qt.push(Vo(B,dt,Q))),he)break;B=B.return}0<qt.length&&(X=new $(X,Ut,null,i,nt),mt.push({event:X,listeners:qt}))}}if((e&7)===0){t:{if($=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",$&&i!==Tc&&(Ut=i.relatedTarget||i.fromElement)&&(Le(Ut)||Ut[ee]))break t;(X||$)&&(Ut=nt.window===nt?nt:($=nt.ownerDocument)?$.defaultView||$.parentWindow:window,X?($=i.relatedTarget||i.toElement,X=W,$=$?Le($):null,$!==null&&(he=f($),qt=$.tag,$!==he||qt!==5&&qt!==27&&qt!==6)&&($=null)):(X=null,$=W),X!==$&&(qt=kp,dt="onMouseLeave",Y="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(qt=Yp,dt="onPointerLeave",Y="onPointerEnter",B="pointer"),he=X==null?Ut:pn(X),Q=$==null?Ut:pn($),Ut=new qt(dt,B+"leave",X,i,nt),Ut.target=he,Ut.relatedTarget=Q,dt=null,Le(nt)===W&&(qt=new qt(Y,B+"enter",$,i,nt),qt.target=Q,qt.relatedTarget=he,dt=qt),he=dt,qt=X&&$?G(X,$,ux):null,X!==null&&V_(mt,Ut,X,qt,!1),$!==null&&he!==null&&V_(mt,he,$,qt,!0)))}t:{if(X=W?pn(W):window,$=X.nodeName&&X.nodeName.toLowerCase(),$==="select"||$==="input"&&X.type==="file")var Ht=tm;else if(Jp(X))if(em)Ht=dy;else{Ht=fy;var Me=cy}else $=X.nodeName,!$||$.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Ec(W.elementType)&&(Ht=tm):Ht=hy;if(Ht&&(Ht=Ht(t,W))){$p(mt,Ht,i,nt);break t}Me&&Me(t,X,W)}switch(Me=W?pn(W):window,t){case"focusin":(Jp(Me)||Me.contentEditable==="true")&&(es=Me,Bc=W,_o=null);break;case"focusout":_o=Bc=es=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,um(mt,i,nt);break;case"selectionchange":if(my)break;case"keydown":case"keyup":um(mt,i,nt)}var Jt;if(Lc)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ts?Kp(t,i)&&(ae="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(ae="onCompositionStart");ae&&(Wp&&i.locale!=="ko"&&(ts||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ts&&(Jt=Vp()):(ba=nt,Cc="value"in ba?ba.value:ba.textContent,ts=!0)),Me=Cu(W,ae),0<Me.length&&(ae=new qp(ae,t,null,i,nt),mt.push({event:ae,listeners:Me}),Jt?ae.data=Jt:(Jt=Qp(i),Jt!==null&&(ae.data=Jt)))),(Jt=ry?sy(t,i):oy(t,i))&&(ae=Cu(W,"onBeforeInput"),0<ae.length&&(Me=new qp("onBeforeInput","beforeinput",null,i,nt),mt.push({event:Me,listeners:ae}),Me.data=Jt)),rx(mt,t,W,i,nt)}H_(mt,e)})}function Vo(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Cu(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=lo(t,i),l!=null&&r.unshift(Vo(t,l,c)),l=lo(t,e),l!=null&&r.push(Vo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function ux(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function V_(t,e,i,r,l){for(var c=e._reactName,p=[];i!==null&&i!==r;){var E=i,N=E.alternate,W=E.stateNode;if(E=E.tag,N!==null&&N===r)break;E!==5&&E!==26&&E!==27||W===null||(N=W,l?(W=lo(i,c),W!=null&&p.unshift(Vo(i,W,N))):l||(W=lo(i,c),W!=null&&p.push(Vo(i,W,N)))),i=i.return}p.length!==0&&t.push({event:e,listeners:p})}var cx=/\r\n?/g,fx=/\u0000|\uFFFD/g;function X_(t){return(typeof t=="string"?t:""+t).replace(cx,`
`).replace(fx,"")}function k_(t,e){return e=X_(e),X_(t)===e}function Fe(t,e,i,r,l,c){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Qr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Qr(t,""+r);else return;break;case"className":xl(t,"class",r);break;case"tabIndex":xl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":xl(t,i,r);break;case"style":Fp(t,r,c);return;case"data":if(e!=="object"){xl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Ml(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Fe(t,e,"name",l.name,l,null),Fe(t,e,"formEncType",l.formEncType,l,null),Fe(t,e,"formMethod",l.formMethod,l,null),Fe(t,e,"formTarget",l.formTarget,l,null)):(Fe(t,e,"encType",l.encType,l,null),Fe(t,e,"method",l.method,l,null),Fe(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Ml(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Oi);return;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Ml(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":Se("beforetoggle",t),Se("toggle",t),yl(t,"popover",r);break;case"xlinkActuate":ta(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ta(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ta(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ta(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ta(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ta(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ta(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ta(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ta(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":yl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=DS.get(i)||i,yl(t,i,r);else return}we=!0}function Mh(t,e,i,r,l,c){switch(i){case"style":Fp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Qr(t,r);else if(typeof r=="number"||typeof r=="bigint")Qr(t,""+r);else return;break;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Oi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zn.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),e=t[kt]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(c,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}we=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):yl(t,i,r)}return}we=!0}function Rn(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var p=i[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Fe(t,e,c,p,i,null)}}l&&Fe(t,e,"srcSet",i.srcSet,i,null),r&&Fe(t,e,"src",i.src,i,null);return;case"input":Se("invalid",t);var E=c=p=l=null,N=null,W=null;for(r in i)if(i.hasOwnProperty(r)){var nt=i[r];if(nt!=null)switch(r){case"name":l=nt;break;case"type":p=nt;break;case"checked":N=nt;break;case"defaultChecked":W=nt;break;case"value":c=nt;break;case"defaultValue":E=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,e));break;default:Fe(t,e,r,nt,i,null)}}zp(t,c,E,N,W,p,l,!1);return;case"select":Se("invalid",t),r=p=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":p=E;break;case"multiple":r=E;default:Fe(t,e,l,E,i,null)}e=c,i=p,t.multiple=!!r,e!=null?Kr(t,!!r,e,!1):i!=null&&Kr(t,!!r,i,!0);return;case"textarea":Se("invalid",t),c=l=r=null;for(p in i)if(i.hasOwnProperty(p)&&(E=i[p],E!=null))switch(p){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Fe(t,e,p,E,i,null)}Ip(t,r,l,c);return;case"option":for(N in i)i.hasOwnProperty(N)&&(r=i[N],r!=null)&&(N==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Fe(t,e,N,r,i,null));return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(r=0;r<Go.length;r++)Se(Go[r],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in i)if(i.hasOwnProperty(W)&&(r=i[W],r!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Fe(t,e,W,r,i,null)}return;default:if(Ec(e)){for(nt in i)i.hasOwnProperty(nt)&&(r=i[nt],r!==void 0&&Mh(t,e,nt,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Fe(t,e,E,r,i,null))}var hx={};function dx(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,E=null,N=null,W=null,nt=null;for($ in i){var mt=i[$];if(i.hasOwnProperty($)&&mt!=null)switch($){case"checked":break;case"value":break;case"defaultValue":N=mt;default:r.hasOwnProperty($)||Fe(t,e,$,null,r,mt)}}for(var X in r){var $=r[X];if(mt=i[X],r.hasOwnProperty(X)&&($!=null||mt!=null))switch(X){case"type":$!==mt&&(we=!0),c=$;break;case"name":$!==mt&&(we=!0),l=$;break;case"checked":$!==mt&&(we=!0),W=$;break;case"defaultChecked":$!==mt&&(we=!0),nt=$;break;case"value":$!==mt&&(we=!0),p=$;break;case"defaultValue":$!==mt&&(we=!0),E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,e));break;default:$!==mt&&Fe(t,e,X,$,r,mt)}}xc(t,p,E,N,W,nt,c,l);return;case"select":$=p=E=X=null;for(c in i)if(N=i[c],i.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":$=N;default:r.hasOwnProperty(c)||Fe(t,e,c,null,r,N)}for(l in r)if(c=r[l],N=i[l],r.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":c!==N&&(we=!0),X=c;break;case"defaultValue":c!==N&&(we=!0),E=c;break;case"multiple":c!==N&&(we=!0),p=c;default:c!==N&&Fe(t,e,l,c,r,N)}e=E,i=p,r=$,X!=null?Kr(t,!!i,X,!1):!!r!=!!i&&(e!=null?Kr(t,!!i,e,!0):Kr(t,!!i,i?[]:"",!1));return;case"textarea":$=X=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Fe(t,e,E,null,r,l)}for(p in r)if(l=r[p],c=i[p],r.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":l!==c&&(we=!0),X=l;break;case"defaultValue":l!==c&&(we=!0),$=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Fe(t,e,p,l,r,c)}Pp(t,X,$);return;case"option":for(var Ut in i)X=i[Ut],i.hasOwnProperty(Ut)&&X!=null&&!r.hasOwnProperty(Ut)&&(Ut==="selected"?t.selected=!1:Fe(t,e,Ut,null,r,X));for(N in r)X=r[N],$=i[N],r.hasOwnProperty(N)&&X!==$&&(X!=null||$!=null)&&(N==="selected"?(X!==$&&(we=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol"):Fe(t,e,N,X,r,$));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in i)X=i[qt],i.hasOwnProperty(qt)&&X!=null&&!r.hasOwnProperty(qt)&&Fe(t,e,qt,null,r,X);for(W in r)if(X=r[W],$=i[W],r.hasOwnProperty(W)&&X!==$&&(X!=null||$!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,e));break;default:Fe(t,e,W,X,r,$)}return;default:if(Ec(e)){for(var he in i)X=i[he],i.hasOwnProperty(he)&&X!==void 0&&!r.hasOwnProperty(he)&&Mh(t,e,he,void 0,r,X);for(nt in r)X=r[nt],$=i[nt],!r.hasOwnProperty(nt)||X===$||X===void 0&&$===void 0||Mh(t,e,nt,X,r,$);return}}for(var Y in i)X=i[Y],i.hasOwnProperty(Y)&&X!=null&&!r.hasOwnProperty(Y)&&Fe(t,e,Y,null,r,X);for(mt in r)X=r[mt],$=i[mt],!r.hasOwnProperty(mt)||X===$||X==null&&$==null||Fe(t,e,mt,X,r,$)}function q_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function px(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,p=l.initiatorType,E=l.duration;if(c&&E&&q_(p)){for(p=0,E=l.responseEnd,r+=1;r<i.length;r++){var N=i[r],W=N.startTime;if(W>E)break;var nt=N.transferSize,mt=N.initiatorType;nt&&q_(mt)&&(N=N.responseEnd,p+=nt*(N<E?1:(E-W)/(N-W)))}if(--r,e+=8*(c+p)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eh=null,Th=null;function Xo(t){return t.nodeType===9?t:t.ownerDocument}function Y_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function W_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Z_(t,e,i,r){return i=Xo(i).createElement(t),i[wt]=r,i[kt]=e,Rn(i,t,e),Ce(i),i}function bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=null;function mx(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var Rh=typeof setTimeout=="function"?setTimeout:void 0,gx=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,K_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Rh,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(t){return j_.resolve(null).then(t).catch(vx)}:Rh;function vx(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function Q_(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Os(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")zh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,zh(i);for(var c=i.firstChild;c;){var p=c.nextSibling,E=c.nodeName;c[Ne]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=p}}else i==="body"&&zh(t.ownerDocument.body);i=l}while(i);Os(e)}function J_(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function $_(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var c=e[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function t0(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Sx(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Ch(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return Sx(e,i,t)}function yx(t){return t.documentElement.clientHeight}function xx(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Mx(t,e,i,r,l,c,p,E,N){var W=e.nodeType===9?e:e.ownerDocument;try{var nt=W.startViewTransition({update:function(){var X=W.defaultView,$=X.navigation&&X.navigation.transition,Ut=W.fonts.status;r();var qt=[];if(Ut==="loaded"&&(yx(W),W.fonts.status==="loading"&&qt.push(W.fonts.ready)),Ut=qt.length,t!==null)for(var he=t.suspenseyImages,Y=0,B=0;B<he.length;B++){var Q=he[B];if(!Q.complete){var dt=Q.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<X.innerHeight&&dt.left<X.innerWidth){if(Y+=x0(Q),Y>Uu){qt.length=Ut;break}Q=new Promise(xx.bind(Q)),qt.push(Q)}}}if(0<qt.length)return X=Promise.race([Promise.all(qt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(l,l),($?Promise.allSettled([$.finished,X]):X).then(c,c);if(l(),$)return $.finished.then(c,c);c()},types:i});W.__reactViewTransition=nt;var mt=[];return nt.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),$=0;$<X.length;$++){var Ut=X[$],qt=Ut.effect,he=qt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){mt.push(Ut),Ut=qt.getKeyframes();for(var Y=he=void 0,B=!0,Q=0;Q<Ut.length;Q++){var dt=Ut[Q],Ht=dt.width;if(he===void 0)he=Ht;else if(he!==Ht){B=!1;break}if(Ht=dt.height,Y===void 0)Y=Ht;else if(Y!==Ht){B=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}B&&he!==void 0&&Y!==void 0&&(qt.setKeyframes(Ut),B=getComputedStyle(qt.target,qt.pseudoElement),B.width!==he||B.height!==Y)&&(B=Ut[0],B.width=he,B.height=Y,B=Ut[Ut.length-1],B.width=he,B.height=Y,qt.setKeyframes(Ut))}}p()},function(X){W.__reactViewTransition===nt&&(W.__reactViewTransition=null);try{typeof X=="object"&&X!==null&&X.name==="InvalidStateError"&&(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null),X!==null&&N(X)}finally{r(),l(),p()}}),nt.finished.finally(function(){for(var X=0;X<mt.length;X++)mt[X].cancel();W.__reactViewTransition===nt&&(W.__reactViewTransition=null),E()}),nt}catch{return r(),l(),p(),null}}function Nr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Nr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:O({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},Nr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===e&&r.push(i[l])}return r},Nr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function e0(t){return{name:t,group:new Nr("group",t),imagePair:new Nr("image-pair",t),old:new Nr("old",t),new:new Nr("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(i0(c,t,e,i)===-1){var p=this,E=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(N){p.removeEventListener(t,e,i),typeof e=="function"?e.call(this,N):e.handleEvent(N)}),r!==null&&(l=p.removeEventListener.bind(p,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Cs(i),c.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,Ex,t,E,r)}this._eventListeners=c}};function Ex(t,e,i,r){return x(t).addEventListener(e,i,r),!1}ri.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=i0(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var c=l.cleanup;l=Cs(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Tx,t,i,l),r.splice(e,1),c!==null&&c()}};function Tx(t,e,i,r){return x(t).removeEventListener(e,i,r),!1}function Cs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function n0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function i0(t,e,i,r){if(t.length===0)return-1;r=n0(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===e&&c.listener===i&&n0(c.optionsOrUseCapture)===r)return l}return-1}ri.prototype.dispatchEvent=function(t){var e=y(this._fragmentFiber);if(e===null)return!0;e=x(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Cs(c.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Cs(c.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ri.prototype.focus=function(t){m(this._fragmentFiber.child,!0,a0,t,void 0,void 0)};function a0(t,e){return t.tag===6?!1:(t=x(t),Px(t,e))}ri.prototype.focusLast=function(t){var e=[];m(this._fragmentFiber.child,!0,wh,e,void 0,void 0);for(var i=e.length-1;0<=i&&!a0(e[i],t);i--);};function wh(t,e){return e.push(t),!1}ri.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=x(t),t=Xo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,bx,t,void 0,void 0))};function bx(t,e){return t.tag===6?!1:(t=x(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,Ax,t,void 0,void 0)};function Ax(t,e){return t.tag===6||(t=x(t),e.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),m(this._fragmentFiber.child,!1,Rx,t,void 0,void 0);for(var i=e=0;i<Ai.length;i++){var r=Ai[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ai[e++]=r}Ai.length=e}};function Rx(t,e){return t.tag===6||(t=x(t),e.unobserve(t)),!1}var Ai=[],Dh=!1;function Cx(t,e,i){Ai.push({fragmentInstance:t,observer:e,instance:i}),Dh||(Dh=!0,Ix(function(){Dh=!1;var r=Ai;Ai=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,wx,t,void 0,void 0),t};function wx(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=x(t),e.push.apply(e,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var e=y(this._fragmentFiber);return e===null?this:x(e).getRootNode(t)},ri.prototype.compareDocumentPosition=function(t){var e=y(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,wh,i,void 0,void 0);var r=x(e);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=A(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=x(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=x(i[0]),l=x(i[i.length-1]);var c=M(this._fragmentFiber)?e.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=e.compareDocumentPosition(t),E=l.compareDocumentPosition(t),N=p&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&p&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||c&&l===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Dx(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Dx(t,e,i,r,l){var c=Le(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===e||c.alternate===e)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=e,e=y(e);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==e&&c.alternate!==e)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!c)&&!(e=c===i)&&(e=G(i,c,V),e===null?e=!1:(m(e,!0,z,c,i),c=S,S=null,e=c!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!c)&&!(e=c===r)&&(e=G(r,c,V),e===null?e=!1:(m(e,!0,D,c,r),c=S,I=S=null,e=c!==null)),e):!1}function r0(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];m(this._fragmentFiber.child,!1,wh,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=A(this._fragmentFiber);if(r=i?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=x(r),r0(t,i);return}if(r=x(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=x(l),r0(l,i)):x(l).scrollIntoView(t),r+=i?-1:1}};function Ux(t,e){return t=x(t),s0(t,e),!1}function s0(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function o0(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){for(var p=0,E=0;E<Ai.length;E++){var N=Ai[E];(N.fragmentInstance!==e||N.observer!==c||N.instance!==t)&&(Ai[p++]=N)}Ai.length=p,c.observe(t)}),s0(t,e))}function Nx(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?Cx(e,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Uh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Uh(i),te(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Lx(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ne])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Ox(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=vi(t.nextSibling),t===null))return null;return t}function l0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=vi(t.nextSibling),t===null))return null;return t}function Nh(t){return t.data==="$?"||t.data==="$~"}function Lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zx(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Oh=null;function u0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return vi(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function c0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function Px(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function Ix(t){K_(function(){K_(function(e){return t(e)})})}function f0(t,e,i){switch(e=Xo(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function h0(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Fe(t,e,r,null,hx,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Oi&&(t.onclick=null),te(t)}function zh(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);te(t)}var Si=new Map,d0=new Set;function ko(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var da=Yt.d;Yt.d={f:Bx,r:Fx,D:Hx,C:Gx,L:Vx,m:Xx,X:qx,S:kx,M:Yx};function Bx(){var t=da.f(),e=Mu();return t||e}function Fx(t){var e=me(t);e!==null&&e.tag===5&&e.type==="form"?mg(e):da.r(t)}var ws=typeof document>"u"?null:document;function p0(t,e,i){var r=ws;if(r&&typeof e=="string"&&e){var l=fi(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),d0.has(l)||(d0.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Rn(e,"link",t),Ce(e),r.head.appendChild(e)))}}function Hx(t){da.D(t),p0("dns-prefetch",t,null)}function Gx(t,e){da.C(t,e),p0("preconnect",t,e)}function Vx(t,e,i){da.L(t,e,i);var r=ws;if(r&&t&&e){var l='link[rel="preload"][as="'+fi(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+fi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+fi(i.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var c=l;switch(e){case"style":c=Ds(t);break;case"script":c=Us(t)}if(!(Si.has(c)||(t=O({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),Si.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(qo(c))||e==="script"&&r.querySelector(Yo(c))))){var p=r.createElement("link");Rn(p,"link",t),e==="style"&&(p[Re]=!0,p.onload=p.onerror=function(){Ta(p)}),Ce(p),r.head.appendChild(p)}}}function Xx(t,e){da.m(t,e);var i=ws;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+fi(r)+'"][href="'+fi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Us(t)}if(!Si.has(c)&&(t=O({rel:"modulepreload",href:t},e),Si.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Yo(c)))return}r=i.createElement("link"),Rn(r,"link",t),Ce(r),i.head.appendChild(r)}}}function kx(t,e,i){da.S(t,e,i);var r=ws;if(r&&t){var l=Qn(r).hoistableStyles,c=Ds(t);e=e||"default";var p=l.get(c);if(!p){var E={loading:0,preload:null};if(p=r.querySelector(qo(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},i),(i=Si.get(c))&&Ph(t,i);var N=p=r.createElement("link");Ce(N),Rn(N,"link",t),N._p=new Promise(function(W,nt){N.onload=W,N.onerror=nt}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,wu(p,e,r)}p={type:"stylesheet",instance:p,count:1,state:E},l.set(c,p)}}}function qx(t,e){da.X(t,e);var i=ws;if(i&&t){var r=Qn(i).hoistableScripts,l=Us(t),c=r.get(l);c||(c=i.querySelector(Yo(l)),c||(t=O({src:t,async:!0},e),(e=Si.get(l))&&Ih(t,e),c=i.createElement("script"),Ce(c),Rn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Yx(t,e){da.M(t,e);var i=ws;if(i&&t){var r=Qn(i).hoistableScripts,l=Us(t),c=r.get(l);c||(c=i.querySelector(Yo(l)),c||(t=O({src:t,async:!0,type:"module"},e),(e=Si.get(l))&&Ih(t,e),c=i.createElement("script"),Ce(c),Rn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function m0(t,e,i,r){var l=(l=qe.current)?ko(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ds(i.href),e=Qn(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ds(i.href);var c=Qn(l).hoistableStyles,p=c.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,p),(c=l.querySelector(qo(t)))?c._p||(p.instance=c,p.state.loading=5):(c=Si.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Si.set(t,c)),Wx(l,t,c,p.state))),e&&r===null)throw Error(s(528,""));return p}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=Us(i),e=Qn(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ds(t){return'href="'+fi(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function g0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function Wx(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Re]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[Re]=!0,e.onload=e.onerror=Ta.bind(null,e),Rn(e,"link",i),Ce(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Us(t){return'[src="'+fi(t)+'"]'}function Yo(t){return"script[async]"+t}function _0(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+fi(i.href)+'"]');if(r)return e.instance=r,Ce(r),r;var l=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ce(r),Rn(r,"style",l),wu(r,i.precedence,t),e.instance=r;case"stylesheet":l=Ds(i.href);var c=t.querySelector(qo(l));if(c)return e.state.loading|=4,e.instance=c,Ce(c),c;r=g0(i),(l=Si.get(l))&&Ph(r,l),c=(t.ownerDocument||t).createElement("link"),Ce(c);var p=c;return p._p=new Promise(function(E,N){p.onload=E,p.onerror=N}),Rn(c,"link",r),e.state.loading|=4,wu(c,i.precedence,t),e.instance=c;case"script":return c=Us(i.src),(l=t.querySelector(Yo(c)))?(e.instance=l,Ce(l),l):(r=i,(l=Si.get(c))&&(r=O({},i),Ih(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ce(l),Rn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,wu(r,i.precedence,t));return e.instance}function wu(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,p=0;p<r.length;p++){var E=r[p];if(E.dataset.precedence===e)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Ph(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ih(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Du=null;function v0(t,e,i){if(Du===null){var r=new Map,l=Du=new Map;l.set(i,r)}else l=Du,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Ne]||c[wt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(e)||"";p=t+p;var E=r.get(p);E?E.push(c):r.set(p,[c])}}return r}function Bh(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function Zx(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function S0(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function x0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function M0(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=x0(e),t.suspenseyImages.push(e)),t=Qx.bind(t),e.decode().then(t,t))}function jx(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ds(r.href),c=e.querySelector(qo(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Wo.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,Ce(c);return}c=e.ownerDocument||e,r=g0(r),(l=Si.get(l))&&Ph(r,l),c=c.createElement("link"),Ce(c);var p=c;p._p=new Promise(function(E,N){p.onload=E,p.onerror=N}),Rn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Wo.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Uu=0;function Kx(t,e){return t.stylesheets&&t.count===0&&Lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Lu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Uu===0&&(Uu=62500*px());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Lu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Uu?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function E0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Lu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Wo(){this.count--,E0(this)}function Qx(){this.imgCount--,E0(this)}var Nu=null;function Lu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nu=new Map,e.forEach(Jx,t),Nu=null,Wo.call(t))}function Jx(t,e){if(!(e.state.loading&4)){var i=Nu.get(t);if(i)var r=i.get(null);else{i=new Map,Nu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(i.set(p.dataset.precedence,p),r=p)}r&&i.set(null,r)}l=e.instance,p=l.getAttribute("data-precedence"),c=i.get(p)||r,c===r&&i.set(null,l),i.set(p,l),this.count++,r=Wo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ns={$$typeof:lt,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function $x(t,e,i,r,l,c,p,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oo(0),this.hiddenUpdates=oo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function T0(t,e,i,r,l,c,p,E,N,W,nt,mt){return t=new $x(t,e,i,p,N,W,nt,mt,E),e=1,c===!0&&(e|=24),c=Gn(3,null,null,e),t.current=c,c.stateNode=t,e=Jc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},nf(c),t}function b0(t){return t?(t=as,t):as}function A0(t,e,i,r,l,c){l=b0(l),r.context===null?r.context=l:r.pendingContext=l,r=La(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Oa(t,r,e),i!==null&&(qn(i,t,e),To(i,t,e))}function R0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Fh(t,e){R0(t,e),(t=t.alternate)&&R0(t,e)}function C0(t){if(t.tag===13||t.tag===31){var e=mr(t,67108864);e!==null&&qn(e,t,67108864),Fh(t,67108864)}}function w0(t){if(t.tag===13||t.tag===31){var e=ai();e=ot(e);var i=mr(t,e);i!==null&&qn(i,t,e),Fh(t,e)}}var Ls=!0;function tM(t,e,i,r){var l=Et.T;Et.T=null;var c=Yt.p;try{Yt.p=2,Hh(t,e,i,r)}finally{Yt.p=c,Et.T=l}}function eM(t,e,i,r){var l=Et.T;Et.T=null;var c=Yt.p;try{Yt.p=8,Hh(t,e,i,r)}finally{Yt.p=c,Et.T=l}}function Hh(t,e,i,r){if(Ls){var l=Gh(r);if(l===null)xh(t,e,r,Ou,i),U0(t,r);else if(iM(l,t,e,i,r))r.stopPropagation();else if(U0(t,r),e&4&&-1<nM.indexOf(t)){for(;l!==null;){var c=me(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=ci(c.pendingLanes);if(p!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;p;){var N=1<<31-wn(p);E.entanglements[1]|=N,p&=~N}ki(c),(Oe&6)===0&&(Su=F()+500,Ho(0))}}break;case 31:case 13:E=mr(c,2),E!==null&&qn(E,c,2),Mu(),Fh(c,2)}if(c=Gh(r),c===null&&xh(t,e,r,Ou,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else xh(t,e,r,null,i)}}function Gh(t){return t=bc(t),Vh(t)}var Ou=null;function Vh(t){if(Ou=null,t=Le(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=h(e),t!==null)return t;t=null}else if(i===31){if(t=d(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ou=t,null}function D0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Dt:return 2;case Vt:return 8;case xt:case _t:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var Xh=!1,Ya=null,Wa=null,Za=null,Zo=new Map,jo=new Map,ja=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U0(t,e){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function Ko(t,e,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=me(e),e!==null&&C0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function iM(t,e,i,r,l){switch(e){case"focusin":return Ya=Ko(Ya,t,e,i,r,l),!0;case"dragenter":return Wa=Ko(Wa,t,e,i,r,l),!0;case"mouseover":return Za=Ko(Za,t,e,i,r,l),!0;case"pointerover":var c=l.pointerId;return Zo.set(c,Ko(Zo.get(c)||null,t,e,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,jo.set(c,Ko(jo.get(c)||null,t,e,i,r,l)),!0}return!1}function N0(t){var e=Le(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=h(i),e!==null){t.blockedOn=e,Pt(t.priority,function(){w0(i)});return}}else if(e===31){if(e=d(i),e!==null){t.blockedOn=e,Pt(t.priority,function(){w0(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Gh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Tc=r,i.target.dispatchEvent(r),Tc=null}else return e=me(i),e!==null&&C0(e),t.blockedOn=i,!1;e.shift()}return!0}function L0(t,e,i){zu(t)&&i.delete(e)}function aM(){Xh=!1,Ya!==null&&zu(Ya)&&(Ya=null),Wa!==null&&zu(Wa)&&(Wa=null),Za!==null&&zu(Za)&&(Za=null),Zo.forEach(L0),jo.forEach(L0)}function Pu(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,aM)))}var Iu=null;function O0(t){Iu!==t&&(Iu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Iu===t&&(Iu=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Vh(r||i)===null)continue;break}var c=me(i);c!==null&&(t.splice(e,3),e-=3,Tf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Os(t){function e(N){return Pu(N,t)}Ya!==null&&Pu(Ya,t),Wa!==null&&Pu(Wa,t),Za!==null&&Pu(Za,t),Zo.forEach(e),jo.forEach(e);for(var i=0;i<ja.length;i++){var r=ja[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ja.length&&(i=ja[0],i.blockedOn===null);)N0(i),i.blockedOn===null&&ja.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],p=l[kt]||null;if(typeof c=="function")p||O0(i);else if(p){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[kt]||null)E=p.formAction;else if(Vh(l)!==null)continue}else E=p.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),O0(i)}}}function z0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function kh(t){this._internalRoot=t}Bu.prototype.render=kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ai();A0(i,r,t,e,null,null)},Bu.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;A0(t.current,2,null,t,null,null),Mu(),e[ee]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tt();t={blockedOn:null,target:t,priority:e};for(var i=0;i<ja.length&&e!==0&&e<ja[i].priority;i++);ja.splice(i,0,t),i===0&&N0(t)}};var P0=n.version;if(P0!=="19.3.0")throw Error(s(527,P0,"19.3.0"));Yt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var rM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{ye=Fu.inject(rM),$e=Fu}catch{}}return Qo.createRoot=function(t,e){if(!u(t))throw Error(s(299));var i=!1,r="",l=bg,c=Ag,p=Rg;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError)),e=T0(t,1,!1,null,null,i,r,null,l,c,p,z0),t[ee]=e.current,yh(t),new kh(e)},Qo.hydrateRoot=function(t,e,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=bg,p=Ag,E=Rg,N=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(N=i.formState)),e=T0(t,1,!0,e,i??null,r,l,N,c,p,E,z0),e.context=b0(null),i=e.current,r=ai(),r=ot(r),l=La(r),l.callback=null,Oa(i,l,r),i=r,e.current.lanes=i,hr(e,i),ki(e),t[ee]=e.current,yh(t),new Bu(e)},Qo.version="19.3.0",Qo}var k0;function pM(){if(k0)return Yh.exports;k0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Yh.exports=dM(),Yh.exports}var mM=pM();const gM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wv=(...o)=>o.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();var _M={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const vM=On.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},_)=>On.createElement("svg",{ref:_,..._M,width:n,height:n,stroke:o,strokeWidth:s?Number(a)*24/Number(n):a,className:Wv("lucide",u),...d},[...h.map(([g,v])=>On.createElement(g,v)),...Array.isArray(f)?f:[f]]));const Kn=(o,n)=>{const a=On.forwardRef(({className:s,...u},f)=>On.createElement(vM,{ref:f,iconNode:n,className:Wv(`lucide-${gM(o)}`,s),...u}));return a.displayName=`${o}`,a};const SM=Kn("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);const Hu=Kn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const yM=Kn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const xM=Kn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const MM=Kn("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);const EM=Kn("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);const q0=Kn("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);const TM=Kn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const Y0=Kn("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);const bM=Kn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const AM=Kn("Popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);const RM=Kn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const CM=Kn("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);const wM=Kn("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);const yp="180",DM=0,W0=1,UM=2,Zv=1,jv=2,Sa=3,or=0,Wn=1,ya=2,rr=0,Qs=1,Z0=2,j0=3,K0=4,NM=5,Gr=100,LM=101,OM=102,zM=103,PM=104,IM=200,BM=201,FM=202,HM=203,Dd=204,Ud=205,GM=206,VM=207,XM=208,kM=209,qM=210,YM=211,WM=212,ZM=213,jM=214,Nd=0,Ld=1,Od=2,$s=3,zd=4,Pd=5,Id=6,Bd=7,Kv=0,KM=1,QM=2,sr=0,JM=1,$M=2,tE=3,Qv=4,eE=5,nE=6,iE=7,Jv=300,to=301,eo=302,Fd=303,Hd=304,gc=306,Gd=1e3,Xr=1001,Vd=1002,Ni=1003,aE=1004,Gu=1005,Wi=1006,Kh=1007,kr=1008,Ki=1009,$v=1010,tS=1011,ol=1012,xp=1013,Yr=1014,xa=1015,hl=1016,Mp=1017,Ep=1018,ll=1020,eS=35902,nS=35899,iS=1021,aS=1022,Ui=1023,ul=1026,cl=1027,rS=1028,Tp=1029,sS=1030,bp=1031,Ap=1033,lc=33776,uc=33777,cc=33778,fc=33779,Xd=35840,kd=35841,qd=35842,Yd=35843,Wd=36196,Zd=37492,jd=37496,Kd=37808,Qd=37809,Jd=37810,$d=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,rp=37817,sp=37818,op=37819,lp=37820,up=37821,cp=36492,fp=36494,hp=36495,dp=36283,pp=36284,mp=36285,gp=36286,rE=3200,sE=3201,oS=0,oE=1,ir="",li="srgb",no="srgb-linear",dc="linear",Xe="srgb",zs=7680,Q0=519,lE=512,uE=513,cE=514,lS=515,fE=516,hE=517,dE=518,pE=519,J0=35044,$0="300 es",Zi=2e3,pc=2001;class ao{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const u=s[n];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,n);n.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=Math.PI/180,_p=180/Math.PI;function dl(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[n&255]+Nn[n>>8&255]+"-"+Nn[n>>16&15|64]+Nn[n>>24&255]+"-"+Nn[a&63|128]+Nn[a>>8&255]+"-"+Nn[a>>16&255]+Nn[a>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Ee(o,n,a){return Math.max(n,Math.min(a,o))}function mE(o,n){return(o%n+n)%n}function Jh(o,n,a){return(1-a)*o+a*n}function Jo(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(n=0,a=0){Ue.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,u=n.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Ee(this.x,n.x,a.x),this.y=Ee(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=Ee(this.x,n,a),this.y=Ee(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Ee(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-n.x,h=this.y-n.y;return this.x=f*s-h*u+n.x,this.y=f*u+h*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(n=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=u}static slerpFlat(n,a,s,u,f,h,d){let _=s[u+0],g=s[u+1],v=s[u+2],m=s[u+3];const y=f[h+0],M=f[h+1],A=f[h+2],w=f[h+3];if(d===0){n[a+0]=_,n[a+1]=g,n[a+2]=v,n[a+3]=m;return}if(d===1){n[a+0]=y,n[a+1]=M,n[a+2]=A,n[a+3]=w;return}if(m!==w||_!==y||g!==M||v!==A){let x=1-d;const S=_*y+g*M+v*A+m*w,I=S>=0?1:-1,z=1-S*S;if(z>Number.EPSILON){const V=Math.sqrt(z),G=Math.atan2(V,S*I);x=Math.sin(x*G)/V,d=Math.sin(d*G)/V}const D=d*I;if(_=_*x+y*D,g=g*x+M*D,v=v*x+A*D,m=m*x+w*D,x===1-d){const V=1/Math.sqrt(_*_+g*g+v*v+m*m);_*=V,g*=V,v*=V,m*=V}}n[a]=_,n[a+1]=g,n[a+2]=v,n[a+3]=m}static multiplyQuaternionsFlat(n,a,s,u,f,h){const d=s[u],_=s[u+1],g=s[u+2],v=s[u+3],m=f[h],y=f[h+1],M=f[h+2],A=f[h+3];return n[a]=d*A+v*m+_*M-g*y,n[a+1]=_*A+v*y+g*m-d*M,n[a+2]=g*A+v*M+d*y-_*m,n[a+3]=v*A-d*m-_*y-g*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,u){return this._x=n,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,u=n._y,f=n._z,h=n._order,d=Math.cos,_=Math.sin,g=d(s/2),v=d(u/2),m=d(f/2),y=_(s/2),M=_(u/2),A=_(f/2);switch(h){case"XYZ":this._x=y*v*m+g*M*A,this._y=g*M*m-y*v*A,this._z=g*v*A+y*M*m,this._w=g*v*m-y*M*A;break;case"YXZ":this._x=y*v*m+g*M*A,this._y=g*M*m-y*v*A,this._z=g*v*A-y*M*m,this._w=g*v*m+y*M*A;break;case"ZXY":this._x=y*v*m-g*M*A,this._y=g*M*m+y*v*A,this._z=g*v*A+y*M*m,this._w=g*v*m-y*M*A;break;case"ZYX":this._x=y*v*m-g*M*A,this._y=g*M*m+y*v*A,this._z=g*v*A-y*M*m,this._w=g*v*m+y*M*A;break;case"YZX":this._x=y*v*m+g*M*A,this._y=g*M*m+y*v*A,this._z=g*v*A-y*M*m,this._w=g*v*m-y*M*A;break;case"XZY":this._x=y*v*m-g*M*A,this._y=g*M*m-y*v*A,this._z=g*v*A+y*M*m,this._w=g*v*m+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,u=Math.sin(s);return this._x=n.x*u,this._y=n.y*u,this._z=n.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],_=a[9],g=a[2],v=a[6],m=a[10],y=s+d+m;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-_)*M,this._y=(f-g)*M,this._z=(h-u)*M}else if(s>d&&s>m){const M=2*Math.sqrt(1+s-d-m);this._w=(v-_)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+g)/M}else if(d>m){const M=2*Math.sqrt(1+d-s-m);this._w=(f-g)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(_+v)/M}else{const M=2*Math.sqrt(1+m-s-d);this._w=(h-u)/M,this._x=(f+g)/M,this._y=(_+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<1e-8?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Ee(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(n,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,u=n._y,f=n._z,h=n._w,d=a._x,_=a._y,g=a._z,v=a._w;return this._x=s*v+h*d+u*g-f*_,this._y=u*v+h*_+f*d-s*g,this._z=f*v+h*g+s*_-u*d,this._w=h*v-s*d-u*_-f*g,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*n._w+s*n._x+u*n._y+f*n._z;if(d<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,d=-d):this.copy(n),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const g=Math.sqrt(_),v=Math.atan2(g,d),m=Math.sin((1-a)*v)/g,y=Math.sin(a*v)/g;return this._w=h*m+this._w*y,this._x=s*m+this._x*y,this._y=u*m+this._y*y,this._z=f*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(n),u*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(n=0,a=0,s=0){et.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(tv.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(tv.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=n.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(n){const a=this.x,s=this.y,u=this.z,f=n.x,h=n.y,d=n.z,_=n.w,g=2*(h*u-d*s),v=2*(d*a-f*u),m=2*(f*s-h*a);return this.x=a+_*g+h*m-d*v,this.y=s+_*v+d*g-f*m,this.z=u+_*m+f*v-h*g,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Ee(this.x,n.x,a.x),this.y=Ee(this.y,n.y,a.y),this.z=Ee(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=Ee(this.x,n,a),this.y=Ee(this.y,n,a),this.z=Ee(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,u=n.y,f=n.z,h=a.x,d=a.y,_=a.z;return this.x=u*_-f*d,this.y=f*h-s*_,this.z=s*d-u*h,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return $h.copy(this).projectOnVector(n),this.sub($h)}reflect(n){return this.sub($h.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Ee(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,u=this.z-n.z;return a*a+s*s+u*u}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const u=Math.sin(a)*n;return this.x=u*Math.sin(s),this.y=Math.cos(a)*n,this.z=u*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),u=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $h=new et,tv=new pl;class de{constructor(n,a,s,u,f,h,d,_,g){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,_,g)}set(n,a,s,u,f,h,d,_,g){const v=this.elements;return v[0]=n,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=_,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],_=s[6],g=s[1],v=s[4],m=s[7],y=s[2],M=s[5],A=s[8],w=u[0],x=u[3],S=u[6],I=u[1],z=u[4],D=u[7],V=u[2],G=u[5],O=u[8];return f[0]=h*w+d*I+_*V,f[3]=h*x+d*z+_*G,f[6]=h*S+d*D+_*O,f[1]=g*w+v*I+m*V,f[4]=g*x+v*z+m*G,f[7]=g*S+v*D+m*O,f[2]=y*w+M*I+A*V,f[5]=y*x+M*z+A*G,f[8]=y*S+M*D+A*O,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8];return a*h*v-a*d*g-s*f*v+s*d*_+u*f*g-u*h*_}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8],m=v*h-d*g,y=d*_-v*f,M=g*f-h*_,A=a*m+s*y+u*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return n[0]=m*w,n[1]=(u*g-v*s)*w,n[2]=(d*s-u*h)*w,n[3]=y*w,n[4]=(v*a-u*_)*w,n[5]=(u*f-d*a)*w,n[6]=M*w,n[7]=(s*_-g*a)*w,n[8]=(h*a-s*f)*w,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,u,f,h,d){const _=Math.cos(f),g=Math.sin(f);return this.set(s*_,s*g,-s*(_*h+g*d)+h+n,-u*g,u*_,-u*(-g*h+_*d)+d+a,0,0,1),this}scale(n,a){return this.premultiply(td.makeScale(n,a)),this}rotate(n){return this.premultiply(td.makeRotation(-n)),this}translate(n,a){return this.premultiply(td.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const td=new de;function uS(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function mc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gE(){const o=mc("canvas");return o.style.display="block",o}const ev={};function fl(o){o in ev||(ev[o]=!0,console.warn(o))}function _E(o,n,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const nv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vE(){const o={enabled:!0,workingColorSpace:no,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(u.r=Ma(u.r),u.g=Ma(u.g),u.b=Ma(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(u.r=Js(u.r),u.g=Js(u.g),u.b=Js(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===ir?dc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[no]:{primaries:n,whitePoint:s,transfer:dc,toXYZ:nv,fromXYZ:iv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:n,whitePoint:s,transfer:Xe,toXYZ:nv,fromXYZ:iv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const De=vE();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Js(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ps;class SE{static getDataURL(n,a="image/png"){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let s;if(n instanceof HTMLCanvasElement)s=n;else{Ps===void 0&&(Ps=mc("canvas")),Ps.width=n.width,Ps.height=n.height;const u=Ps.getContext("2d");n instanceof ImageData?u.putImageData(n,0,0):u.drawImage(n,0,0,n.width,n.height),s=Ps}return s.toDataURL(a)}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=mc("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const u=s.getImageData(0,0,n.width,n.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Ma(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Ma(a[s]/255)*255):a[s]=Ma(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let yE=0;class Rp{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=dl(),this.data=n,this.dataReady=!0,this.version=0}getSize(n){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?n.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?n.set(a.displayHeight,a.displayWidth,0):a!==null?n.set(a.width,a.height,a.depth||0):n.set(0,0,0),n}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(ed(u[h].image)):f.push(ed(u[h]))}else f=ed(u);s.url=f}return a||(n.images[this.uuid]=s),s}}function ed(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?SE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;const nd=new et;class Zn extends ao{constructor(n=Zn.DEFAULT_IMAGE,a=Zn.DEFAULT_MAPPING,s=Xr,u=Xr,f=Wi,h=kr,d=Ui,_=Ki,g=Zn.DEFAULT_ANISOTROPY,v=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=dl(),this.name="",this.source=new Rp(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=_,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(n&&n.depth&&n.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nd).x}get height(){return this.source.getSize(nd).y}get depth(){return this.source.getSize(nd).z}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.isArrayTexture=n.isArrayTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}setValues(n){for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==Jv)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Gd:n.x=n.x-Math.floor(n.x);break;case Xr:n.x=n.x<0?0:1;break;case Vd:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Gd:n.y=n.y-Math.floor(n.y);break;case Xr:n.y=n.y<0?0:1;break;case Vd:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Jv;Zn.DEFAULT_ANISOTROPY=1;class ke{constructor(n=0,a=0,s=0,u=1){ke.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,u){return this.x=n,this.y=a,this.z=s,this.w=u,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=this.w,h=n.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,u,f;const _=n.elements,g=_[0],v=_[4],m=_[8],y=_[1],M=_[5],A=_[9],w=_[2],x=_[6],S=_[10];if(Math.abs(v-y)<.01&&Math.abs(m-w)<.01&&Math.abs(A-x)<.01){if(Math.abs(v+y)<.1&&Math.abs(m+w)<.1&&Math.abs(A+x)<.1&&Math.abs(g+M+S-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const z=(g+1)/2,D=(M+1)/2,V=(S+1)/2,G=(v+y)/4,O=(m+w)/4,k=(A+x)/4;return z>D&&z>V?z<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(z),u=G/s,f=O/s):D>V?D<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(D),s=G/u,f=k/u):V<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(V),s=O/f,u=k/f),this.set(s,u,f,a),this}let I=Math.sqrt((x-A)*(x-A)+(m-w)*(m-w)+(y-v)*(y-v));return Math.abs(I)<.001&&(I=1),this.x=(x-A)/I,this.y=(m-w)/I,this.z=(y-v)/I,this.w=Math.acos((g+M+S-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Ee(this.x,n.x,a.x),this.y=Ee(this.y,n.y,a.y),this.z=Ee(this.z,n.z,a.z),this.w=Ee(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=Ee(this.x,n,a),this.y=Ee(this.y,n,a),this.z=Ee(this.z,n,a),this.w=Ee(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ME extends ao{constructor(n=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=s.depth,this.scissor=new ke(0,0,n,a),this.scissorTest=!1,this.viewport=new ke(0,0,n,a);const u={width:n,height:a,depth:s.depth},f=new Zn(u);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(n={}){const a={minFilter:Wi,generateMipmaps:!1,flipY:!1,internalFormat:null};n.mapping!==void 0&&(a.mapping=n.mapping),n.wrapS!==void 0&&(a.wrapS=n.wrapS),n.wrapT!==void 0&&(a.wrapT=n.wrapT),n.wrapR!==void 0&&(a.wrapR=n.wrapR),n.magFilter!==void 0&&(a.magFilter=n.magFilter),n.minFilter!==void 0&&(a.minFilter=n.minFilter),n.format!==void 0&&(a.format=n.format),n.type!==void 0&&(a.type=n.type),n.anisotropy!==void 0&&(a.anisotropy=n.anisotropy),n.colorSpace!==void 0&&(a.colorSpace=n.colorSpace),n.flipY!==void 0&&(a.flipY=n.flipY),n.generateMipmaps!==void 0&&(a.generateMipmaps=n.generateMipmaps),n.internalFormat!==void 0&&(a.internalFormat=n.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=n,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},n.textures[a].image);this.textures[a].source=new Rp(u)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends ME{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class cS extends Zn{constructor(n=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class EE extends Zn{constructor(n=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(n=new et(1/0,1/0,1/0),a=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(Ri.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(Ri.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=Ri.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)n.isMesh===!0?n.getVertexPosition(h,Ri):Ri.fromBufferAttribute(f,h),Ri.applyMatrix4(n.matrixWorld),this.expandByPoint(Ri);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Vu.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Vu.copy(s.boundingBox)),Vu.applyMatrix4(n.matrixWorld),this.union(Vu)}const u=n.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,Ri),Ri.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter($o),Xu.subVectors(this.max,$o),Is.subVectors(n.a,$o),Bs.subVectors(n.b,$o),Fs.subVectors(n.c,$o),Qa.subVectors(Bs,Is),Ja.subVectors(Fs,Bs),Lr.subVectors(Is,Fs);let a=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Lr.z,Lr.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Lr.z,0,-Lr.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Lr.y,Lr.x,0];return!id(a,Is,Bs,Fs,Xu)||(a=[1,0,0,0,1,0,0,0,1],!id(a,Is,Bs,Fs,Xu))?!1:(ku.crossVectors(Qa,Ja),a=[ku.x,ku.y,ku.z],id(a,Is,Bs,Fs,Xu))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Ri).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(Ri).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(pa),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(n){return this.min.fromArray(n.min),this.max.fromArray(n.max),this}}const pa=[new et,new et,new et,new et,new et,new et,new et,new et],Ri=new et,Vu=new ml,Is=new et,Bs=new et,Fs=new et,Qa=new et,Ja=new et,Lr=new et,$o=new et,Xu=new et,ku=new et,Or=new et;function id(o,n,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Or.fromArray(o,f);const d=u.x*Math.abs(Or.x)+u.y*Math.abs(Or.y)+u.z*Math.abs(Or.z),_=n.dot(Or),g=a.dot(Or),v=s.dot(Or);if(Math.max(-Math.max(_,g,v),Math.min(_,g,v))>d)return!1}return!0}const TE=new ml,tl=new et,ad=new et;class Cp{constructor(n=new et,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):TE.setFromPoints(n).getCenter(s);let u=0;for(let f=0,h=n.length;f<h;f++)u=Math.max(u,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(u),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;tl.subVectors(n,this.center);const a=tl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(tl,u/s),this.radius+=u}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(ad.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(tl.copy(n.center).add(ad)),this.expandByPoint(tl.copy(n.center).sub(ad))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(n){return this.radius=n.radius,this.center.fromArray(n.center),this}}const ma=new et,rd=new et,qu=new et,$a=new et,sd=new et,Yu=new et,od=new et;class bE{constructor(n=new et,a=new et(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,ma)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=ma.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(ma.copy(this.origin).addScaledVector(this.direction,a),ma.distanceToSquared(n))}distanceSqToSegment(n,a,s,u){rd.copy(n).add(a).multiplyScalar(.5),qu.copy(a).sub(n).normalize(),$a.copy(this.origin).sub(rd);const f=n.distanceTo(a)*.5,h=-this.direction.dot(qu),d=$a.dot(this.direction),_=-$a.dot(qu),g=$a.lengthSq(),v=Math.abs(1-h*h);let m,y,M,A;if(v>0)if(m=h*_-d,y=h*d-_,A=f*v,m>=0)if(y>=-A)if(y<=A){const w=1/v;m*=w,y*=w,M=m*(m+h*y+2*d)+y*(h*m+y+2*_)+g}else y=f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*_)+g;else y=-f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*_)+g;else y<=-A?(m=Math.max(0,-(-h*f+d)),y=m>0?-f:Math.min(Math.max(-f,-_),f),M=-m*m+y*(y+2*_)+g):y<=A?(m=0,y=Math.min(Math.max(-f,-_),f),M=y*(y+2*_)+g):(m=Math.max(0,-(h*f+d)),y=m>0?f:Math.min(Math.max(-f,-_),f),M=-m*m+y*(y+2*_)+g);else y=h>0?-f:f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*_)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),u&&u.copy(rd).addScaledVector(qu,y),M}intersectSphere(n,a){ma.subVectors(n.center,this.origin);const s=ma.dot(this.direction),u=ma.dot(ma)-s*s,f=n.radius*n.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,_=s+h;return _<0?null:d<0?this.at(_,a):this.at(d,a)}intersectsSphere(n){return n.radius<0?!1:this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,u,f,h,d,_;const g=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,y=this.origin;return g>=0?(s=(n.min.x-y.x)*g,u=(n.max.x-y.x)*g):(s=(n.max.x-y.x)*g,u=(n.min.x-y.x)*g),v>=0?(f=(n.min.y-y.y)*v,h=(n.max.y-y.y)*v):(f=(n.max.y-y.y)*v,h=(n.min.y-y.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),m>=0?(d=(n.min.z-y.z)*m,_=(n.max.z-y.z)*m):(d=(n.max.z-y.z)*m,_=(n.min.z-y.z)*m),s>_||d>u)||((d>s||s!==s)&&(s=d),(_<u||u!==u)&&(u=_),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(n){return this.intersectBox(n,ma)!==null}intersectTriangle(n,a,s,u,f){sd.subVectors(a,n),Yu.subVectors(s,n),od.crossVectors(sd,Yu);let h=this.direction.dot(od),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;$a.subVectors(this.origin,n);const _=d*this.direction.dot(Yu.crossVectors($a,Yu));if(_<0)return null;const g=d*this.direction.dot(sd.cross($a));if(g<0||_+g>h)return null;const v=-d*$a.dot(od);return v<0?null:this.at(v/h,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(n,a,s,u,f,h,d,_,g,v,m,y,M,A,w,x){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,_,g,v,m,y,M,A,w,x)}set(n,a,s,u,f,h,d,_,g,v,m,y,M,A,w,x){const S=this.elements;return S[0]=n,S[4]=a,S[8]=s,S[12]=u,S[1]=f,S[5]=h,S[9]=d,S[13]=_,S[2]=g,S[6]=v,S[10]=m,S[14]=y,S[3]=M,S[7]=A,S[11]=w,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,u=1/Hs.setFromMatrixColumn(n,0).length(),f=1/Hs.setFromMatrixColumn(n,1).length(),h=1/Hs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,u=n.y,f=n.z,h=Math.cos(s),d=Math.sin(s),_=Math.cos(u),g=Math.sin(u),v=Math.cos(f),m=Math.sin(f);if(n.order==="XYZ"){const y=h*v,M=h*m,A=d*v,w=d*m;a[0]=_*v,a[4]=-_*m,a[8]=g,a[1]=M+A*g,a[5]=y-w*g,a[9]=-d*_,a[2]=w-y*g,a[6]=A+M*g,a[10]=h*_}else if(n.order==="YXZ"){const y=_*v,M=_*m,A=g*v,w=g*m;a[0]=y+w*d,a[4]=A*d-M,a[8]=h*g,a[1]=h*m,a[5]=h*v,a[9]=-d,a[2]=M*d-A,a[6]=w+y*d,a[10]=h*_}else if(n.order==="ZXY"){const y=_*v,M=_*m,A=g*v,w=g*m;a[0]=y-w*d,a[4]=-h*m,a[8]=A+M*d,a[1]=M+A*d,a[5]=h*v,a[9]=w-y*d,a[2]=-h*g,a[6]=d,a[10]=h*_}else if(n.order==="ZYX"){const y=h*v,M=h*m,A=d*v,w=d*m;a[0]=_*v,a[4]=A*g-M,a[8]=y*g+w,a[1]=_*m,a[5]=w*g+y,a[9]=M*g-A,a[2]=-g,a[6]=d*_,a[10]=h*_}else if(n.order==="YZX"){const y=h*_,M=h*g,A=d*_,w=d*g;a[0]=_*v,a[4]=w-y*m,a[8]=A*m+M,a[1]=m,a[5]=h*v,a[9]=-d*v,a[2]=-g*v,a[6]=M*m+A,a[10]=y-w*m}else if(n.order==="XZY"){const y=h*_,M=h*g,A=d*_,w=d*g;a[0]=_*v,a[4]=-m,a[8]=g*v,a[1]=y*m+w,a[5]=h*v,a[9]=M*m-A,a[2]=A*m-M,a[6]=d*v,a[10]=w*m+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(AE,n,RE)}lookAt(n,a,s){const u=this.elements;return si.subVectors(n,a),si.lengthSq()===0&&(si.z=1),si.normalize(),tr.crossVectors(s,si),tr.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),tr.crossVectors(s,si)),tr.normalize(),Wu.crossVectors(si,tr),u[0]=tr.x,u[4]=Wu.x,u[8]=si.x,u[1]=tr.y,u[5]=Wu.y,u[9]=si.y,u[2]=tr.z,u[6]=Wu.z,u[10]=si.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],_=s[8],g=s[12],v=s[1],m=s[5],y=s[9],M=s[13],A=s[2],w=s[6],x=s[10],S=s[14],I=s[3],z=s[7],D=s[11],V=s[15],G=u[0],O=u[4],k=u[8],R=u[12],C=u[1],H=u[5],at=u[9],ut=u[13],gt=u[2],lt=u[6],q=u[10],rt=u[14],j=u[3],vt=u[7],yt=u[11],Gt=u[15];return f[0]=h*G+d*C+_*gt+g*j,f[4]=h*O+d*H+_*lt+g*vt,f[8]=h*k+d*at+_*q+g*yt,f[12]=h*R+d*ut+_*rt+g*Gt,f[1]=v*G+m*C+y*gt+M*j,f[5]=v*O+m*H+y*lt+M*vt,f[9]=v*k+m*at+y*q+M*yt,f[13]=v*R+m*ut+y*rt+M*Gt,f[2]=A*G+w*C+x*gt+S*j,f[6]=A*O+w*H+x*lt+S*vt,f[10]=A*k+w*at+x*q+S*yt,f[14]=A*R+w*ut+x*rt+S*Gt,f[3]=I*G+z*C+D*gt+V*j,f[7]=I*O+z*H+D*lt+V*vt,f[11]=I*k+z*at+D*q+V*yt,f[15]=I*R+z*ut+D*rt+V*Gt,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],u=n[8],f=n[12],h=n[1],d=n[5],_=n[9],g=n[13],v=n[2],m=n[6],y=n[10],M=n[14],A=n[3],w=n[7],x=n[11],S=n[15];return A*(+f*_*m-u*g*m-f*d*y+s*g*y+u*d*M-s*_*M)+w*(+a*_*M-a*g*y+f*h*y-u*h*M+u*g*v-f*_*v)+x*(+a*g*m-a*d*M-f*h*m+s*h*M+f*d*v-s*g*v)+S*(-u*d*v-a*_*m+a*d*y+u*h*m-s*h*y+s*_*v)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const u=this.elements;return n.isVector3?(u[12]=n.x,u[13]=n.y,u[14]=n.z):(u[12]=n,u[13]=a,u[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8],m=n[9],y=n[10],M=n[11],A=n[12],w=n[13],x=n[14],S=n[15],I=m*x*g-w*y*g+w*_*M-d*x*M-m*_*S+d*y*S,z=A*y*g-v*x*g-A*_*M+h*x*M+v*_*S-h*y*S,D=v*w*g-A*m*g+A*d*M-h*w*M-v*d*S+h*m*S,V=A*m*_-v*w*_-A*d*y+h*w*y+v*d*x-h*m*x,G=a*I+s*z+u*D+f*V;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return n[0]=I*O,n[1]=(w*y*f-m*x*f-w*u*M+s*x*M+m*u*S-s*y*S)*O,n[2]=(d*x*f-w*_*f+w*u*g-s*x*g-d*u*S+s*_*S)*O,n[3]=(m*_*f-d*y*f-m*u*g+s*y*g+d*u*M-s*_*M)*O,n[4]=z*O,n[5]=(v*x*f-A*y*f+A*u*M-a*x*M-v*u*S+a*y*S)*O,n[6]=(A*_*f-h*x*f-A*u*g+a*x*g+h*u*S-a*_*S)*O,n[7]=(h*y*f-v*_*f+v*u*g-a*y*g-h*u*M+a*_*M)*O,n[8]=D*O,n[9]=(A*m*f-v*w*f-A*s*M+a*w*M+v*s*S-a*m*S)*O,n[10]=(h*w*f-A*d*f+A*s*g-a*w*g-h*s*S+a*d*S)*O,n[11]=(v*d*f-h*m*f-v*s*g+a*m*g+h*s*M-a*d*M)*O,n[12]=V*O,n[13]=(v*w*u-A*m*u+A*s*y-a*w*y-v*s*x+a*m*x)*O,n[14]=(A*d*u-h*w*u-A*s*_+a*w*_+h*s*x-a*d*x)*O,n[15]=(h*m*u-v*d*u+v*s*_-a*m*_-h*s*y+a*d*y)*O,this}scale(n){const a=this.elements,s=n.x,u=n.y,f=n.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],u=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=n.x,d=n.y,_=n.z,g=f*h,v=f*d;return this.set(g*h+s,g*d-u*_,g*_+u*d,0,g*d+u*_,v*d+s,v*_-u*h,0,g*_-u*d,v*_+u*h,f*_*_+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,u,f,h){return this.set(1,s,f,0,n,1,h,0,a,u,1,0,0,0,0,1),this}compose(n,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,_=a._w,g=f+f,v=h+h,m=d+d,y=f*g,M=f*v,A=f*m,w=h*v,x=h*m,S=d*m,I=_*g,z=_*v,D=_*m,V=s.x,G=s.y,O=s.z;return u[0]=(1-(w+S))*V,u[1]=(M+D)*V,u[2]=(A-z)*V,u[3]=0,u[4]=(M-D)*G,u[5]=(1-(y+S))*G,u[6]=(x+I)*G,u[7]=0,u[8]=(A+z)*O,u[9]=(x-I)*O,u[10]=(1-(y+w))*O,u[11]=0,u[12]=n.x,u[13]=n.y,u[14]=n.z,u[15]=1,this}decompose(n,a,s){const u=this.elements;let f=Hs.set(u[0],u[1],u[2]).length();const h=Hs.set(u[4],u[5],u[6]).length(),d=Hs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),n.x=u[12],n.y=u[13],n.z=u[14],Ci.copy(this);const g=1/f,v=1/h,m=1/d;return Ci.elements[0]*=g,Ci.elements[1]*=g,Ci.elements[2]*=g,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=m,Ci.elements[9]*=m,Ci.elements[10]*=m,a.setFromRotationMatrix(Ci),s.x=f,s.y=h,s.z=d,this}makePerspective(n,a,s,u,f,h,d=Zi,_=!1){const g=this.elements,v=2*f/(a-n),m=2*f/(s-u),y=(a+n)/(a-n),M=(s+u)/(s-u);let A,w;if(_)A=f/(h-f),w=h*f/(h-f);else if(d===Zi)A=-(h+f)/(h-f),w=-2*h*f/(h-f);else if(d===pc)A=-h/(h-f),w=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=m,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=A,g[14]=w,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(n,a,s,u,f,h,d=Zi,_=!1){const g=this.elements,v=2/(a-n),m=2/(s-u),y=-(a+n)/(a-n),M=-(s+u)/(s-u);let A,w;if(_)A=1/(h-f),w=h/(h-f);else if(d===Zi)A=-2/(h-f),w=-(h+f)/(h-f);else if(d===pc)A=-1/(h-f),w=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=0,g[12]=y,g[1]=0,g[5]=m,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=A,g[14]=w,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Hs=new et,Ci=new rn,AE=new et(0,0,0),RE=new et(1,1,1),tr=new et,Wu=new et,si=new et,av=new rn,rv=new pl;class Qi{constructor(n=0,a=0,s=0,u=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,u=this._order){return this._x=n,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const u=n.elements,f=u[0],h=u[4],d=u[8],_=u[1],g=u[5],v=u[9],m=u[2],y=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return av.makeRotationFromQuaternion(n),this.setFromRotationMatrix(av,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return rv.setFromEuler(this),this.setFromQuaternion(rv,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class fS{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let CE=0;const sv=new et,Gs=new pl,ga=new rn,Zu=new et,el=new et,wE=new et,DE=new pl,ov=new et(1,0,0),lv=new et(0,1,0),uv=new et(0,0,1),cv={type:"added"},UE={type:"removed"},Vs={type:"childadded",child:null},ld={type:"childremoved",child:null};class jn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const n=new et,a=new Qi,s=new pl,u=new et(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new rn},normalMatrix:{value:new de}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Gs.setFromAxisAngle(n,a),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(n,a){return Gs.setFromAxisAngle(n,a),this.quaternion.premultiply(Gs),this}rotateX(n){return this.rotateOnAxis(ov,n)}rotateY(n){return this.rotateOnAxis(lv,n)}rotateZ(n){return this.rotateOnAxis(uv,n)}translateOnAxis(n,a){return sv.copy(n).applyQuaternion(this.quaternion),this.position.add(sv.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(ov,n)}translateY(n){return this.translateOnAxis(lv,n)}translateZ(n){return this.translateOnAxis(uv,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Zu.copy(n):Zu.set(n,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(el,Zu,this.up):ga.lookAt(Zu,el,this.up),this.quaternion.setFromRotationMatrix(ga),u&&(ga.extractRotation(u.matrixWorld),Gs.setFromRotationMatrix(ga),this.quaternion.premultiply(Gs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(cv),Vs.child=n,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(UE),ld.child=n,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),ga.multiply(n.parent.matrixWorld)),n.applyMatrix4(ga),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(cv),Vs.child=n,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(n,a);if(h!==void 0)return h}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,n,wE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,DE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(n),u.indirectTexture=this._indirectTexture.toJSON(n),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(n)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(n.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let g=0,v=_.length;g<v;g++){const m=_[g];f(n.shapes,m)}else f(n.shapes,_)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,g=this.material.length;_<g;_++)d.push(f(n.materials,this.material[_]));u.material=d}else u.material=f(n.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(n).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];u.animations.push(f(n.animations,_))}}if(a){const d=h(n.geometries),_=h(n.materials),g=h(n.textures),v=h(n.images),m=h(n.shapes),y=h(n.skeletons),M=h(n.animations),A=h(n.nodes);d.length>0&&(s.geometries=d),_.length>0&&(s.materials=_),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=u,s;function h(d){const _=[];for(const g in d){const v=d[g];delete v.metadata,_.push(v)}return _}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const u=n.children[s];this.add(u.clone())}return this}}jn.DEFAULT_UP=new et(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new et,_a=new et,ud=new et,va=new et,Xs=new et,ks=new et,fv=new et,cd=new et,fd=new et,hd=new et,dd=new ke,pd=new ke,md=new ke;class Di{constructor(n=new et,a=new et,s=new et){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,u){u.subVectors(s,a),wi.subVectors(n,a),u.cross(wi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(n,a,s,u,f){wi.subVectors(u,a),_a.subVectors(s,a),ud.subVectors(n,a);const h=wi.dot(wi),d=wi.dot(_a),_=wi.dot(ud),g=_a.dot(_a),v=_a.dot(ud),m=h*g-d*d;if(m===0)return f.set(0,0,0),null;const y=1/m,M=(g*_-d*v)*y,A=(h*v-d*_)*y;return f.set(1-M-A,A,M)}static containsPoint(n,a,s,u){return this.getBarycoord(n,a,s,u,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(n,a,s,u,f,h,d,_){return this.getBarycoord(n,a,s,u,va)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,va.x),_.addScaledVector(h,va.y),_.addScaledVector(d,va.z),_)}static getInterpolatedAttribute(n,a,s,u,f,h){return dd.setScalar(0),pd.setScalar(0),md.setScalar(0),dd.fromBufferAttribute(n,a),pd.fromBufferAttribute(n,s),md.fromBufferAttribute(n,u),h.setScalar(0),h.addScaledVector(dd,f.x),h.addScaledVector(pd,f.y),h.addScaledVector(md,f.z),h}static isFrontFacing(n,a,s,u){return wi.subVectors(s,a),_a.subVectors(n,a),wi.cross(_a).dot(u)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,u){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[u]),this}setFromAttributeAndIndices(n,a,s,u){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,u),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return wi.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),wi.cross(_a).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Di.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Di.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,u,f){return Di.getInterpolation(n,this.a,this.b,this.c,a,s,u,f)}containsPoint(n){return Di.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Di.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,u=this.b,f=this.c;let h,d;Xs.subVectors(u,s),ks.subVectors(f,s),cd.subVectors(n,s);const _=Xs.dot(cd),g=ks.dot(cd);if(_<=0&&g<=0)return a.copy(s);fd.subVectors(n,u);const v=Xs.dot(fd),m=ks.dot(fd);if(v>=0&&m<=v)return a.copy(u);const y=_*m-v*g;if(y<=0&&_>=0&&v<=0)return h=_/(_-v),a.copy(s).addScaledVector(Xs,h);hd.subVectors(n,f);const M=Xs.dot(hd),A=ks.dot(hd);if(A>=0&&M<=A)return a.copy(f);const w=M*g-_*A;if(w<=0&&g>=0&&A<=0)return d=g/(g-A),a.copy(s).addScaledVector(ks,d);const x=v*A-M*m;if(x<=0&&m-v>=0&&M-A>=0)return fv.subVectors(f,u),d=(m-v)/(m-v+(M-A)),a.copy(u).addScaledVector(fv,d);const S=1/(x+w+y);return h=w*S,d=y*S,a.copy(s).addScaledVector(Xs,h).addScaledVector(ks,d)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const hS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},ju={h:0,s:0,l:0};function gd(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class Ae{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const u=n;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=li){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,De.colorSpaceToWorking(this,a),this}setRGB(n,a,s,u=De.workingColorSpace){return this.r=n,this.g=a,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(n,a,s,u=De.workingColorSpace){if(n=mE(n,1),a=Ee(a,0,1),s=Ee(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=gd(h,f,n+1/3),this.g=gd(h,f,n),this.b=gd(h,f,n-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(n,a=li){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=li){const s=hS[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Ma(n.r),this.g=Ma(n.g),this.b=Ma(n.b),this}copyLinearToSRGB(n){return this.r=Js(n.r),this.g=Js(n.g),this.b=Js(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=li){return De.workingToColorSpace(Ln.copy(this),n),Math.round(Ee(Ln.r*255,0,255))*65536+Math.round(Ee(Ln.g*255,0,255))*256+Math.round(Ee(Ln.b*255,0,255))}getHexString(n=li){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=De.workingColorSpace){De.workingToColorSpace(Ln.copy(this),a);const s=Ln.r,u=Ln.g,f=Ln.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let _,g;const v=(d+h)/2;if(d===h)_=0,g=0;else{const m=h-d;switch(g=v<=.5?m/(h+d):m/(2-h-d),h){case s:_=(u-f)/m+(u<f?6:0);break;case u:_=(f-s)/m+2;break;case f:_=(s-u)/m+4;break}_/=6}return n.h=_,n.s=g,n.l=v,n}getRGB(n,a=De.workingColorSpace){return De.workingToColorSpace(Ln.copy(this),a),n.r=Ln.r,n.g=Ln.g,n.b=Ln.b,n}getStyle(n=li){De.workingToColorSpace(Ln.copy(this),n);const a=Ln.r,s=Ln.g,u=Ln.b;return n!==li?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(n,a,s){return this.getHSL(er),this.setHSL(er.h+n,er.s+a,er.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(er),n.getHSL(ju);const s=Jh(er.h,ju.h,a),u=Jh(er.s,ju.s,a),f=Jh(er.l,ju.l,a);return this.setHSL(s,u,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,u=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ae;Ae.NAMES=hS;let NE=0;class gl extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Qs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Ud,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(n).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(n).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(s.blending=this.blending),this.side!==or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dd&&(s.blendSrc=this.blendSrc),this.blendDst!==Ud&&(s.blendDst=this.blendDst),this.blendEquation!==Gr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(a){const f=u(n.textures),h=u(n.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}}class sl extends gl{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const hn=new et,Ku=new Ue;let LE=0;class ji{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LE++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=J0,this.updateRanges=[],this.gpuType=xa,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[n+u]=a.array[s+u];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Ku.fromBufferAttribute(this,a),Ku.applyMatrix3(n),this.setXY(a,Ku.x,Ku.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix3(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix4(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyNormalMatrix(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.transformDirection(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=Jo(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Yn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=Jo(a,this.array)),a}setX(n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=Jo(a,this.array)),a}setY(n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=Jo(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=Jo(a,this.array)),a}setW(n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Yn(a,this.array),s=Yn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,u){return n*=this.itemSize,this.normalized&&(a=Yn(a,this.array),s=Yn(s,this.array),u=Yn(u,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this}setXYZW(n,a,s,u,f){return n*=this.itemSize,this.normalized&&(a=Yn(a,this.array),s=Yn(s,this.array),u=Yn(u,this.array),f=Yn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==J0&&(n.usage=this.usage),n}}class dS extends ji{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class pS extends ji{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class qr extends ji{constructor(n,a,s){super(new Float32Array(n),a,s)}}let OE=0;const yi=new rn,_d=new jn,qs=new et,oi=new ml,nl=new ml,xn=new et;class Zr extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(uS(n)?pS:dS)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(n),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return yi.makeRotationFromQuaternion(n),this.applyMatrix4(yi),this}rotateX(n){return yi.makeRotationX(n),this.applyMatrix4(yi),this}rotateY(n){return yi.makeRotationY(n),this.applyMatrix4(yi),this}rotateZ(n){return yi.makeRotationZ(n),this.applyMatrix4(yi),this}translate(n,a,s){return yi.makeTranslation(n,a,s),this.applyMatrix4(yi),this}scale(n,a,s){return yi.makeScale(n,a,s),this.applyMatrix4(yi),this}lookAt(n){return _d.lookAt(n),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=n.length;u<f;u++){const h=n[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new qr(s,3))}else{const s=Math.min(n.length,a.count);for(let u=0;u<s;u++){const f=n[u];a.setXYZ(u,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cp);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(n){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(n),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(oi.min,nl.min),oi.expandByPoint(xn),xn.addVectors(oi.max,nl.max),oi.expandByPoint(xn)):(oi.expandByPoint(nl.min),oi.expandByPoint(nl.max))}oi.getCenter(s);let u=0;for(let f=0,h=n.count;f<h;f++)xn.fromBufferAttribute(n,f),u=Math.max(u,s.distanceToSquared(xn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],_=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)xn.fromBufferAttribute(d,g),_&&(qs.fromBufferAttribute(n,g),xn.add(qs)),u=Math.max(u,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let k=0;k<s.count;k++)d[k]=new et,_[k]=new et;const g=new et,v=new et,m=new et,y=new Ue,M=new Ue,A=new Ue,w=new et,x=new et;function S(k,R,C){g.fromBufferAttribute(s,k),v.fromBufferAttribute(s,R),m.fromBufferAttribute(s,C),y.fromBufferAttribute(f,k),M.fromBufferAttribute(f,R),A.fromBufferAttribute(f,C),v.sub(g),m.sub(g),M.sub(y),A.sub(y);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(w.copy(v).multiplyScalar(A.y).addScaledVector(m,-M.y).multiplyScalar(H),x.copy(m).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(H),d[k].add(w),d[R].add(w),d[C].add(w),_[k].add(x),_[R].add(x),_[C].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:n.count}]);for(let k=0,R=I.length;k<R;++k){const C=I[k],H=C.start,at=C.count;for(let ut=H,gt=H+at;ut<gt;ut+=3)S(n.getX(ut+0),n.getX(ut+1),n.getX(ut+2))}const z=new et,D=new et,V=new et,G=new et;function O(k){V.fromBufferAttribute(u,k),G.copy(V);const R=d[k];z.copy(R),z.sub(V.multiplyScalar(V.dot(R))).normalize(),D.crossVectors(G,R);const H=D.dot(_[k])<0?-1:1;h.setXYZW(k,z.x,z.y,z.z,H)}for(let k=0,R=I.length;k<R;++k){const C=I[k],H=C.start,at=C.count;for(let ut=H,gt=H+at;ut<gt;ut+=3)O(n.getX(ut+0)),O(n.getX(ut+1)),O(n.getX(ut+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ji(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const u=new et,f=new et,h=new et,d=new et,_=new et,g=new et,v=new et,m=new et;if(n)for(let y=0,M=n.count;y<M;y+=3){const A=n.getX(y+0),w=n.getX(y+1),x=n.getX(y+2);u.fromBufferAttribute(a,A),f.fromBufferAttribute(a,w),h.fromBufferAttribute(a,x),v.subVectors(h,f),m.subVectors(u,f),v.cross(m),d.fromBufferAttribute(s,A),_.fromBufferAttribute(s,w),g.fromBufferAttribute(s,x),d.add(v),_.add(v),g.add(v),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(w,_.x,_.y,_.z),s.setXYZ(x,g.x,g.y,g.z)}else for(let y=0,M=a.count;y<M;y+=3)u.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),h.fromBufferAttribute(a,y+2),v.subVectors(h,f),m.subVectors(u,f),v.cross(m),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)xn.fromBufferAttribute(n,a),xn.normalize(),n.setXYZ(a,xn.x,xn.y,xn.z)}toNonIndexed(){function n(d,_){const g=d.array,v=d.itemSize,m=d.normalized,y=new g.constructor(_.length*v);let M=0,A=0;for(let w=0,x=_.length;w<x;w++){d.isInterleavedBufferAttribute?M=_[w]*d.data.stride+d.offset:M=_[w]*v;for(let S=0;S<v;S++)y[A++]=g[M++]}return new ji(y,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Zr,s=this.index.array,u=this.attributes;for(const d in u){const _=u[d],g=n(_,s);a.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const _=[],g=f[d];for(let v=0,m=g.length;v<m;v++){const y=g[v],M=n(y,s);_.push(M)}a.morphAttributes[d]=_}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const g=h[d];a.addGroup(g.start,g.count,g.materialIndex)}return a}toJSON(){const n={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(n[g]=_[g]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const _ in s){const g=s[_];n.data.attributes[_]=g.toJSON(n.data)}const u={};let f=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],v=[];for(let m=0,y=g.length;m<y;m++){const M=g[m];v.push(M.toJSON(n.data))}v.length>0&&(u[_]=v,f=!0)}f&&(n.data.morphAttributes=u,n.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(n.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(n.data.boundingSphere=d.toJSON()),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone());const u=n.attributes;for(const g in u){const v=u[g];this.setAttribute(g,v.clone(a))}const f=n.morphAttributes;for(const g in f){const v=[],m=f[g];for(let y=0,M=m.length;y<M;y++)v.push(m[y].clone(a));this.morphAttributes[g]=v}this.morphTargetsRelative=n.morphTargetsRelative;const h=n.groups;for(let g=0,v=h.length;g<v;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=n.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=n.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hv=new rn,zr=new bE,Qu=new Cp,dv=new et,Ju=new et,$u=new et,tc=new et,vd=new et,ec=new et,pv=new et,nc=new et;class Mn extends jn{constructor(n=new Zr,a=new sl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(n,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,n);const d=this.morphTargetInfluences;if(f&&d){ec.set(0,0,0);for(let _=0,g=f.length;_<g;_++){const v=d[_],m=f[_];v!==0&&(vd.fromBufferAttribute(m,n),h?ec.addScaledVector(vd,v):ec.addScaledVector(vd.sub(a),v))}a.add(ec)}return a}raycast(n,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Qu.copy(s.boundingSphere),Qu.applyMatrix4(f),zr.copy(n.ray).recast(n.near),!(Qu.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Qu,dv)===null||zr.origin.distanceToSquared(dv)>(n.far-n.near)**2))&&(hv.copy(f).invert(),zr.copy(n.ray).applyMatrix4(hv),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,zr)))}_computeIntersections(n,a,s){let u;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,g=f.attributes.uv,v=f.attributes.uv1,m=f.attributes.normal,y=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,w=y.length;A<w;A++){const x=y[A],S=h[x.materialIndex],I=Math.max(x.start,M.start),z=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let D=I,V=z;D<V;D+=3){const G=d.getX(D),O=d.getX(D+1),k=d.getX(D+2);u=ic(this,S,n,s,g,v,m,G,O,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=x.materialIndex,a.push(u))}}else{const A=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let x=A,S=w;x<S;x+=3){const I=d.getX(x),z=d.getX(x+1),D=d.getX(x+2);u=ic(this,h,n,s,g,v,m,I,z,D),u&&(u.faceIndex=Math.floor(x/3),a.push(u))}}else if(_!==void 0)if(Array.isArray(h))for(let A=0,w=y.length;A<w;A++){const x=y[A],S=h[x.materialIndex],I=Math.max(x.start,M.start),z=Math.min(_.count,Math.min(x.start+x.count,M.start+M.count));for(let D=I,V=z;D<V;D+=3){const G=D,O=D+1,k=D+2;u=ic(this,S,n,s,g,v,m,G,O,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=x.materialIndex,a.push(u))}}else{const A=Math.max(0,M.start),w=Math.min(_.count,M.start+M.count);for(let x=A,S=w;x<S;x+=3){const I=x,z=x+1,D=x+2;u=ic(this,h,n,s,g,v,m,I,z,D),u&&(u.faceIndex=Math.floor(x/3),a.push(u))}}}}function zE(o,n,a,s,u,f,h,d){let _;if(n.side===Wn?_=s.intersectTriangle(h,f,u,!0,d):_=s.intersectTriangle(u,f,h,n.side===or,d),_===null)return null;nc.copy(d),nc.applyMatrix4(o.matrixWorld);const g=a.ray.origin.distanceTo(nc);return g<a.near||g>a.far?null:{distance:g,point:nc.clone(),object:o}}function ic(o,n,a,s,u,f,h,d,_,g){o.getVertexPosition(d,Ju),o.getVertexPosition(_,$u),o.getVertexPosition(g,tc);const v=zE(o,n,a,s,Ju,$u,tc,pv);if(v){const m=new et;Di.getBarycoord(pv,Ju,$u,tc,m),u&&(v.uv=Di.getInterpolatedAttribute(u,d,_,g,m,new Ue)),f&&(v.uv1=Di.getInterpolatedAttribute(f,d,_,g,m,new Ue)),h&&(v.normal=Di.getInterpolatedAttribute(h,d,_,g,m,new et),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:_,c:g,normal:new et,materialIndex:0};Di.getNormal(Ju,$u,tc,y.normal),v.face=y,v.barycoord=m}return v}class Yi extends Zr{constructor(n=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const _=[],g=[],v=[],m=[];let y=0,M=0;A("z","y","x",-1,-1,s,a,n,h,f,0),A("z","y","x",1,-1,s,a,-n,h,f,1),A("x","z","y",1,1,n,s,a,u,h,2),A("x","z","y",1,-1,n,s,-a,u,h,3),A("x","y","z",1,-1,n,a,s,u,f,4),A("x","y","z",-1,-1,n,a,-s,u,f,5),this.setIndex(_),this.setAttribute("position",new qr(g,3)),this.setAttribute("normal",new qr(v,3)),this.setAttribute("uv",new qr(m,2));function A(w,x,S,I,z,D,V,G,O,k,R){const C=D/O,H=V/k,at=D/2,ut=V/2,gt=G/2,lt=O+1,q=k+1;let rt=0,j=0;const vt=new et;for(let yt=0;yt<q;yt++){const Gt=yt*H-ut;for(let se=0;se<lt;se++){const Te=se*C-at;vt[w]=Te*I,vt[x]=Gt*z,vt[S]=gt,g.push(vt.x,vt.y,vt.z),vt[w]=0,vt[x]=0,vt[S]=G>0?1:-1,v.push(vt.x,vt.y,vt.z),m.push(se/O),m.push(1-yt/k),rt+=1}}for(let yt=0;yt<k;yt++)for(let Gt=0;Gt<O;Gt++){const se=y+Gt+lt*yt,Te=y+Gt+lt*(yt+1),P=y+(Gt+1)+lt*(yt+1),ct=y+(Gt+1)+lt*yt;_.push(se,Te,ct),_.push(Te,P,ct),j+=6}d.addGroup(M,j,R),M+=j,y+=rt}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Yi(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function io(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=u.clone():Array.isArray(u)?n[a][s]=u.slice():n[a][s]=u}}return n}function Hn(o){const n={};for(let a=0;a<o.length;a++){const s=io(o[a]);for(const u in s)n[u]=s[u]}return n}function PE(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function mS(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:De.workingColorSpace}const IE={clone:io,merge:Hn};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends gl{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=io(n.uniforms),this.uniformsGroups=PE(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(n).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class gS extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new et,mv=new Ue,gv=new Ue;class ui extends gS{constructor(n=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=_p*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return _p*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(nr.x,nr.y).multiplyScalar(-n/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(nr.x,nr.y).multiplyScalar(-n/nr.z)}getViewSize(n,a){return this.getViewBounds(n,mv,gv),a.subVectors(gv,mv)}setViewOffset(n,a,s,u,f,h){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(Qh*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,g=h.fullHeight;f+=h.offsetX*u/_,a-=h.offsetY*s/g,u*=h.width/_,s*=h.height/g}const d=this.filmOffset;d!==0&&(f+=n*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,n,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Ys=-90,Ws=1;class HE extends jn{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new ui(Ys,Ws,n,a);u.layers=this.layers,this.add(u);const f=new ui(Ys,Ws,n,a);f.layers=this.layers,this.add(f);const h=new ui(Ys,Ws,n,a);h.layers=this.layers,this.add(h);const d=new ui(Ys,Ws,n,a);d.layers=this.layers,this.add(d);const _=new ui(Ys,Ws,n,a);_.layers=this.layers,this.add(_);const g=new ui(Ys,Ws,n,a);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,_]=a;for(const g of a)this.remove(g);if(n===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(n===pc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const g of a)this.add(g),g.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,g,v]=this.children,m=n.getRenderTarget(),y=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),A=n.xr.enabled;n.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,u),n.render(a,f),n.setRenderTarget(s,1,u),n.render(a,h),n.setRenderTarget(s,2,u),n.render(a,d),n.setRenderTarget(s,3,u),n.render(a,_),n.setRenderTarget(s,4,u),n.render(a,g),s.texture.generateMipmaps=w,n.setRenderTarget(s,5,u),n.render(a,v),n.setRenderTarget(m,y,M),n.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class _S extends Zn{constructor(n=[],a=to,s,u,f,h,d,_,g,v){super(n,a,s,u,f,h,d,_,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class GE extends Wr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},u=[s,s,s,s,s,s];this.texture=new _S(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Yi(5,5,5),f=new lr({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:rr});f.uniforms.tEquirect.value=a;const h=new Mn(u,f),d=a.minFilter;return a.minFilter===kr&&(a.minFilter=Wi),new HE(1,10,this).update(n,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(n,a=!0,s=!0,u=!0){const f=n.getRenderTarget();for(let h=0;h<6;h++)n.setRenderTarget(this,h),n.clear(a,s,u);n.setRenderTarget(f)}}class js extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let u=null,f=null,h=null;const d=this._targetRay,_=this._grip,g=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(g&&n.hand){h=!0;for(const w of n.hand.values()){const x=a.getJointPose(w,s),S=this._getHandJoint(g,w);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const v=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],y=v.position.distanceTo(m.position),M=.02,A=.005;g.inputState.pinching&&y>M+A?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!g.inputState.pinching&&y<=M-A&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else _!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(u=a.getPose(n.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return d!==null&&(d.visible=u!==null),_!==null&&(_.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new js;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class wp{constructor(n,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(n),this.density=a}clone(){return new wp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class XE extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const yd=new et,kE=new et,qE=new de;class Fr{constructor(n=new et(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,u){return this.normal.set(n,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const u=yd.subVectors(s,a).cross(kE.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(yd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||qE.getNormalMatrix(n),u=this.coplanarPoint(yd).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Cp,YE=new Ue(.5,.5),ac=new et;class Dp{constructor(n=new Fr,a=new Fr,s=new Fr,u=new Fr,f=new Fr,h=new Fr){this.planes=[n,a,s,u,f,h]}set(n,a,s,u,f,h){const d=this.planes;return d[0].copy(n),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=Zi,s=!1){const u=this.planes,f=n.elements,h=f[0],d=f[1],_=f[2],g=f[3],v=f[4],m=f[5],y=f[6],M=f[7],A=f[8],w=f[9],x=f[10],S=f[11],I=f[12],z=f[13],D=f[14],V=f[15];if(u[0].setComponents(g-h,M-v,S-A,V-I).normalize(),u[1].setComponents(g+h,M+v,S+A,V+I).normalize(),u[2].setComponents(g+d,M+m,S+w,V+z).normalize(),u[3].setComponents(g-d,M-m,S-w,V-z).normalize(),s)u[4].setComponents(_,y,x,D).normalize(),u[5].setComponents(g-_,M-y,S-x,V-D).normalize();else if(u[4].setComponents(g-_,M-y,S-x,V-D).normalize(),a===Zi)u[5].setComponents(g+_,M+y,S+x,V+D).normalize();else if(a===pc)u[5].setComponents(_,y,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Pr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(n){Pr.center.set(0,0,0);const a=YE.distanceTo(n.center);return Pr.radius=.7071067811865476+a,Pr.applyMatrix4(n.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(n){const a=this.planes,s=n.center,u=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(ac.x=u.normal.x>0?n.max.x:n.min.x,ac.y=u.normal.y>0?n.max.y:n.min.y,ac.z=u.normal.z>0?n.max.z:n.min.z,u.distanceToPoint(ac)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vS extends Zn{constructor(n,a,s=Yr,u,f,h,d=Ni,_=Ni,g,v=ul,m=1){if(v!==ul&&v!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:n,height:a,depth:m};super(y,u,f,h,d,_,v,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Rp(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class SS extends Zn{constructor(n=null){super(),this.sourceTexture=n,this.isExternalTexture=!0}copy(n){return super.copy(n),this.sourceTexture=n.sourceTexture,this}}class ar extends Zr{constructor(n=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:u};const f=n/2,h=a/2,d=Math.floor(s),_=Math.floor(u),g=d+1,v=_+1,m=n/d,y=a/_,M=[],A=[],w=[],x=[];for(let S=0;S<v;S++){const I=S*y-h;for(let z=0;z<g;z++){const D=z*m-f;A.push(D,-I,0),w.push(0,0,1),x.push(z/d),x.push(1-S/_)}}for(let S=0;S<_;S++)for(let I=0;I<d;I++){const z=I+g*S,D=I+g*(S+1),V=I+1+g*(S+1),G=I+1+g*S;M.push(z,D,G),M.push(D,V,G)}this.setIndex(M),this.setAttribute("position",new qr(A,3)),this.setAttribute("normal",new qr(w,3)),this.setAttribute("uv",new qr(x,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new ar(n.width,n.height,n.widthSegments,n.heightSegments)}}class il extends gl{constructor(n){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oS,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.envMapIntensity=n.envMapIntensity,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this.fog=n.fog,this}}class WE extends gl{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class ZE extends gl{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class yS extends jn{constructor(n,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(n),this.intensity=a}dispose(){}copy(n,a){return super.copy(n,a),this.color.copy(n.color),this.intensity=n.intensity,this}toJSON(n){const a=super.toJSON(n);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}const xd=new rn,_v=new et,vv=new et;class jE{constructor(n){this.camera=n,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Ki,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dp,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(n){const a=this.camera,s=this.matrix;_v.setFromMatrixPosition(n.matrixWorld),a.position.copy(_v),vv.setFromMatrixPosition(n.target.matrixWorld),a.lookAt(vv),a.updateMatrixWorld(),xd.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd,a.coordinateSystem,a.reversedDepth),a.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(xd)}getViewport(n){return this._viewports[n]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(n){return this.camera=n.camera.clone(),this.intensity=n.intensity,this.bias=n.bias,this.radius=n.radius,this.autoUpdate=n.autoUpdate,this.needsUpdate=n.needsUpdate,this.normalBias=n.normalBias,this.blurSamples=n.blurSamples,this.mapSize.copy(n.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const n={};return this.intensity!==1&&(n.intensity=this.intensity),this.bias!==0&&(n.bias=this.bias),this.normalBias!==0&&(n.normalBias=this.normalBias),this.radius!==1&&(n.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(n.mapSize=this.mapSize.toArray()),n.camera=this.camera.toJSON(!1).object,delete n.camera.matrix,n}}const Sv=new rn,al=new et,Md=new et;class KE extends jE{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new et(1,0,0),new et(-1,0,0),new et(0,0,1),new et(0,0,-1),new et(0,1,0),new et(0,-1,0)],this._cubeUps=[new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,0,1),new et(0,0,-1)]}updateMatrices(n,a=0){const s=this.camera,u=this.matrix,f=n.distance||s.far;f!==s.far&&(s.far=f,s.updateProjectionMatrix()),al.setFromMatrixPosition(n.matrixWorld),s.position.copy(al),Md.copy(s.position),Md.add(this._cubeDirections[a]),s.up.copy(this._cubeUps[a]),s.lookAt(Md),s.updateMatrixWorld(),u.makeTranslation(-al.x,-al.y,-al.z),Sv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sv,s.coordinateSystem,s.reversedDepth)}}class yv extends yS{constructor(n,a,s=0,u=2){super(n,a),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=u,this.shadow=new KE}get power(){return this.intensity*4*Math.PI}set power(n){this.intensity=n/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(n,a){return super.copy(n,a),this.distance=n.distance,this.decay=n.decay,this.shadow=n.shadow.clone(),this}}class QE extends gS{constructor(n=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-n,h=s+n,d=u+a,_=u-a;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=v*this.view.offsetY,_=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class JE extends yS{constructor(n,a){super(n,a),this.isAmbientLight=!0,this.type="AmbientLight"}}class $E extends ui{constructor(n=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=n}}function xv(o,n,a,s){const u=tT(s);switch(a){case iS:return o*n;case rS:return o*n/u.components*u.byteLength;case Tp:return o*n/u.components*u.byteLength;case sS:return o*n*2/u.components*u.byteLength;case bp:return o*n*2/u.components*u.byteLength;case aS:return o*n*3/u.components*u.byteLength;case Ui:return o*n*4/u.components*u.byteLength;case Ap:return o*n*4/u.components*u.byteLength;case lc:case uc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case cc:case fc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case kd:case Yd:return Math.max(o,16)*Math.max(n,8)/4;case Xd:case qd:return Math.max(o,8)*Math.max(n,8)/2;case Wd:case Zd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case jd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Kd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case Jd:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case tp:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case ep:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case np:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case ip:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case ap:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case rp:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case sp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case op:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case lp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case up:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case cp:case fp:case hp:return Math.ceil(o/4)*Math.ceil(n/4)*16;case dp:case pp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case mp:case gp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function tT(o){switch(o){case Ki:case $v:return{byteLength:1,components:1};case ol:case tS:case hl:return{byteLength:2,components:1};case Mp:case Ep:return{byteLength:2,components:4};case Yr:case xp:case xa:return{byteLength:4,components:1};case eS:case nS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);function xS(){let o=null,n=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(u),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function eT(o){const n=new WeakMap;function a(d,_){const g=d.array,v=d.usage,m=g.byteLength,y=o.createBuffer();o.bindBuffer(_,y),o.bufferData(_,g,v),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,_,g){const v=_.array,m=_.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,v);else{m.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<m.length;M++){const A=m[y],w=m[M];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++y,m[y]=w)}m.length=y+1;for(let M=0,A=m.length;M<A;M++){const w=m[M];o.bufferSubData(g,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}_.clearUpdateRanges()}_.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=n.get(d);_&&(o.deleteBuffer(_.buffer),n.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=n.get(d);(!v||v.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=n.get(d);if(g===void 0)n.set(d,a(d,_));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,_),g.version=d.version}}return{get:u,remove:f,update:h}}var nT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iT=`#ifdef USE_ALPHAHASH
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
#endif`,aT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lT=`#ifdef USE_AOMAP
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
#endif`,uT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cT=`#ifdef USE_BATCHING
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
#endif`,fT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mT=`#ifdef USE_IRIDESCENCE
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
#endif`,gT=`#ifdef USE_BUMPMAP
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bT=`#define PI 3.141592653589793
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
} // validated`,AT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RT=`vec3 transformedNormal = objectNormal;
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
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",LT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PT=`#ifdef USE_ENVMAP
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
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XT=`#ifdef USE_GRADIENTMAP
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
}`,kT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
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
#endif`,ZT=`#ifdef USE_ENVMAP
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
#endif`,jT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$T=`PhysicalMaterial material;
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
#endif`,t1=`struct PhysicalMaterial {
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
}`,e1=`
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
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
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
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
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
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
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nb=`uniform sampler2D t2D;
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
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
}`,lb=`#if DEPTH_PACKING == 3200
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
}`,ub=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#define LAMBERT
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
}`,vb=`#define LAMBERT
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
}`,Sb=`#define MATCAP
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
}`,yb=`#define MATCAP
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
}`,xb=`#define NORMAL
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
}`,Mb=`#define NORMAL
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
}`,Eb=`#define PHONG
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
}`,Tb=`#define PHONG
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
}`,bb=`#define STANDARD
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
}`,Ab=`#define STANDARD
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
}`,Rb=`#define TOON
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
}`,Cb=`#define TOON
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
}`,wb=`uniform float size;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
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
}`,Nb=`uniform vec3 color;
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
}`,Lb=`uniform float rotation;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:nT,alphahash_pars_fragment:iT,alphamap_fragment:aT,alphamap_pars_fragment:rT,alphatest_fragment:sT,alphatest_pars_fragment:oT,aomap_fragment:lT,aomap_pars_fragment:uT,batching_pars_vertex:cT,batching_vertex:fT,begin_vertex:hT,beginnormal_vertex:dT,bsdfs:pT,iridescence_fragment:mT,bumpmap_pars_fragment:gT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:vT,clipping_planes_pars_vertex:ST,clipping_planes_vertex:yT,color_fragment:xT,color_pars_fragment:MT,color_pars_vertex:ET,color_vertex:TT,common:bT,cube_uv_reflection_fragment:AT,defaultnormal_vertex:RT,displacementmap_pars_vertex:CT,displacementmap_vertex:wT,emissivemap_fragment:DT,emissivemap_pars_fragment:UT,colorspace_fragment:NT,colorspace_pars_fragment:LT,envmap_fragment:OT,envmap_common_pars_fragment:zT,envmap_pars_fragment:PT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:ZT,envmap_vertex:BT,fog_vertex:FT,fog_pars_vertex:HT,fog_fragment:GT,fog_pars_fragment:VT,gradientmap_pars_fragment:XT,lightmap_pars_fragment:kT,lights_lambert_fragment:qT,lights_lambert_pars_fragment:YT,lights_pars_begin:WT,lights_toon_fragment:jT,lights_toon_pars_fragment:KT,lights_phong_fragment:QT,lights_phong_pars_fragment:JT,lights_physical_fragment:$T,lights_physical_pars_fragment:t1,lights_fragment_begin:e1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:r1,logdepthbuf_pars_vertex:s1,logdepthbuf_vertex:o1,map_fragment:l1,map_pars_fragment:u1,map_particle_fragment:c1,map_particle_pars_fragment:f1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:d1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:_1,morphtarget_vertex:v1,normal_fragment_begin:S1,normal_fragment_maps:y1,normal_pars_fragment:x1,normal_pars_vertex:M1,normal_vertex:E1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:A1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:C1,opaque_fragment:w1,packing:D1,premultiplied_alpha_fragment:U1,project_vertex:N1,dithering_fragment:L1,dithering_pars_fragment:O1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:B1,shadowmap_vertex:F1,shadowmask_pars_fragment:H1,skinbase_vertex:G1,skinning_pars_vertex:V1,skinning_vertex:X1,skinnormal_vertex:k1,specularmap_fragment:q1,specularmap_pars_fragment:Y1,tonemapping_fragment:W1,tonemapping_pars_fragment:Z1,transmission_fragment:j1,transmission_pars_fragment:K1,uv_pars_fragment:Q1,uv_pars_vertex:J1,uv_vertex:$1,worldpos_vertex:tb,background_vert:eb,background_frag:nb,backgroundCube_vert:ib,backgroundCube_frag:ab,cube_vert:rb,cube_frag:sb,depth_vert:ob,depth_frag:lb,distanceRGBA_vert:ub,distanceRGBA_frag:cb,equirect_vert:fb,equirect_frag:hb,linedashed_vert:db,linedashed_frag:pb,meshbasic_vert:mb,meshbasic_frag:gb,meshlambert_vert:_b,meshlambert_frag:vb,meshmatcap_vert:Sb,meshmatcap_frag:yb,meshnormal_vert:xb,meshnormal_frag:Mb,meshphong_vert:Eb,meshphong_frag:Tb,meshphysical_vert:bb,meshphysical_frag:Ab,meshtoon_vert:Rb,meshtoon_frag:Cb,points_vert:wb,points_frag:Db,shadow_vert:Ub,shadow_frag:Nb,sprite_vert:Lb,sprite_frag:Ob},It={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},qi={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};qi.physical={uniforms:Hn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const rc={r:0,b:0,g:0},Ir=new Qi,zb=new rn;function Pb(o,n,a,s,u,f,h){const d=new Ae(0);let _=f===!0?0:1,g,v,m=null,y=0,M=null;function A(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?a:n).get(D)),D}function w(z){let D=!1;const V=A(z);V===null?S(d,_):V&&V.isColor&&(S(V,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(z,D){const V=A(D);V&&(V.isCubeTexture||V.mapping===gc)?(v===void 0&&(v=new Mn(new Yi(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:io(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Ir.copy(D.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),v.material.uniforms.envMap.value=V,v.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(Ir)),v.material.toneMapped=De.getTransfer(V.colorSpace)!==Xe,(m!==V||y!==V.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,m=V,y=V.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):V&&V.isTexture&&(g===void 0&&(g=new Mn(new ar(2,2),new lr({name:"BackgroundMaterial",uniforms:io(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(g)),g.material.uniforms.t2D.value=V,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=De.getTransfer(V.colorSpace)!==Xe,V.matrixAutoUpdate===!0&&V.updateMatrix(),g.material.uniforms.uvTransform.value.copy(V.matrix),(m!==V||y!==V.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,m=V,y=V.version,M=o.toneMapping),g.layers.enableAll(),z.unshift(g,g.geometry,g.material,0,0,null))}function S(z,D){z.getRGB(rc,mS(o)),s.buffers.color.setClear(rc.r,rc.g,rc.b,D,h)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),_=D,S(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(z){_=z,S(d,_)},render:w,addToRenderList:x,dispose:I}}function Ib(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=y(null);let f=u,h=!1;function d(C,H,at,ut,gt){let lt=!1;const q=m(ut,at,H);f!==q&&(f=q,g(f.object)),lt=M(C,ut,at,gt),lt&&A(C,ut,at,gt),gt!==null&&n.update(gt,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(C,H,at,ut),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(gt).buffer))}function _(){return o.createVertexArray()}function g(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function m(C,H,at){const ut=at.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let lt=gt[H.id];lt===void 0&&(lt={},gt[H.id]=lt);let q=lt[ut];return q===void 0&&(q=y(_()),lt[ut]=q),q}function y(C){const H=[],at=[],ut=[];for(let gt=0;gt<a;gt++)H[gt]=0,at[gt]=0,ut[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:at,attributeDivisors:ut,object:C,attributes:{},index:null}}function M(C,H,at,ut){const gt=f.attributes,lt=H.attributes;let q=0;const rt=at.getAttributes();for(const j in rt)if(rt[j].location>=0){const yt=gt[j];let Gt=lt[j];if(Gt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Gt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Gt=C.instanceColor)),yt===void 0||yt.attribute!==Gt||Gt&&yt.data!==Gt.data)return!0;q++}return f.attributesNum!==q||f.index!==ut}function A(C,H,at,ut){const gt={},lt=H.attributes;let q=0;const rt=at.getAttributes();for(const j in rt)if(rt[j].location>=0){let yt=lt[j];yt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const Gt={};Gt.attribute=yt,yt&&yt.data&&(Gt.data=yt.data),gt[j]=Gt,q++}f.attributes=gt,f.attributesNum=q,f.index=ut}function w(){const C=f.newAttributes;for(let H=0,at=C.length;H<at;H++)C[H]=0}function x(C){S(C,0)}function S(C,H){const at=f.newAttributes,ut=f.enabledAttributes,gt=f.attributeDivisors;at[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),gt[C]!==H&&(o.vertexAttribDivisor(C,H),gt[C]=H)}function I(){const C=f.newAttributes,H=f.enabledAttributes;for(let at=0,ut=H.length;at<ut;at++)H[at]!==C[at]&&(o.disableVertexAttribArray(at),H[at]=0)}function z(C,H,at,ut,gt,lt,q){q===!0?o.vertexAttribIPointer(C,H,at,gt,lt):o.vertexAttribPointer(C,H,at,ut,gt,lt)}function D(C,H,at,ut){w();const gt=ut.attributes,lt=at.getAttributes(),q=H.defaultAttributeValues;for(const rt in lt){const j=lt[rt];if(j.location>=0){let vt=gt[rt];if(vt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const yt=vt.normalized,Gt=vt.itemSize,se=n.get(vt);if(se===void 0)continue;const Te=se.buffer,P=se.type,ct=se.bytesPerElement,J=P===o.INT||P===o.UNSIGNED_INT||vt.gpuType===xp;if(vt.isInterleavedBufferAttribute){const it=vt.data,Mt=it.stride,Nt=vt.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<j.locationSize;Rt++)S(j.location+Rt,it.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<j.locationSize;Rt++)x(j.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let Rt=0;Rt<j.locationSize;Rt++)z(j.location+Rt,Gt/j.locationSize,P,yt,Mt*ct,(Nt+Gt/j.locationSize*Rt)*ct,J)}else{if(vt.isInstancedBufferAttribute){for(let it=0;it<j.locationSize;it++)S(j.location+it,vt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let it=0;it<j.locationSize;it++)x(j.location+it);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let it=0;it<j.locationSize;it++)z(j.location+it,Gt/j.locationSize,P,yt,Gt*ct,Gt/j.locationSize*it*ct,J)}}else if(q!==void 0){const yt=q[rt];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(j.location,yt);break;case 3:o.vertexAttrib3fv(j.location,yt);break;case 4:o.vertexAttrib4fv(j.location,yt);break;default:o.vertexAttrib1fv(j.location,yt)}}}}I()}function V(){k();for(const C in s){const H=s[C];for(const at in H){const ut=H[at];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete H[at]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const at in H){const ut=H[at];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete H[at]}delete s[C.id]}function O(C){for(const H in s){const at=s[H];if(at[C.id]===void 0)continue;const ut=at[C.id];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete at[C.id]}}function k(){R(),h=!0,f!==u&&(f=u,g(f.object))}function R(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:k,resetDefaultState:R,dispose:V,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:I}}function Bb(o,n,a){let s;function u(g){s=g}function f(g,v){o.drawArrays(s,g,v),a.update(v,s,1)}function h(g,v,m){m!==0&&(o.drawArraysInstanced(s,g,v,m),a.update(v,s,m))}function d(g,v,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,m);let M=0;for(let A=0;A<m;A++)M+=v[A];a.update(M,s,1)}function _(g,v,m,y){if(m===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<g.length;A++)h(g[A],v[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(s,g,0,v,0,y,0,m);let A=0;for(let w=0;w<m;w++)A+=v[w]*y[w];a.update(A,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function Fb(o,n,a,s){let u;function f(){if(u!==void 0)return u;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(O){return!(O!==Ui&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const k=O===hl&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==Ki&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==xa&&!k)}function _(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=a.precision!==void 0?a.precision:"highp";const v=_(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const m=a.logarithmicDepthBuffer===!0,y=a.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:V,maxSamples:G}}function Hb(o){const n=this;let a=null,s=0,u=!1,f=!1;const h=new Fr,d=new de,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const M=m.length!==0||y||s!==0||u;return u=y,s=m.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,y){a=v(m,y,0)},this.setState=function(m,y,M){const A=m.clippingPlanes,w=m.clipIntersection,x=m.clipShadows,S=o.get(m);if(!u||A===null||A.length===0||f&&!x)f?v(null):g();else{const I=f?0:s,z=I*4;let D=S.clippingState||null;_.value=D,D=v(A,y,z,M);for(let V=0;V!==z;++V)D[V]=a[V];S.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function g(){_.value!==a&&(_.value=a,_.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function v(m,y,M,A){const w=m!==null?m.length:0;let x=null;if(w!==0){if(x=_.value,A!==!0||x===null){const S=M+w*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(x===null||x.length<S)&&(x=new Float32Array(S));for(let z=0,D=M;z!==w;++z,D+=4)h.copy(m[z]).applyMatrix4(I,d),h.normal.toArray(x,D),x[D+3]=h.constant}_.value=x,_.needsUpdate=!0}return n.numPlanes=w,n.numIntersection=0,x}}function Gb(o){let n=new WeakMap;function a(h,d){return d===Fd?h.mapping=to:d===Hd&&(h.mapping=eo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Fd||d===Hd)if(n.has(h)){const _=n.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const g=new GE(_.height);return g.fromEquirectangularTexture(o,h),n.set(h,g),h.addEventListener("dispose",u),a(g.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Ks=4,Mv=[.125,.215,.35,.446,.526,.582],Vr=20,Ed=new QE,Ev=new Ae;let Td=null,bd=0,Ad=0,Rd=!1;const Hr=(1+Math.sqrt(5))/2,Zs=1/Hr,Tv=[new et(-Hr,Zs,0),new et(Hr,Zs,0),new et(-Zs,0,Hr),new et(Zs,0,Hr),new et(0,Hr,-Zs),new et(0,Hr,Zs),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],Vb=new et;class bv{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,u=100,f={}){const{size:h=256,position:d=Vb}=f;Td=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(n,s,u,_,d),a>0&&this._blur(_,0,0,a),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Td,bd,Ad),this._renderer.xr.enabled=Rd,n.scissorTest=!1,sc(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===to||n.mapping===eo?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Td=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:hl,format:Ui,colorSpace:no,depthBuffer:!1},u=Av(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Av(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xb(f)),this._blurMaterial=kb(f,n,a)}return u}_compileMaterial(n){const a=new Mn(this._lodPlanes[0],n);this._renderer.compile(a,Ed)}_sceneToCubeUV(n,a,s,u,f){const _=new ui(90,1,a,s),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,M=m.toneMapping;m.getClearColor(Ev),m.toneMapping=sr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(u),m.clearDepth(),m.setRenderTarget(null));const w=new sl({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),x=new Mn(new Yi,w);let S=!1;const I=n.background;I?I.isColor&&(w.color.copy(I),n.background=null,S=!0):(w.color.copy(Ev),S=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(_.up.set(0,g[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[z],f.y,f.z)):D===1?(_.up.set(0,0,g[z]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[z],f.z)):(_.up.set(0,g[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[z]));const V=this._cubeSize;sc(u,D*V,z>2?V:0,V,V),m.setRenderTarget(u),S&&m.render(x,_),m.render(n,_)}x.geometry.dispose(),x.material.dispose(),m.toneMapping=M,m.autoClear=y,n.background=I}_textureToCubeUV(n,a){const s=this._renderer,u=n.mapping===to||n.mapping===eo;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new Mn(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=n;const _=this._cubeSize;sc(a,0,0,3*_,2*_),s.setRenderTarget(a),s.render(h,Ed)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Tv[(u-f-1)%Tv.length];this._blur(n,f-1,f,h,d)}a.autoClear=s}_blur(n,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(n,h,a,s,u,"latitudinal",f),this._halfBlur(h,n,s,s,u,"longitudinal",f)}_halfBlur(n,a,s,u,f,h,d){const _=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new Mn(this._lodPlanes[u],g),y=g.uniforms,M=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Vr-1),w=f/A,x=isFinite(f)?1+Math.floor(v*w):Vr;x>Vr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Vr}`);const S=[];let I=0;for(let O=0;O<Vr;++O){const k=O/w,R=Math.exp(-k*k/2);S.push(R),O===0?I+=R:O<x&&(I+=2*R)}for(let O=0;O<S.length;O++)S[O]=S[O]/I;y.envMap.value=n.texture,y.samples.value=x,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:z}=this;y.dTheta.value=A,y.mipInt.value=z-s;const D=this._sizeLods[u],V=3*D*(u>z-Ks?u-z+Ks:0),G=4*(this._cubeSize-D);sc(a,V,G,3*D,2*D),_.setRenderTarget(a),_.render(m,Ed)}}function Xb(o){const n=[],a=[],s=[];let u=o;const f=o-Ks+1+Mv.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let _=1/d;h>o-Ks?_=Mv[h-o+Ks-1]:h===0&&(_=0),s.push(_);const g=1/(d-2),v=-g,m=1+g,y=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,A=6,w=3,x=2,S=1,I=new Float32Array(w*A*M),z=new Float32Array(x*A*M),D=new Float32Array(S*A*M);for(let G=0;G<M;G++){const O=G%3*2/3-1,k=G>2?0:-1,R=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];I.set(R,w*A*G),z.set(y,x*A*G);const C=[G,G,G,G,G,G];D.set(C,S*A*G)}const V=new Zr;V.setAttribute("position",new ji(I,w)),V.setAttribute("uv",new ji(z,x)),V.setAttribute("faceIndex",new ji(D,S)),n.push(V),u>Ks&&u--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function Av(o,n,a){const s=new Wr(o,n,a);return s.texture.mapping=gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function sc(o,n,a,s,u){o.viewport.set(n,a,s,u),o.scissor.set(n,a,s,u)}function kb(o,n,a){const s=new Float32Array(Vr),u=new et(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Up(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Rv(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Cv(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Up(){return`

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
	`}function qb(o){let n=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const _=d.mapping,g=_===Fd||_===Hd,v=_===to||_===eo;if(g||v){let m=n.get(d);const y=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return a===null&&(a=new bv(o)),m=g?a.fromEquirectangular(d,m):a.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new bv(o)),m=g?a.fromEquirectangular(d):a.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function u(d){let _=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&_++;return _===g}function f(d){const _=d.target;_.removeEventListener("dispose",f);const g=n.get(_);g!==void 0&&(n.delete(_),g.dispose())}function h(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function Yb(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return n[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&fl("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function Wb(o,n,a,s){const u={},f=new WeakMap;function h(m){const y=m.target;y.index!==null&&n.remove(y.index);for(const A in y.attributes)n.remove(y.attributes[A]);y.removeEventListener("dispose",h),delete u[y.id];const M=f.get(y);M&&(n.remove(M),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function d(m,y){return u[y.id]===!0||(y.addEventListener("dispose",h),u[y.id]=!0,a.memory.geometries++),y}function _(m){const y=m.attributes;for(const M in y)n.update(y[M],o.ARRAY_BUFFER)}function g(m){const y=[],M=m.index,A=m.attributes.position;let w=0;if(M!==null){const I=M.array;w=M.version;for(let z=0,D=I.length;z<D;z+=3){const V=I[z+0],G=I[z+1],O=I[z+2];y.push(V,G,G,O,O,V)}}else if(A!==void 0){const I=A.array;w=A.version;for(let z=0,D=I.length/3-1;z<D;z+=3){const V=z+0,G=z+1,O=z+2;y.push(V,G,G,O,O,V)}}else return;const x=new(uS(y)?pS:dS)(y,1);x.version=w;const S=f.get(m);S&&n.remove(S),f.set(m,x)}function v(m){const y=f.get(m);if(y){const M=m.index;M!==null&&y.version<M.version&&g(m)}else g(m);return f.get(m)}return{get:d,update:_,getWireframeAttribute:v}}function Zb(o,n,a){let s;function u(y){s=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function _(y,M){o.drawElements(s,M,f,y*h),a.update(M,s,1)}function g(y,M,A){A!==0&&(o.drawElementsInstanced(s,M,f,y*h,A),a.update(M,s,A))}function v(y,M,A){if(A===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,y,0,A);let x=0;for(let S=0;S<A;S++)x+=M[S];a.update(x,s,1)}function m(y,M,A,w){if(A===0)return;const x=n.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<y.length;S++)g(y[S]/h,M[S],w[S]);else{x.multiDrawElementsInstancedWEBGL(s,M,0,f,y,0,w,0,A);let S=0;for(let I=0;I<A;I++)S+=M[I]*w[I];a.update(S,s,1)}}this.setMode=u,this.setIndex=d,this.render=_,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function jb(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:u,update:s}}function Kb(o,n,a){const s=new WeakMap,u=new ke;function f(h,d,_){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==m){let C=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),w===!0&&(D=2),x===!0&&(D=3);let V=d.attributes.position.count*D,G=1;V>n.maxTextureSize&&(G=Math.ceil(V/n.maxTextureSize),V=n.maxTextureSize);const O=new Float32Array(V*G*4*m),k=new cS(O,V,G,m);k.type=xa,k.needsUpdate=!0;const R=D*4;for(let H=0;H<m;H++){const at=S[H],ut=I[H],gt=z[H],lt=V*G*4*H;for(let q=0;q<at.count;q++){const rt=q*R;A===!0&&(u.fromBufferAttribute(at,q),O[lt+rt+0]=u.x,O[lt+rt+1]=u.y,O[lt+rt+2]=u.z,O[lt+rt+3]=0),w===!0&&(u.fromBufferAttribute(ut,q),O[lt+rt+4]=u.x,O[lt+rt+5]=u.y,O[lt+rt+6]=u.z,O[lt+rt+7]=0),x===!0&&(u.fromBufferAttribute(gt,q),O[lt+rt+8]=u.x,O[lt+rt+9]=u.y,O[lt+rt+10]=u.z,O[lt+rt+11]=gt.itemSize===4?u.w:1)}}y={count:m,texture:k,size:new Ue(V,G)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let A=0;for(let x=0;x<g.length;x++)A+=g[x];const w=d.morphTargetsRelative?1:1-A;_.getUniforms().setValue(o,"morphTargetBaseInfluence",w),_.getUniforms().setValue(o,"morphTargetInfluences",g)}_.getUniforms().setValue(o,"morphTargetsTexture",y.texture,a),_.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function Qb(o,n,a,s){let u=new WeakMap;function f(_){const g=s.render.frame,v=_.geometry,m=n.get(_,v);if(u.get(m)!==g&&(n.update(m),u.set(m,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),u.get(_)!==g&&(a.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&a.update(_.instanceColor,o.ARRAY_BUFFER),u.set(_,g))),_.isSkinnedMesh){const y=_.skeleton;u.get(y)!==g&&(y.update(),u.set(y,g))}return m}function h(){u=new WeakMap}function d(_){const g=_.target;g.removeEventListener("dispose",d),a.remove(g.instanceMatrix),g.instanceColor!==null&&a.remove(g.instanceColor)}return{update:f,dispose:h}}const MS=new Zn,wv=new vS(1,1),ES=new cS,TS=new EE,bS=new _S,Dv=[],Uv=[],Nv=new Float32Array(16),Lv=new Float32Array(9),Ov=new Float32Array(4);function ro(o,n,a){const s=o[0];if(s<=0||s>0)return o;const u=n*a;let f=Dv[u];if(f===void 0&&(f=new Float32Array(u),Dv[u]=f),n!==0){s.toArray(f,0);for(let h=1,d=0;h!==n;++h)d+=a,o[h].toArray(f,d)}return f}function gn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function _n(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function _c(o,n){let a=Uv[n];a===void 0&&(a=new Int32Array(n),Uv[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function Jb(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function $b(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2fv(this.addr,n),_n(a,n)}}function tA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(gn(a,n))return;o.uniform3fv(this.addr,n),_n(a,n)}}function eA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4fv(this.addr,n),_n(a,n)}}function nA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;Ov.set(s),o.uniformMatrix2fv(this.addr,!1,Ov),_n(a,s)}}function iA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;Lv.set(s),o.uniformMatrix3fv(this.addr,!1,Lv),_n(a,s)}}function aA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;Nv.set(s),o.uniformMatrix4fv(this.addr,!1,Nv),_n(a,s)}}function rA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function sA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2iv(this.addr,n),_n(a,n)}}function oA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3iv(this.addr,n),_n(a,n)}}function lA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4iv(this.addr,n),_n(a,n)}}function uA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function cA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2uiv(this.addr,n),_n(a,n)}}function fA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3uiv(this.addr,n),_n(a,n)}}function hA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4uiv(this.addr,n),_n(a,n)}}function dA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(wv.compareFunction=lS,f=wv):f=MS,a.setTexture2D(n||f,u)}function pA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(n||TS,u)}function mA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(n||bS,u)}function gA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(n||ES,u)}function _A(o){switch(o){case 5126:return Jb;case 35664:return $b;case 35665:return tA;case 35666:return eA;case 35674:return nA;case 35675:return iA;case 35676:return aA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return oA;case 35669:case 35673:return lA;case 5125:return uA;case 36294:return cA;case 36295:return fA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}function vA(o,n){o.uniform1fv(this.addr,n)}function SA(o,n){const a=ro(n,this.size,2);o.uniform2fv(this.addr,a)}function yA(o,n){const a=ro(n,this.size,3);o.uniform3fv(this.addr,a)}function xA(o,n){const a=ro(n,this.size,4);o.uniform4fv(this.addr,a)}function MA(o,n){const a=ro(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function EA(o,n){const a=ro(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function TA(o,n){const a=ro(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function bA(o,n){o.uniform1iv(this.addr,n)}function AA(o,n){o.uniform2iv(this.addr,n)}function RA(o,n){o.uniform3iv(this.addr,n)}function CA(o,n){o.uniform4iv(this.addr,n)}function wA(o,n){o.uniform1uiv(this.addr,n)}function DA(o,n){o.uniform2uiv(this.addr,n)}function UA(o,n){o.uniform3uiv(this.addr,n)}function NA(o,n){o.uniform4uiv(this.addr,n)}function LA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture2D(n[h]||MS,f[h])}function OA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture3D(n[h]||TS,f[h])}function zA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTextureCube(n[h]||bS,f[h])}function PA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(n[h]||ES,f[h])}function IA(o){switch(o){case 5126:return vA;case 35664:return SA;case 35665:return yA;case 35666:return xA;case 35674:return MA;case 35675:return EA;case 35676:return TA;case 5124:case 35670:return bA;case 35667:case 35671:return AA;case 35668:case 35672:return RA;case 35669:case 35673:return CA;case 5125:return wA;case 36294:return DA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return PA}}class BA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=_A(a.type)}}class FA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=IA(a.type)}}class HA{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(n,a[d.id],s)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function zv(o,n){o.seq.push(n),o.map[n.id]=n}function GA(o,n,a){const s=o.name,u=s.length;for(Cd.lastIndex=0;;){const f=Cd.exec(s),h=Cd.lastIndex;let d=f[1];const _=f[2]==="]",g=f[3];if(_&&(d=d|0),g===void 0||g==="["&&h+2===u){zv(a,g===void 0?new BA(d,o,n):new FA(d,o,n));break}else{let m=a.map[d];m===void 0&&(m=new HA(d),zv(a,m)),a=m}}}class hc{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=n.getActiveUniform(a,u),h=n.getUniformLocation(a,f.name);GA(f,h,this)}}setValue(n,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(n,s,u)}setOptional(n,a,s){const u=a[s];u!==void 0&&this.setValue(n,s,u)}static upload(n,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],_=s[d.id];_.needsUpdate!==!1&&d.setValue(n,_.value,u)}}static seqWithValue(n,a){const s=[];for(let u=0,f=n.length;u!==f;++u){const h=n[u];h.id in a&&s.push(h)}return s}}function Pv(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const VA=37297;let XA=0;function kA(o,n){const a=o.split(`
`),s=[],u=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===n?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const Iv=new de;function qA(o){De._getMatrix(Iv,De.workingColorSpace,o);const n=`mat3( ${Iv.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case dc:return[n,"LinearTransferOETF"];case Xe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function Bv(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),f=(o.getShaderInfoLog(n)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return a.toUpperCase()+`

`+f+`

`+kA(o.getShaderSource(n),d)}else return f}function YA(o,n){const a=qA(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function WA(o,n){let a;switch(n){case JM:a="Linear";break;case $M:a="Reinhard";break;case tE:a="Cineon";break;case Qv:a="ACESFilmic";break;case nE:a="AgX";break;case iE:a="Neutral";break;case eE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const oc=new et;function ZA(){De.getLuminanceCoefficients(oc);const o=oc.x.toFixed(4),n=oc.y.toFixed(4),a=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function KA(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function QA(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(n,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(n,h),locationSize:d}}return a}function rl(o){return o!==""}function Fv(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Hv(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const JA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(o){return o.replace(JA,tR)}const $A=new Map;function tR(o,n){let a=pe[n];if(a===void 0){const s=$A.get(n);if(s!==void 0)a=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return vp(a)}const eR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(o){return o.replace(eR,nR)}function nR(o,n,a,s){let u="";for(let f=parseInt(n);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function Vv(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function iR(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Zv?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===jv?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Sa&&(n="SHADOWMAP_TYPE_VSM"),n}function aR(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case to:case eo:n="ENVMAP_TYPE_CUBE";break;case gc:n="ENVMAP_TYPE_CUBE_UV";break}return n}function rR(o){let n="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===eo&&(n="ENVMAP_MODE_REFRACTION"),n}function sR(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Kv:n="ENVMAP_BLENDING_MULTIPLY";break;case KM:n="ENVMAP_BLENDING_MIX";break;case QM:n="ENVMAP_BLENDING_ADD";break}return n}function oR(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function lR(o,n,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const _=iR(a),g=aR(a),v=rR(a),m=sR(a),y=oR(a),M=jA(a),A=KA(f),w=u.createProgram();let x,S,I=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A].filter(rl).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A].filter(rl).join(`
`),S.length>0&&(S+=`
`)):(x=[Vv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),S=[Vv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+g:"",a.envMap?"#define "+v:"",a.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==sr?"#define TONE_MAPPING":"",a.toneMapping!==sr?pe.tonemapping_pars_fragment:"",a.toneMapping!==sr?WA("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,YA("linearToOutputTexel",a.outputColorSpace),ZA(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(rl).join(`
`)),h=vp(h),h=Fv(h,a),h=Hv(h,a),d=vp(d),d=Fv(d,a),d=Hv(d,a),h=Gv(h),d=Gv(d),a.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",a.glslVersion===$0?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===$0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=I+x+h,D=I+S+d,V=Pv(u,u.VERTEX_SHADER,z),G=Pv(u,u.FRAGMENT_SHADER,D);u.attachShader(w,V),u.attachShader(w,G),a.index0AttributeName!==void 0?u.bindAttribLocation(w,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function O(H){if(o.debug.checkShaderErrors){const at=u.getProgramInfoLog(w)||"",ut=u.getShaderInfoLog(V)||"",gt=u.getShaderInfoLog(G)||"",lt=at.trim(),q=ut.trim(),rt=gt.trim();let j=!0,vt=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,V,G);else{const yt=Bv(u,V,"vertex"),Gt=Bv(u,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+yt+`
`+Gt)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(q===""||rt==="")&&(vt=!1);vt&&(H.diagnostics={runnable:j,programLog:lt,vertexShader:{log:q,prefix:x},fragmentShader:{log:rt,prefix:S}})}u.deleteShader(V),u.deleteShader(G),k=new hc(u,w),R=QA(u,w)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=u.getProgramParameter(w,VA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=XA++,this.cacheKey=n,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=G,this}let uR=0;class cR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(n);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new fR(n),a.set(n,s)),s}}class fR{constructor(n){this.id=uR++,this.code=n,this.usedTimes=0}}function hR(o,n,a,s,u,f,h){const d=new fS,_=new cR,g=new Set,v=[],m=u.logarithmicDepthBuffer,y=u.vertexTextures;let M=u.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return g.add(R),R===0?"uv":`uv${R}`}function x(R,C,H,at,ut){const gt=at.fog,lt=ut.geometry,q=R.isMeshStandardMaterial?at.environment:null,rt=(R.isMeshStandardMaterial?a:n).get(R.envMap||q),j=rt&&rt.mapping===gc?rt.image.height:null,vt=A[R.type];R.precision!==null&&(M=u.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const yt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Gt=yt!==void 0?yt.length:0;let se=0;lt.morphAttributes.position!==void 0&&(se=1),lt.morphAttributes.normal!==void 0&&(se=2),lt.morphAttributes.color!==void 0&&(se=3);let Te,P,ct,J;if(vt){const ye=qi[vt];Te=ye.vertexShader,P=ye.fragmentShader}else Te=R.vertexShader,P=R.fragmentShader,_.update(R),ct=_.getVertexShaderID(R),J=_.getFragmentShaderID(R);const it=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Nt=ut.isInstancedMesh===!0,Rt=ut.isBatchedMesh===!0,Et=!!R.map,Yt=!!R.matcap,L=!!rt,He=!!R.aoMap,re=!!R.lightMap,Qt=!!R.bumpMap,Lt=!!R.normalMap,ie=!!R.displacementMap,Ft=!!R.emissiveMap,oe=!!R.metalnessMap,qe=!!R.roughnessMap,We=R.anisotropy>0,U=R.clearcoat>0,T=R.dispersion>0,tt=R.iridescence>0,pt=R.sheen>0,St=R.transmission>0,ht=We&&!!R.anisotropyMap,Xt=U&&!!R.clearcoatMap,Ct=U&&!!R.clearcoatNormalMap,Zt=U&&!!R.clearcoatRoughnessMap,Kt=tt&&!!R.iridescenceMap,bt=tt&&!!R.iridescenceThicknessMap,Ot=pt&&!!R.sheenColorMap,ne=pt&&!!R.sheenRoughnessMap,jt=!!R.specularMap,zt=!!R.specularColorMap,ce=!!R.specularIntensityMap,F=St&&!!R.transmissionMap,At=St&&!!R.thicknessMap,Dt=!!R.gradientMap,Vt=!!R.alphaMap,xt=R.alphaTest>0,_t=!!R.alphaHash,Wt=!!R.extensions;let ue=sr;R.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ge={shaderID:vt,shaderType:R.type,shaderName:R.name,vertexShader:Te,fragmentShader:P,defines:R.defines,customVertexShaderID:ct,customFragmentShaderID:J,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&ut._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&ut.instanceColor!==null,instancingMorph:Nt&&ut.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:no,alphaToCoverage:!!R.alphaToCoverage,map:Et,matcap:Yt,envMap:L,envMapMode:L&&rt.mapping,envMapCubeUVHeight:j,aoMap:He,lightMap:re,bumpMap:Qt,normalMap:Lt,displacementMap:y&&ie,emissiveMap:Ft,normalMapObjectSpace:Lt&&R.normalMapType===oE,normalMapTangentSpace:Lt&&R.normalMapType===oS,metalnessMap:oe,roughnessMap:qe,anisotropy:We,anisotropyMap:ht,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Zt,dispersion:T,iridescence:tt,iridescenceMap:Kt,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Ot,sheenRoughnessMap:ne,specularMap:jt,specularColorMap:zt,specularIntensityMap:ce,transmission:St,transmissionMap:F,thicknessMap:At,gradientMap:Dt,opaque:R.transparent===!1&&R.blending===Qs&&R.alphaToCoverage===!1,alphaMap:Vt,alphaTest:xt,alphaHash:_t,combine:R.combine,mapUv:Et&&w(R.map.channel),aoMapUv:He&&w(R.aoMap.channel),lightMapUv:re&&w(R.lightMap.channel),bumpMapUv:Qt&&w(R.bumpMap.channel),normalMapUv:Lt&&w(R.normalMap.channel),displacementMapUv:ie&&w(R.displacementMap.channel),emissiveMapUv:Ft&&w(R.emissiveMap.channel),metalnessMapUv:oe&&w(R.metalnessMap.channel),roughnessMapUv:qe&&w(R.roughnessMap.channel),anisotropyMapUv:ht&&w(R.anisotropyMap.channel),clearcoatMapUv:Xt&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:ne&&w(R.sheenRoughnessMap.channel),specularMapUv:jt&&w(R.specularMap.channel),specularColorMapUv:zt&&w(R.specularColorMap.channel),specularIntensityMapUv:ce&&w(R.specularIntensityMap.channel),transmissionMapUv:F&&w(R.transmissionMap.channel),thicknessMapUv:At&&w(R.thicknessMap.channel),alphaMapUv:Vt&&w(R.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Lt||We),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!lt.attributes.uv&&(Et||Vt),fog:!!gt,useFog:R.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Mt,skinning:ut.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Et&&R.map.isVideoTexture===!0&&De.getTransfer(R.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ft&&R.emissiveMap.isVideoTexture===!0&&De.getTransfer(R.emissiveMap.colorSpace)===Xe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ya,flipSided:R.side===Wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Wt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&R.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ge.vertexUv1s=g.has(1),Ge.vertexUv2s=g.has(2),Ge.vertexUv3s=g.has(3),g.clear(),Ge}function S(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)C.push(H),C.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(I(C,R),z(C,R),C.push(o.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function I(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function z(R,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),R.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const C=A[R.type];let H;if(C){const at=qi[C];H=IE.clone(at.uniforms)}else H=R.uniforms;return H}function V(R,C){let H;for(let at=0,ut=v.length;at<ut;at++){const gt=v[at];if(gt.cacheKey===C){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new lR(o,C,R,f),v.push(H)),H}function G(R){if(--R.usedTimes===0){const C=v.indexOf(R);v[C]=v[v.length-1],v.pop(),R.destroy()}}function O(R){_.remove(R)}function k(){_.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:D,acquireProgram:V,releaseProgram:G,releaseShaderCache:O,programs:v,dispose:k}}function dR(){let o=new WeakMap;function n(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:u,dispose:f}}function pR(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function Xv(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function kv(){const o=[];let n=0;const a=[],s=[],u=[];function f(){n=0,a.length=0,s.length=0,u.length=0}function h(m,y,M,A,w,x){let S=o[n];return S===void 0?(S={id:m.id,object:m,geometry:y,material:M,groupOrder:A,renderOrder:m.renderOrder,z:w,group:x},o[n]=S):(S.id=m.id,S.object=m,S.geometry=y,S.material=M,S.groupOrder=A,S.renderOrder=m.renderOrder,S.z=w,S.group=x),n++,S}function d(m,y,M,A,w,x){const S=h(m,y,M,A,w,x);M.transmission>0?s.push(S):M.transparent===!0?u.push(S):a.push(S)}function _(m,y,M,A,w,x){const S=h(m,y,M,A,w,x);M.transmission>0?s.unshift(S):M.transparent===!0?u.unshift(S):a.unshift(S)}function g(m,y){a.length>1&&a.sort(m||pR),s.length>1&&s.sort(y||Xv),u.length>1&&u.sort(y||Xv)}function v(){for(let m=n,y=o.length;m<y;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:_,finish:v,sort:g}}function mR(){let o=new WeakMap;function n(s,u){const f=o.get(s);let h;return f===void 0?(h=new kv,o.set(s,[h])):u>=f.length?(h=new kv,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:n,dispose:a}}function gR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new et,color:new Ae};break;case"SpotLight":a={position:new et,direction:new et,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new et,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":a={direction:new et,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":a={color:new Ae,position:new et,halfWidth:new et,halfHeight:new et};break}return o[n.id]=a,a}}}function _R(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let vR=0;function SR(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function yR(o){const n=new gR,a=_R(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new et);const u=new et,f=new rn,h=new rn;function d(g){let v=0,m=0,y=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let M=0,A=0,w=0,x=0,S=0,I=0,z=0,D=0,V=0,G=0,O=0;g.sort(SR);for(let R=0,C=g.length;R<C;R++){const H=g[R],at=H.color,ut=H.intensity,gt=H.distance,lt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=at.r*ut,m+=at.g*ut,y+=at.b*ut;else if(H.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(H.sh.coefficients[q],ut);O++}else if(H.isDirectionalLight){const q=n.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const rt=H.shadow,j=a.get(H);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=lt,s.directionalShadowMatrix[M]=H.shadow.matrix,I++}s.directional[M]=q,M++}else if(H.isSpotLight){const q=n.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(at).multiplyScalar(ut),q.distance=gt,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,s.spot[w]=q;const rt=H.shadow;if(H.map&&(s.spotLightMap[V]=H.map,V++,rt.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[w]=rt.matrix,H.castShadow){const j=a.get(H);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,s.spotShadow[w]=j,s.spotShadowMap[w]=lt,D++}w++}else if(H.isRectAreaLight){const q=n.get(H);q.color.copy(at).multiplyScalar(ut),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),s.rectArea[x]=q,x++}else if(H.isPointLight){const q=n.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),q.distance=H.distance,q.decay=H.decay,H.castShadow){const rt=H.shadow,j=a.get(H);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,j.shadowCameraNear=rt.camera.near,j.shadowCameraFar=rt.camera.far,s.pointShadow[A]=j,s.pointShadowMap[A]=lt,s.pointShadowMatrix[A]=H.shadow.matrix,z++}s.point[A]=q,A++}else if(H.isHemisphereLight){const q=n.get(H);q.skyColor.copy(H.color).multiplyScalar(ut),q.groundColor.copy(H.groundColor).multiplyScalar(ut),s.hemi[S]=q,S++}}x>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=y;const k=s.hash;(k.directionalLength!==M||k.pointLength!==A||k.spotLength!==w||k.rectAreaLength!==x||k.hemiLength!==S||k.numDirectionalShadows!==I||k.numPointShadows!==z||k.numSpotShadows!==D||k.numSpotMaps!==V||k.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=x,s.point.length=A,s.hemi.length=S,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+V-G,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=O,k.directionalLength=M,k.pointLength=A,k.spotLength=w,k.rectAreaLength=x,k.hemiLength=S,k.numDirectionalShadows=I,k.numPointShadows=z,k.numSpotShadows=D,k.numSpotMaps=V,k.numLightProbes=O,s.version=vR++)}function _(g,v){let m=0,y=0,M=0,A=0,w=0;const x=v.matrixWorldInverse;for(let S=0,I=g.length;S<I;S++){const z=g[S];if(z.isDirectionalLight){const D=s.directional[m];D.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(x),m++}else if(z.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(x),M++}else if(z.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(x),h.identity(),f.copy(z.matrixWorld),f.premultiply(x),h.extractRotation(f),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(z.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(x),y++}else if(z.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(x),w++}}}return{setup:d,setupView:_,state:s}}function qv(o){const n=new yR(o),a=[],s=[];function u(v){g.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){n.setup(a)}function _(v){n.setupView(a,v)}const g={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:u,state:g,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function xR(o){let n=new WeakMap;function a(u,f=0){const h=n.get(u);let d;return h===void 0?(d=new qv(o),n.set(u,[d])):f>=h.length?(d=new qv(o),h.push(d)):d=h[f],d}function s(){n=new WeakMap}return{get:a,dispose:s}}const MR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ER=`uniform sampler2D shadow_pass;
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
}`;function TR(o,n,a){let s=new Dp;const u=new Ue,f=new Ue,h=new ke,d=new WE({depthPacking:sE}),_=new ZE,g={},v=a.maxTextureSize,m={[or]:Wn,[Wn]:or,[ya]:ya},y=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:MR,fragmentShader:ER}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new Zr;A.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Mn(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let S=this.type;this.render=function(G,O,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||G.length===0)return;const R=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),at=o.state;at.setBlending(rr),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ut=S!==Sa&&this.type===Sa,gt=S===Sa&&this.type!==Sa;for(let lt=0,q=G.length;lt<q;lt++){const rt=G[lt],j=rt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;u.copy(j.mapSize);const vt=j.getFrameExtents();if(u.multiply(vt),f.copy(j.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/vt.x),u.x=f.x*vt.x,j.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/vt.y),u.y=f.y*vt.y,j.mapSize.y=f.y)),j.map===null||ut===!0||gt===!0){const Gt=this.type!==Sa?{minFilter:Ni,magFilter:Ni}:{};j.map!==null&&j.map.dispose(),j.map=new Wr(u.x,u.y,Gt),j.map.texture.name=rt.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const yt=j.getViewportCount();for(let Gt=0;Gt<yt;Gt++){const se=j.getViewport(Gt);h.set(f.x*se.x,f.y*se.y,f.x*se.z,f.y*se.w),at.viewport(h),j.updateMatrices(rt,Gt),s=j.getFrustum(),D(O,k,j.camera,rt,this.type)}j.isPointLightShadow!==!0&&this.type===Sa&&I(j,k),j.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(R,C,H)};function I(G,O){const k=n.update(w);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Wr(u.x,u.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(O,null,k,y,w,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(O,null,k,M,w,null)}function z(G,O,k,R){let C=null;const H=k.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)C=H;else if(C=k.isPointLight===!0?_:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const at=C.uuid,ut=O.uuid;let gt=g[at];gt===void 0&&(gt={},g[at]=gt);let lt=gt[ut];lt===void 0&&(lt=C.clone(),gt[ut]=lt,O.addEventListener("dispose",V)),C=lt}if(C.visible=O.visible,C.wireframe=O.wireframe,R===Sa?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:m[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=k}return C}function D(G,O,k,R,C){if(G.visible===!1)return;if(G.layers.test(O.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===Sa)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,G.matrixWorld);const ut=n.update(G),gt=G.material;if(Array.isArray(gt)){const lt=ut.groups;for(let q=0,rt=lt.length;q<rt;q++){const j=lt[q],vt=gt[j.materialIndex];if(vt&&vt.visible){const yt=z(G,vt,R,C);G.onBeforeShadow(o,G,O,k,ut,yt,j),o.renderBufferDirect(k,null,ut,yt,G,j),G.onAfterShadow(o,G,O,k,ut,yt,j)}}}else if(gt.visible){const lt=z(G,gt,R,C);G.onBeforeShadow(o,G,O,k,ut,lt,null),o.renderBufferDirect(k,null,ut,lt,G,null),G.onAfterShadow(o,G,O,k,ut,lt,null)}}const at=G.children;for(let ut=0,gt=at.length;ut<gt;ut++)D(at[ut],O,k,R,C)}function V(G){G.target.removeEventListener("dispose",V);for(const k in g){const R=g[k],C=G.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const bR={[Nd]:Ld,[Od]:Id,[zd]:Bd,[$s]:Pd,[Ld]:Nd,[Id]:Od,[Bd]:zd,[Pd]:$s};function AR(o,n){function a(){let F=!1;const At=new ke;let Dt=null;const Vt=new ke(0,0,0,0);return{setMask:function(xt){Dt!==xt&&!F&&(o.colorMask(xt,xt,xt,xt),Dt=xt)},setLocked:function(xt){F=xt},setClear:function(xt,_t,Wt,ue,Ge){Ge===!0&&(xt*=ue,_t*=ue,Wt*=ue),At.set(xt,_t,Wt,ue),Vt.equals(At)===!1&&(o.clearColor(xt,_t,Wt,ue),Vt.copy(At))},reset:function(){F=!1,Dt=null,Vt.set(-1,0,0,0)}}}function s(){let F=!1,At=!1,Dt=null,Vt=null,xt=null;return{setReversed:function(_t){if(At!==_t){const Wt=n.get("EXT_clip_control");_t?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),At=_t;const ue=xt;xt=null,this.setClear(ue)}},getReversed:function(){return At},setTest:function(_t){_t?it(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(_t){Dt!==_t&&!F&&(o.depthMask(_t),Dt=_t)},setFunc:function(_t){if(At&&(_t=bR[_t]),Vt!==_t){switch(_t){case Nd:o.depthFunc(o.NEVER);break;case Ld:o.depthFunc(o.ALWAYS);break;case Od:o.depthFunc(o.LESS);break;case $s:o.depthFunc(o.LEQUAL);break;case zd:o.depthFunc(o.EQUAL);break;case Pd:o.depthFunc(o.GEQUAL);break;case Id:o.depthFunc(o.GREATER);break;case Bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=_t}},setLocked:function(_t){F=_t},setClear:function(_t){xt!==_t&&(At&&(_t=1-_t),o.clearDepth(_t),xt=_t)},reset:function(){F=!1,Dt=null,Vt=null,xt=null,At=!1}}}function u(){let F=!1,At=null,Dt=null,Vt=null,xt=null,_t=null,Wt=null,ue=null,Ge=null;return{setTest:function(ye){F||(ye?it(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(ye){At!==ye&&!F&&(o.stencilMask(ye),At=ye)},setFunc:function(ye,$e,dn){(Dt!==ye||Vt!==$e||xt!==dn)&&(o.stencilFunc(ye,$e,dn),Dt=ye,Vt=$e,xt=dn)},setOp:function(ye,$e,dn){(_t!==ye||Wt!==$e||ue!==dn)&&(o.stencilOp(ye,$e,dn),_t=ye,Wt=$e,ue=dn)},setLocked:function(ye){F=ye},setClear:function(ye){Ge!==ye&&(o.clearStencil(ye),Ge=ye)},reset:function(){F=!1,At=null,Dt=null,Vt=null,xt=null,_t=null,Wt=null,ue=null,Ge=null}}}const f=new a,h=new s,d=new u,_=new WeakMap,g=new WeakMap;let v={},m={},y=new WeakMap,M=[],A=null,w=!1,x=null,S=null,I=null,z=null,D=null,V=null,G=null,O=new Ae(0,0,0),k=0,R=!1,C=null,H=null,at=null,ut=null,gt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,rt=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=rt>=1):j.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=rt>=2);let vt=null,yt={};const Gt=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),Te=new ke().fromArray(Gt),P=new ke().fromArray(se);function ct(F,At,Dt,Vt){const xt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(F,_t),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Dt;Wt++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,xt):o.texImage2D(At+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xt);return _t}const J={};J[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc($s),Qt(!1),Lt(W0),it(o.CULL_FACE),He(rr);function it(F){v[F]!==!0&&(o.enable(F),v[F]=!0)}function Mt(F){v[F]!==!1&&(o.disable(F),v[F]=!1)}function Nt(F,At){return m[F]!==At?(o.bindFramebuffer(F,At),m[F]=At,F===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=At),F===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Rt(F,At){let Dt=M,Vt=!1;if(F){Dt=y.get(At),Dt===void 0&&(Dt=[],y.set(At,Dt));const xt=F.textures;if(Dt.length!==xt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Wt=xt.length;_t<Wt;_t++)Dt[_t]=o.COLOR_ATTACHMENT0+_t;Dt.length=xt.length,Vt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(Dt)}function Et(F){return A!==F?(o.useProgram(F),A=F,!0):!1}const Yt={[Gr]:o.FUNC_ADD,[LM]:o.FUNC_SUBTRACT,[OM]:o.FUNC_REVERSE_SUBTRACT};Yt[zM]=o.MIN,Yt[PM]=o.MAX;const L={[IM]:o.ZERO,[BM]:o.ONE,[FM]:o.SRC_COLOR,[Dd]:o.SRC_ALPHA,[qM]:o.SRC_ALPHA_SATURATE,[XM]:o.DST_COLOR,[GM]:o.DST_ALPHA,[HM]:o.ONE_MINUS_SRC_COLOR,[Ud]:o.ONE_MINUS_SRC_ALPHA,[kM]:o.ONE_MINUS_DST_COLOR,[VM]:o.ONE_MINUS_DST_ALPHA,[YM]:o.CONSTANT_COLOR,[WM]:o.ONE_MINUS_CONSTANT_COLOR,[ZM]:o.CONSTANT_ALPHA,[jM]:o.ONE_MINUS_CONSTANT_ALPHA};function He(F,At,Dt,Vt,xt,_t,Wt,ue,Ge,ye){if(F===rr){w===!0&&(Mt(o.BLEND),w=!1);return}if(w===!1&&(it(o.BLEND),w=!0),F!==NM){if(F!==x||ye!==R){if((S!==Gr||D!==Gr)&&(o.blendEquation(o.FUNC_ADD),S=Gr,D=Gr),ye)switch(F){case Qs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Z0:o.blendFunc(o.ONE,o.ONE);break;case j0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case K0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Qs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Z0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case j0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}I=null,z=null,V=null,G=null,O.set(0,0,0),k=0,x=F,R=ye}return}xt=xt||At,_t=_t||Dt,Wt=Wt||Vt,(At!==S||xt!==D)&&(o.blendEquationSeparate(Yt[At],Yt[xt]),S=At,D=xt),(Dt!==I||Vt!==z||_t!==V||Wt!==G)&&(o.blendFuncSeparate(L[Dt],L[Vt],L[_t],L[Wt]),I=Dt,z=Vt,V=_t,G=Wt),(ue.equals(O)===!1||Ge!==k)&&(o.blendColor(ue.r,ue.g,ue.b,Ge),O.copy(ue),k=Ge),x=F,R=!1}function re(F,At){F.side===ya?Mt(o.CULL_FACE):it(o.CULL_FACE);let Dt=F.side===Wn;At&&(Dt=!Dt),Qt(Dt),F.blending===Qs&&F.transparent===!1?He(rr):He(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),h.setFunc(F.depthFunc),h.setTest(F.depthTest),h.setMask(F.depthWrite),f.setMask(F.colorWrite);const Vt=F.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ft(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(F){C!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),C=F)}function Lt(F){F!==DM?(it(o.CULL_FACE),F!==H&&(F===W0?o.cullFace(o.BACK):F===UM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),H=F}function ie(F){F!==at&&(q&&o.lineWidth(F),at=F)}function Ft(F,At,Dt){F?(it(o.POLYGON_OFFSET_FILL),(ut!==At||gt!==Dt)&&(o.polygonOffset(At,Dt),ut=At,gt=Dt)):Mt(o.POLYGON_OFFSET_FILL)}function oe(F){F?it(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function qe(F){F===void 0&&(F=o.TEXTURE0+lt-1),vt!==F&&(o.activeTexture(F),vt=F)}function We(F,At,Dt){Dt===void 0&&(vt===null?Dt=o.TEXTURE0+lt-1:Dt=vt);let Vt=yt[Dt];Vt===void 0&&(Vt={type:void 0,texture:void 0},yt[Dt]=Vt),(Vt.type!==F||Vt.texture!==At)&&(vt!==Dt&&(o.activeTexture(Dt),vt=Dt),o.bindTexture(F,At||J[F]),Vt.type=F,Vt.texture=At)}function U(){const F=yt[vt];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{o.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{o.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{o.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{o.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{o.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{o.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){Te.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),Te.copy(F))}function ne(F){P.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),P.copy(F))}function jt(F,At){let Dt=g.get(At);Dt===void 0&&(Dt=new WeakMap,g.set(At,Dt));let Vt=Dt.get(F);Vt===void 0&&(Vt=o.getUniformBlockIndex(At,F.name),Dt.set(F,Vt))}function zt(F,At){const Vt=g.get(At).get(F);_.get(At)!==Vt&&(o.uniformBlockBinding(At,Vt,F.__bindingPointIndex),_.set(At,Vt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,yt={},m={},y=new WeakMap,M=[],A=null,w=!1,x=null,S=null,I=null,z=null,D=null,V=null,G=null,O=new Ae(0,0,0),k=0,R=!1,C=null,H=null,at=null,ut=null,gt=null,Te.set(0,0,o.canvas.width,o.canvas.height),P.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:Mt,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:Et,setBlending:He,setMaterial:re,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:qe,bindTexture:We,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Kt,texImage3D:bt,updateUBOMapping:jt,uniformBlockBinding:zt,texStorage2D:Ct,texStorage3D:Zt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:Xt,scissor:Ot,viewport:ne,reset:ce}}function RR(o,n,a,s,u,f,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Ue,v=new WeakMap;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,T){return M?new OffscreenCanvas(U,T):mc("canvas")}function w(U,T,tt){let pt=1;const St=We(U);if((St.width>tt||St.height>tt)&&(pt=tt/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(pt*St.width),Xt=Math.floor(pt*St.height);m===void 0&&(m=A(ht,Xt));const Ct=T?A(ht,Xt):m;return Ct.width=ht,Ct.height=Xt,Ct.getContext("2d").drawImage(U,0,0,ht,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ht+"x"+Xt+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function x(U){return U.generateMipmaps}function S(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,T,tt,pt,St=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=T;if(T===o.RED&&(tt===o.FLOAT&&(ht=o.R32F),tt===o.HALF_FLOAT&&(ht=o.R16F),tt===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.R8UI),tt===o.UNSIGNED_SHORT&&(ht=o.R16UI),tt===o.UNSIGNED_INT&&(ht=o.R32UI),tt===o.BYTE&&(ht=o.R8I),tt===o.SHORT&&(ht=o.R16I),tt===o.INT&&(ht=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ht=o.RG32F),tt===o.HALF_FLOAT&&(ht=o.RG16F),tt===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RG16UI),tt===o.UNSIGNED_INT&&(ht=o.RG32UI),tt===o.BYTE&&(ht=o.RG8I),tt===o.SHORT&&(ht=o.RG16I),tt===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),tt===o.UNSIGNED_INT&&(ht=o.RGB32UI),tt===o.BYTE&&(ht=o.RGB8I),tt===o.SHORT&&(ht=o.RGB16I),tt===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ht=o.RGBA32UI),tt===o.BYTE&&(ht=o.RGBA8I),tt===o.SHORT&&(ht=o.RGBA16I),tt===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),T===o.RGBA){const Xt=St?dc:De.getTransfer(pt);tt===o.FLOAT&&(ht=o.RGBA32F),tt===o.HALF_FLOAT&&(ht=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ht=Xt===Xe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&n.get("EXT_color_buffer_float"),ht}function D(U,T){let tt;return U?T===null||T===Yr||T===ll?tt=o.DEPTH24_STENCIL8:T===xa?tt=o.DEPTH32F_STENCIL8:T===ol&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yr||T===ll?tt=o.DEPTH_COMPONENT24:T===xa?tt=o.DEPTH_COMPONENT32F:T===ol&&(tt=o.DEPTH_COMPONENT16),tt}function V(U,T){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ni&&U.minFilter!==Wi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),k(T),T.isVideoTexture&&v.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),C(T)}function k(U){const T=s.get(U);if(T.__webglInit===void 0)return;const tt=U.source,pt=y.get(tt);if(pt){const St=pt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&R(U),Object.keys(pt).length===0&&y.delete(tt)}s.remove(U)}function R(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const tt=U.source,pt=y.get(tt);delete pt[T.__cacheKey],h.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let St=0;St<T.__webglFramebuffer[pt].length;St++)o.deleteFramebuffer(T.__webglFramebuffer[pt][St]);else o.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[pt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=U.textures;for(let pt=0,St=tt.length;pt<St;pt++){const ht=s.get(tt[pt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(tt[pt])}s.remove(U)}let H=0;function at(){H=0}function ut(){const U=H;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),H+=1,U}function gt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function lt(U,T){const tt=s.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(tt,U,T);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function q(U,T){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){J(tt,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function rt(U,T){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){J(tt,U,T);return}a.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function j(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){it(tt,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const vt={[Gd]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[Vd]:o.MIRRORED_REPEAT},yt={[Ni]:o.NEAREST,[aE]:o.NEAREST_MIPMAP_NEAREST,[Gu]:o.NEAREST_MIPMAP_LINEAR,[Wi]:o.LINEAR,[Kh]:o.LINEAR_MIPMAP_NEAREST,[kr]:o.LINEAR_MIPMAP_LINEAR},Gt={[lE]:o.NEVER,[pE]:o.ALWAYS,[uE]:o.LESS,[lS]:o.LEQUAL,[cE]:o.EQUAL,[dE]:o.GEQUAL,[fE]:o.GREATER,[hE]:o.NOTEQUAL};function se(U,T){if(T.type===xa&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===Wi||T.magFilter===Kh||T.magFilter===Gu||T.magFilter===kr||T.minFilter===Wi||T.minFilter===Kh||T.minFilter===Gu||T.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Gt[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ni||T.minFilter!==Gu&&T.minFilter!==kr||T.type===xa&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=n.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Te(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const pt=T.source;let St=y.get(pt);St===void 0&&(St={},y.set(pt,St));const ht=gt(T);if(ht!==U.__cacheKey){St[ht]===void 0&&(St[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),St[ht].usedTimes++;const Xt=St[U.__cacheKey];Xt!==void 0&&(St[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&R(T)),U.__cacheKey=ht,U.__webglTexture=St[ht].texture}return tt}function P(U,T,tt){return Math.floor(Math.floor(U/tt)/T)}function ct(U,T,tt,pt){const ht=U.updateRanges;if(ht.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,tt,pt,T.data);else{ht.sort((bt,Ot)=>bt.start-Ot.start);let Xt=0;for(let bt=1;bt<ht.length;bt++){const Ot=ht[Xt],ne=ht[bt],jt=Ot.start+Ot.count,zt=P(ne.start,T.width,4),ce=P(Ot.start,T.width,4);ne.start<=jt+1&&zt===ce&&P(ne.start+ne.count-1,T.width,4)===zt?Ot.count=Math.max(Ot.count,ne.start+ne.count-Ot.start):(++Xt,ht[Xt]=ne)}ht.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let bt=0,Ot=ht.length;bt<Ot;bt++){const ne=ht[bt],jt=Math.floor(ne.start/4),zt=Math.ceil(ne.count/4),ce=jt%T.width,F=Math.floor(jt/T.width),At=zt,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,F),a.texSubImage2D(o.TEXTURE_2D,0,ce,F,At,Dt,tt,pt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function J(U,T,tt){let pt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=o.TEXTURE_3D);const St=Te(U,T),ht=T.source;a.bindTexture(pt,U.__webglTexture,o.TEXTURE0+tt);const Xt=s.get(ht);if(ht.version!==Xt.__version||St===!0){a.activeTexture(o.TEXTURE0+tt);const Ct=De.getPrimaries(De.workingColorSpace),Zt=T.colorSpace===ir?null:De.getPrimaries(T.colorSpace),Kt=T.colorSpace===ir||Ct===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let bt=w(T.image,!1,u.maxTextureSize);bt=qe(T,bt);const Ot=f.convert(T.format,T.colorSpace),ne=f.convert(T.type);let jt=z(T.internalFormat,Ot,ne,T.colorSpace,T.isVideoTexture);se(pt,T);let zt;const ce=T.mipmaps,F=T.isVideoTexture!==!0,At=Xt.__version===void 0||St===!0,Dt=ht.dataReady,Vt=V(T,bt);if(T.isDepthTexture)jt=D(T.format===cl,T.type),At&&(F?a.texStorage2D(o.TEXTURE_2D,1,jt,bt.width,bt.height):a.texImage2D(o.TEXTURE_2D,0,jt,bt.width,bt.height,0,Ot,ne,null));else if(T.isDataTexture)if(ce.length>0){F&&At&&a.texStorage2D(o.TEXTURE_2D,Vt,jt,ce[0].width,ce[0].height);for(let xt=0,_t=ce.length;xt<_t;xt++)zt=ce[xt],F?Dt&&a.texSubImage2D(o.TEXTURE_2D,xt,0,0,zt.width,zt.height,Ot,ne,zt.data):a.texImage2D(o.TEXTURE_2D,xt,jt,zt.width,zt.height,0,Ot,ne,zt.data);T.generateMipmaps=!1}else F?(At&&a.texStorage2D(o.TEXTURE_2D,Vt,jt,bt.width,bt.height),Dt&&ct(T,bt,Ot,ne)):a.texImage2D(o.TEXTURE_2D,0,jt,bt.width,bt.height,0,Ot,ne,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&At&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,jt,ce[0].width,ce[0].height,bt.depth);for(let xt=0,_t=ce.length;xt<_t;xt++)if(zt=ce[xt],T.format!==Ui)if(Ot!==null)if(F){if(Dt)if(T.layerUpdates.size>0){const Wt=xv(zt.width,zt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ge=zt.data.subarray(ue*Wt/zt.data.BYTES_PER_ELEMENT,(ue+1)*Wt/zt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,ue,zt.width,zt.height,1,Ot,Ge)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,zt.width,zt.height,bt.depth,Ot,zt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,jt,zt.width,zt.height,bt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Dt&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,zt.width,zt.height,bt.depth,Ot,ne,zt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,xt,jt,zt.width,zt.height,bt.depth,0,Ot,ne,zt.data)}else{F&&At&&a.texStorage2D(o.TEXTURE_2D,Vt,jt,ce[0].width,ce[0].height);for(let xt=0,_t=ce.length;xt<_t;xt++)zt=ce[xt],T.format!==Ui?Ot!==null?F?Dt&&a.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,zt.width,zt.height,Ot,zt.data):a.compressedTexImage2D(o.TEXTURE_2D,xt,jt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Dt&&a.texSubImage2D(o.TEXTURE_2D,xt,0,0,zt.width,zt.height,Ot,ne,zt.data):a.texImage2D(o.TEXTURE_2D,xt,jt,zt.width,zt.height,0,Ot,ne,zt.data)}else if(T.isDataArrayTexture)if(F){if(At&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,jt,bt.width,bt.height,bt.depth),Dt)if(T.layerUpdates.size>0){const xt=xv(bt.width,bt.height,T.format,T.type);for(const _t of T.layerUpdates){const Wt=bt.data.subarray(_t*xt/bt.data.BYTES_PER_ELEMENT,(_t+1)*xt/bt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Ot,ne,Wt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(T.isData3DTexture)F?(At&&a.texStorage3D(o.TEXTURE_3D,Vt,jt,bt.width,bt.height,bt.depth),Dt&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)):a.texImage3D(o.TEXTURE_3D,0,jt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(T.isFramebufferTexture){if(At)if(F)a.texStorage2D(o.TEXTURE_2D,Vt,jt,bt.width,bt.height);else{let xt=bt.width,_t=bt.height;for(let Wt=0;Wt<Vt;Wt++)a.texImage2D(o.TEXTURE_2D,Wt,jt,xt,_t,0,Ot,ne,null),xt>>=1,_t>>=1}}else if(ce.length>0){if(F&&At){const xt=We(ce[0]);a.texStorage2D(o.TEXTURE_2D,Vt,jt,xt.width,xt.height)}for(let xt=0,_t=ce.length;xt<_t;xt++)zt=ce[xt],F?Dt&&a.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot,ne,zt):a.texImage2D(o.TEXTURE_2D,xt,jt,Ot,ne,zt);T.generateMipmaps=!1}else if(F){if(At){const xt=We(bt);a.texStorage2D(o.TEXTURE_2D,Vt,jt,xt.width,xt.height)}Dt&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ne,bt)}else a.texImage2D(o.TEXTURE_2D,0,jt,Ot,ne,bt);x(T)&&S(pt),Xt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function it(U,T,tt){if(T.image.length!==6)return;const pt=Te(U,T),St=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const ht=s.get(St);if(St.version!==ht.__version||pt===!0){a.activeTexture(o.TEXTURE0+tt);const Xt=De.getPrimaries(De.workingColorSpace),Ct=T.colorSpace===ir?null:De.getPrimaries(T.colorSpace),Zt=T.colorSpace===ir||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let _t=0;_t<6;_t++)!Kt&&!bt?Ot[_t]=w(T.image[_t],!0,u.maxCubemapSize):Ot[_t]=bt?T.image[_t].image:T.image[_t],Ot[_t]=qe(T,Ot[_t]);const ne=Ot[0],jt=f.convert(T.format,T.colorSpace),zt=f.convert(T.type),ce=z(T.internalFormat,jt,zt,T.colorSpace),F=T.isVideoTexture!==!0,At=ht.__version===void 0||pt===!0,Dt=St.dataReady;let Vt=V(T,ne);se(o.TEXTURE_CUBE_MAP,T);let xt;if(Kt){F&&At&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ce,ne.width,ne.height);for(let _t=0;_t<6;_t++){xt=Ot[_t].mipmaps;for(let Wt=0;Wt<xt.length;Wt++){const ue=xt[Wt];T.format!==Ui?jt!==null?F?Dt&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,ue.width,ue.height,jt,ue.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,ue.width,ue.height,jt,zt,ue.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,ce,ue.width,ue.height,0,jt,zt,ue.data)}}}else{if(xt=T.mipmaps,F&&At){xt.length>0&&Vt++;const _t=We(Ot[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ce,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){F?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot[_t].width,Ot[_t].height,jt,zt,Ot[_t].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Ot[_t].width,Ot[_t].height,0,jt,zt,Ot[_t].data);for(let Wt=0;Wt<xt.length;Wt++){const Ge=xt[Wt].image[_t].image;F?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Ge.width,Ge.height,jt,zt,Ge.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,ce,Ge.width,Ge.height,0,jt,zt,Ge.data)}}else{F?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,jt,zt,Ot[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,jt,zt,Ot[_t]);for(let Wt=0;Wt<xt.length;Wt++){const ue=xt[Wt];F?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,jt,zt,ue.image[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,ce,jt,zt,ue.image[_t])}}}x(T)&&S(o.TEXTURE_CUBE_MAP),ht.__version=St.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Mt(U,T,tt,pt,St,ht){const Xt=f.convert(tt.format,tt.colorSpace),Ct=f.convert(tt.type),Zt=z(tt.internalFormat,Xt,Ct,tt.colorSpace),Kt=s.get(T),bt=s.get(tt);if(bt.__renderTarget=T,!Kt.__hasExternalTextures){const Ot=Math.max(1,T.width>>ht),ne=Math.max(1,T.height>>ht);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?a.texImage3D(St,ht,Zt,Ot,ne,T.depth,0,Xt,Ct,null):a.texImage2D(St,ht,Zt,Ot,ne,0,Xt,Ct,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,St,bt.__webglTexture,0,ie(T)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,St,bt.__webglTexture,ht),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(U,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const pt=T.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ht=D(T.stencilBuffer,St),Xt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ie(T);Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ht,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const pt=T.textures;for(let St=0;St<pt.length;St++){const ht=pt[St],Xt=f.convert(ht.format,ht.colorSpace),Ct=f.convert(ht.type),Zt=z(ht.internalFormat,Xt,Ct,ht.colorSpace),Kt=ie(T);tt&&Ft(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Zt,T.width,T.height):Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Zt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const St=pt.__webglTexture,ht=ie(T);if(T.depthTexture.format===ul)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(T.depthTexture.format===cl)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Et(U){const T=s.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=pt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=U.texture.mipmaps;pt&&pt.length>0?Rt(T.__webglFramebuffer[0],U):Rt(T.__webglFramebuffer,U)}else if(tt){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=o.createRenderbuffer(),Nt(T.__webglDepthbuffer[pt],U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ht)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Nt(T.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ht)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(U,T,tt){const pt=s.get(U);T!==void 0&&Mt(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Et(U)}function L(U){const T=U.texture,tt=s.get(U),pt=s.get(T);U.addEventListener("dispose",O);const St=U.textures,ht=U.isWebGLCubeRenderTarget===!0,Xt=St.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=T.version,h.memory.textures++),ht){tt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ct]=[];for(let Zt=0;Zt<T.mipmaps.length;Zt++)tt.__webglFramebuffer[Ct][Zt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,Zt=St.length;Ct<Zt;Ct++){const Kt=s.get(St[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ft(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<St.length;Ct++){const Zt=St[Ct];tt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct]);const Kt=f.convert(Zt.format,Zt.colorSpace),bt=f.convert(Zt.type),Ot=z(Zt.internalFormat,Kt,bt,Zt.colorSpace,U.isXRRenderTarget===!0),ne=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(tt.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){a.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),se(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)Mt(tt.__webglFramebuffer[Ct][Zt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt);else Mt(tt.__webglFramebuffer[Ct],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);x(T)&&S(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Xt){for(let Ct=0,Zt=St.length;Ct<Zt;Ct++){const Kt=St[Ct],bt=s.get(Kt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,bt.__webglTexture),se(Ot,Kt),Mt(tt.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+Ct,Ot,0),x(Kt)&&S(Ot)}a.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ct,pt.__webglTexture),se(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)Mt(tt.__webglFramebuffer[Zt],U,T,o.COLOR_ATTACHMENT0,Ct,Zt);else Mt(tt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ct,0);x(T)&&S(Ct),a.unbindTexture()}U.depthBuffer&&Et(U)}function He(U){const T=U.textures;for(let tt=0,pt=T.length;tt<pt;tt++){const St=T[tt];if(x(St)){const ht=I(U),Xt=s.get(St).__webglTexture;a.bindTexture(ht,Xt),S(ht),a.unbindTexture()}}}const re=[],Qt=[];function Lt(U){if(U.samples>0){if(Ft(U)===!1){const T=U.textures,tt=U.width,pt=U.height;let St=o.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),Ct=T.length>1;if(Ct)for(let Kt=0;Kt<T.length;Kt++)a.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Kt]);const bt=s.get(T[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,St,o.NEAREST),_===!0&&(re.length=0,Qt.length=0,re.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(re.push(ht),Qt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<T.length;Kt++){a.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Kt]);const bt=s.get(T[Kt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,bt,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&_){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ie(U){return Math.min(u.maxSamples,U.samples)}function Ft(U){const T=s.get(U);return U.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function qe(U,T){const tt=U.colorSpace,pt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==no&&tt!==ir&&(De.getTransfer(tt)===Xe?(pt!==Ui||St!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=ut,this.resetTextureUnits=at,this.setTexture2D=lt,this.setTexture2DArray=q,this.setTexture3D=rt,this.setTextureCube=j,this.rebindTextures=Yt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ft}function CR(o,n){function a(s,u=ir){let f;const h=De.getTransfer(u);if(s===Ki)return o.UNSIGNED_BYTE;if(s===Mp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ep)return o.UNSIGNED_SHORT_5_5_5_1;if(s===eS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===nS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===$v)return o.BYTE;if(s===tS)return o.SHORT;if(s===ol)return o.UNSIGNED_SHORT;if(s===xp)return o.INT;if(s===Yr)return o.UNSIGNED_INT;if(s===xa)return o.FLOAT;if(s===hl)return o.HALF_FLOAT;if(s===iS)return o.ALPHA;if(s===aS)return o.RGB;if(s===Ui)return o.RGBA;if(s===ul)return o.DEPTH_COMPONENT;if(s===cl)return o.DEPTH_STENCIL;if(s===rS)return o.RED;if(s===Tp)return o.RED_INTEGER;if(s===sS)return o.RG;if(s===bp)return o.RG_INTEGER;if(s===Ap)return o.RGBA_INTEGER;if(s===lc||s===uc||s===cc||s===fc)if(h===Xe)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===lc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===lc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xd||s===kd||s===qd||s===Yd)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Xd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wd||s===Zd||s===jd)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Wd||s===Zd)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===jd)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Kd)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ep)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===up)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cp||s===fp||s===hp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===cp)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dp||s===pp||s===mp||s===gp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===dp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const wR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DR=`
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

}`;class UR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a){if(this.texture===null){const s=new SS(n.texture);(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new lr({vertexShader:wR,fragmentShader:DR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Mn(new ar(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NR extends ao{constructor(n,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",_=1,g=null,v=null,m=null,y=null,M=null,A=null;const w=typeof XRWebGLBinding<"u",x=new UR,S={},I=a.getContextAttributes();let z=null,D=null;const V=[],G=[],O=new Ue;let k=null;const R=new ui;R.viewport=new ke;const C=new ui;C.viewport=new ke;const H=[R,C],at=new $E;let ut=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=V[J];return it===void 0&&(it=new Sd,V[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=V[J];return it===void 0&&(it=new Sd,V[J]=it),it.getGripSpace()},this.getHand=function(J){let it=V[J];return it===void 0&&(it=new Sd,V[J]=it),it.getHandSpace()};function lt(J){const it=G.indexOf(J.inputSource);if(it===-1)return;const Mt=V[it];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,g||h),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){u.removeEventListener("select",lt),u.removeEventListener("selectstart",lt),u.removeEventListener("selectend",lt),u.removeEventListener("squeeze",lt),u.removeEventListener("squeezestart",lt),u.removeEventListener("squeezeend",lt),u.removeEventListener("end",q),u.removeEventListener("inputsourceschange",rt);for(let J=0;J<V.length;J++){const it=G[J];it!==null&&(G[J]=null,V[J].disconnect(it))}ut=null,gt=null,x.reset();for(const J in S)delete S[J];n.setRenderTarget(z),M=null,y=null,m=null,u=null,D=null,ct.stop(),s.isPresenting=!1,n.setPixelRatio(k),n.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(J){g=J},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(u,a)),m},this.getFrame=function(){return A},this.getSession=function(){return u},this.setSession=async function(J){if(u=J,u!==null){if(z=n.getRenderTarget(),u.addEventListener("select",lt),u.addEventListener("selectstart",lt),u.addEventListener("selectend",lt),u.addEventListener("squeeze",lt),u.addEventListener("squeezestart",lt),u.addEventListener("squeezeend",lt),u.addEventListener("end",q),u.addEventListener("inputsourceschange",rt),I.xrCompatible!==!0&&await a.makeXRCompatible(),k=n.getPixelRatio(),n.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Nt=null,Rt=null;I.depth&&(Rt=I.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Mt=I.stencil?cl:ul,Nt=I.stencil?ll:Yr);const Et={colorFormat:a.RGBA8,depthFormat:Rt,scaleFactor:f};m=this.getBinding(),y=m.createProjectionLayer(Et),u.updateRenderState({layers:[y]}),n.setPixelRatio(1),n.setSize(y.textureWidth,y.textureHeight,!1),D=new Wr(y.textureWidth,y.textureHeight,{format:Ui,type:Ki,depthTexture:new vS(y.textureWidth,y.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:I.stencil,colorSpace:n.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Mt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,Mt),u.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Wr(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:Ki,colorSpace:n.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(_),g=null,h=await u.requestReferenceSpace(d),ct.setContext(u),ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function rt(J){for(let it=0;it<J.removed.length;it++){const Mt=J.removed[it],Nt=G.indexOf(Mt);Nt>=0&&(G[Nt]=null,V[Nt].disconnect(Mt))}for(let it=0;it<J.added.length;it++){const Mt=J.added[it];let Nt=G.indexOf(Mt);if(Nt===-1){for(let Et=0;Et<V.length;Et++)if(Et>=G.length){G.push(Mt),Nt=Et;break}else if(G[Et]===null){G[Et]=Mt,Nt=Et;break}if(Nt===-1)break}const Rt=V[Nt];Rt&&Rt.connect(Mt)}}const j=new et,vt=new et;function yt(J,it,Mt){j.setFromMatrixPosition(it.matrixWorld),vt.setFromMatrixPosition(Mt.matrixWorld);const Nt=j.distanceTo(vt),Rt=it.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,Yt=Rt[14]/(Rt[10]-1),L=Rt[14]/(Rt[10]+1),He=(Rt[9]+1)/Rt[5],re=(Rt[9]-1)/Rt[5],Qt=(Rt[8]-1)/Rt[0],Lt=(Et[8]+1)/Et[0],ie=Yt*Qt,Ft=Yt*Lt,oe=Nt/(-Qt+Lt),qe=oe*-Qt;if(it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(oe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Rt[10]===-1)J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const We=Yt+oe,U=L+oe,T=ie-qe,tt=Ft+(Nt-qe),pt=He*L/U*We,St=re*L/U*We;J.projectionMatrix.makePerspective(T,tt,pt,St,We,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Gt(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(u===null)return;let it=J.near,Mt=J.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),at.near=C.near=R.near=it,at.far=C.far=R.far=Mt,(ut!==at.near||gt!==at.far)&&(u.updateRenderState({depthNear:at.near,depthFar:at.far}),ut=at.near,gt=at.far),at.layers.mask=J.layers.mask|6,R.layers.mask=at.layers.mask&3,C.layers.mask=at.layers.mask&5;const Nt=J.parent,Rt=at.cameras;Gt(at,Nt);for(let Et=0;Et<Rt.length;Et++)Gt(Rt[Et],Nt);Rt.length===2?yt(at,R,C):at.projectionMatrix.copy(R.projectionMatrix),se(J,at,Nt)};function se(J,it,Mt){Mt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_p*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(y===null&&M===null))return _},this.setFoveation=function(J){_=J,y!==null&&(y.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(at)},this.getCameraTexture=function(J){return S[J]};let Te=null;function P(J,it){if(v=it.getViewerPose(g||h),A=it,v!==null){const Mt=v.views;M!==null&&(n.setRenderTargetFramebuffer(D,M.framebuffer),n.setRenderTarget(D));let Nt=!1;Mt.length!==at.cameras.length&&(at.cameras.length=0,Nt=!0);for(let L=0;L<Mt.length;L++){const He=Mt[L];let re=null;if(M!==null)re=M.getViewport(He);else{const Lt=m.getViewSubImage(y,He);re=Lt.viewport,L===0&&(n.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),n.setRenderTarget(D))}let Qt=H[L];Qt===void 0&&(Qt=new ui,Qt.layers.enable(L),Qt.viewport=new ke,H[L]=Qt),Qt.matrix.fromArray(He.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(He.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(re.x,re.y,re.width,re.height),L===0&&(at.matrix.copy(Qt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Nt===!0&&at.cameras.push(Qt)}const Rt=u.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&w){m=s.getBinding();const L=m.getDepthInformation(Mt[0]);L&&L.isValid&&L.texture&&x.init(L,u.renderState)}if(Rt&&Rt.includes("camera-access")&&w){n.state.unbindTexture(),m=s.getBinding();for(let L=0;L<Mt.length;L++){const He=Mt[L].camera;if(He){let re=S[He];re||(re=new SS,S[He]=re);const Qt=m.getCameraImage(He);re.sourceTexture=Qt}}}}for(let Mt=0;Mt<V.length;Mt++){const Nt=G[Mt],Rt=V[Mt];Nt!==null&&Rt!==void 0&&Rt.update(Nt,it,g||h)}Te&&Te(J,it),it.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:it}),A=null}const ct=new xS;ct.setAnimationLoop(P),this.setAnimationLoop=function(J){Te=J},this.dispose=function(){}}}const Br=new Qi,LR=new rn;function OR(o,n){function a(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,mS(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function u(x,S,I,z,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(x,S):S.isMeshToonMaterial?(f(x,S),m(x,S)):S.isMeshPhongMaterial?(f(x,S),v(x,S)):S.isMeshStandardMaterial?(f(x,S),y(x,S),S.isMeshPhysicalMaterial&&M(x,S,D)):S.isMeshMatcapMaterial?(f(x,S),A(x,S)):S.isMeshDepthMaterial?f(x,S):S.isMeshDistanceMaterial?(f(x,S),w(x,S)):S.isMeshNormalMaterial?f(x,S):S.isLineBasicMaterial?(h(x,S),S.isLineDashedMaterial&&d(x,S)):S.isPointsMaterial?_(x,S,I,z):S.isSpriteMaterial?g(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,a(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,a(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,a(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Wn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,a(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Wn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,a(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,a(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,a(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const I=n.get(S),z=I.envMap,D=I.envMapRotation;z&&(x.envMap.value=z,Br.copy(D),Br.x*=-1,Br.y*=-1,Br.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),x.envMapRotation.value.setFromMatrix4(LR.makeRotationFromEuler(Br)),x.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,a(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,a(S.aoMap,x.aoMapTransform))}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,a(S.map,x.mapTransform))}function d(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function _(x,S,I,z){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*I,x.scale.value=z*.5,S.map&&(x.map.value=S.map,a(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,a(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function g(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,a(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,a(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function v(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function m(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function y(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,a(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,a(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,I){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,a(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,a(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,a(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,a(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,a(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,a(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,a(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,a(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,a(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,a(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,a(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,a(S.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,S){S.matcap&&(x.matcap.value=S.matcap)}function w(x,S){const I=n.get(S).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function zR(o,n,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(I,z){const D=z.program;s.uniformBlockBinding(I,D)}function g(I,z){let D=u[I.id];D===void 0&&(A(I),D=v(I),u[I.id]=D,I.addEventListener("dispose",x));const V=z.program;s.updateUBOMapping(I,V);const G=n.render.frame;f[I.id]!==G&&(y(I),f[I.id]=G)}function v(I){const z=m();I.__bindingPointIndex=z;const D=o.createBuffer(),V=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,V,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function m(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const z=u[I.id],D=I.uniforms,V=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let G=0,O=D.length;G<O;G++){const k=Array.isArray(D[G])?D[G]:[D[G]];for(let R=0,C=k.length;R<C;R++){const H=k[R];if(M(H,G,R,V)===!0){const at=H.__offset,ut=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let lt=0;lt<ut.length;lt++){const q=ut[lt],rt=w(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,gt),gt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,z,D,V){const G=I.value,O=z+"_"+D;if(V[O]===void 0)return typeof G=="number"||typeof G=="boolean"?V[O]=G:V[O]=G.clone(),!0;{const k=V[O];if(typeof G=="number"||typeof G=="boolean"){if(k!==G)return V[O]=G,!0}else if(k.equals(G)===!1)return k.copy(G),!0}return!1}function A(I){const z=I.uniforms;let D=0;const V=16;for(let O=0,k=z.length;O<k;O++){const R=Array.isArray(z[O])?z[O]:[z[O]];for(let C=0,H=R.length;C<H;C++){const at=R[C],ut=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,lt=ut.length;gt<lt;gt++){const q=ut[gt],rt=w(q),j=D%V,vt=j%rt.boundary,yt=j+vt;D+=vt,yt!==0&&V-yt<rt.storage&&(D+=V-yt),at.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=D,D+=rt.storage}}}const G=D%V;return G>0&&(D+=V-G),I.__size=D,I.__cache={},this}function w(I){const z={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(z.boundary=4,z.storage=4):I.isVector2?(z.boundary=8,z.storage=8):I.isVector3||I.isColor?(z.boundary=16,z.storage=12):I.isVector4?(z.boundary=16,z.storage=16):I.isMatrix3?(z.boundary=48,z.storage=48):I.isMatrix4?(z.boundary=64,z.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),z}function x(I){const z=I.target;z.removeEventListener("dispose",x);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(u[z.id]),delete u[z.id],delete f[z.id]}function S(){for(const I in u)o.deleteBuffer(u[I]);h=[],u={},f={}}return{bind:_,update:g,dispose:S}}class PR{constructor(n={}){const{canvas:a=gE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:y=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),w=new Int32Array(4);let x=null,S=null;const I=[],z=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let V=!1;this._outputColorSpace=li;let G=0,O=0,k=null,R=-1,C=null;const H=new ke,at=new ke;let ut=null;const gt=new Ae(0);let lt=0,q=a.width,rt=a.height,j=1,vt=null,yt=null;const Gt=new ke(0,0,q,rt),se=new ke(0,0,q,rt);let Te=!1;const P=new Dp;let ct=!1,J=!1;const it=new rn,Mt=new et,Nt=new ke,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Yt(){return k===null?j:1}let L=s;function He(b,Z){return a.getContext(b,Z)}try{const b={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${yp}`),a.addEventListener("webglcontextlost",Dt,!1),a.addEventListener("webglcontextrestored",Vt,!1),a.addEventListener("webglcontextcreationerror",xt,!1),L===null){const Z="webgl2";if(L=He(Z,b),L===null)throw He(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let re,Qt,Lt,ie,Ft,oe,qe,We,U,T,tt,pt,St,ht,Xt,Ct,Zt,Kt,bt,Ot,ne,jt,zt,ce;function F(){re=new Yb(L),re.init(),jt=new CR(L,re),Qt=new Fb(L,re,n,jt),Lt=new AR(L,re),Qt.reversedDepthBuffer&&y&&Lt.buffers.depth.setReversed(!0),ie=new jb(L),Ft=new dR,oe=new RR(L,re,Lt,Ft,Qt,jt,ie),qe=new Gb(D),We=new qb(D),U=new eT(L),zt=new Ib(L,U),T=new Wb(L,U,ie,zt),tt=new Qb(L,T,U,ie),bt=new Kb(L,Qt,oe),Ct=new Hb(Ft),pt=new hR(D,qe,We,re,Qt,zt,Ct),St=new OR(D,Ft),ht=new mR,Xt=new xR(re),Kt=new Pb(D,qe,We,Lt,tt,M,_),Zt=new TR(D,tt,Qt),ce=new zR(L,ie,Qt,Lt),Ot=new Bb(L,re,ie),ne=new Zb(L,re,ie),ie.programs=pt.programs,D.capabilities=Qt,D.extensions=re,D.properties=Ft,D.renderLists=ht,D.shadowMap=Zt,D.state=Lt,D.info=ie}F();const At=new NR(D,L);this.xr=At,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(q,rt,!1))},this.getSize=function(b){return b.set(q,rt)},this.setSize=function(b,Z,st=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,rt=Z,a.width=Math.floor(b*j),a.height=Math.floor(Z*j),st===!0&&(a.style.width=b+"px",a.style.height=Z+"px"),this.setViewport(0,0,b,Z)},this.getDrawingBufferSize=function(b){return b.set(q*j,rt*j).floor()},this.setDrawingBufferSize=function(b,Z,st){q=b,rt=Z,j=st,a.width=Math.floor(b*st),a.height=Math.floor(Z*st),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Gt)},this.setViewport=function(b,Z,st,ot){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,Z,st,ot),Lt.viewport(H.copy(Gt).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,Z,st,ot){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,Z,st,ot),Lt.scissor(at.copy(se).multiplyScalar(j).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(b){Lt.setScissorTest(Te=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(b=!0,Z=!0,st=!0){let ot=0;if(b){let K=!1;if(k!==null){const Tt=k.texture.format;K=Tt===Ap||Tt===bp||Tt===Tp}if(K){const Tt=k.texture.type,Pt=Tt===Ki||Tt===Yr||Tt===ol||Tt===ll||Tt===Mp||Tt===Ep,Bt=Kt.getClearColor(),wt=Kt.getClearAlpha(),kt=Bt.r,ee=Bt.g,$t=Bt.b;Pt?(A[0]=kt,A[1]=ee,A[2]=$t,A[3]=wt,L.clearBufferuiv(L.COLOR,0,A)):(w[0]=kt,w[1]=ee,w[2]=$t,w[3]=wt,L.clearBufferiv(L.COLOR,0,w))}else ot|=L.COLOR_BUFFER_BIT}Z&&(ot|=L.DEPTH_BUFFER_BIT),st&&(ot|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Dt,!1),a.removeEventListener("webglcontextrestored",Vt,!1),a.removeEventListener("webglcontextcreationerror",xt,!1),Kt.dispose(),ht.dispose(),Xt.dispose(),Ft.dispose(),qe.dispose(),We.dispose(),tt.dispose(),zt.dispose(),ce.dispose(),pt.dispose(),At.dispose(),At.removeEventListener("sessionstart",dn),At.removeEventListener("sessionend",wn),Ji.stop()};function Dt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const b=ie.autoReset,Z=Zt.enabled,st=Zt.autoUpdate,ot=Zt.needsUpdate,K=Zt.type;F(),ie.autoReset=b,Zt.enabled=Z,Zt.autoUpdate=st,Zt.needsUpdate=ot,Zt.type=K}function xt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _t(b){const Z=b.target;Z.removeEventListener("dispose",_t),Wt(Z)}function Wt(b){ue(b),Ft.remove(b)}function ue(b){const Z=Ft.get(b).programs;Z!==void 0&&(Z.forEach(function(st){pt.releaseProgram(st)}),b.isShaderMaterial&&pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,Z,st,ot,K,Tt){Z===null&&(Z=Rt);const Pt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=vl(b,Z,st,ot,K);Lt.setMaterial(ot,Pt);let wt=st.index,kt=1;if(ot.wireframe===!0){if(wt=T.getWireframeAttribute(st),wt===void 0)return;kt=2}const ee=st.drawRange,$t=st.attributes.position;let _e=ee.start*kt,ze=(ee.start+ee.count)*kt;Tt!==null&&(_e=Math.max(_e,Tt.start*kt),ze=Math.min(ze,(Tt.start+Tt.count)*kt)),wt!==null?(_e=Math.max(_e,0),ze=Math.min(ze,wt.count)):$t!=null&&(_e=Math.max(_e,0),ze=Math.min(ze,$t.count));const Qe=ze-_e;if(Qe<0||Qe===1/0)return;zt.setup(K,ot,Bt,st,wt);let Ne,Re=Ot;if(wt!==null&&(Ne=U.get(wt),Re=ne,Re.setIndex(Ne)),K.isMesh)ot.wireframe===!0?(Lt.setLineWidth(ot.wireframeLinewidth*Yt()),Re.setMode(L.LINES)):Re.setMode(L.TRIANGLES);else if(K.isLine){let te=ot.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*Yt()),K.isLineSegments?Re.setMode(L.LINES):K.isLineLoop?Re.setMode(L.LINE_LOOP):Re.setMode(L.LINE_STRIP)}else K.isPoints?Re.setMode(L.POINTS):K.isSprite&&Re.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const te=K._multiDrawStarts,Le=K._multiDrawCounts,me=K._multiDrawCount,pn=wt?U.get(wt).bytesPerElement:1,Qn=Ft.get(ot).currentProgram.getUniforms();for(let Ce=0;Ce<me;Ce++)Qn.setValue(L,"_gl_DrawID",Ce),Re.render(te[Ce]/pn,Le[Ce])}else if(K.isInstancedMesh)Re.renderInstances(_e,Qe,K.count);else if(st.isInstancedBufferGeometry){const te=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Le=Math.min(st.instanceCount,te);Re.renderInstances(_e,Qe,Le)}else Re.render(_e,Qe)};function Ge(b,Z,st){b.transparent===!0&&b.side===ya&&b.forceSinglePass===!1?(b.side=Wn,b.needsUpdate=!0,ci(b,Z,st),b.side=or,b.needsUpdate=!0,ci(b,Z,st),b.side=ya):ci(b,Z,st)}this.compile=function(b,Z,st=null){st===null&&(st=b),S=Xt.get(st),S.init(Z),z.push(S),st.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),b!==st&&b.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights();const ot=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Pt=0;Pt<Tt.length;Pt++){const Bt=Tt[Pt];Ge(Bt,st,K),ot.add(Bt)}else Ge(Tt,st,K),ot.add(Tt)}),S=z.pop(),ot},this.compileAsync=function(b,Z,st=null){const ot=this.compile(b,Z,st);return new Promise(K=>{function Tt(){if(ot.forEach(function(Pt){Ft.get(Pt).currentProgram.isReady()&&ot.delete(Pt)}),ot.size===0){K(b);return}setTimeout(Tt,10)}re.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ye=null;function $e(b){ye&&ye(b)}function dn(){Ji.stop()}function wn(){Ji.start()}const Ji=new xS;Ji.setAnimationLoop($e),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(b){ye=b,At.setAnimationLoop(b),b===null?Ji.stop():Ji.start()},At.addEventListener("sessionstart",dn),At.addEventListener("sessionend",wn),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Z),Z=At.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,Z,k),S=Xt.get(b,z.length),S.init(Z),z.push(S),it.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),P.setFromProjectionMatrix(it,Zi,Z.reversedDepth),J=this.localClippingEnabled,ct=Ct.init(this.clippingPlanes,J),x=ht.get(b,I.length),x.init(),I.push(x),At.enabled===!0&&At.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&so(Tt,Z,-1/0,D.sortObjects)}so(b,Z,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(vt,yt),Et=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Et&&Kt.addToRenderList(x,b),this.info.render.frame++,ct===!0&&Ct.beginShadows();const st=S.state.shadowsArray;Zt.render(st,b,Z),ct===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=x.opaque,K=x.transmissive;if(S.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(K.length>0)for(let Pt=0,Bt=Tt.length;Pt<Bt;Pt++){const wt=Tt[Pt];ur(ot,K,b,wt)}Et&&Kt.render(b);for(let Pt=0,Bt=Tt.length;Pt<Bt;Pt++){const wt=Tt[Pt];_l(x,b,wt,wt.viewport)}}else K.length>0&&ur(ot,K,b,Z),Et&&Kt.render(b),_l(x,b,Z);k!==null&&O===0&&(oe.updateMultisampleRenderTarget(k),oe.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(D,b,Z),zt.resetDefaultState(),R=-1,C=null,z.pop(),z.length>0?(S=z[z.length-1],ct===!0&&Ct.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?x=I[I.length-1]:x=null};function so(b,Z,st,ot){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)st=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||P.intersectsSprite(b)){ot&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(it);const Pt=tt.update(b),Bt=b.material;Bt.visible&&x.push(b,Pt,Bt,st,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||P.intersectsObject(b))){const Pt=tt.update(b),Bt=b.material;if(ot&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Nt.copy(Pt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(it)),Array.isArray(Bt)){const wt=Pt.groups;for(let kt=0,ee=wt.length;kt<ee;kt++){const $t=wt[kt],_e=Bt[$t.materialIndex];_e&&_e.visible&&x.push(b,Pt,_e,st,Nt.z,$t)}}else Bt.visible&&x.push(b,Pt,Bt,st,Nt.z,null)}}const Tt=b.children;for(let Pt=0,Bt=Tt.length;Pt<Bt;Pt++)so(Tt[Pt],Z,st,ot)}function _l(b,Z,st,ot){const K=b.opaque,Tt=b.transmissive,Pt=b.transparent;S.setupLightsView(st),ct===!0&&Ct.setGlobalState(D.clippingPlanes,st),ot&&Lt.viewport(H.copy(ot)),K.length>0&&$i(K,Z,st),Tt.length>0&&$i(Tt,Z,st),Pt.length>0&&$i(Pt,Z,st),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ur(b,Z,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ot.id]===void 0&&(S.state.transmissionRenderTarget[ot.id]=new Wr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?hl:Ki,minFilter:kr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Tt=S.state.transmissionRenderTarget[ot.id],Pt=ot.viewport||H;Tt.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Bt=D.getRenderTarget(),wt=D.getActiveCubeFace(),kt=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(gt),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),Et&&Kt.render(st);const ee=D.toneMapping;D.toneMapping=sr;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),S.setupLightsView(ot),ct===!0&&Ct.setGlobalState(D.clippingPlanes,ot),$i(b,st,ot),oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt),re.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let ze=0,Qe=Z.length;ze<Qe;ze++){const Ne=Z[ze],Re=Ne.object,te=Ne.geometry,Le=Ne.material,me=Ne.group;if(Le.side===ya&&Re.layers.test(ot.layers)){const pn=Le.side;Le.side=Wn,Le.needsUpdate=!0,cr(Re,st,ot,te,Le,me),Le.side=pn,Le.needsUpdate=!0,_e=!0}}_e===!0&&(oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Bt,wt,kt),D.setClearColor(gt,lt),$t!==void 0&&(ot.viewport=$t),D.toneMapping=ee}function $i(b,Z,st){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Tt=b.length;K<Tt;K++){const Pt=b[K],Bt=Pt.object,wt=Pt.geometry,kt=Pt.group;let ee=Pt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Bt.layers.test(st.layers)&&cr(Bt,Z,st,wt,ee,kt)}}function cr(b,Z,st,ot,K,Tt){b.onBeforeRender(D,Z,st,ot,K,Tt),b.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(D,Z,st,ot,b,Tt),K.transparent===!0&&K.side===ya&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,D.renderBufferDirect(st,Z,ot,K,b,Tt),K.side=or,K.needsUpdate=!0,D.renderBufferDirect(st,Z,ot,K,b,Tt),K.side=ya):D.renderBufferDirect(st,Z,ot,K,b,Tt),b.onAfterRender(D,Z,st,ot,K,Tt)}function ci(b,Z,st){Z.isScene!==!0&&(Z=Rt);const ot=Ft.get(b),K=S.state.lights,Tt=S.state.shadowsArray,Pt=K.state.version,Bt=pt.getParameters(b,K.state,Tt,Z,st),wt=pt.getProgramCacheKey(Bt);let kt=ot.programs;ot.environment=b.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(b.isMeshStandardMaterial?We:qe).get(b.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&b.envMap===null?Z.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",_t),kt=new Map,ot.programs=kt);let ee=kt.get(wt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Pt)return Ea(b,Bt),ee}else Bt.uniforms=pt.getUniforms(b),b.onBeforeCompile(Bt,D),ee=pt.acquireProgram(Bt,wt),kt.set(wt,ee),ot.uniforms=Bt.uniforms;const $t=ot.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($t.clippingPlanes=Ct.uniform),Ea(b,Bt),ot.needsLights=Sl(b),ot.lightsStateVersion=Pt,ot.needsLights&&($t.ambientLightColor.value=K.state.ambient,$t.lightProbe.value=K.state.probe,$t.directionalLights.value=K.state.directional,$t.directionalLightShadows.value=K.state.directionalShadow,$t.spotLights.value=K.state.spot,$t.spotLightShadows.value=K.state.spotShadow,$t.rectAreaLights.value=K.state.rectArea,$t.ltc_1.value=K.state.rectAreaLTC1,$t.ltc_2.value=K.state.rectAreaLTC2,$t.pointLights.value=K.state.point,$t.pointLightShadows.value=K.state.pointShadow,$t.hemisphereLights.value=K.state.hemi,$t.directionalShadowMap.value=K.state.directionalShadowMap,$t.directionalShadowMatrix.value=K.state.directionalShadowMatrix,$t.spotShadowMap.value=K.state.spotShadowMap,$t.spotLightMatrix.value=K.state.spotLightMatrix,$t.spotLightMap.value=K.state.spotLightMap,$t.pointShadowMap.value=K.state.pointShadowMap,$t.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function fr(b){if(b.uniformsList===null){const Z=b.currentProgram.getUniforms();b.uniformsList=hc.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function Ea(b,Z){const st=Ft.get(b);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function vl(b,Z,st,ot,K){Z.isScene!==!0&&(Z=Rt),oe.resetTextureUnits();const Tt=Z.fog,Pt=ot.isMeshStandardMaterial?Z.environment:null,Bt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:no,wt=(ot.isMeshStandardMaterial?We:qe).get(ot.envMap||Pt),kt=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!st.morphAttributes.position,_e=!!st.morphAttributes.normal,ze=!!st.morphAttributes.color;let Qe=sr;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const Ne=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Re=Ne!==void 0?Ne.length:0,te=Ft.get(ot),Le=S.state.lights;if(ct===!0&&(J===!0||b!==C)){const en=b===C&&ot.id===R;Ct.setState(ot,b,en)}let me=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Le.state.version||te.outputColorSpace!==Bt||K.isBatchedMesh&&te.batching===!1||!K.isBatchedMesh&&te.batching===!0||K.isBatchedMesh&&te.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&te.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&te.instancing===!1||!K.isInstancedMesh&&te.instancing===!0||K.isSkinnedMesh&&te.skinning===!1||!K.isSkinnedMesh&&te.skinning===!0||K.isInstancedMesh&&te.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&te.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&te.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&te.instancingMorph===!1&&K.morphTexture!==null||te.envMap!==wt||ot.fog===!0&&te.fog!==Tt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==kt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==_e||te.morphColors!==ze||te.toneMapping!==Qe||te.morphTargetsCount!==Re)&&(me=!0):(me=!0,te.__version=ot.version);let pn=te.currentProgram;me===!0&&(pn=ci(ot,Z,K));let Qn=!1,Ce=!1,Ta=!1;const Ze=pn.getUniforms(),zn=te.uniforms;if(Lt.useProgram(pn.program)&&(Qn=!0,Ce=!0,Ta=!0),ot.id!==R&&(R=ot.id,Ce=!0),Qn||C!==b){Lt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ze.setValue(L,"projectionMatrix",b.projectionMatrix),Ze.setValue(L,"viewMatrix",b.matrixWorldInverse);const Dn=Ze.map.cameraPosition;Dn!==void 0&&Dn.setValue(L,Mt.setFromMatrixPosition(b.matrixWorld)),Qt.logarithmicDepthBuffer&&Ze.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ze.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Ce=!0,Ta=!0)}if(K.isSkinnedMesh){Ze.setOptional(L,K,"bindMatrix"),Ze.setOptional(L,K,"bindMatrixInverse");const en=K.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ze.setValue(L,"boneTexture",en.boneTexture,oe))}K.isBatchedMesh&&(Ze.setOptional(L,K,"batchingTexture"),Ze.setValue(L,"batchingTexture",K._matricesTexture,oe),Ze.setOptional(L,K,"batchingIdTexture"),Ze.setValue(L,"batchingIdTexture",K._indirectTexture,oe),Ze.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&Ze.setValue(L,"batchingColorTexture",K._colorsTexture,oe));const on=st.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&bt.update(K,st,pn),(Ce||te.receiveShadow!==K.receiveShadow)&&(te.receiveShadow=K.receiveShadow,Ze.setValue(L,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(zn.envMap.value=wt,zn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(zn.envMapIntensity.value=Z.environmentIntensity),Ce&&(Ze.setValue(L,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&vc(zn,Ta),Tt&&ot.fog===!0&&St.refreshFogUniforms(zn,Tt),St.refreshMaterialUniforms(zn,ot,j,rt,S.state.transmissionRenderTarget[b.id]),hc.upload(L,fr(te),zn,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(hc.upload(L,fr(te),zn,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ze.setValue(L,"center",K.center),Ze.setValue(L,"modelViewMatrix",K.modelViewMatrix),Ze.setValue(L,"normalMatrix",K.normalMatrix),Ze.setValue(L,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const en=ot.uniformsGroups;for(let Dn=0,jr=en.length;Dn<jr;Dn++){const Li=en[Dn];ce.update(Li,pn),ce.bind(Li,pn)}}return pn}function vc(b,Z){b.ambientLightColor.needsUpdate=Z,b.lightProbe.needsUpdate=Z,b.directionalLights.needsUpdate=Z,b.directionalLightShadows.needsUpdate=Z,b.pointLights.needsUpdate=Z,b.pointLightShadows.needsUpdate=Z,b.spotLights.needsUpdate=Z,b.spotLightShadows.needsUpdate=Z,b.rectAreaLights.needsUpdate=Z,b.hemisphereLights.needsUpdate=Z}function Sl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,Z,st){const ot=Ft.get(b);ot.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ft.get(b.texture).__webglTexture=Z,Ft.get(b.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Z){const st=Ft.get(b);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const oo=L.createFramebuffer();this.setRenderTarget=function(b,Z=0,st=0){k=b,G=Z,O=st;let ot=!0,K=null,Tt=!1,Pt=!1;if(b){const wt=Ft.get(b);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(L.FRAMEBUFFER,null),ot=!1;else if(wt.__webglFramebuffer===void 0)oe.setupRenderTarget(b);else if(wt.__hasExternalTextures)oe.rebindTextures(b,Ft.get(b.texture).__webglTexture,Ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const $t=b.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&Ft.has($t)&&(b.width!==$t.image.width||b.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Pt=!0);const ee=Ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?K=ee[Z][st]:K=ee[Z],Tt=!0):b.samples>0&&oe.useMultisampledRTT(b)===!1?K=Ft.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[st]:K=ee,H.copy(b.viewport),at.copy(b.scissor),ut=b.scissorTest}else H.copy(Gt).multiplyScalar(j).floor(),at.copy(se).multiplyScalar(j).floor(),ut=Te;if(st!==0&&(K=oo),Lt.bindFramebuffer(L.FRAMEBUFFER,K)&&ot&&Lt.drawBuffers(b,K),Lt.viewport(H),Lt.scissor(at),Lt.setScissorTest(ut),Tt){const wt=Ft.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt.__webglTexture,st)}else if(Pt){const wt=Z;for(let kt=0;kt<b.textures.length;kt++){const ee=Ft.get(b.textures[kt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+kt,ee.__webglTexture,st,wt)}}else if(b!==null&&st!==0){const wt=Ft.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,st)}R=-1},this.readRenderTargetPixels=function(b,Z,st,ot,K,Tt,Pt,Bt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt]),wt){Lt.bindFramebuffer(L.FRAMEBUFFER,wt);try{const kt=b.textures[Bt],ee=kt.format,$t=kt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=b.width-ot&&st>=0&&st<=b.height-K&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Bt),L.readPixels(Z,st,ot,K,jt.convert(ee),jt.convert($t),Tt))}finally{const kt=k!==null?Ft.get(k).__webglFramebuffer:null;Lt.bindFramebuffer(L.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,Z,st,ot,K,Tt,Pt,Bt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt]),wt)if(Z>=0&&Z<=b.width-ot&&st>=0&&st<=b.height-K){Lt.bindFramebuffer(L.FRAMEBUFFER,wt);const kt=b.textures[Bt],ee=kt.format,$t=kt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,_e),L.bufferData(L.PIXEL_PACK_BUFFER,Tt.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Bt),L.readPixels(Z,st,ot,K,jt.convert(ee),jt.convert($t),0);const ze=k!==null?Ft.get(k).__webglFramebuffer:null;Lt.bindFramebuffer(L.FRAMEBUFFER,ze);const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _E(L,Qe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,_e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Tt),L.deleteBuffer(_e),L.deleteSync(Qe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Z=null,st=0){const ot=Math.pow(2,-st),K=Math.floor(b.image.width*ot),Tt=Math.floor(b.image.height*ot),Pt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;oe.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,st,0,0,Pt,Bt,K,Tt),Lt.unbindTexture()};const hr=L.createFramebuffer(),Sc=L.createFramebuffer();this.copyTextureToTexture=function(b,Z,st=null,ot=null,K=0,Tt=null){Tt===null&&(K!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Pt,Bt,wt,kt,ee,$t,_e,ze,Qe;const Ne=b.isCompressedTexture?b.mipmaps[Tt]:b.image;if(st!==null)Pt=st.max.x-st.min.x,Bt=st.max.y-st.min.y,wt=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,ee=st.min.y,$t=st.isBox3?st.min.z:0;else{const on=Math.pow(2,-K);Pt=Math.floor(Ne.width*on),Bt=Math.floor(Ne.height*on),b.isDataArrayTexture?wt=Ne.depth:b.isData3DTexture?wt=Math.floor(Ne.depth*on):wt=1,kt=0,ee=0,$t=0}ot!==null?(_e=ot.x,ze=ot.y,Qe=ot.z):(_e=0,ze=0,Qe=0);const Re=jt.convert(Z.format),te=jt.convert(Z.type);let Le;Z.isData3DTexture?(oe.setTexture3D(Z,0),Le=L.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Le=L.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Le=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);const me=L.getParameter(L.UNPACK_ROW_LENGTH),pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ce=L.getParameter(L.UNPACK_SKIP_ROWS),Ta=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ne.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ee),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$t);const Ze=b.isDataArrayTexture||b.isData3DTexture,zn=Z.isDataArrayTexture||Z.isData3DTexture;if(b.isDepthTexture){const on=Ft.get(b),en=Ft.get(Z),Dn=Ft.get(on.__renderTarget),jr=Ft.get(en.__renderTarget);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let Li=0;Li<wt;Li++)Ze&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(b).__webglTexture,K,$t+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(Z).__webglTexture,Tt,Qe+Li)),L.blitFramebuffer(kt,ee,Pt,Bt,_e,ze,Pt,Bt,L.DEPTH_BUFFER_BIT,L.NEAREST);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||Ft.has(b)){const on=Ft.get(b),en=Ft.get(Z);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,hr),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Sc);for(let Dn=0;Dn<wt;Dn++)Ze?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,K,$t+Dn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,K),zn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,en.__webglTexture,Tt,Qe+Dn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,en.__webglTexture,Tt),K!==0?L.blitFramebuffer(kt,ee,Pt,Bt,_e,ze,Pt,Bt,L.COLOR_BUFFER_BIT,L.NEAREST):zn?L.copyTexSubImage3D(Le,Tt,_e,ze,Qe+Dn,kt,ee,Pt,Bt):L.copyTexSubImage2D(Le,Tt,_e,ze,kt,ee,Pt,Bt);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else zn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Le,Tt,_e,ze,Qe,Pt,Bt,wt,Re,te,Ne.data):Z.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,Tt,_e,ze,Qe,Pt,Bt,wt,Re,Ne.data):L.texSubImage3D(Le,Tt,_e,ze,Qe,Pt,Bt,wt,Re,te,Ne):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Tt,_e,ze,Pt,Bt,Re,te,Ne.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Tt,_e,ze,Ne.width,Ne.height,Re,Ne.data):L.texSubImage2D(L.TEXTURE_2D,Tt,_e,ze,Pt,Bt,Re,te,Ne);L.pixelStorei(L.UNPACK_ROW_LENGTH,me),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ta),Tt===0&&Z.generateMipmaps&&L.generateMipmap(Le),Lt.unbindTexture()},this.initRenderTarget=function(b){Ft.get(b).__webglFramebuffer===void 0&&oe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?oe.setTextureCube(b,0):b.isData3DTexture?oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?oe.setTexture2DArray(b,0):oe.setTexture2D(b,0),Lt.unbindTexture()},this.resetState=function(){G=0,O=0,k=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorSpace=De._getDrawingBufferColorSpace(n),a.unpackColorSpace=De._getUnpackColorSpace()}}function IR(){const o=On.useRef(null);return On.useEffect(()=>{const n=o.current;if(!n)return;const a=new XE;a.background=new Ae("#120d0b"),a.fog=new wp("#120d0b",.03);const s=new ui(34,1,.1,100);s.position.set(0,4.6,15.5),s.lookAt(0,1.6,-1.1);const u=new PR({antialias:!0,alpha:!1});u.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),u.shadowMap.enabled=!0,u.shadowMap.type=jv,u.outputColorSpace=li,u.toneMapping=Qv,u.toneMappingExposure=1.25,n.appendChild(u.domElement),a.add(new JE("#aa8270",1.2));const f=new yv("#e68755",34,22,1.4);f.position.set(0,3.5,-3.8),a.add(f);const h=new yv("#d6aa71",45,16,2);h.position.set(0,2.4,3),a.add(h);const d=new il({color:"#221412",roughness:.78}),_=new Mn(new ar(30,30),d);_.rotation.x=-Math.PI/2,_.position.y=-.14,_.receiveShadow=!0,a.add(_);const g=new js,v=new Mn(new Yi(8.25,4.75,.3),new il({color:"#322019",roughness:.4,metalness:.22}));v.position.set(0,3.15,-5.8),v.castShadow=!0,g.add(v);const m=new Mn(new ar(7.82,4.34),new sl({color:"#f0aa71"}));m.position.set(0,3.17,-5.62),g.add(m);const y=new Mn(new ar(8.15,4.62),new sl({color:"#a44b33",transparent:!0,opacity:.12}));y.position.set(0,3.17,-5.58),g.add(y),a.add(g);const M=new il({color:"#651f1a",roughness:.94});for(const R of[-1,1]){const C=new Mn(new Yi(1.5,8.2,.72),M);C.position.set(R*5.05,2.6,-5.45),C.castShadow=!0,a.add(C)}const A=new il({color:"#751f20",roughness:.65}),w=new il({color:"#b88b56",metalness:.7,roughness:.34}),x=new Yi(.76,.7,.63),S=new Yi(.76,.98,.25),I=new Yi(.13,.39,.55),z=new js;for(let R=0;R<4;R+=1)for(let C=-5;C<=5;C+=1){const H=C*.96+R%2*.16,at=.5+R*1.45,ut=R*.28,gt=new Mn(x,A);gt.position.set(H,ut+.53,at),gt.castShadow=!0,z.add(gt);const lt=new Mn(S,A);lt.position.set(H,ut+1.13,at+.2),lt.castShadow=!0,z.add(lt);for(const q of[-1,1]){const rt=new Mn(I,w);rt.position.set(H+q*.45,ut+.69,at),z.add(rt)}}a.add(z);const D=new Mn(new ar(1.05,9),new sl({color:"#b87752",transparent:!0,opacity:.17}));D.rotation.x=-Math.PI/2,D.position.set(0,-.12,5),a.add(D);const V=()=>{const{width:R,height:C}=n.getBoundingClientRect();R===0||C===0||(s.aspect=R/C,s.fov=R<600?42:34,s.position.set(0,R<600?5.2:4.6,R<600?19:15.5),s.lookAt(0,1.6,-1.1),s.updateProjectionMatrix(),u.setSize(R,C,!1))},G=new ResizeObserver(V);G.observe(n),V();let O;const k=()=>{O=requestAnimationFrame(k);const R=Math.sin(performance.now()*33e-5)*.014;g.rotation.y=R,f.intensity=33+Math.sin(performance.now()*.001)*1.4,u.render(a,s)};return k(),()=>{cancelAnimationFrame(O),G.disconnect(),u.dispose(),a.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&(Array.isArray(R.material)?R.material:[R.material]).forEach(H=>H.dispose())}),u.domElement.remove()}},[]),ft.createElement("div",{"aria-label":"A three-dimensional view inside a cinema auditorium",className:"theater-scene",ref:o})}const wd=[{id:"last-light",title:"The Last Light",genre:"SCI-FI · ADVENTURE",duration_minutes:128,rating:"PG-13",image_url:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=85",description:"When the stars go quiet, one signal changes everything."},{id:"velvet-hour",title:"A Velvet Hour",genre:"DRAMA · ROMANCE",duration_minutes:106,rating:"PG-13",image_url:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",description:"Two strangers. One city. A night that feels like forever."},{id:"wild-country",title:"Wild Country",genre:"THRILLER · MYSTERY",duration_minutes:114,rating:"R",image_url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",description:"Some places keep their secrets. This one keeps its guests."}],Yv=["6:15 PM","7:40 PM","9:05 PM"],BR=[{weekday:"TODAY",day:"01"},{weekday:"FRI",day:"02"},{weekday:"SAT",day:"03"},{weekday:"SUN",day:"04"}];function FR(){const[o,n]=On.useState(wd),[a,s]=On.useState(wd[0]),[u,f]=On.useState(0),[h,d]=On.useState(Yv[1]),[_,g]=On.useState(2),[v,m]=On.useState("idle"),[y,M]=On.useState("");On.useEffect(()=>{},[]);async function A(x){x.preventDefault(),m("loading"),M(""),m("success"),M("Demo booking confirmed. Add Supabase credentials to save bookings online."),window.setTimeout(()=>m("idle"),4500)}const w=x=>({backgroundImage:`linear-gradient(0deg, rgba(15, 10, 8, .86), transparent 66%), url("${x.image_url||wd[0].image_url}")`});return ft.createElement("main",null,ft.createElement("header",{className:"topbar"},ft.createElement("a",{className:"brand",href:"#home","aria-label":"Midnight Cinema home"},ft.createElement("span",{className:"brand-mark"},ft.createElement(q0,{size:19,strokeWidth:1.7})),ft.createElement("span",null,"MIDNIGHT",ft.createElement("span",{className:"brand-light"},"CINEMA"))),ft.createElement("nav",{className:"main-nav","aria-label":"Main navigation"},ft.createElement("a",{className:"active",href:"#movies"},"Now showing"),ft.createElement("a",{href:"#booking"},"Your tickets"),ft.createElement("a",{href:"#about"},"Our cinema")),ft.createElement("button",{className:"location-button",type:"button"},ft.createElement(TM,{size:15})," NEW YORK ",ft.createElement(xM,{size:14})),ft.createElement("button",{className:"avatar-button",type:"button","aria-label":"Your profile"},ft.createElement(wM,{size:17}))),ft.createElement("section",{className:"hero",id:"home"},ft.createElement("div",{className:"hero-scene"},ft.createElement(IR,null)),ft.createElement("div",{className:"hero-shade"}),ft.createElement("div",{className:"hero-copy"},ft.createElement("div",{className:"eyebrow"},ft.createElement("span",{className:"live-dot"})," A LITTLE MAGIC, RIGHT THIS WAY"),ft.createElement("h1",null,"Big stories.",ft.createElement("br",null),ft.createElement("em",null,"Better nights.")),ft.createElement("p",null,"Your seat is waiting. Find a film, bring your favorite people, and let the outside world fade away."),ft.createElement("a",{className:"hero-link",href:"#movies"},"Find your film ",ft.createElement(SM,{size:16}))),ft.createElement("div",{className:"hero-caption"},ft.createElement("span",null,"THE MIDNIGHT AUDITORIUM"),ft.createElement("span",null,"42° 21' N · 71° 03' W")),ft.createElement("div",{className:"hero-counter"},ft.createElement("span",null,"01"),ft.createElement("i",null)," 03")),ft.createElement("section",{className:"now-showing page-section",id:"movies"},ft.createElement("div",{className:"section-heading"},ft.createElement("div",null,ft.createElement("div",{className:"eyebrow section-eyebrow"},"YOUR NEXT GREAT NIGHT"),ft.createElement("h2",null,"Now showing")),ft.createElement("a",{href:"#booking",className:"text-link"},"View all films ",ft.createElement(Hu,{size:16}))),ft.createElement("div",{className:"movie-layout"},ft.createElement("div",{className:"movie-list"},o.map((x,S)=>ft.createElement("button",{className:`movie-row ${a.id===x.id?"selected":""}`,key:x.id,onClick:()=>s(x),type:"button","aria-pressed":a.id===x.id},ft.createElement("span",{className:"movie-index"},"0",S+1),ft.createElement("span",{className:"movie-info"},ft.createElement("span",{className:"movie-genre"},x.genre),ft.createElement("span",{className:"movie-title"},x.title),ft.createElement("span",{className:"movie-duration"},ft.createElement(EM,{size:12})," ",x.duration_minutes," min ",ft.createElement("span",null,"·")," ",x.rating)),ft.createElement(Hu,{className:"movie-arrow",size:18})))),ft.createElement("div",{className:"featured-movie",style:w(a)},ft.createElement("div",{className:"featured-top"},ft.createElement("span",{className:"now-tag"},ft.createElement("span",null)," NOW PLAYING"),ft.createElement("span",{className:"featured-rating"},a.rating)),ft.createElement("div",{className:"featured-bottom"},ft.createElement("span",{className:"movie-genre"},"TONIGHT'S FEATURE"),ft.createElement("h3",null,a.title),ft.createElement("p",null,a.description||`${a.genre} · ${a.duration_minutes} min`),ft.createElement("a",{href:"#booking",className:"poster-cta"},"Choose your seats ",ft.createElement(Hu,{size:16})))))),ft.createElement("section",{className:"booking-section page-section",id:"booking"},ft.createElement("div",{className:"section-heading booking-heading"},ft.createElement("div",null,ft.createElement("div",{className:"eyebrow section-eyebrow"},"THE GOOD PART"),ft.createElement("h2",null,"Make it a movie night.")),ft.createElement("div",{className:"booking-note"},ft.createElement(RM,{size:15})," Your favorite seat is just a few taps away")),ft.createElement("form",{className:"booking-panel",onSubmit:A},ft.createElement("div",{className:"booking-step"},ft.createElement("span",{className:"step-number"},"01"),ft.createElement("label",null,"Pick a day"),ft.createElement("div",{className:"date-picker"},BR.map((x,S)=>ft.createElement("button",{className:`date-option ${u===S?"chosen":""}`,key:x.day,onClick:()=>f(S),type:"button"},ft.createElement("span",null,x.weekday),ft.createElement("strong",null,x.day))))),ft.createElement("div",{className:"booking-step"},ft.createElement("span",{className:"step-number"},"02"),ft.createElement("label",null,"Choose a show"),ft.createElement("div",{className:"time-picker"},Yv.map(x=>ft.createElement("button",{className:`time-option ${h===x?"chosen":""}`,key:x,onClick:()=>d(x),type:"button"},x)))),ft.createElement("div",{className:"booking-step ticket-step"},ft.createElement("span",{className:"step-number"},"03"),ft.createElement("label",null,"How many seats?"),ft.createElement("div",{className:"ticket-picker"},ft.createElement("span",null,ft.createElement(CM,{size:16})," Tickets ",ft.createElement("small",null,"$16 / seat")),ft.createElement("div",{className:"stepper"},ft.createElement("button",{"aria-label":"Remove one ticket",disabled:_<=1,onClick:()=>g(_-1),type:"button"},ft.createElement(Y0,{size:14})),ft.createElement("strong",null,_),ft.createElement("button",{"aria-label":"Add one ticket",disabled:_>=8,onClick:()=>g(_+1),type:"button"},ft.createElement(bM,{size:14}))))),ft.createElement("div",{className:"booking-submit"},ft.createElement("div",null,ft.createElement("span",null,"TOTAL"),ft.createElement("strong",null,"$",_*16,".00")),ft.createElement("button",{className:"book-button",disabled:v==="loading",type:"submit"},v==="loading"?"Booking…":v==="success"?ft.createElement(ft.Fragment,null,ft.createElement(yM,{size:17})," Confirmed"):ft.createElement(ft.Fragment,null,"Get tickets ",ft.createElement(Hu,{size:16})))),y&&ft.createElement("p",{className:`booking-notice ${v==="error"?"error":""}`,role:"status"},y)),ft.createElement("div",{className:"booking-footnote"},ft.createElement("span",null,ft.createElement(MM,{size:14})," Dolby Atmos in every auditorium"),ft.createElement("span",null,ft.createElement(AM,{size:14})," Fresh popcorn, always"),ft.createElement("span",null,"Doors open 20 min before showtime"))),ft.createElement("footer",{id:"about"},ft.createElement("a",{className:"brand footer-brand",href:"#home"},ft.createElement("span",{className:"brand-mark"},ft.createElement(q0,{size:18})),ft.createElement("span",null,"MIDNIGHT",ft.createElement("span",{className:"brand-light"},"CINEMA"))),ft.createElement("span",{className:"footer-address"},"18 Mercer Street, New York, NY"),ft.createElement("span",{className:"footer-hours"},"EVERY NIGHT, TIL LATE ",ft.createElement(Y0,{size:12})," EST. 1987")))}mM.createRoot(document.getElementById("root")).render(ft.createElement(ft.StrictMode,null,ft.createElement(FR,null)));
