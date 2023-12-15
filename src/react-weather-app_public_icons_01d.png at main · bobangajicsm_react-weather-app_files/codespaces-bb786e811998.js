"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["codespaces"],{35187:(e,t,r)=>{var o=r(36071),n=r(59753),a=r(65935),s=r(58700);function i(){let e=new URL(document.location.href,window.location.origin),t=new URLSearchParams(e.search);t.set("response_error","true"),window.location.replace(`${window.location.pathname}?${t.toString()}`)}(0,n.on)("remote-input-error","#js-codespaces-repository-select",()=>{let e=document.querySelector("#js-codespaces-unable-load-repositories-warning");e.hidden=!1}),(0,a.AC)(".js-new-codespace-form",async function(e,t){let r=e.closest("[data-replace-remote-form-target]"),o=r.querySelector(".js-new-codespace-submit-button");o instanceof HTMLInputElement&&(o.disabled=!0),e.classList.remove("is-error"),e.classList.add("is-loading");try{o&&o.setAttribute("disabled","true");let e=await t.html();if(200!==e.status&&i(),r.replaceWith(e.html),"true"===r.getAttribute("data-allow-update-url")){let e=new FormData(document.querySelector("form.js-new-codespace-form"));!function(e){let t=new URL(document.location.href,window.location.origin),r=new URLSearchParams(t.search),o=["vscs_target"];for(let[t,n]of e.entries()){if(o.includes(t)||!n){r.delete(t);continue}r.set(t,n)}window.history.replaceState({},"",`?${r.toString()}`)}(e)}}catch(e){throw i(),e}});let l=null;function c(e){if(l=e,null!==e){let e=document.querySelector(".js-codespace-loading-steps");e.setAttribute("data-current-state",l)}}(0,o.N7)(".js-codespace-loading-steps",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-current-state");t&&c(t)}}),(0,o.N7)(".js-codespace-advance-state",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-state");t&&c(t)}});let d=null;function u(e){let t=document.querySelector(".js-workbench-form-container form");t&&e?(function(e,t){let r=e.querySelector(".js-cascade-token");r&&r.setAttribute("value",t)}(t,e),function(e,t){let r=e.querySelector(".js-partner-info");if(r){let e=r.getAttribute("value");e&&(e=e.replace("%CASCADE_TOKEN_PLACEHOLDER%",t),r.setAttribute("value",e))}}(t,e),(0,s.Bt)(t)):c("failed")}(0,o.N7)(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:s.Bt}),(0,o.N7)(".js-workbench-form-container",{constructor:HTMLElement,add:e=>{let t=e.querySelector(".js-cascade-token");(function(e,t){if(""!==t.value){let t=e.querySelector("form");(0,s.Bt)(t)}else{let e=document.querySelector(".js-fetch-cascade-token");(0,a.AC)(".js-fetch-cascade-token",async function(e,t){try{let e=await t.json(),r=e.json;d=r.token}catch(e){}}),(0,s.Bt)(e),function(e,t,r){let o=document.querySelector(e);if(o){let e=Date.now(),r=setInterval(()=>{let o=Date.now()-e;if(d||o>=1e4){clearInterval(r),t(d||void 0);return}},50)}}(".js-workbench-form-container",u,0)}})(e,t)}});var f=r(76006),p=r(69567),m=r(54177),h=r(18699);function y(e){let t=e.querySelectorAll(".js-toggle-hidden");for(let e of t)e.hidden=!e.hidden;let r=e.querySelectorAll(".js-toggle-disabled");for(let e of r)e.getAttribute("aria-disabled")?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")}async function b(){let e=document.querySelector(".js-codespaces-details-container");e&&(e.open=!1);let t=document.querySelector("new-codespace");if(t&&!t.getAttribute("data-no-submit-on-create"))try{let e=await fetch("/codespaces/new");if(e&&e.ok){let r=(0,h.r)(document,await e.text());t.replaceWith(r)}}catch(e){}}async function g(e,t){let r=document.querySelector(`#${e}`),o=await (0,m.W)({content:r.content.cloneNode(!0),dialogClass:"project-dialog"});return t&&t.setAttribute("aria-expanded","true"),o.addEventListener("dialog:remove",function(){t&&y(t)},{once:!0}),o}async function v(e){let t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(t.ok){let r=await t.json();if(r.codespace_url)window.location.href=r.codespace_url,y(e),b(),w();else{let t=e.closest("get-repo")||e.closest("new-codespace");t?(e.setAttribute("data-src",r.loading_url),e.dispatchEvent(new CustomEvent("pollvscode"))):e.closest("create-button")&&(e.setAttribute("data-src",r.loading_url),e.dispatchEvent(new CustomEvent("prpollvscode"))),y(e)}}else if(422===t.status){let r=await t.json();if("concurrency_limit_error"===r.error_type)await g("concurrency-error",e);else{let t=document.querySelector("template.js-flash-template"),o=r.error;t.after(new p.R(t,{className:"flash-error",message:o})),y(e)}}}async function w(){let e=document.querySelector(".js-codespaces-completable"),t=e&&e.getAttribute("data-src");if(!t)return;let r=await fetch(t,{method:"GET",headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(r.ok){let t=(0,h.r)(document,await r.text());e.replaceWith(t)}else throw Error(`Unexpected response: ${r.statusText}`)}(0,n.on)("submit",".js-toggle-hidden-codespace-form",function(e){let t=e.currentTarget;y(t)}),(0,n.on)("submit",".js-create-codespaces-form-command",function(e){let t=e.currentTarget;t.classList.contains("js-open-in-vscode-form")||(b(),y(t))}),(0,n.on)("submit","form.js-open-in-vscode-form",async function(e){e.preventDefault();let t=e.currentTarget;await v(t)});let _=class ConcurrencyLimitElement extends HTMLElement{async connectedCallback(){g("concurrency-error")}};_=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}([f.Ih],_);var T=r(14992);function E(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}let S=class NewCodespaceElement extends HTMLElement{async connectedCallback(){let e=new URL(document.location.href,window.location.origin),t=new URLSearchParams(e.search);t.has("response_error")&&(t.delete("response_error"),window.history.replaceState({},"",`?${t.toString()}`))}toggleLoadingVscode(){let e=this.loadingVscode.hidden,t=this.children;for(let r=0;r<t.length;r++)t[r].hidden=e;this.loadingVscode.hidden=!e}machineTypeSelected(e){let t=e.currentTarget,r=t.getAttribute("data-sku-name");this.skuNameInput&&r&&(this.skuNameInput.value=r),this.advancedOptionsForm&&(0,s.Bt)(this.advancedOptionsForm)}pollForVscode(e){this.toggleLoadingVscode();let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}vscsTargetUrlUpdated(e){let t=e.currentTarget;this.vscsTargetUrl.value=t.value}async declarativeSecretsHashUpdated(e){let t=e.currentTarget,r=t.getAttribute("data-name");if(!r)return;let o=t.value,n=(0,T.Jx)(t.getAttribute("data-public-key"));"checkbox"!==t.getAttribute("type")||t.checked||(o=""),o?this.secrets_hash.set(r,(0,T.cv)(await (0,T.HI)(n,o))):this.secrets_hash.delete(r),this.declarativeSecretsHash.value=JSON.stringify(Object.fromEntries(this.secrets_hash))}constructor(...e){super(...e),this.secrets_hash=new Map}};function L(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}E([f.fA],S.prototype,"declarativeSecretsHash",void 0),E([f.fA],S.prototype,"vscsTargetUrl",void 0),E([f.fA],S.prototype,"loadingVscode",void 0),E([f.fA],S.prototype,"vscodePoller",void 0),E([f.fA],S.prototype,"advancedOptionsForm",void 0),E([f.fA],S.prototype,"skuNameInput",void 0),S=E([f.Ih],S);let A=class ExportBranchElement extends HTMLElement{connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){this.abortPoll?.abort()}applyPublishParams(){let e=this.form.getAttribute("data-codespace-id"),t=document.querySelector(`[data-codespace-id='${e}'][data-class="publish-codespace-form"]`);if(t){let e=Object.fromEntries(new FormData(t).entries());if(this.form){let t=`?name=${e.name}&visibility=${e.visibility}`,r=(this.form.getAttribute("action")||"").split("?")[0]+t;this.form.setAttribute("action",r)}}}async exportBranch(e){e.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1;let t=await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});t.ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){let e=this.getAttribute("data-exported-codespace-url")||"",t=await this.poll(e);if(t){if(t.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{let e=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=encodeURI(e)}}}async poll(e,t=1e3){if(this.abortPoll?.signal.aborted)return;let r=await fetch(e,{signal:this.abortPoll?.signal});return 202===r.status||404===r.status?(await new Promise(e=>setTimeout(e,t)),this.poll(e,1.5*t)):r}constructor(...e){super(...e),this.abortPoll=null}};function j(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}L([f.fA],A.prototype,"form",void 0),L([f.fA],A.prototype,"loadingIndicator",void 0),L([f.fA],A.prototype,"viewBranchLink",void 0),A=L([f.Ih],A),r(55843),r(82368);let k=class CodespaceZeroConfigElement extends HTMLElement{connectedCallback(){this.toggleLocationConfigs("production")}updateVscsTargets(){for(let e of(this.vscsTargetUrl.disabled="local"!==this.vscsTarget.value,this.toggleLocationConfigs(this.vscsTarget.value),this.vscsTargets))e.value=this.vscsTarget.value}updateVscsTargetUrls(){for(let e of this.vscsTargetUrls)e.value=this.vscsTargetUrl.value}updateLocations(e){let t=e.currentTarget;this.setLocationValues(t.value)}setLocationValues(e){for(let t of this.locations)t.value=e}toggleLocationConfigs(e){for(let t of this.locationConfigs)if(t.getAttribute("data-vscs-target")===e){t.hidden=!1;let e=t.querySelector("option");e&&(e.selected=!0,this.setLocationValues(e.value))}else t.hidden=!0}};j([f.fA],k.prototype,"regionConfig",void 0),j([f.fA],k.prototype,"vscsTarget",void 0),j([f.fA],k.prototype,"vscsTargetUrl",void 0),j([f.GO],k.prototype,"locationConfigs",void 0),j([f.GO],k.prototype,"vscsTargets",void 0),j([f.GO],k.prototype,"vscsTargetUrls",void 0),j([f.GO],k.prototype,"locations",void 0),k=j([f.Ih],k)},14992:(e,t,r)=>{r.d(t,{HI:()=>a,Jx:()=>s,cv:()=>i});var o=r(69567),n=r(59753);async function a(e,t){let o=new TextEncoder,n=o.encode(t),{seal:a}=await Promise.all([r.e("vendors-node_modules_blakejs_index_js-node_modules_tweetnacl_nacl-fast_js"),r.e("_empty-file_js-app_assets_modules_github_tweetsodium_ts")]).then(r.bind(r,20179));return a(n,e)}function s(e){let t=atob(e).split("").map(e=>e.charCodeAt(0));return Uint8Array.from(t)}function i(e){let t="";for(let r of e)t+=String.fromCharCode(r);return btoa(t)}function l(e){return async function(t){let r=t.currentTarget;if(t.defaultPrevented||!r.checkValidity())return;let n=s(r.getAttribute("data-public-key"));for(let s of(t.preventDefault(),r.elements))if(s.id.endsWith("secret")){if(s.disabled=!0,s.required&&!s.value){let e=`${s.name} is invalid!`,t=document.querySelector("template.js-flash-template");t.after(new o.R(t,{className:"flash-error",message:e}));return}let t=`${s.name}_encrypted_value`;if(!s.value){r.elements.namedItem(t).disabled=e;continue}r.elements.namedItem(t).value=i(await a(n,s.value))}r.submit()}}(0,n.on)("submit","form.js-encrypt-submit",async function(e){let t=e.currentTarget;if(e.defaultPrevented||!t.checkValidity())return;let r=t.elements.namedItem("secret_value");if(r.disabled=!0,!r.value)return;e.preventDefault();let o=s(t.getAttribute("data-public-key"));t.elements.namedItem("encrypted_value").value=i(await a(o,r.value)),t.submit()}),(0,n.on)("submit","form.js-encrypt-bulk-submit",l(!0)),(0,n.on)("submit","form.js-encrypt-bulk-submit-enable-empty",l(!1))},55843:(e,t,r)=>{var o=r(76006);function n(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}let a=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));let e=this.closest("details");e&&e.addEventListener("toggle",()=>{e.open&&this.source.focus()})}relayKeydown(e){if((this.isControlTab(e.target)||e.target===this.source)&&("ArrowDown"===e.key||"Tab"===e.key))e.preventDefault(),e.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if("Escape"===e.key){let e=this.closest("details");e&&e.removeAttribute("open")}}isControlTab(e){return!!e&&!!this.control&&Array.from(this.control.children).includes(e)}relayInput(e){if(!e.target)return;let t=e.target,r=t.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:r}))}routeCustomEvent(e){let t=this.sinks[this.selectedIndex];t.dispatchEvent(e)}get selectedIndex(){if(!this.control)return 0;let e=this.control.querySelector('[aria-selected="true"]');return e?Array.from(this.control.children).indexOf(e):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(e){this.source.value=this.storedInput[this.selectedIndex];let t=e.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=t,this.source.setAttribute("aria-label",t),this.notifySelected()}notifySelected(){let e=this.sinks[this.selectedIndex],t=new CustomEvent("tab-selected");e.dispatchEvent(t)}};n([o.fA],a.prototype,"source",void 0),n([o.GO],a.prototype,"sinks",void 0),n([o.fA],a.prototype,"control",void 0),a=n([o.Ih],a)},89359:(e,t,r)=>{function o(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function n(){return`${window.location.protocol}//${window.location.host}${function(){let e=o("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=o("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let r=o("meta[name=analytics-location-params]");for(let e of(r&&(t+=(t?"&":"?")+r.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let r=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${r[0]}($|=)`,"g"),`$1${r[1]}$2`)}return t}()}`}r.d(t,{S:()=>n})},54177:(e,t,r)=>{r.d(t,{W:()=>n});var o=r(59753);async function n(e){let t=document.querySelector("#site-details-dialog"),r=t.content.cloneNode(!0),n=r.querySelector("details"),a=n.querySelector("details-dialog"),s=n.querySelector(".js-details-dialog-spinner");e.detailsClass&&n.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&a.classList.add(...e.dialogClass.split(" ")),e.label?a.setAttribute("aria-label",e.label):e.labelledBy&&a.setAttribute("aria-labelledby",e.labelledBy),document.body.append(r);try{let t=await e.content;s.remove(),a.prepend(t)}catch(r){s.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),a.prepend(t)}return n.addEventListener("toggle",()=>{n.hasAttribute("open")||((0,o.f)(a,"dialog:remove"),n.remove())}),a}},24601:(e,t,r)=>{r.d(t,{aJ:()=>T,cI:()=>w,eK:()=>y});var o=r(82918),n=r(49237),a=r(28382),s=r(89359),i=r(68202),l=r(53729),c=r(86283),d=r(46426);let u=!1,f=0,p=Date.now(),m=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function h(e){return!!("AbortError"===e.name||"TypeError"===e.name&&m.has(e.message)||e.name.startsWith("ApiError")&&m.has(e.message))}function y(e,t={}){if((0,d.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(S.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let r=Error(),o=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e),n={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${o}`,stacktrace:w(r)};b(v(n,t));return}h(e)||b(v(g(e),t))}else h(e)||b(v(g(e),t))}async function b(e){if(!(!E&&!u&&f<10&&(0,n.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>_.test(e.filename)||_.test(e.function))){u=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function g(e){return{type:e.name,value:e.message,stacktrace:w(e)}}function v(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,s.S)()||window.location.href,readyState:document.readyState,referrer:(0,i.wP)(),timeSinceLoad:Math.round(Date.now()-p),user:T()||void 0,bundler:l.A7,ui:!!document.querySelector('meta[name="ui"]')},t)}function w(e){return(0,a.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let _=/(chrome|moz|safari)-extension:\/\//;function T(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,o.b)();return`anonymous-${t}`}let E=!1;if(c.iG?.addEventListener("pageshow",()=>E=!1),c.iG?.addEventListener("pagehide",()=>E=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{y(e.data.error)})}let S=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},58700:(e,t,r)=>{r.d(t,{Bt:()=>a,DN:()=>i,KL:()=>d,Se:()=>s,qC:()=>u,sw:()=>l});var o=r(5582);function n(e,t,r){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:r}))}function a(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,o.j)(t)),n(e,"submit",!0)&&e.submit()}function s(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}n(e,"change",!1)}function i(e,t){for(let r in t){let o=t[r],n=e.elements.namedItem(r);n instanceof HTMLInputElement?n.value=o:n instanceof HTMLTextAreaElement&&(n.value=o)}}function l(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),r=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==r&&"reset"!==r||e.isContentEditable}function c(e){return new URLSearchParams(e)}function d(e,t){let r=new URLSearchParams(e.search),o=c(t);for(let[e,t]of o)r.append(e,t);return r.toString()}function u(e){return c(new FormData(e)).toString()}},5582:(e,t,r)=>{function o(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let r=n(t);if(e.name){let o=e.matches("input[type=submit]")?"Submit":"",n=e.value||o;r||((r=document.createElement("input")).type="hidden",r.classList.add("js-submit-button-value"),t.prepend(r)),r.name=e.name,r.value=n}else r&&r.remove()}function n(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}r.d(t,{j:()=>o,u:()=>n})},95253:(e,t,r)=>{let o;r.d(t,{YT:()=>f,qP:()=>p,yM:()=>m});var n=r(88149),a=r(86058),s=r(44544),i=r(71643);let{getItem:l}=(0,s.Z)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,n.n)("octolytics");delete e.baseContext,o=new a.R(e)}catch(e){}function u(e){let t=(0,n.n)("octolytics").baseContext||{};if(t)for(let[e,r]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=r,delete t[e]);let r=document.querySelector("meta[name=visitor-payload]");if(r){let e=JSON.parse(atob(r.content));Object.assign(t,e)}let o=new URLSearchParams(window.location.search);for(let[e,r]of o)d.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,i.B)().toString(),Object.assign(t,e)}function f(e){o?.sendPageView(u(e))}function p(e,t={}){let r=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=r?{service:r}:{};for(let[e,r]of Object.entries(t))null!=r&&(n[e]=`${r}`);if(o){let t=e||"unknown";u(n),o.sendEvent(t,u(n))}}function m(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},18699:(e,t,r)=>{r.d(t,{r:()=>i});var o=r(22490),n=r(7180);let a="parse-html-no-op",s=o.ZO.createPolicy(a,{createHTML:e=>n.O.apply({policy:()=>e,policyName:a,fallback:e,sanitize:!1,fallbackOnError:!0})});function i(e,t){let r=e.createElement("template");return r.innerHTML=s.createHTML(t),e.importNode(r.content,!0)}},7180:(e,t,r)=>{r.d(t,{O:()=>c,d:()=>TrustedTypesPolicyError});var o=r(46426),n=r(71643),a=r(24601),s=r(27856),i=r.n(s),l=r(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:r,fallbackOnError:s=!1,sanitize:c,silenceErrorReporting:d=!1}){try{if((0,o.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return r;(0,n.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let a=e();return c&&new Promise(e=>{let r=window.performance.now(),o=i().sanitize(a,{FORBID_ATTR:[]}),n=window.performance.now();if(a.length!==o.length){let s=Error("Trusted Types policy output sanitized"),i=s.stack?.slice(0,1e3),c=a.slice(0,250);(0,l.qP)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:i,outputLength:a.length,sanitizedLength:o.length,executionTime:n-r}),e(a)}}),a}catch(e){if(e instanceof TrustedTypesPolicyError||(d||(0,a.eK)(e),(0,n.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!s))throw e}return r}}},22490:(e,t,r)=>{r.d(t,{ZO:()=>c});var o=r(86283),n=r(71643);function a(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:a("createHTML"),createScript:a("createScript"),createScriptURL:a("createScriptURL")},i=new Map,l=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...s,...t})},c={createPolicy:(e,t)=>{if(i.has(e))return(0,n.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),i.get(e);{let r=l.createPolicy(e,t);return i.set(e,r),r}}},d=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),d=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_morphdom_dist_morphdom-esm_js","vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-c537341","ui_packages_soft-nav_soft-nav_ts","app_assets_modules_github_ref-selector_ts"],()=>t(35187)),e.O()}]);
//# sourceMappingURL=codespaces-ae5034134804.js.map