(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{506:function(e,t,n){"use strict";n.d(t,{L:function(){return se},Kq:function(){return q},AK:function(){return ye},eh:function(){return X},Hf:function(){return ve},xf:function(){return ie},LK:function(){return ue},zK:function(){return K},nR:function(){return ce}});var r=n(178),o=n.n(r),i=n(7294),a=n.t(i,2);Math.round(1e10*Math.random());Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var u=n(3935);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let s=new Map,c=new Set;function l(){if("undefined"===typeof window)return;let e=t=>{let n=s.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),s.delete(t.target)),0===s.size)){for(let e of c)e();c.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=s.get(t.target);n||(n=new Set,s.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?l():document.addEventListener("DOMContentLoaded",l));"undefined"!==typeof window&&window.visualViewport;new Map;function d(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function f(){return d(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const h=i.createContext(null);h.displayName="PressResponderContext";let v=null,y=new Set,m=!1,b=!1;function g(e,t){for(let n of y)n(e,t)}function S(e){b=!0,function(e){return!(e.metaKey||!f()&&e.altKey||e.ctrlKey)}(e)&&(v="keyboard",g("keyboard",e))}function w(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,g("pointer",e))}function _(e){p(e)&&(b=!0,v="virtual")}function M(e){e.target!==window&&e.target!==document&&(b||(v="virtual",g("virtual",e)),b=!1)}function F(){b=!1}function D(){if("undefined"===typeof window||m)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",S,!0),document.addEventListener("keyup",S,!0),document.addEventListener("click",_,!0),window.addEventListener("focus",M,!0),window.addEventListener("blur",F,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",w,!0),document.addEventListener("pointermove",w,!0),document.addEventListener("pointerup",w,!0)):(document.addEventListener("mousedown",w,!0),document.addEventListener("mousemove",w,!0),document.addEventListener("mouseup",w,!0)),m=!0}"undefined"!==typeof document&&("loading"!==document.readyState?D():document.addEventListener("DOMContentLoaded",D));new Set;const j=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];j.join(":not([hidden]),");j.push('[tabindex]:not([tabindex="-1"]):not([disabled])');j.join(':not([hidden]):not([tabindex="-1"]),');function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function C(e){return null!=e}function A(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0,a=r;i<a.length;i++){var u=a[i];u in e&&(t[u]=e[u])}return t}function Z(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0,a=Object.keys(e);i<a.length;i++){var u=a[i];r.includes(u)||(t[u]=e[u])}return t}function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=E(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var x="undefined"!==typeof window,L=Symbol("NONE"),R=x?i.useLayoutEffect:i.useEffect;function T(e,t,n){return Array.isArray(n)?i.createElement.apply(i,[e,t].concat(n)):n||"children"in t?i.createElement(e,t,n):i.createElement(e,t)}function W(e){for(var t=I({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0,a=r;i<a.length;i++)for(var u=a[i],s=0,c=Object.keys(u);s<c.length;s++){var l=c[s];t[l]=B(l,t[l],u[l])}return t}function V(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=E(t);!(n=r()).done;){V(n.value,e)}}}function B(e,t,n){return t===L||n===L?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?I({},t,n):"ref"===e?z(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function N(e,t,n,r){var o=t.children,i=O(t,["children"]),a=G(o,null!=n&&n);return T(e,I({ref:r},i),a)}function H(e,t){var n=e.as,r=e.hasGap;return N(null!=n?n:"div",O(e,["as","hasGap"]),r,t)}var U=(0,i.forwardRef)(H),$=function(e){return(0,i.forwardRef)((function(t,n){var r=t.hasGap,o=O(t,["hasGap"]);return N(e,o,r,n)}))},q=Object.assign(U,{div:$("div"),a:$("a"),button:$("button"),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6"),label:$("label"),form:$("form"),section:$("section"),head:$("head"),main:$("main"),nav:$("nav")});function K(e,t,n){if(null==e)return!1;var r=e[t];return null!=r&&(!0===r?n===t:!1!==r&&(Array.isArray(r)?r.includes(n):"string"===typeof r?r===n:void 0!==r[n]&&!1!==r[n]))}function G(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?i.createElement.apply(a,["div",{className:n}].concat(e)):(0,i.createElement)("div",{className:n},e):null}function Q(e,t,n,r){var o=ne(e),a=te(n,o.props);if("render"===o.type)return o.render(a,t);var u=t;"as"===o.type&&o.as&&(t===q?a.as=o.as:u=o.as);var s=a.children;o.wrapChildren&&(s=o.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:i.createElement.apply(i,[i.Fragment,{}].concat(e)):e}(s))),r&&(s=G(s,!0));var c=T(u,a,s);return o.wrap&&(c=o.wrap(c)),c}var J=new Map;function X(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var i=arguments.length,a=new Array(i>2?i-2:0),u=2;u<i;u++)a[u-2]=arguments[u];var s=Y.apply(void 0,[e,t].concat(a));if(n&&J.set(n,s),r){var c,l=o?null!=(c=J.get(o))?c:null:s;return J.clear(),l}return s}function Y(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],i=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var a=arguments.length,u=new Array(a>2?a-2:0),s=2;s<a;s++)u[s-2]=arguments[s];return Q(r,e,W.apply(void 0,[t,0===u.length?{}:{children:1===u.length?u[0]:u}].concat(i)),o)}var ee=Symbol("UNSET");function te(e,t){if(!t)return e;for(var n=I({},e),r=0,o=Object.keys(t);r<o.length;r++){var i=o[r],a=e[i],u=t[i];u===ee?delete n[i]:(null!=u||"className"===i||"style"===i||i.startsWith("on")&&"function"===typeof a||(u=L),n[i]=B(i,a,u))}return n}function ne(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||i.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?I({},e,{props:e.props||{},type:"as"}):"render"in e?I({},e,{type:"render"}):"props"in e?I({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?I({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function re(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var i=o[r];n[i]=oe(e[i],t[i])}return n}function oe(e,t){var n,r;if(!e)return t;if(!t)return e;var o=ne(e),i=ne(t),a=k.apply(void 0,[o.wrap,i.wrap].filter(C)),u=k.apply(void 0,[o.wrapChildren,i.wrapChildren].filter(C)),s=te(null!=(n=o.props)?n:{},i.props);if("render"===i.type)return{render:i.render,props:s,wrap:a,wrapChildren:u};if("render"===o.type)return{render:o.render,props:s,wrap:a,wrapChildren:u};var c=null!=(r="as"===i.type?i.as:void 0)?r:"as"===o.type?o.as:void 0;return I({props:s,wrap:a,wrapChildren:u},c?{as:c}:{})}function ie(e,t){var n,r,o,i,a,u,s,c,l=t.name,d=t.descendantNames,f=t.internalVariantPropNames,p=t.internalArgPropNames,h=["variants","args","overrides"],v=(i=Z.apply(void 0,[A.apply(void 0,[e].concat(f))].concat(h)),a=null!=(n=e.variants)?n:{},I({},i,a)),y=(u=Z.apply(void 0,[A.apply(void 0,[e].concat(p))].concat(h)),s=null!=(r=e.args)?r:{},I({},u,s)),m=re(Z.apply(void 0,[A.apply(void 0,[e].concat(d))].concat(p,f,h)),null!=(o=e.overrides)?o:{}),b=Z.apply(void 0,[e,"variants","args","overrides"].concat(d,f,p));Object.keys(b).length>0&&(m=re(m,((c={})[l]={props:b},c)));return{variants:v,args:y,overrides:m}}var ae={};function ue(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var n=t[0];e[n]=void 0,ae[n]})),e}function se(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return i.createElement(e.component,A.apply(void 0,[e].concat(t)),i.createElement("a",Object.assign({},Z.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(n=e.href,/^\/(?!\/)/.test(n))?i.createElement(e.component,I({},Z(e,"component","platform","href"),{to:e.href})):i.createElement("a",Object.assign({},Z(e,"component","platform")));var n}function ce(e){var t=e.as,n=e.defaultContents,r=e.value,o=O(e,["as","defaultContents","value"]),a=void 0===r?n:r;if(!a||Array.isArray(a)&&0===a.length)return null;var u=le(a);return u&&(a=(0,i.createElement)("div",{className:"__wab_slot-string-wrapper"},u)),0===Object.keys(o).filter((function(e){return!!o[e]})).length?(0,i.createElement)(i.Fragment,null,a):(0,i.createElement)(t||"div",W({className:"__wab_slot"},o),a)}function le(e){return(0,i.isValidElement)(e)&&e.type===i.Fragment?le(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var de=[],fe={};function pe(){return x?Object.entries(fe).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var he=void 0;function ve(e,t){return Object.assign(fe,t),function(){var t=(0,i.useState)()[1],n=(0,i.useRef)(he||[]);return R((function(){var e=function(){he&&n.current.join("")!==he.join("")&&(n.current=he,t({}))};return de.push(e),void 0===he&&(he=pe()),e(),function(){de.splice(de.indexOf(e),1)}}),[]),e?he||[]:he?he[he.length-1]:void 0}}x&&window.addEventListener("resize",(function(){var e=pe();he&&e.join("")===he.join("")||(he=e,u.unstable_batchedUpdates((function(){return de.forEach((function(e){return e()}))})))}));var ye=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},18:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},110:function(e,t,n){"use strict";n.d(t,{ih:function(){return $},ZP:function(){return G}});var r=n(7294),o=(n(506),n(139)),i=n(4981),a=n(7976),u=n(1758),s=n(5560),c=n(9443),l=n(2303),d=n(7098),f=n(5348),p=n(6600),h=n(1073),v=n(8975),y=n(586),m=n(7211),b=n(3477),g=n(292),S=n(8785),w=n(7068),_=n(1224),M=n(3537),F=n(9116),D=n(8251),j=n(5907),I=n(2918),O=n(534),P=n(2147),E=n(235),C=n(1949),A=n(3749),Z=n(2179),k=n(5232),x=n(2429),L=n(6073),R=n(6314),T=n(9800),W=n(4364),V=n(8146);const z={Home:o.ZP,Header:i.ZP,Footer:a.ZP,Section:u.ZP,FeatureCard:s.ZP,TopSection:c.ZP,HomeCta:l.ZP,IconLink:d.ZP,LinkButton:f.ZP,Testimonial:p.ZP,Avatar:h.ZP,Pricing:v.ZP,BaseCard:y.ZP,Plan:m.ZP,Bullet:b.ZP,Faq:g.ZP,Features:S.ZP,TwitterIconIcon:w.Z,GithubIconIcon:_.Z,FacebookIconIcon:M.Z,FacebookLogoIcon:F.Z,LogoIcon:D.Z,SphereIcon:j.Z,QuoteDashesIcon:I.Z,TinderLogoIcon:O.Z,AirbnbLogoIcon:P.Z,HubspotLogoIcon:E.Z,AmazonLogoIcon:C.Z,SwapIcon:A.Z,SlotIcon:Z.Z,CycleIcon:k.Z,HammerIcon:x.Z,PencilIcon:L.Z,LightningIcon:R.Z,RightArrowIcon:T.Z,Done24Pxsvg2Icon:W.Z},B={Screen:{component:V.wd,isContext:!Boolean("ScreenVariantProvider")}},N={Home:{"4DMiV3F4MSDu8Fphy48W8b":o.ZP},Header:{"4DMiV3F4MSDu8Fphy48W8b":i.ZP},Footer:{"4DMiV3F4MSDu8Fphy48W8b":a.ZP},Section:{"4DMiV3F4MSDu8Fphy48W8b":u.ZP},FeatureCard:{"4DMiV3F4MSDu8Fphy48W8b":s.ZP},TopSection:{"4DMiV3F4MSDu8Fphy48W8b":c.ZP},HomeCta:{"4DMiV3F4MSDu8Fphy48W8b":l.ZP},IconLink:{"4DMiV3F4MSDu8Fphy48W8b":d.ZP},LinkButton:{"4DMiV3F4MSDu8Fphy48W8b":f.ZP},Testimonial:{"4DMiV3F4MSDu8Fphy48W8b":p.ZP},Avatar:{"4DMiV3F4MSDu8Fphy48W8b":h.ZP},Pricing:{"4DMiV3F4MSDu8Fphy48W8b":v.ZP},BaseCard:{"4DMiV3F4MSDu8Fphy48W8b":y.ZP},Plan:{"4DMiV3F4MSDu8Fphy48W8b":m.ZP},Bullet:{"4DMiV3F4MSDu8Fphy48W8b":b.ZP},Faq:{"4DMiV3F4MSDu8Fphy48W8b":g.ZP},Features:{"4DMiV3F4MSDu8Fphy48W8b":S.ZP},TwitterIconIcon:{"4DMiV3F4MSDu8Fphy48W8b":w.Z},GithubIconIcon:{"4DMiV3F4MSDu8Fphy48W8b":_.Z},FacebookIconIcon:{"4DMiV3F4MSDu8Fphy48W8b":M.Z},FacebookLogoIcon:{"4DMiV3F4MSDu8Fphy48W8b":F.Z},LogoIcon:{"4DMiV3F4MSDu8Fphy48W8b":D.Z},SphereIcon:{"4DMiV3F4MSDu8Fphy48W8b":j.Z},QuoteDashesIcon:{"4DMiV3F4MSDu8Fphy48W8b":I.Z},TinderLogoIcon:{"4DMiV3F4MSDu8Fphy48W8b":O.Z},AirbnbLogoIcon:{"4DMiV3F4MSDu8Fphy48W8b":P.Z},HubspotLogoIcon:{"4DMiV3F4MSDu8Fphy48W8b":E.Z},AmazonLogoIcon:{"4DMiV3F4MSDu8Fphy48W8b":C.Z},SwapIcon:{"4DMiV3F4MSDu8Fphy48W8b":A.Z},SlotIcon:{"4DMiV3F4MSDu8Fphy48W8b":Z.Z},CycleIcon:{"4DMiV3F4MSDu8Fphy48W8b":k.Z},HammerIcon:{"4DMiV3F4MSDu8Fphy48W8b":x.Z},PencilIcon:{"4DMiV3F4MSDu8Fphy48W8b":L.Z},LightningIcon:{"4DMiV3F4MSDu8Fphy48W8b":R.Z},RightArrowIcon:{"4DMiV3F4MSDu8Fphy48W8b":T.Z},Done24Pxsvg2Icon:{"4DMiV3F4MSDu8Fphy48W8b":W.Z}},H={Screen:{"4DMiV3F4MSDu8Fphy48W8b":{component:V.wd,isContext:!Boolean(void 0)}}},U={"/":{name:"Home",projectId:"4DMiV3F4MSDu8Fphy48W8b"},"/pricing":{name:"Pricing",projectId:"4DMiV3F4MSDu8Fphy48W8b"},"/features":{name:"Features",projectId:"4DMiV3F4MSDu8Fphy48W8b"}};function $(e){return Array.isArray(e)&&(e=e.join("/")),e.startsWith("/")||(e="/"+e),U[e]}function q(e,t){if(z[t])return z[t];if(!N[t])throw new Error(`The component ${t} could not be found.`);if(!N[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(N[t])}`);return N[t][e]}function K(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if(B[e]){const{component:t,isContext:r}=B[e];return[r?t.Provider:t,n]}if(!H[e])throw new Error(`The provider ${e} could not be found.`);if(!H[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(H[e])}`);const{component:r,isContext:o}=H[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function G({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const i=q(e,t);return K(r.createElement(i,n),e,o)}G.getPlumeType=function({projectId:e,component:t}){return q(e,t).__plumeType}},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var i=o(n(7294)),a=n(1689),u=n(2441),s=n(5749),c={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.asPath||"/",d=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],u=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):u||i}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=i.Children.only(h),S=g&&"object"===typeof g&&g.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),_=r(w,2),M=_[0],F=_[1],D=i.default.useCallback((function(e){M(e),S&&("function"===typeof S?S(e):"object"===typeof S&&(S.current=e))}),[S,M]);(0,i.useEffect)((function(){var e=F&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof b?b:n&&n.locale,o=c[f+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,f,p,{locale:r})}),[p,f,F,b,t,n]);var j={ref:D,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,u,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:u}))}(e,n,f,p,v,y,m,b)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,f,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var I="undefined"!==typeof b?b:n&&n.locale,O=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);j.href=O||(0,a.addBasePath)((0,a.addLocale)(p,I,n&&n.defaultLocale))}return i.default.cloneElement(g,j)};t.default=d},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),c=(0,o.useState)(!1),l=r(c,2),d=l[0],f=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!a&&!d){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n(7294),i=n(8391),a="undefined"!==typeof IntersectionObserver;var u=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(i=n(617))&&i.__esModule?i:{default:i},s=n(3367),c=n(4287),l=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,c=h.length;s<c;s++){var l=h[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=o.props[l],f=r[l]||new Set;"name"===l&&a||!f.has(d)?(f.add(d),r[l]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(e,u)}return a.default.cloneElement(e,{key:i})}))}function y(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),a=(n(1506),n(2205)),u=n(8585),s=n(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){a(n,e);var t=c(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},3179:function(){},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,s=[],c=!1,l=-1;function d(){c&&u&&(c=!1,u.length?s=u.concat(s):l=-1,s.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=s.length;t;){for(u=s,s=[];++l<t;)u&&u[l].run();l=-1,t=s.length}u=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||c||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},6044:function(e,t,n){"use strict";var r=n(4155);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof r&&r.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,u=void 0===o?i:o,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(a(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,n,r,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(o){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];s(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&s(a(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&o(t.prototype,n),r&&o(t,r),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=u},7884:function(e,t,n){"use strict";t.default=void 0;var r,o=n(7294);var i=new(((r=n(8122))&&r.__esModule?r:{default:r}).default),a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=a},8122:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n(9887)),o=i(n(6044));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,u=t.isBrowser,s=void 0===u?"undefined"!==typeof window:u;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=s,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},5988:function(e,t,n){e.exports=n(7884)}}]);