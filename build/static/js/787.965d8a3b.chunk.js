"use strict";(self.webpackChunkkendo_react_grid_performance=self.webpackChunkkendo_react_grid_performance||[]).push([[787],{787:function(e,l,g){g.r(l),g.d(l,{getCLS:function(){return J},getFCP:function(){return N},getFID:function(){return V},getLCP:function(){return X},getTTFB:function(){return Y}});var y,b,k,C,D=function r(e,l){return{name:e,value:void 0===l?-1:l,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},_=function a(e,l){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var g=new PerformanceObserver((function(e){return e.getEntries().map(l)}));return g.observe({type:e,buffered:!0}),g}}catch(e){}},B=function o(e,l){var g=function n(g){"pagehide"!==g.type&&"hidden"!==document.visibilityState||(e(g),l&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",g,!0),addEventListener("pagehide",g,!0)},q=function c(e){addEventListener("pageshow",(function(l){l.persisted&&e(l)}),!0)},A=function u(e,l,g){var y;return function(b){l.value>=0&&(b||g)&&(l.delta=l.value-(y||0),(l.delta||void 0===y)&&(y=l.value,e(l)))}},H=-1,I=function s(){return"hidden"===document.visibilityState?0:1/0},R=function m(){B((function(e){var l=e.timeStamp;H=l}),!0)},M=function v(){return H<0&&(H=I(),R(),q((function(){setTimeout((function(){H=I(),R()}),0)}))),{get firstHiddenTime(){return H}}},N=function p(e,l){var g,y=M(),b=D("FCP"),k=function f(e){"first-contentful-paint"===e.name&&(B&&B.disconnect(),e.startTime<y.firstHiddenTime&&(b.value=e.startTime,b.entries.push(e),g(!0)))},C=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],B=C?null:_("paint",k);(C||B)&&(g=A(e,b,l),C&&k(C),q((function(y){b=D("FCP"),g=A(e,b,l),requestAnimationFrame((function(){requestAnimationFrame((function(){b.value=performance.now()-y.timeStamp,g(!0)}))}))})))},O=!1,x=-1,J=function h(e,l){O||(N((function(e){x=e.value})),O=!0);var g,y=function i(l){x>-1&&e(l)},b=D("CLS",0),k=0,C=[],H=function v(e){if(!e.hadRecentInput){var l=C[0],y=C[C.length-1];k&&e.startTime-y.startTime<1e3&&e.startTime-l.startTime<5e3?(k+=e.value,C.push(e)):(k=e.value,C=[e]),k>b.value&&(b.value=k,b.entries=C,g())}},h=_("layout-shift",H);h&&(g=A(y,b,l),B((function(){h.takeRecords().map(H),g(!0)})),q((function(){k=0,x=-1,b=D("CLS",0),g=A(y,b,l)})))},j={passive:!0,capture:!0},z=new Date,G=function T(e,l){y||(y=l,b=e,k=new Date,U(removeEventListener),K())},K=function E(){if(b>=0&&b<k-z){var e={entryType:"first-input",name:y.type,target:y.target,cancelable:y.cancelable,startTime:y.timeStamp,processingStart:y.timeStamp+b};C.forEach((function(l){l(e)})),C=[]}},Q=function w(e){if(e.cancelable){var l=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,l){var g=function n(){G(e,l),b()},y=function i(){b()},b=function r(){removeEventListener("pointerup",g,j),removeEventListener("pointercancel",y,j)};addEventListener("pointerup",g,j),addEventListener("pointercancel",y,j)}(l,e):G(l,e)}},U=function S(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(l){return e(l,Q,j)}))},V=function L(e,l){var g,k=M(),H=D("FID"),I=function d(e){e.startTime<k.firstHiddenTime&&(H.value=e.processingStart-e.startTime,H.entries.push(e),g(!0))},R=_("first-input",I);g=A(e,H,l),R&&B((function(){R.takeRecords().map(I),R.disconnect()}),!0),R&&q((function(){var k;H=D("FID"),g=A(e,H,l),C=[],b=-1,y=null,U(addEventListener),k=I,C.push(k),K()}))},W={},X=function F(e,l){var g,y=M(),b=D("LCP"),k=function s(e){var l=e.startTime;l<y.firstHiddenTime&&(b.value=l,b.entries.push(e),g())},C=_("largest-contentful-paint",k);if(C){g=A(e,b,l);var H=function p(){W[b.id]||(C.takeRecords().map(k),C.disconnect(),W[b.id]=!0,g(!0))};["keydown","click"].forEach((function(e){addEventListener(e,H,{once:!0,capture:!0})})),B(H,!0),q((function(y){b=D("LCP"),g=A(e,b,l),requestAnimationFrame((function(){requestAnimationFrame((function(){b.value=performance.now()-y.timeStamp,W[b.id]=!0,g(!0)}))}))}))}},Y=function P(e){var l,g=D("TTFB");l=function t(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,l={entryType:"navigation",startTime:0};for(var g in e)"navigationStart"!==g&&"toJSON"!==g&&(l[g]=Math.max(e[g]-e.navigationStart,0));return l}();if(g.value=g.delta=t.responseStart,g.value<0||g.value>performance.now())return;g.entries=[t],e(g)}catch(e){}},"complete"===document.readyState?setTimeout(l,0):addEventListener("pageshow",l)}}}]);
//# sourceMappingURL=787.965d8a3b.chunk.js.map