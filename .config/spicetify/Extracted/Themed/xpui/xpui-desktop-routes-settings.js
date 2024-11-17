"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1785],{82199:(e,t,n)=>{n.d(t,{Z:()=>c,h:()=>o});n(184),n(42486);var r=n(30758),i=n(73647),a=n(57965),s=n(86070),l=(0,r.createContext)(null),c=function(e){var t=e.children,n=(0,a.r)(i.g,{}),r=n.spec,c=n.UBIFragment;return(0,s.jsx)(c,{spec:r,children:(0,s.jsx)(l.Provider,{value:n,children:t})})},o=function(){var e=(0,r.useContext)(l);if(null===e)throw new Error("useSettingsUBI must be used within a SettingsUBIProvider");return e}},29882:(e,t,n)=>{n.d(t,{A:()=>c,R:()=>l});var r=n(71523),i=(n(184),n(42486),n(79024),n(43379),n(59255),n(85130),n(55636),n(28509),n(97332),n(46555),n(13296),n(24594),n(97460),n(93577),n(30758)),a=n(86070),s=(0,i.createContext)(void 0),l=function(e){var t=e.children,n=(0,i.useState)(!1),l=(0,r.A)(n,2),c=l[0],o=l[1],u=(0,i.useState)(new Set),d=(0,r.A)(u,2),h=d[0],v=d[1],f=(0,i.useCallback)((function(e,t){v((function(n){if(n.has(e)===t)return n;var r=new Set(n);return t?r.add(e):r.delete(e),r}))}),[]),S=h.size>0;return(0,a.jsx)(s.Provider,{value:{sectionMatch:c,setSectionMatch:o,sectionContainsMatch:S,setSectionFilterMatchQueryValue:f},children:t})},c=function(){var e=(0,i.useContext)(s);if(void 0===e)throw new Error("useSectionMatchState() must be used within a SectionFilterMatchContextProvider");return e}},65190:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(48),i=(n(30456),n(43379),n(34192),n(88856),n(30758)),a=n(7852),s=n(22704),l=n(83635),c=n(86070),o=["htmlString","children","htmlFor","semanticColor","variant","className"];function u(e){var t=e.htmlString,n=e.children,u=e.htmlFor,d=e.semanticColor,h=void 0===d?"textSubdued":d,v=e.variant,f=void 0===v?"bodySmall":v,S=e.className,g=(0,r.A)(e,o),m=(0,i.useContext)(l.g).filter;if(!n&&!t)return null;var x=n;return t&&(x=(0,c.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})),(0,c.jsx)(a.E,{as:"label",variant:f,semanticColor:h,htmlFor:u,className:S,"data-testid":g["data-testid"],children:m.length>0?(0,c.jsx)(s.M,{searchWords:[m],textToHighlight:n||t||""}):x})}},57356:(e,t,n)=>{n.d(t,{i:()=>o});n(30456),n(43379),n(34192),n(88856);var r=n(30758),i=n(33383),a=n(83635),s=n(29882);const l="x-settings-row";var c=n(86070),o=function(e){var t=e.children,n=e.filterMatchQuery,o=(0,r.useContext)(a.g).filter,u=(0,s.A)(),d=u.setSectionFilterMatchQueryValue,h=u.sectionMatch,v=(0,i.C)(o,n);return(0,r.useEffect)((function(){d(n,v)}),[v,n,d]),h||v?(0,c.jsx)("div",{className:l,children:t}):null}},15102:(e,t,n)=>{n.d(t,{n:()=>a});const r="x-settings-secondColumn";var i=n(86070),a=function(e){var t=e.children;return(0,i.jsx)("div",{className:r,children:t})}},66493:(e,t,n)=>{n.d(t,{q:()=>l});var r=n(97500),i=n.n(r);const a="x-settings-firstColumn";var s=n(86070),l=function(e){var t=e.className,n=e.children;return(0,s.jsx)("div",{className:i()(a,t),children:n})}},33383:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(1749),i=function(e,t){return"string"==typeof e&&"string"==typeof t?!(e.length>0)||null!==(0,r.u)(e,t):"boolean"!=typeof e||e}},2300:(e,t,n)=>{n.r(t),n.d(t,{SettingsLabel:()=>c.W,SettingsRow:()=>o.i,SettingsRowEnd:()=>d.n,SettingsRowStart:()=>u.q,default:()=>l});n(79024),n(43379),n(51234),n(97460),n(93577);var r=n(30758),i=n(82199),a=n(86070),s=(0,r.lazy)((function(){return Promise.all([n.e(4151),n.e(4904),n.e(6700),n.e(3190),n.e(8070),n.e(7078),n.e(2391)]).then(n.bind(n,54997))}));const l=function(){return(0,a.jsx)(i.Z,{children:(0,a.jsx)(s,{})})};var c=n(65190),o=n(57356),u=n(66493),d=n(15102)}}]);
//# sourceMappingURL=xpui-desktop-routes-settings.js.map