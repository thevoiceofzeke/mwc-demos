var tpl='<style> :host {\n        display: block;\n        position: -webkit-sticky;\n        position: sticky;\n        top: 0;\n        background: var(--myuw-app-bar-bg, var( --myuw-primary-bg, #c5050c));\n        font-family: var(--myuw-app-bar-font, var( --myuw-font, Arial, sans-serif));\n        color: var(--myuw-app-bar-color, var(--myuw-primary-color, #fff));\n    }\n\n    :host([hidden]) {\n        display: none;\n    }\n\n    :host([font-loaded]) {\n        color: var(--myuw-app-bar-color, var(--myuw-primary-color, #fff));\n    }\n\n    #myuw-app-bar {\n        font-size: 14px;\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        background-color: inherit;\n        z-index: 80;\n        width: 100%;\n        height: 64px;\n        box-sizing: border-box;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        padding: 0 16px;\n        margin: 0;\n        transition: box-shadow 0.3s ease-in-out;\n    }\n\n    #myuw-app-bar.shadow {\n        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n    }\n\n    #myuw-app-bar .region {\n        box-sizing: border-box;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n        -ms-grid-row-align: center;\n        align-items: center;\n        -webkit-align-content: center;\n        align-content: center;\n        -webkit-box-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n    }\n\n    #region__navigation {\n        margin-right: 16px;\n    }\n\n    #region__profile {\n        margin-left: 6px;\n    }\n\n    #region__notifications,\n    #region__help {\n        margin: 0 6px;\n    }\n\n    #title {\n        height: 100%;\n        display: flex;\n        flex: auto;\n        align-items: center;\n    }\n\n    #myuw-app-bar__title {\n        font-size: 18px;\n        font-weight: 500;\n    }\n\n    #myuw-app-bar__title a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    #myuw-app-bar__title a:hover,\n    #myuw-app-bar__title a:visited,\n    #myuw-app-bar__title > span:hover {\n            text-decoration: none;\n            cursor: pointer;\n            color: inherit;\n    } </style> <div id="myuw-app-bar" class="myuw-app-bar"> <div class="region" id="region__navigation"> <slot id="navigation-slot" name="myuw-navigation"> </div> <div id="title"> <h1 id="myuw-app-bar__title"></h1> </div> <div class="region" id="region__help"> <slot id="help-slot" name="myuw-help"> </div> <div class="region" id="region__notifications"> <slot id="notifications-slot" name="myuw-notifications"> </div> <div class="region" id="region__profile"> <slot id="profile-slot" name="myuw-profile"> </div> </div> ';class MyUWAppBar extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(MyUWAppBar.template.content.cloneNode(!0));}static get observedAttributes(){return ["theme-name","theme-url","app-name","app-url"]}attributeChangedCallback(n,t,e){this[n]=e,this.updateComponent(n,e);}connectedCallback(){this["theme-name"]=this.getAttribute("theme-name"),this["theme-url"]=this.getAttribute("theme-url"),this["app-name"]=this.getAttribute("app-name"),this["app-url"]=this.getAttribute("app-url"),window.addEventListener("scroll",n=>{0!==window.scrollY?this.shadowRoot.getElementById("myuw-app-bar").classList.add("shadow"):this.shadowRoot.getElementById("myuw-app-bar").classList.remove("shadow");}),this.updateComponent();}disconnectedCallback(){window.removeEventListener("scroll",n=>{this.shadowRoot.getElementById("myuw-app-bar").classList.remove("shadow");});}buildTitleString(){var n="";return null!==this["theme-name"]&&(null!==this["theme-url"]?n+='<a href="'+this["theme-url"]+'" target="_self" aria-label="'+this["theme-name"]+'">'+this["theme-name"]+"</a>":n+="<span>"+this["theme-name"]+"</span>"),null!==this["app-name"]&&(n+="&nbsp;",null!==this["app-url"]?n+='<a href="'+this["app-url"]+'" target="_self" aria-label="'+this["app-name"]+'">'+this["app-name"]+"</a>":n+='<span tabindex="0" aria-label="'+this["app-name"]+'">'+this["app-name"]+"</span>"),n}updateComponent(){this.shadowRoot.getElementById("myuw-app-bar__title").innerHTML=this.buildTitleString();}}MyUWAppBar.template=(function(n){const t=document.createElement("template");return t.innerHTML=n,t})(tpl),window.customElements.define("myuw-app-bar",MyUWAppBar);

var tpl$1='<style> :host([hidden]) {\n    display: none;\n}\n\n#myuw-profile-login {\n    font-family: var( --myuw-profile-font, var(--myuw-font, \'Montserrat\', \'Roboto\', Arial, sans-serif) );\n    text-transform: uppercase;\n    text-decoration: none;\n    color: var( --myuw-profile-login-color, var(--myuw-primary-color, white) );\n    padding: 10px 13px;\n    font-weight: bold;\n    letter-spacing: 0px;\n    font-size: 14px;\n    position: relative;\n    display: inline-block;\n    transition: background .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n#myuw-profile-login.hidden {\n    display: none;\n}\n\n#myuw-profile-circle {\n    display: inline-block;\n    outline: none;\n    border-radius: 50%;\n    height: 42px;\n    width: 42px;\n    min-width: initial;\n    margin-left: 8px;\n    padding: 4px;\n    text-transform: uppercase;\n    text-align: center;\n    background: transparent;\n    border-color: transparent;\n    transition: background .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n#myuw-profile-circle:hover,\n#myuw-profile-login:hover {\n    cursor: pointer;\n    background: rgba(0,0,0,0.12);\n}\n\n#myuw-profile-circle-initial {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n    font-size: 18px;\n    font-family: var( --myuw-profile-font, var(--myuw-font, \'Montserrat\', \'Roboto\', Arial, sans-serif) );\n    background-color: var( --myuw-profile-background-color, #fb686d);\n    user-select: none;\n    color: white;\n    text-transform: capitalize;\n    border-radius: 50%;\n    display: block;\n    margin: 0;\n    overflow: hidden;\n    position: relative;\n    height: 33px;\n    width: 33px;\n    line-height: 33px;\n    font-size: 18px;\n    font-weight: 400;\n}\n\n#myuw-profile-wrapper {\n    position: relative;\n    display: inline-block;\n}\n\n#myuw-profile-wrapper.hidden {\n    display: none;\n}\n\n#myuw-profile-nav {\n    position: absolute;\n    top: 45px;\n    right: 0;\n    min-width: 320px;\n    color: black;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    z-index: 101;\n\n    transform-origin: top right;\n    transform: scale(0);\n    opacity: 0;\n    visibility: hidden;\n    transition: visibility 0s, opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1), transform .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n\n    -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    -moz-box-shadow:    0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    box-shadow:         0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n}\n\n#myuw-profile-nav.open-right {\n    left: 0;\n    right: inherit;\n    transform-origin: top left;\n}\n\n#myuw-profile-nav.visible {\n    transform: scale(1);\n    opacity: 1;\n    visibility: visible;\n}\n\n#myuw-profile-nav p {\n    padding: 0;\n    margin: 0;\n}\n\n#myuw-profile-nav a,\n#myuw-profile-nav p,\n::slotted(a),\n::slotted(p) {\n    transition: all .3s ease;\n    position: relative;\n    font-size: 15px;\n    font-family: var( --myuw-profile-font, var(--myuw-font, \'Montserrat\', \'Roboto\', Arial, sans-serif) );\n    padding: 3px 16px;\n    color: rgba(0,0,0,0.87);\n    text-decoration: none;\n    background-color: #f5f5f5;\n    border-bottom: 1px solid #e5e5e5;\n    user-select: none;\n    outline: none;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    min-height: 48px;\n    height: 48px;\n    -webkit-align-content: center;\n    align-content: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n}\n\n#myuw-profile-nav #myuw-profile-nav-user {\n    font-weight: 600;\n    text-transform: capitalize;\n    background-color: rgb(255,255,255);\n    border-bottom: none;\n}\n\n#myuw-profile-nav #myuw-profile-nav-user:hover {\n    background-color: rgb(255,255,255);\n}\n\n#myuw-profile-nav a:hover,\n#myuw-profile-nav a:focus,\n#myuw-profile-nav p:hover,\n#myuw-profile-nav p:focus,\n::slotted(a:hover),\n::slotted(a:focus),\n::slotted(p:hover),\n::slotted(p:focus)  {\n    background-color: #ececec;\n} </style> <a href="#" id="myuw-profile-login" class="hidden">Login</a> <div id="myuw-profile-wrapper" class="hidden"> <button id="myuw-profile-circle" aria-label="profile menu" aria-haspopup="true" aria-controls="myuw-profile-nav" aria-expanded="false"> <p id="myuw-profile-circle-initial">B</p> </button> <ul id="myuw-profile-nav" role="menu" tabindex="-1" aria-labelledby="myuw-profile-circle"> <p id="myuw-profile-nav-user"></p> <li role="menuitem"> <slot name="nav-item"></slot> </li> <li role="menuitem"> <a id="myuw-profile-logout" href="#">Logout</a> </li> </ul> </div> ';class MyUWProfile extends HTMLElement{constructor(){super(),this["open-right"]=!1,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(MyUWProfile.template.content.cloneNode(!0));}static get observedAttributes(){return ["login-url","logout-url","open-right","background-color"]}attributeChangedCallback(n,e,t){this[n]=t,this.updateAttribute(n);}connectedCallback(){if(this["login-url"]=this.getAttribute("login-url"),this["logout-url"]=this.getAttribute("logout-url"),this["session-endpoint"]=this.getAttribute("session-endpoint"),this["background-color"]=this.getAttribute("background-color"),this.user=!1,null!==this.getAttribute("open-right")&&(this["open-right"]=!0),!this["session-endpoint"])throw Error('No session endpoint has been defiend. Please set the "session-endpoint" attribute URL into the myuw-profile element!');fetch(this["session-endpoint"]).then(n=>{200===n.status?n.json().then(n=>{n.person&&(this.user=n.person,this.componentReady());}):this.componentReady();}).catch(n=>{console.log(n),this.componentReady();}),window.addEventListener("click",n=>{let e=this.shadowRoot.getElementById("myuw-profile-nav");e.classList.contains("visible")&&(e.classList.remove("visible"),this.shadowRoot.getElementById("myuw-profile-circle").setAttribute("aria-expanded","false"));}),this.shadowRoot.getElementById("myuw-profile-nav").addEventListener("click",n=>{n.stopPropagation();}),this.shadowRoot.getElementById("myuw-profile-circle").addEventListener("click",n=>{let e=this.shadowRoot.getElementById("myuw-profile-nav"),t=this.shadowRoot.getElementById("myuw-profile-circle");n.stopPropagation(),e.classList.toggle("visible"),e.classList.contains("visible")?(e.focus(),t.setAttribute("aria-expanded","true")):(e.blur(),t.setAttribute("aria-expanded","false"));}),this.updateAttribute("login-url"),this.updateAttribute("logout-url"),this.updateAttribute("session-endpoint"),this.updateAttribute("open-right"),this.updateAttribute("background-color");}updateAttribute(n){switch(n){case"login-url":this.shadowRoot.getElementById("myuw-profile-login").setAttribute("href",this["login-url"]);break;case"logout-url":this.shadowRoot.getElementById("myuw-profile-logout").setAttribute("href",this["logout-url"]);break;case"open-right":this["open-right"]&&this.shadowRoot.getElementById("myuw-profile-nav").classList.add("open-right");break;case"background-color":this.shadowRoot.getElementById("myuw-profile-circle-initial").style.backgroundColor=this["background-color"];}}componentReady(){this.user?(this.shadowRoot.getElementById("myuw-profile-nav-user").innerHTML=this.user.firstName,this.shadowRoot.getElementById("myuw-profile-circle-initial").innerHTML=this.user.firstName.substring(0,1),this.showProfileBubble()):null!==this["login-url"]?this.showLoginButton():this.hidden=!0;}showLoginButton(){this.shadowRoot.getElementById("myuw-profile-login").classList.remove("hidden"),this.shadowRoot.getElementById("myuw-profile-wrapper").classList.add("hidden");}showProfileBubble(){this.shadowRoot.getElementById("myuw-profile-login").classList.add("hidden"),this.shadowRoot.getElementById("myuw-profile-wrapper").classList.remove("hidden");}}MyUWProfile.template=(function(n){const e=document.createElement("template");return e.innerHTML=n,e})(tpl$1),window.customElements.define("myuw-profile",MyUWProfile);

var tpl$2=' <style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  :host([open]) #drawer {\n    left: 0;\n  }\n\n  :host([open]) #shadow {\n    display: block;\n  }\n\n  #drawer {\n    width: 300px;\n    height: 100%;\n    display: block;\n    position: fixed;\n    left: -300px;\n    top: 64px;\n    bottom: 0;\n    z-index: 5;\n    background-color: white;\n    transition: left .4s cubic-bezier(.25, .8, .25, 1);\n  }\n\n  #drawer ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  #shadow {\n    display: none;\n    position: fixed;\n    top: 64px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(33, 33, 33, .48);\n  }\n\n  #menu-icon {\n    user-select: none;\n    cursor: pointer;\n    padding: 7px;\n    border-radius: 100%;\n  }\n\n  #menu-icon:hover {\n    background-color: rgba(0,0,0,0.1);\n  } </style> <i id="menu-icon" class="material-icons">menu</i> <div id="drawer"> <ul> <slot name="myuw-drawer-links"></slot> </ul> </div> <div id="shadow"></div> ';class MyUWDrawer extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(MyUWDrawer.template.content.cloneNode(!0));}static get observedAttributes(){return ["open"]}attributeChangedCallback(e,t,n){}connectedCallback(){this.shadowRoot.getElementById("menu-icon").addEventListener("click",()=>{this.setDrawerState();}),this.shadowRoot.getElementById("shadow").addEventListener("click",()=>{this.setDrawerState(!1);});}disconnectedCallback(){}updateComponent(e,t){}setDrawerState(e){switch(e){case!1:this.removeAttribute("open");break;case!0:this.setAttribute("open","");break;default:this.hasAttribute("open")?this.removeAttribute("open"):this.setAttribute("open","");}}}MyUWDrawer.template=(function(e){const t=document.createElement("template");return t.innerHTML=e,t})(tpl$2),window.customElements.define("myuw-drawer",MyUWDrawer);var tpl$1$1=' <style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  #href {\n    height: 38px;\n    padding: 8px 16px;\n    display: block;\n    line-height: 38px;\n    text-decoration: none;\n  }\n\n  #href:hover {\n    background: rgba(158, 158, 158, .2);\n  }\n\n  #icon {\n    width: 40px;\n    height: 38px;\n    display: inline-block;\n    vertical-align: top;\n    font-size: 28px;\n    line-height: 38px;\n    text-align: center;\n    color: rgba(0, 0, 0, .54);\n  }\n\n  #name {\n    height: 28px;\n    display: inline-block;\n    color: black;\n  } </style> <li> <a id="href"> <i id="icon" class="material-icons"></i> <span id="name"></span> </a> </li> ';class MyUWDrawerLink extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(MyUWDrawerLink.template.content.cloneNode(!0));}static get observedAttributes(){return ["name","icon","href"]}attributeChangedCallback(e,t,n){}connectedCallback(){this.href=this.getAttribute("href")||null,this.icon=this.getAttribute("icon")||null,this.name=this.getAttribute("name")||null,this.$href=this.shadowRoot.querySelector("a#href"),this.$icon=this.shadowRoot.querySelector("i#icon"),this.$name=this.shadowRoot.querySelector("span#name"),this.$href.setAttribute("href",this.href),this.$icon.innerText=this.icon,this.$name.innerText=this.name;}disconnectedCallback(){}updateComponent(e,t){}}MyUWDrawerLink.template=(function(e){const t=document.createElement("template");return t.innerHTML=e,t})(tpl$1$1),window.customElements.define("myuw-drawer-link",MyUWDrawerLink);var tpl$2$1=' <style> #label {\n    padding: 16px 16px 4px 22px;\n    display: inline-block;\n    color: rgba(0, 0, 0, .54);;\n  } </style> <li> <slot id="label" name="label"></slot> </li> ';class MyUWDrawerSubheader extends HTMLElement{constructor(){super(),console.log("built"),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(MyUWDrawerSubheader.template.content.cloneNode(!0));}}MyUWDrawerSubheader.template=(function(e){const t=document.createElement("template");return t.innerHTML=e,t})(tpl$2$1),window.customElements.define("myuw-drawer-subheader",MyUWDrawerSubheader);

function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var fontfaceobserver_standalone=createCommonjsModule(function(e){!(function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t);}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c);}function o(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";";}function i(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function a(e,n){function o(){var e=a;i(e)&&e.a.parentNode&&n(e.g);}var a=e;t(e.b,o),t(e.c,o),i(e);}function s(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal";}var l=null,r=null,d=null,c=null;function f(){return null===c&&(c=!!document.fonts),c}function u(e,t){return [e.style,e.weight,(function(){if(null===d){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif";}catch(e){}d=""!==e.style.font;}return d})()?e.stretch:"","100px",t].join(" ")}s.prototype.load=function(e,t){var i=this,s=e||"BESbswy",d=0,c=t||3e3,h=(new Date).getTime();return new Promise(function(e,t){if(f()&&!(function(){if(null===r)if(f()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);r=!!e&&603>parseInt(e[1],10);}else r=!1;return r})()){var m=new Promise(function(e,t){!(function n(){(new Date).getTime()-h>=c?t():document.fonts.load(u(i,'"'+i.family+'"'),s).then(function(t){1<=t.length?e():setTimeout(n,25);},function(){t();});})();}),p=new Promise(function(e,t){d=setTimeout(t,c);});Promise.race([p,m]).then(function(){clearTimeout(d),e(i);},function(){t(i);});}else!(function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e();}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e());});})(function(){function r(){var t;(t=-1!=y&&-1!=w||-1!=y&&-1!=v||-1!=w&&-1!=v)&&((t=y!=w&&y!=v&&w!=v)||(null===l&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=l&&(y==g&&w==g&&v==g||y==b&&w==b&&v==b||y==x&&w==x&&v==x)),t=!t),t&&(T.parentNode&&T.parentNode.removeChild(T),clearTimeout(d),e(i));}var f=new n(s),m=new n(s),p=new n(s),y=-1,w=-1,v=-1,g=-1,b=-1,x=-1,T=document.createElement("div");T.dir="ltr",o(f,u(i,"sans-serif")),o(m,u(i,"serif")),o(p,u(i,"monospace")),T.appendChild(f.a),T.appendChild(m.a),T.appendChild(p.a),document.body.appendChild(T),g=f.a.offsetWidth,b=m.a.offsetWidth,x=p.a.offsetWidth,(function e(){if((new Date).getTime()-h>=c)T.parentNode&&T.parentNode.removeChild(T),t(i);else{var n=document.hidden;!0!==n&&void 0!==n||(y=f.a.offsetWidth,w=m.a.offsetWidth,v=p.a.offsetWidth,r()),d=setTimeout(e,50);}})(),a(f,function(e){y=e,r();}),o(f,u(i,'"'+i.family+'",sans-serif')),a(m,function(e){w=e,r();}),o(m,u(i,'"'+i.family+'",serif')),a(p,function(e){v=e,r();}),o(p,u(i,'"'+i.family+'",monospace'));});})},e.exports=s;})();}),defaultAppThemeTpl="<style> :root {\n  /* Main MyUW Theme Variables */\n\n  --myuw-primary-bg: #c5050c;\n  --myuw-primary-color: #fff;\n\n  --myuw-accent-bg: #0479a8;\n  --myuw-accent-color: #fff;\n\n  --myuw-page-bg: #f7f7f7;\n  --myuw-page-color: #494949;\n\n  --myuw-dark: #646569;\n  --myuw-darker: #282728;\n\n  --myuw-font: 'Montserrat', Arial, sans-serif;\n\n} </style> ",fontsTpl='<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600" rel="stylesheet"> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> ';const fonts=document.createElement("template");fonts.setAttribute("style","display: none;"),fonts.innerHTML=fontsTpl;const defaultAppTheme=document.createElement("template");defaultAppTheme.innerHTML=defaultAppThemeTpl,document.head.appendChild(fonts.content),document.head.appendChild(defaultAppTheme.content);let myuwFontFace=new fontfaceobserver_standalone("Montserrat",{});myuwFontFace.load().then(e=>{document.body.setAttribute("myuw-font-loaded",!0);}).catch(e=>{console.log(e),document.body.setAttribute("myuw-font-loaded",!0);});

var tpl$3=' <style> :host {\n        display: block;\n        font-style: inherit;\n        font-variant: inherit;\n        font-family: inherit;\n    }\n\n    :host([hidden]) {\n        display: none;\n    }\n\n    :host([show-default-content]) #myuw-help__default-content {\n        display: block;\n    }\n\n    :host([open]) #myuw-help__dialog {\n        opacity: 1;\n        right: 0;\n        top: 20%;\n        transform: translate(-50%,20%) scale(1);\n    }\n\n    :host([open]) #myuw-help__shadow {\n        opacity: 1;\n        height: 100%;\n    }\n\n    #myuw-help__dialog {\n        max-height: 80%;\n        max-width: 80%;\n        min-width: 300px;\n        height: auto;\n        -webkit-box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15), 0 13px 25px 0 rgba(0, 0, 0, 0.3);\n        box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15), 0 13px 25px 0 rgba(0, 0, 0, 0.3);\n        background-color: #FFFFFF;\n        padding: 22px 24px 12px;\n        margin-top: 0;\n        margin-bottom: 0;\n        margin-left: auto;\n        margin-right: auto;\n        border-radius: 5px;\n        font-family: \'Roboto\', Arial, sans-serif; /* TODO: use styles variables */\n        position: absolute;\n        opacity: 0;\n        top: 0;\n        right: 0;\n        -webkit-transition: all .4s cubic-bezier(.25,.8,.25,1);\n        transition: all .4s cubic-bezier(.25,.8,.25,1);\n        z-index: 101;\n    }\n\n    #myuw-help__heading {\n        display: flex;\n        align-content: center;\n        justify-content: space-between;\n    }\n\n    #myuw-help__title {\n        color: rgba(0,0,0,0.8);\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 24px;\n        letter-spacing: 0.03px;\n    }\n\n    #myuw-help__content {\n        font-weight: 400;\n        font-size: 16px;\n        color: rgba(0,0,0,.5);\n        line-height: 24px;\n        text-align: left;\n        letter-spacing: 0.03px;\n        padding: 8px 0 16px;\n    }\n\n    #myuw-help__default-content {\n        display: none;\n    }\n\n    #myuw-help__default-content ul {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    #myuw-help__default-content ul li {\n        transition: background 0.4s cubic-bezier(.25,.8,.25,1);\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        min-height: 38px;\n        height: auto;\n        padding: 0 16px 0 6px;\n    }\n    #myuw-help__default-content ul li:hover {\n        background: rgba(158,158,158,0.2);\n    }\n    #myuw-help__default-content a {\n        text-decoration: none;\n        color: #0479a8; /* TODO: use styles variables */\n        min-height: 38px;\n        line-height: 38px;\n        flex: auto;\n        display: flex;\n        align-items: center;\n    }\n\n    #myuw-help__default-content .material-icons {\n        width: 24px;\n        min-height: 24px;\n        min-width: 24px;\n        margin-right: 12px;\n        color: #434343;\n    }\n\n    #myuw-help__shadow {\n        position: fixed;\n        top: 64px;\n        left: 0;\n        width: 100%;\n        height: 0;\n        opacity: 0;\n        background: rgba(0,0,0,0.3);\n        transition: opacity 0.3s cubic-bezier(.25,.8,.25,1);\n        z-index: 100;\n    }\n\n    #myuw-help__close-button {\n        min-width: 48px;\n        margin: 0;\n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n        min-height: 36px;\n        line-height: 36px;\n        text-align: center;\n        border-radius: 3px;\n        box-sizing: border-box;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 0;\n        padding: 0 6px;\n        background: transparent;\n        white-space: nowrap;\n        text-transform: uppercase;\n        font-weight: 500;\n        font-size: 14px;\n        text-decoration: none;\n        overflow: hidden;\n        -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n        transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n        border-radius: 50%;\n    }\n    #myuw-help__close-button:hover {\n        background-color: rgba(158,158,158,0.2);\n    }\n    #myuw-help__close-button:focus {\n        outline: none;\n    }\n\n    @media all and (min-width: 481px) and (max-width: 840px) {\n        #myuw-help__dialog {\n            width: 400px;\n        }\n    }\n\n    @media all and (min-width: 841px) {\n        #myuw-help__dialog {\n            width: 600px;\n        }\n    } </style> <div id="myuw-help__dialog"> <div id="myuw-help__heading"> <h1 id="myuw-help__title"></h1> <button id="myuw-help__close-button" aria-label="close dialog"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg> </button> </div> <div id="myuw-help__content"> <slot name="myuw-help-content"></slot> <div id="myuw-help__default-content"> <ul> <li> <a href="tel:608-264-4357">Call the help desk</a> </li> <li> <a href="mailto:help@doit.wisc.edu">Email the help desk</a> </li> <li> <a href="https://it.wisc.edu">Get help another way</a> </li> <li> <a href="https://outages.doit.wisc.edu/">Check the Outages page</a> </li> <li> <a href="https://kb.wisc.edu/">Search the KnowledgeBase</a> </li> </ul> </div> </div> </div> <div id="myuw-help__shadow"></div> ';class MyUWHelp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(MyUWHelp.template.content.cloneNode(!0));}static get observedAttributes(){return ["myuw-help-title","open","show-default-content"]}attributeChangedCallback(n,t,e){this[n]=e,this.updateComponent();}connectedCallback(){this["myuw-help-title"]=this.getAttribute("myuw-help-title"),this.open=this.getAttribute("open"),this["show-default-content"]=this.getAttribute("show-default-content"),this.shadowRoot.getElementById("myuw-help__shadow").addEventListener("click",()=>{this.setDialogState(!1);}),this.shadowRoot.getElementById("myuw-help__close-button").addEventListener("click",()=>{this.setDialogState(!1);}),document.body.addEventListener("show-myuw-help",()=>{this.setDialogState();});}updateComponent(){this.shadowRoot.getElementById("myuw-help__title").innerHTML=this["myuw-help-title"];}setDialogState(n){switch(n){case!1:this.removeAttribute("open");break;case!0:this.setAttribute("open",""),this.shadowRoot.getElementById("myuw-help__dialog").focus();break;default:this.hasAttribute("open")?this.removeAttribute("open"):(this.setAttribute("open",""),this.shadowRoot.getElementById("myuw-help__dialog").focus());}}}MyUWHelp.template=(function(n){const t=document.createElement("template");return t.innerHTML=n,t})(tpl$3),window.customElements.define("myuw-help",MyUWHelp);
