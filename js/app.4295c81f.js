(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"78be706a"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([2,"chunk-vendors"]),a()})({0:function(t,e){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e,a){t.exports=a("56d7")},3:function(t,e){},"350e":function(t,e,a){},4:function(t,e){},"43a3":function(t,e){},"4d81":function(t,e,a){},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"pow",(function(){return Lt})),a.d(n,"ready",(function(){return Ht})),a.d(n,"privatekey",(function(){return Wt})),a.d(n,"node",(function(){return Ft})),a.d(n,"history",(function(){return qt})),a.d(n,"pending",(function(){return Vt}));var s={};a.r(s),a.d(s,"getSeed",(function(){return It})),a.d(s,"rpCall",(function(){return Yt})),a.d(s,"history",(function(){return Ut})),a.d(s,"pending",(function(){return Zt}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],c={name:"App",components:{},data:function(){return{key:null}},computed:{}},l=c,u=(a("5c0b"),a("2877")),d=Object(u["a"])(l,r,o,!1,null,null,null),p=d.exports,v=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wallet"},[a("div",{attrs:{type:"hidden",id:"workstorage"}}),a("div",{staticClass:"page active",class:{active:!1===t.open},attrs:{id:"login"}},[a("div",{staticClass:"title rpc"},[t._v("RPC Server : "),a("span",[t._v(t._s(t.$route.params.node))])]),a("div",{attrs:{id:"inputs"}},[null!==t.error?a("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),a("label",{attrs:{for:"key"}},[t._v("Private Key")]),a("div",{staticClass:"login"},["checkbox"===t.logintype?a("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{id:"key",name:"key",type:"checkbox"},domProps:{checked:Array.isArray(t.key)?t._i(t.key,null)>-1:t.key},on:{change:function(e){var a=t.key,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.key=a.concat([i])):r>-1&&(t.key=a.slice(0,r).concat(a.slice(r+1)))}else t.key=s}}}):"radio"===t.logintype?a("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{id:"key",name:"key",type:"radio"},domProps:{checked:t._q(t.key,null)},on:{change:function(e){t.key=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{id:"key",name:"key",type:t.logintype},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}}),a("span",{staticClass:"eye",on:{click:t.togglevisibility}},[a("span",{class:{active:"password"===t.logintype}},[a("i",{staticClass:"far fa-eye"})]),a("span",{class:{active:"text"===t.logintype}},[a("i",{staticClass:"far fa-eye-slash"})])])]),a("button",{staticClass:"openwallet btn",attrs:{type:"button"},on:{click:t.openWallet}},[t._v("Open Wallet")])]),a("div",{attrs:{id:"buttons"}},[a("router-link",{staticClass:"genwallet",attrs:{to:"/"+t.$route.params.node+"/generate"}},[t._v("Generate Wallet")])],1)]),a("div",{staticClass:"page",class:{active:!0===t.open},attrs:{id:"wallet"}},[a("div",{attrs:{id:"powstatus"}},[a("div",{staticClass:"status busy",class:{active:!1===t.ready}},[t._v("Calculating Work "),a("i",{staticClass:"fas fa-spinner fa-spin"})]),a("div",{staticClass:"status ready",class:{active:!0===t.ready}},[t._v("Ready "),a("i",{staticClass:"fas fa-check"})])]),a("div",{staticClass:"inner"},[a("div",{staticClass:"headingtitle top"},[a("span",{attrs:{id:"closewallet"},on:{click:t.logout}},[a("i",{staticClass:"fal fa-sign-out fa-flip-horizontal"})]),a("span",[t._v("Wallet")]),a("span",{staticClass:"refresh rotate",class:{down:t.isActive},on:{click:t.refresh}},[a("i",{staticClass:"fal fa-sync"})])]),a("div",{attrs:{id:"output"}},[a("div",{staticClass:"balance"},[a("div",{staticClass:"raw",class:{active:t.balanceextra},on:{click:function(e){return t.copyToClipboard(t.address)}}},[t._v(t._s(t.address))]),a("div",{staticClass:"value",domProps:{innerHTML:t._s(t.abbreviateNumber(t.balance))}}),a("div",{staticClass:"raw",class:{active:t.balanceextra}},[t._v(t._s(t.balance))]),a("a",{staticClass:"balanceextra",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.balanceextra=!t.balanceextra}}},[a("i",{staticClass:"fal fa-ellipsis-h",attrs:{"data-fa-transform":"grow-20"}})])])]),a("div",{staticClass:"headingtitle"},[t._v("History")]),a("div",{attrs:{id:"pendingblocks"}}),t._l(t.pending,(function(e,n){return a("transaction",{key:n,attrs:{index:n,transaction:e,type:"pending"},on:{blockdetails:function(e){t.blockdetails=e},receive:t.refreshDetails}})})),t._l(t.history,(function(e,n){return a("transaction",{key:n,attrs:{index:n,transaction:e,type:e.type},on:{blockdetails:function(e){t.blockdetails=e}}})}))],2),a("div",{staticClass:"menu",attrs:{id:"walletmenu"}},[a("div",{staticClass:"bg"}),a("div",{staticClass:"content"},[a("div",{staticClass:"tab",attrs:{"data-tab":"#receive"},on:{click:function(e){t.receive=!0}}},[t._m(0),a("span",[t._v("Receive")])]),a("div",{staticClass:"tab",attrs:{"data-tab":"#send"},on:{click:function(e){t.send=!0}}},[t._m(1),a("span",[t._v("Send")])]),a("div",{staticClass:"tab",attrs:{"data-tab":"#settings"},on:{click:function(e){t.settings=!0}}},[t._m(2),a("span",[t._v("Settings")])])])])]),a("div",{staticClass:"page",class:{active:!1!==t.send},attrs:{id:"send"}},[a("a",{staticClass:"close",on:{click:function(e){t.send=!1}}},[a("i",{staticClass:"fal fa-times"})]),a("send",{on:{close:function(e){t.send=!1}}})],1),a("div",{staticClass:"page",class:{active:!1!==t.settings},attrs:{id:"settings"}},[a("a",{staticClass:"close",on:{click:function(e){t.settings=!1}}},[a("i",{staticClass:"fal fa-times"})]),a("settings",{attrs:{representative:t.representative},on:{change:t.refreshDetails}})],1),a("div",{staticClass:"page",class:{active:!1!==t.receive},attrs:{id:"receive"}},[a("a",{staticClass:"close",on:{click:function(e){t.receive=!1}}},[a("i",{staticClass:"fal fa-times"})]),a("receive",{attrs:{address:t.address}})],1),a("div",{staticClass:"page",class:{active:null!==t.blockdetails},attrs:{id:"blockdetails"}},[a("a",{staticClass:"close",on:{click:function(e){t.blockdetails=null}}},[a("i",{staticClass:"fal fa-times"})]),a("block-state",{attrs:{details:t.blockdetails}})],1)])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menuicon"},[a("i",{staticClass:"fal fa-wallet",attrs:{"data-fa-transform":"grow-8"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menuicon"},[a("i",{staticClass:"fal fa-coins",attrs:{"data-fa-transform":"grow-8"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menuicon"},[a("i",{staticClass:"fal fa-cog",attrs:{"data-fa-transform":"grow-8"}})])}],h=(a("96cf"),a("1da1")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"transaction",class:t.type},[a("div",{staticClass:"type icon",attrs:{value:t.hash},on:{click:function(e){return t.$emit("blockdetails",t.hash)}}},["send"===t.type?a("i",{staticClass:"fal fa-minus-circle"}):"pending"===t.type?a("i",{staticClass:"fal fa-exclamation-circle"}):a("i",{staticClass:"fal fa-plus-circle"})]),a("div",{staticClass:"innerdetails"},[a("div",{staticClass:"amount"},[a("div",{staticClass:"value",attrs:{title:t.rawValue},domProps:{innerHTML:t._s(t.formattedValue)}},[a("i",{staticClass:"fal fa-coin"})]),"pending"!==t.type?a("div",{staticClass:"type"},[t._v(t._s(t.transactionStatus(t.transaction.type)))]):t._e(),"pending"===t.type?a("div",{staticClass:"type"},[null!==t.privatekey?a("button",{staticClass:"pocket",on:{click:t.receive}},[t._v("Receive")]):a("div",{},[t._v("Pending")])]):t._e()]),a("div",{staticClass:"address"},["pending"!==t.type?a("span",[t._v(t._s(t.formattedDate)+" "+t._s(t.abbreviateAddress(t.transaction.account)))]):t._e(),"pending"===t.type?a("span",[t._v(t._s(t.abbreviateAddress(t.transaction.source)))]):t._e()])])])},k=[],g=(a("a9e3"),a("b680"),a("174c")),y=(a("fb6a"),a("6b93"),a("c35a"),{data:function(){return{rawconv:{from:"raw",to:"Nano"},nanoconv:{from:"Nano",to:"raw"}}},computed:{},mounted:function(){},methods:{abbreviateNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=["","k","M","G","T","P","E"],n=Math.log10(t)/3|0;if(0==n)return Number.parseFloat(t).toFixed(e);var s=a[n],i=Math.pow(10,3*n),r=t/i;return r.toFixed(e)+'<span class="suffix">'+s+"</span>"},copyToClipboard:function(t){var e=document.createElement("textarea");e.innerHTML=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Copied to clipboard")},link:function(t,e){var a=window.location.origin,n=this.$route.params.node;"address"==t&&window.open(a+"/#/"+n+"/address/"+e),"block"==t&&window.open(a+"/#/"+n+"/block/"+e)},abbreviateAddress:function(t){return t.substring(0,11)+"..."+t.slice(t.length-6)},highlightAddress:function(t){if(null!==t&&void 0!==t){var e=t.length-6;return'<span class="highlight">'+t.substring(0,11)+"</span>"+t.substring(11,e)+'<span class="highlight">'+t.slice(t.length-6)+"</span>"}return null},transactionStatus:function(t){return"send"===t?"Sent":"receive"===t?"Received":void 0}}}),C=a("901e"),w=a.n(C),_={name:"Transaction",props:{transaction:Object,type:String,index:[Number,String]},mixins:[y],computed:{rawValue:function(){return g["b"](this.transaction.amount,this.rawconv)},formattedValue:function(){return("send"===this.transaction.type?"-":"+")+this.abbreviateNumber(g["b"](this.transaction.amount,this.rawconv),5)},formattedDate:function(){var t=new Date(1e3*this.transaction.local_timestamp);return t.getDate()+" "+t.toLocaleString("default",{month:"short"})+" "+t.getFullYear()},pow:function(){return this.$store.state.app.pow},ready:function(){return this.$store.state.app.ready},privatekey:function(){return this.$store.state.app.privatekey},hash:function(){return"pending"===this.type?this.index:this.transaction.hash}},methods:{receive:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i,r,o,c,l,u,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==t.pow){e.next=2;break}return e.abrupt("return",alert("Please wait for the status to be ready"));case 2:return a=g["e"](t.privatekey),n=g["d"](a,{useNanoPrefix:!0}),s={},s["action"]="account_info",s["representative"]="true",s["account"]=n,e.next=10,t.$store.dispatch("app/rpCall",s);case 10:return i=e.sent,r="0",o="open",c="0000000000000000000000000000000000000000000000000000000000000000",l=n,"balance"in i&&(r=i.balance,o="receive",c=i.frontier,l=i.representative),u=new w.a(r).plus(new w.a(t.transaction.amount)).toFixed(),d=g["c"](t.privatekey,{work:t.pow,previous:c,representative:l,balance:u,link:t.index}),p={},p["action"]="process",p["json_block"]="true",p["subtype"]=o,p["block"]=d.block,e.next=25,t.$store.dispatch("app/rpCall",p);case 25:t.$emit("receive",!0);case 26:case"end":return e.stop()}}),e)})))()}}},x=_,$=Object(u["a"])(x,b,k,!1,null,"05e6233d",null),O=$.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send"},[a("div",{attrs:{id:"sendform"}},[a("label",{attrs:{for:"amount"}},[t._v("Amount:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",id:"amount",name:"amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),a("label",{attrs:{for:"destination"}},[t._v("Destination:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.destination,expression:"destination"}],attrs:{type:"text",id:"destination",name:"destination"},domProps:{value:t.destination},on:{input:function(e){e.target.composing||(t.destination=e.target.value)}}})]),a("button",{staticClass:"sendfunds btn",attrs:{type:"button"},on:{click:t.send}},[t._v("Send")]),a("button",{staticClass:"scan btn outline",attrs:{type:"button"},on:{click:t.scanQR}},[t._v("Scan QR")]),a("div",{staticClass:"page",class:{active:!1!==t.scan},attrs:{id:"scan"}},[a("a",{staticClass:"close",on:{click:t.closeScan}},[a("i",{staticClass:"fal fa-times"})]),a("video",{attrs:{id:"qrpreview"}})])])},S=[],j=(a("ac1f"),a("5319"),a("427d")),P=a.n(j),T={name:"Send",mixins:[y],props:{address:String},data:function(){return{amount:"",destination:"",scan:!1,scanner:null}},computed:{pow:function(){return this.$store.state.app.pow},ready:function(){return this.$store.state.app.ready},privatekey:function(){return this.$store.state.app.privatekey}},methods:{send:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i,r,o,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==t.pow){e.next=2;break}return e.abrupt("return",alert("Please wait for the status to be ready"));case 2:return a=g["b"](t.amount,t.nanoconv),n=g["e"](t.privatekey),s=g["d"](n,{useNanoPrefix:!0}),i={},i["action"]="account_info",i["representative"]="true",i["account"]=s,e.next=11,t.$store.dispatch("app/rpCall",i);case 11:return r=e.sent,o=new w.a(r.balance).minus(new w.a(a)).toFixed(),c=g["c"](t.privatekey,{work:t.pow,previous:r.frontier,representative:r.representative,balance:o,link:t.destination}),console.log(c),l={},l["action"]="process",l["json_block"]="true",l["subtype"]="send",l["block"]=c.block,e.next=22,t.$store.dispatch("app/rpCall",l);case 22:t.$store.commit("app/pow",null),t.$emit("close","true");case 24:case"end":return e.stop()}}),e)})))()},closeScan:function(){this.scan=!1,this.scanner.stop()},scanQR:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.scan=!0,t.scanner=new P.a.Scanner({video:document.getElementById("qrpreview")}),t.scanner.addListener("scan",(function(t){this.destination=t.replace("nano:",""),this.closeScan()})),a=t,P.a.Camera.getCameras().then((function(t){t.length>0?(console.log("starting first camera"),a.scanner.start(t[0])):console.error("No cameras found.")})).catch((function(t){console.error(t)}));case 5:case"end":return e.stop()}}),e)})))()}}},N=T,A=Object(u["a"])(N,R,S,!1,null,null,null),D=A.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"receive"},[a("div",{staticClass:"address",domProps:{innerHTML:t._s(t.highlightAddress(t.address))}}),a("canvas",{attrs:{id:"qrcode"}})])},M=[],B=a("d055"),L=a.n(B),H={name:"Receive",mixins:[y],props:{address:String},data:function(){return{newrep:""}},watch:{address:function(t){null!==t&&L.a.toCanvas(document.getElementById("qrcode"),"nano:"+this.address,{width:512})}}},W=H,F=(a("6790"),Object(u["a"])(W,E,M,!1,null,null,null)),q=F.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings inner"},[a("div",{staticClass:"details"},[a("label",{attrs:{for:"representative"}},[t._v("Current Representative")]),a("a",{staticClass:"copy",attrs:{href:"#"},on:{click:function(e){return t.copyToClipboard(t.representative)}}},[a("i",{staticClass:"fad fa-clone"})]),a("div",{staticClass:"address",staticStyle:{"margin-bottom":"30px",background:"#00000014",padding:"4px 14px"},domProps:{innerHTML:t._s(t.highlightAddress(t.representative))}})]),t.change?a("div",{staticClass:"details"},[a("label",{attrs:{for:"newrep"}},[t._v("Change Representative")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newrep,expression:"newrep"}],staticClass:"newrep",attrs:{type:"text",name:"newrep"},domProps:{value:t.newrep},on:{input:function(e){e.target.composing||(t.newrep=e.target.value)}}})]):t._e(),a("div",{staticClass:"inline-buttons"},[t.change?t._e():a("button",{staticClass:"repchange btn",on:{click:function(e){t.change=!0}}},[t._v("Change Representative")]),t.change?a("button",{staticClass:"repchange btn",on:{click:t.changeRep}},[t._v("Confirm")]):t._e(),t.change?a("button",{staticClass:"repchange btn outline",on:{click:function(e){t.change=!1}}},[t._v("Cancel")]):t._e()])])},J=[],G={name:"Settings",props:{representative:String},mixins:[y],data:function(){return{newrep:"",change:!1}},computed:{pow:function(){return this.$store.state.app.pow},privatekey:function(){return this.$store.state.app.privatekey}},methods:{changeRep:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i,r,o,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==t.pow){e.next=2;break}return e.abrupt("return",alert("Please wait for the status to be ready"));case 2:return a=g["e"](t.privatekey),n=g["d"](a,{useNanoPrefix:!0}),s={},s["action"]="account_info",s["representative"]="true",s["account"]=n,e.next=10,t.$store.dispatch("app/rpCall",s);case 10:return i=e.sent,r="change",o=i.frontier,c=i.balance,l=g["c"](t.privatekey,{work:t.pow,previous:o,representative:t.newrep,balance:c,link:"0000000000000000000000000000000000000000000000000000000000000000"}),u={},u["action"]="process",u["json_block"]="true",u["subtype"]=r,u["block"]=l.block,e.next=22,t.$store.dispatch("app/rpCall",u);case 22:t.$emit("change",!0);case 23:case"end":return e.stop()}}),e)})))()}}},K=G,I=Object(u["a"])(K,V,J,!1,null,null,null),Q=I.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.blockstate?a("div",{attrs:{id:"breakdown"}},[a("header",{staticClass:"headingtitle"},[t._v("State Block")]),a("div",{staticClass:"stateblock block"},[t._v(t._s(t.hash))]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Block subtype "),a("span",{staticClass:"subtype value"},[t._v(t._s(t.blockstate.subtype))])]),a("div",{staticClass:"label"},[t._v("The type of transaction that created this state block")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Account "),a("span",{staticClass:"value",on:{click:function(e){return t.copyToClipboard(t.blockstate.contents.account)}}},[a("i",{staticClass:"fad fa-clone"})]),a("span",{staticClass:"value",on:{click:function(e){return t.link("block",t.blockstate.contents.account)}}},[a("i",{staticClass:"fad fa-external-link"})])]),a("div",{staticClass:"account"},[t._v(t._s(t.blockstate.contents.account))]),a("div",{staticClass:"label"},[t._v("The account represented by this state block")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Amount "),a("span",{staticClass:"amount value",domProps:{innerHTML:t._s(t.formattedValue(t.blockstate.amount))}})]),a("div",{staticClass:"raw"},[a("span",{staticClass:"amount_raw"},[t._v(t._s(t.blockstate.amount))]),t._v(" raw")]),a("div",{staticClass:"label"},[t._v("The amount of NANO that was sent in this transaction")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Balance "),a("span",{staticClass:"balance value",domProps:{innerHTML:t._s(t.formattedValue(t.blockstate.balance))}})]),a("div",{staticClass:"raw"},[a("span",{staticClass:"balance_raw"},[t._v(t._s(t.blockstate.balance))]),t._v(" raw")]),a("div",{staticClass:"label"},[t._v("The amount of NANO that was sent in this transaction")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Representative "),a("span",{staticClass:"value",on:{click:function(e){return t.copyToClipboard(t.blockstate.contents.representative)}}},[a("i",{staticClass:"fad fa-clone"})]),a("span",{staticClass:"value",on:{click:function(e){return t.link("block",t.blockstate.contents.representative)}}},[a("i",{staticClass:"fad fa-external-link"})])]),a("div",[a("span",{staticClass:"rep_raw"},[t._v(t._s(t.blockstate.contents.representative))])]),a("div",{staticClass:"label"},[t._v("The account's representative")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Recipient "),a("span",{staticClass:"value",on:{click:function(e){return t.copyToClipboard(t.blockstate.contents.representative)}}},[a("i",{staticClass:"fad fa-clone"})]),t._v(" "),a("span",{staticClass:"value",on:{click:function(e){return t.link("block",t.blockstate.contents.link_as_account)}}},[a("i",{staticClass:"fad fa-external-link"})])]),a("div",[a("span",{staticClass:"rec_raw"},[t._v(t._s(t.blockstate.contents.link_as_account))])]),a("div",{staticClass:"label"},[t._v("The account that is receiving the transaction")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Date "),a("span",{staticClass:"value"},[t._v(t._s(t.formattedDate))])]),a("div",{staticClass:"label"},[t._v("The date and time this block was discovered (converted to your local time)")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Previous Block "),a("span",{staticClass:"value",on:{click:function(e){return t.link("block",t.blockstate.contents.previous)}}},[a("i",{staticClass:"fad fa-external-link"})])]),a("div",[t._v(" "+t._s(t.blockstate.contents.previous)+" ")]),a("div",{staticClass:"label"},[t._v("The previous block in this account's chain")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Link")]),a("div",[t._v(t._s(t.blockstate.contents.link))]),a("div",{staticClass:"label"},[t._v("The destination address encoded in hex format")])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Proof of Work")]),a("div",[t._v(t._s(t.blockstate.contents.work))])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("Signature")]),a("div",[t._v(t._s(t.blockstate.contents.signature))])]),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[t._v("JSON "),a("span",{staticClass:"value",on:{click:function(e){t.copyToClipboard(JSON.stringify(t.blockstate))}}},[a("i",{staticClass:"fad fa-clone"})])]),a("div",{staticClass:"json"},[a("pre",[t._v(t._s(JSON.stringify(t.blockstate,null,4)))])])])]):t._e()},z=[],U={name:"BlockState",props:{details:{default:null,type:String},static:{default:!1,type:Boolean}},mixins:[y],data:function(){return{hash:null,blockstate:null}},mounted:function(){this.static&&this.getDetails(this.$route.params.hash)},watch:{details:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:null!==t?e.getDetails(t):e.blockstate=null;case 1:case"end":return a.stop()}}),a)})))()}},methods:{getDetails:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={action:"block_info",json_block:"true",hash:t},e.hash=t,a.next=4,e.$store.dispatch("app/rpCall",n);case 4:e.blockstate=a.sent;case 5:case"end":return a.stop()}}),a)})))()},formattedValue:function(t){return this.abbreviateNumber(g["b"](t,this.rawconv),5)}},computed:{formattedDate:function(){var t=new Date(1e3*this.blockstate.local_timestamp);return t.getDate()+" "+t.toLocaleString("default",{month:"short"})+" "+t.getFullYear()+" - "+t.toLocaleTimeString()}}},X=U,Z=(a("702e"),Object(u["a"])(X,Y,z,!1,null,"72d5fa6a",null)),tt=Z.exports,et=a("5ba3"),at=a.n(et);function nt(){return{key:null,open:!1,details:null,error:null,balance:0,receive:!1,genwallet:!1,send:!1,settings:!1,representative:"",blockdetails:null,address:null,logintype:"password",walletdata:null,isActive:!1,balanceextra:!1}}var st={name:"Home",components:{Transaction:O,Send:D,Receive:q,Settings:Q,BlockState:tt},mixins:[y],data:function(){return nt()},watch:{open:function(t){!0===t&&null!==this.key&&this.refreshDetails()},pow:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:!0===this.open&&null===e&&this.refreshDetails();case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){this.$store.commit("app/node",this.$route.params.node)},computed:{loginicon:function(){return"password"===this.logintype?"fa-eye":"fa-eye-slash"},pow:function(){return this.$store.state.app.pow},ready:function(){return this.$store.state.app.ready},history:function(){return this.$store.state.app.history},pending:function(){return this.$store.state.app.pending},privatekey:function(){return this.$store.state.app.privatekey}},methods:{logout:function(){Object.assign(this.$data,nt()),this.$store.commit("app/pending",[]),this.$store.commit("app/history",[]),this.$store.commit("app/ready",!1),this.$store.commit("app/pow",null),this.$store.commit("app/privatekey",null)},refresh:function(){this.isActive=!this.isActive,this.refreshDetails()},refreshDetails:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getDetails(t.privatekey);case 2:t.$store.commit("app/pow",null),t.$store.commit("app/ready",!1),t.genWork(t.privatekey,t.details),t.$store.dispatch("app/history",t.address),t.$store.dispatch("app/pending",t.address),t.balance=g["b"](t.details.balance,t.rawconv),t.representative=t.details.representative;case 9:case"end":return e.stop()}}),e)})))()},genWork:function(t,e){var a=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var s,i,r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("frontier"in e?(console.log("Frontier in details"),s=e.frontier):(console.log("Frontier NOT in details"),s=g["e"](t)),!window.Worker){n.next=10;break}return console.log("Calculating pow for "+s+" this may take some time"),i=window.navigator.hardwareConcurrency||2,r=Math.max(i-1,1),o=function(){return new Promise((function(t){for(var e=[],n=0;n<r;n++){var i=new at.a;i.postMessage({blockHash:s,workerIndex:n,workerCount:r}),i.onmessage=function(n){for(var s in console.log("Work: "+n.data),a.$store.commit("app/pow",n.data),a.$store.commit("app/ready",!0),e)console.log("Terminate: "+s),e[s].terminate();t()},e.push(i)}}))},n.next=8,o();case 8:n.next=16;break;case 10:return console.log("Calculating pow for "+s+" (no worker) this may take some time"),n.next=13,g["a"](s);case 13:c=n.sent,a.$store.commit("app/pow",c),a.$store.commit("app/ready",!0);case 16:case"end":return n.stop()}}),n)})))()},togglevisibility:function(){console.log(this.logintype),this.logintype="password"===this.logintype?"text":"password"},getAddress:function(t){var e=g["e"](t);return g["d"](e,{useNanoPrefix:!0})},getDetails:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.address=e.getAddress(t),n={action:"account_info",representative:"true",account:e.address},a.next=4,e.$store.dispatch("app/rpCall",n);case 4:e.details=a.sent;case 5:case"end":return a.stop()}}),a)})))()},openWallet:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.error=null,!t.key){e.next=11;break}return e.prev=2,e.next=5,t.getDetails(t.key);case 5:"error"in t.details&&"Account not found"!==t.details.error?t.error=t.details.error:(t.$store.commit("app/privatekey",t.key),t.open=!0,t.balance=g["b"](t.details.balance,t.rawconv)),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),t.error=e.t0;case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()}}},it=st,rt=Object(u["a"])(it,f,m,!1,null,null,null),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page active",staticStyle:{top:"0"},attrs:{id:"blockdetails"}},[a("block-state",{attrs:{static:!0}})],1)},lt=[],ut={name:"Block",components:{BlockState:tt},data:function(){return{blockdetails:null}},watch:{},mounted:function(){this.blockdetails=this.$route.params.hash}},dt=ut,pt=Object(u["a"])(dt,ct,lt,!1,null,null,null),vt=pt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page active",staticStyle:{top:"0"},attrs:{id:"blockdetails"}},[a("label",{attrs:{for:"key"}},[t._v("Enter node address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.node,expression:"node"}],attrs:{type:"text",id:"node",name:"node"},domProps:{value:t.node},on:{input:function(e){e.target.composing||(t.node=e.target.value)}}}),a("button",{staticClass:"openwallet btn",attrs:{type:"button"},on:{click:t.openNode}},[t._v("Go To Node")])])},mt=[],ht={name:"Block",components:{},data:function(){return{node:""}},watch:{},methods:{openNode:function(){this.$router.push("/"+this.node)}}},bt=ht,kt=Object(u["a"])(bt,ft,mt,!1,null,null,null),gt=kt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page active",attrs:{id:"genwallet"}},[a("router-link",{staticClass:"close",attrs:{to:"/"+t.$route.params.node}},[a("i",{staticClass:"fal fa-times"})]),a("div",{staticClass:"inner"},[a("div",{staticClass:"details"},[a("label",{attrs:{for:"seed"}},[t._v("Seed")]),a("a",{staticClass:"copy",attrs:{href:"#"},on:{click:function(e){return t.copyToClipboard(t.walletdata.seed)}}},[a("i",{staticClass:"fad fa-clone"})]),a("input",{staticClass:"copytext",attrs:{type:"text",name:"seed"},domProps:{value:t.walletdata.seed}})]),a("div",{staticClass:"details"},[a("label",{attrs:{for:"privatekey"}},[t._v("Private Key")]),a("a",{staticClass:"copy",attrs:{href:"#"},on:{click:function(e){return t.copyToClipboard(t.walletdata.privatekey)}}},[a("i",{staticClass:"fad fa-clone"})]),a("input",{staticClass:"copytext",attrs:{type:"text",name:"privatekey"},domProps:{value:t.walletdata.privatekey}})]),a("div",{staticClass:"details"},[a("label",{attrs:{for:"publickey"}},[t._v("Public Key")]),a("a",{staticClass:"copy",attrs:{href:"#"},on:{click:function(e){return t.copyToClipboard(t.walletdata.publickey)}}},[a("i",{staticClass:"fad fa-clone"})]),a("input",{staticClass:"copytext",attrs:{type:"text",name:"publickey"},domProps:{value:t.walletdata.publickey}})]),a("div",{staticClass:"details"},[a("label",{attrs:{for:"address"}},[t._v("Address")]),a("a",{staticClass:"copy",attrs:{href:"#"},on:{click:function(e){return t.copyToClipboard(t.walletdata.address)}}},[a("i",{staticClass:"fad fa-clone"})]),a("input",{staticClass:"copytext",attrs:{type:"text",name:"address"},domProps:{value:t.walletdata.address}})]),a("button",{staticClass:"btn",on:{click:function(e){return t.copyToClipboard("Seed: "+t.walletdata.seed+"\nPrivate Key: "+t.walletdata.privatekey+"\nPublic Key: "+t.walletdata.publickey+"\nAddress: "+t.walletdata.address)}}},[t._v("Copy All")]),t._m(0)])],1)},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas-bag"},[a("canvas",{attrs:{id:"genqrcode"}})])}],wt={name:"Generate",mixins:[y],data:function(){return{newrep:"",walletdata:{}}},methods:{},mounted:function(){var t=this;this.$store.dispatch("app/getSeed").then((function(e){t.walletdata=e,L.a.toCanvas(document.getElementById("genqrcode"),e.address,{width:512})}))}},_t=wt,xt=(a("683d"),Object(u["a"])(_t,yt,Ct,!1,null,"4b85f82d",null)),$t=xt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page active",staticStyle:{top:"0"},attrs:{id:"wallet"}},[a("div",{staticClass:"inner"},[t._m(0),a("div",{attrs:{id:"output"}},[a("div",{staticClass:"balance"},[a("div",{staticClass:"raw",on:{click:function(e){return t.copyToClipboard(t.$route.params.address)}}},[t._v(t._s(this.$route.params.address))]),a("div",{staticClass:"value",domProps:{innerHTML:t._s(t.abbreviateNumber(t.balance))}}),a("div",{staticClass:"raw"},[t._v(t._s(t.balance))])])]),a("div",{staticClass:"headingtitle"},[t._v("History")]),a("div",{attrs:{id:"pendingblocks"}}),t._l(t.pending,(function(e,n){return a("transaction",{key:n,attrs:{index:n,transaction:e,type:"pending"},on:{blockdetails:function(e){t.blockdetails=e}}})})),t._l(t.history,(function(e,n){return a("transaction",{key:n,attrs:{index:n,transaction:e,type:e.type},on:{blockdetails:function(e){t.blockdetails=e}}})}))],2),a("div",{staticClass:"page",class:{active:null!==t.blockdetails},attrs:{id:"blockdetails"}},[a("a",{staticClass:"close",on:{click:function(e){t.blockdetails=null}}},[a("i",{staticClass:"fal fa-times"})]),a("block-state",{attrs:{details:t.blockdetails}})],1)])},Rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headingtitle top"},[a("span",[t._v("Wallet")])])}],St={name:"Address",components:{Transaction:O,BlockState:tt},mixins:[y],data:function(){return{details:null,balance:0,blockdetails:null}},computed:{history:function(){return this.$store.state.app.history},pending:function(){return this.$store.state.app.pending}},watch:{},methods:{getDetails:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={action:"account_info",representative:"true",account:t.$route.params.address},console.log(a),e.next=4,t.$store.dispatch("app/rpCall",a);case 4:t.details=e.sent,t.$store.dispatch("app/history",t.$route.params.address),t.$store.dispatch("app/pending",t.$route.params.address),t.balance=g["b"](t.details.balance,t.rawconv);case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$store.commit("app/history",[]),this.$store.commit("app/pending",[]),this.$store.commit("app/node",this.$route.params.node),this.getDetails()}},jt=St,Pt=Object(u["a"])(jt,Ot,Rt,!1,null,null,null),Tt=Pt.exports;i["a"].use(v["a"]);var Nt=[{path:"/",name:"Node",component:gt},{path:"/:node",name:"Home",component:ot},{path:"/:node/generate",name:"Generate",component:$t},{path:"/:node/block/:hash",name:"Block",component:vt},{path:"/:node/address/:address",name:"Address",component:Tt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],At=new v["a"]({routes:Nt}),Dt=At,Et=a("2f62"),Mt=function(){return{privatekey:null,pow:null,ready:!1,history:[],pending:[],node:null}},Bt=a("43a3");function Lt(t,e){null!==e&&(console.log("Finished calculating"),console.log(e)),t.pow=e}function Ht(t,e){t.ready=e}function Wt(t,e){t.privatekey=e}function Ft(t,e){t.node=e}function qt(t,e){t.history=e}function Vt(t,e){t.pending=e}var Jt=a("53ca");function Gt(){return window.location.protocol}function Kt(){return"https:"==Gt()?"7077":"7076"}function It(){return Qt.apply(this,arguments)}function Qt(){return Qt=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,a,n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["g"]();case 2:return e=t.sent,a=g["f"](e,0),n=g["e"](a),s=g["d"](n,{useNanoPrefix:!0}),i={seed:e,privatekey:a,publickey:n,address:s},t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)}))),Qt.apply(this,arguments)}function Yt(t,e){return zt.apply(this,arguments)}function zt(){return zt=Object(h["a"])(regeneratorRuntime.mark((function t(e,a){var n,s,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Gt()+"//"+Dt.currentRoute.params.node+":"+Kt(),s={method:"POST",body:JSON.stringify(a)},t.next=4,fetch(n,s);case 4:return i=t.sent,t.next=7,i.json();case 7:return r=t.sent,console.log(r),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)}))),zt.apply(this,arguments)}function Ut(t,e){return Xt.apply(this,arguments)}function Xt(){return Xt=Object(h["a"])(regeneratorRuntime.mark((function t(e,a){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={action:"account_history",account:a},console.log("history"),t.next=4,e.dispatch("rpCall",n);case 4:s=t.sent,Array.isArray(s.history)&&s.history.length&&e.commit("history",s.history);case 6:case"end":return t.stop()}}),t)}))),Xt.apply(this,arguments)}function Zt(t,e){return te.apply(this,arguments)}function te(){return te=Object(h["a"])(regeneratorRuntime.mark((function t(e,a){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={},n["action"]="pending",n["source"]="true",n["sorting"]="true",n["account"]=a,t.next=7,e.dispatch("rpCall",n);case 7:s=t.sent,console.log("pending1"),console.log(s),"object"===Object(Jt["a"])(s.blocks)?(console.log("pending"),e.commit("pending",s.blocks)):e.commit("pending",[]);case 11:case"end":return t.stop()}}),t)}))),te.apply(this,arguments)}var ee={namespaced:!0,state:Mt,getters:Bt,mutations:n,actions:s};i["a"].use(Et["a"]);var ae=new Et["a"].Store({modules:{app:ee}});i["a"].config.productionTip=!1,new i["a"]({router:Dt,store:ae,render:function(t){return t(p)}}).$mount("#app")},"5ba3":function(t,e,a){t.exports=function(){return new Worker(a.p+"1602516512737beec51b.worker.js")}},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},6:function(t,e){},6790:function(t,e,a){"use strict";var n=a("4d81"),s=a.n(n);s.a},"683d":function(t,e,a){"use strict";var n=a("350e"),s=a.n(n);s.a},7:function(t,e){},"702e":function(t,e,a){"use strict";var n=a("ae78"),s=a.n(n);s.a},8:function(t,e){},9:function(t,e){},"9c0c":function(t,e,a){},ae78:function(t,e,a){}});
//# sourceMappingURL=app.4295c81f.js.map