(this["webpackJsonpdev-doctor"]=this["webpackJsonpdev-doctor"]||[]).push([[0],{103:function(e,n,t){"use strict";t.r(n);var o=t(4),a=t(0),c=t.n(a),i=t(7),r=t.n(i),s=(t(87),t(88),t(48)),l=t(129),u=t(74),d=Object(u.a)({typography:{button:{textTransform:"none"}},palette:{primary:s.a,secondary:l.a}}),h=t(139),j=t(130),b=t(131),g=t(133),p=t(134),f=t(135),v=t(143),O=Object(j.a)((function(e){return{heroButtons:{marginTop:e.spacing(8)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)}}})),m=function(){var e=Object(v.a)("common").t,n=O();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:n.heroContent,children:Object(o.jsxs)(b.a,{maxWidth:"sm",children:[Object(o.jsx)(g.a,{align:"center",variant:"h2",component:"h1",children:e("title")}),Object(o.jsx)(g.a,{align:"center",variant:"h5",color:"textSecondary",children:e("subtitle")}),Object(o.jsx)("div",{className:n.heroButtons,children:Object(o.jsxs)(p.a,{container:!0,spacing:2,justify:"center",children:[Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(f.a,{variant:"contained",color:"primary",children:e("courses")})}),Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(f.a,{variant:"outlined",color:"primary",children:e("discord")})})]})})]})})})},x=t(70),w=t(11),k=t(35),y=t(69),C=t.n(y),S=t(136),W=t(137),N=t(138),B=t(140),T=t(144),A=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function E(){var e=Object(v.a)().i18n,n=c.a.useState(null),t=Object(k.a)(n,2),a=t[0],i=t[1],r=function(e){i(e.currentTarget)},s=function(){i(null)},l=function(n){e.changeLanguage(n),s()},u=A();return Object(o.jsx)(S.a,{position:"static",children:Object(o.jsxs)(W.a,{children:[Object(o.jsx)(N.a,{edge:"start",className:u.menuButton,color:"inherit","aria-label":"menu",children:Object(o.jsx)(C.a,{})}),Object(o.jsx)(g.a,{variant:"h6",className:u.title,children:"News"}),Object(o.jsx)(f.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:r,children:"LANGUAGE"}),Object(o.jsx)(f.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:r,children:"Open Menu"}),Object(o.jsxs)(B.a,{id:"language-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:s,children:[Object(o.jsx)(T.a,{onClick:function(){return l("de")},children:"Deutsch"}),Object(o.jsx)(T.a,{onClick:function(){return l("en")},children:"English"})]})]})})}var L=function(){return Object(o.jsxs)(h.a,{theme:d,children:[Object(o.jsx)(E,{}),Object(o.jsx)(x.a,{children:Object(o.jsx)(w.c,{children:Object(o.jsx)(w.a,{path:"/",component:m})})})]})},P=t(75),F=t(71),G=t(36),I=t(73),U=(P.a.use(F.a).use(G.e).use(I.a).init({backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}}),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,145)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),a(e),c(e),i(e)}))}),M=t(142),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");R?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):D(n,e)}))}}function D(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=function(){var e=c.a.useState(!1),n=Object(k.a)(e,2),t=n[0],i=n[1],r=c.a.useState(null),s=Object(k.a)(r,2),l=s[0],u=s[1],d=function(e){i(!0),u(e.waiting)};Object(a.useEffect)((function(){z({onUpdate:d})}),[]);var h=function(){null===l||void 0===l||l.postMessage({type:"SKIP_WAITING"}),i(!1),window.location.reload()};return Object(o.jsx)(M.a,{open:t,message:"A new version is available!",onClick:h,anchorOrigin:{vertical:"top",horizontal:"center"},action:Object(o.jsx)(f.a,{color:"inherit",size:"small",onClick:h,children:"Reload"})})};r.a.render(Object(o.jsxs)(a.Suspense,{fallback:"loading",children:[Object(o.jsx)(L,{}),",",Object(o.jsx)(J,{})]}),document.getElementById("root")),U()},87:function(e,n,t){},88:function(e,n,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.4dbf6418.chunk.js.map