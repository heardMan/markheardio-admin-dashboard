(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"domain":"dev-y5wb70ja.auth0.com","clientId":"N4A1QwHA92pIfDBzBUZ6cQBTwIbArdwj","audience":"markheardio-contact-form-service"}')},24:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/menu-dark.c275e518.svg"},35:function(e,t,a){e.exports=a.p+"static/media/close-dark.777b93c6.svg"},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(1),i=a(3),s=a.n(i),u=a(7),m=a(13),d=a(21),p=a.n(d),f=function(){return window.history.replaceState({},document.title,window.location.pathname)},h=r.a.createContext(),g=function(){return Object(n.useContext)(h)},v=a(6),E=(a(33),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],l=t[1],i=g(),s=i.isAuthenticated,u=i.loginWithRedirect,m=i.logout,d=r.a.createElement("img",{className:"icon",src:a(34)}),p=r.a.createElement("img",{className:"icon",src:a(35)}),f=function(){return s?r.a.createElement("a",{hreh:"#",className:"menu-link",onClick:function(){return m()}},"Log out"):!1===s?r.a.createElement("a",{href:"#",className:"menu-link",onClick:function(){return u({})}},"Log in"):void 0};return r.a.createElement("div",null,r.a.createElement("button",{className:"fab",onClick:function(){l(!0!==c)}},!0===c?p:d),!0===c?r.a.createElement("div",{className:"menu open"},r.a.createElement("h1",{className:"menu-title"},r.a.createElement(v.a,{to:"/"},"Dashboard")),r.a.createElement("div",{className:"menu-links"},s&&r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement(v.a,{to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/profile"},"Profile")),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/messages"},"Messages"))),r.a.createElement("div",null,f()))):r.a.createElement("div",{className:"menu"},r.a.createElement("h1",{className:"menu-title"},r.a.createElement(v.a,{to:"/"},"Dashboard")),s&&r.a.createElement("div",{className:"menu-links"},r.a.createElement("div",null,r.a.createElement(v.a,{to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/profile"},"Profile")),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/messages"},"Messages")),r.a.createElement("div",null,f()))))}),b=(a(40),a(10)),O=(a(41),function(){var e=g(),t=e.loading,a=e.user;return t||!a?r.a.createElement("div",null,"Loading..."):r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:a.picture,alt:"Profile"}),r.a.createElement("h2",null,a.name),r.a.createElement("p",null,a.email),r.a.createElement("code",null,JSON.stringify(a,null,2)))}),j=a(4),k=Object(j.a)(),w=function(e){var t=e.component,a=e.path,c=Object(m.a)(e,["component","path"]),l=g(),o=l.loading,i=l.isAuthenticated,d=l.loginWithRedirect;Object(n.useEffect)((function(){o||i||function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({appState:{targetUrl:a}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,i,d,a]);return r.a.createElement(b.a,Object.assign({path:a,render:function(e){return!0===i?r.a.createElement(t,e):null}},c))},x=(a(42),function(e){var t=Object(n.useState)(new Date(e.date)),a=Object(o.a)(t,2),c=a[0],l=(a[1],Object(n.useState)(e.name)),i=Object(o.a)(l,2),s=i[0],u=(i[1],Object(n.useState)(e.email)),m=Object(o.a)(u,2),d=m[0],p=(m[1],Object(n.useState)(e.message.slice(0,40)+"...")),f=Object(o.a)(p,2),h=(f[0],f[1],Object(n.useState)(!1)),g=Object(o.a)(h,2),v=g[0],E=g[1];Object(n.useEffect)((function(){document.body.style.overflow=!0===v?"hidden":""}));var b=function(){E(!0!==v)},O=r.a.createElement("div",{className:"msg"},r.a.createElement("div",{className:"msg-bg"}),r.a.createElement("div",{className:"msg-dialogue"},r.a.createElement("div",{className:"msg-header"},r.a.createElement("div",{className:"msg-title"},"Message from "+s),r.a.createElement("button",{onClick:b,id:"msg-close"},"Close")),r.a.createElement("div",{className:"modal-content"},e.message),r.a.createElement("div",{className:"msg-action"}))),j=r.a.createElement("div",{className:"msg-list-item",onClick:b},r.a.createElement("span",{className:"msg-date"},function(e){var t,a=e.getMonth(),n=e.getDate();return 0===a?t="January":1===a?t="February":2===a?t="March":3===a?t="April":4===a?t="May":5===a?t="June":6===a?t="July":7===a?t="August":8===a?t="September":9===a?t="October":10===a?t="November":11===a&&(t="December"),"".concat(t,"-").concat(n)}(c)),r.a.createElement("span",{className:"msg-name"},s),r.a.createElement("span",{className:"msg-email"},d));return!0===v?O:j}),N=(a(43),function(e){return r.a.createElement("ul",{className:"list",style:{}},e.messages.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(x,{date:e.date,name:e.name,email:e.email,message:e.message,preview:e.preview}))})))}),y=function(){var e=g().getTokenSilently,t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],i=function(){var t=Object(u.a)(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:return a=t.sent,"http://localhost:5000/",t.next=7,fetch("http://localhost:5000/",{headers:{Authorization:"Bearer ".concat(a)}});case 7:return n=t.sent,t.next=10,n.json();case 10:r=t.sent,l(r.messages),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement("div",null,r.a.createElement(N,{messages:c}))},S=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],d=(i[1],g().getTokenSilently),p=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:return t=e.sent,"http://localhost:5000/",e.next=7,fetch("http://localhost:5000/",{headers:{Authorization:"Bearer ".concat(t)}});case 7:return a=e.sent,console.log(t),e.next=11,a.json();case 11:n=e.sent,c(!0),console.log(n),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"External API"),r.a.createElement("button",{onClick:p},"Ping API"),a&&r.a.createElement("code",null,JSON.stringify(m,null,2)))},C=(a(44),function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Dashboard"))});var A=function(){var e=g().loading,t=g();return t.isAuthenticated,t.loginWithRedirect,t.logout,e?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement(b.b,{history:k},r.a.createElement("header",null,r.a.createElement(C,null),r.a.createElement("div",{className:"spacer"})),r.a.createElement("nav",null,r.a.createElement(E,null)),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0}),r.a.createElement(w,{path:"/profile",component:O}),r.a.createElement(w,{path:"/messages",component:y}),r.a.createElement(w,{path:"/external-api",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(14);l.a.render(r.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,c=void 0===a?f:a,l=Object(m.a)(e,["children","onRedirectCallback"]),i=Object(n.useState)(),d=Object(o.a)(i,2),g=d[0],v=d[1],E=Object(n.useState)(),b=Object(o.a)(E,2),O=b[0],j=b[1],k=Object(n.useState)(),w=Object(o.a)(k,2),x=w[0],N=w[1],y=Object(n.useState)(!0),S=Object(o.a)(y,2),C=S[0],A=S[1],P=Object(n.useState)(!1),R=Object(o.a)(P,2),W=R[0],I=R[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()(l);case 2:if(t=e.sent,N(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,c(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,v(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:o=e.sent,j(o);case 19:A(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},I(!0),e.prev=2,e.next=5,x.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,I(!1),e.finish(10);case 13:return e.next=15,x.getUser();case 15:a=e.sent,j(a),v(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,x.handleRedirectCallback();case 3:return e.next=5,x.getUser();case 5:t=e.sent,A(!1),v(!0),j(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{isAuthenticated:g,user:O,loading:C,popupOpen:W,loginWithPopup:T,handleRedirectCallback:J,getIdTokenClaims:function(){return x.getIdTokenClaims.apply(x,arguments)},loginWithRedirect:function(){return x.loginWithRedirect.apply(x,arguments)},getTokenSilently:function(){return x.getTokenSilently.apply(x,arguments)},getTokenWithPopup:function(){return x.getTokenWithPopup.apply(x,arguments)},logout:function(){return x.logout.apply(x,arguments)}}},t)}),{domain:P.domain,client_id:P.clientId,redirect_uri:window.location.origin,audience:P.audience,onRedirectCallback:function(e){k.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9674ed36.chunk.js.map