(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=a(r(2)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));a(r(1)),a(r(72));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const d=e=>{let{to:t}=e,r=c(e,["to"]);return t.includes("http")?l.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=o.default.join("/","pages/commands/help.html")+t),l.default.createElement("a",u({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const n=new URL(o.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(n),null,t),e.onClick();const l=new CustomEvent("changeLocation",{detail:n});return dispatchEvent(l),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const p=e=>{var t,r;return r=t=class extends l.default.Component{constructor(...e){super(...e),s(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?l.default.createElement(e,this.props,this.props.children||null):null}},s(t,"defaultProps",{shouldLoad:!0}),r};p(()=>r.e(13).then(r.bind(null,54))),p(()=>r.e(13).then(r.bind(null,74)));var f=i("h1",{},void 0,i("code",{},void 0,"gsv help")),h=i("p",{},void 0,"display help for gsv"),v=i("code",{},void 0,"gsv help [COMMAND]"),m=i("code",{},void 0,"gsv help [COMMAND]"),b=i("p",{},void 0,"display help for gsv"),g=i("pre",{},void 0,i("code",{},void 0,"USAGE",i("br",{}),"  $ gsv help [COMMAND]",i("br",{}),i("br",{}),"ARGUMENTS",i("br",{}),"  COMMAND  command to show help for",i("br",{}),i("br",{}),"OPTIONS",i("br",{}),"  --all  see all commands in CLI",i("br",{})));var y=e=>i("div",{className:e.className},void 0,i("section",{},void 0,f,h,i("ul",{},void 0,i("li",{},void 0,i(d,{currentPage:e.currentPage,to:"#gsv-help-command"},void 0,v))),i("h2",{id:"gsv-help-%5Bcommand%5D"},void 0,m," ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#gsv-help-%5Bcommand%5D","aria-hidden":"true"})),b,g,i("p",{},void 0,i("em",{},void 0,"See code: ",i(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts",className:"external-link"},void 0,"@oclif/plugin-help")))));t.default=y,e.exports=t.default}}]);
//# sourceMappingURL=help.js.map