(function(t){function e(e){for(var i,r,a=e[0],u=e[1],s=e[2],C=0,y=[];C<a.length;C++)r=a[C],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&y.push(o[r][0]),o[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);d&&d(e);while(y.length)y.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==o[a]&&(i=!1)}i&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var i={},r={app:0},o={app:0},c=[];function a(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-599b740d":"0e011761","chunk-60e65a86":"a2b66621","chunk-a58df746":"7e4868f4","chunk-1ab31098":"a4106bb9","chunk-4bb70a2c":"de0db56c"}[t]+".js"}function u(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-599b740d":1,"chunk-60e65a86":1,"chunk-a58df746":1,"chunk-1ab31098":1,"chunk-4bb70a2c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-599b740d":"3c003414","chunk-60e65a86":"3fb106d2","chunk-a58df746":"f7423a14","chunk-1ab31098":"96077fb2","chunk-4bb70a2c":"33944313"}[t]+".css",o=u.p+i,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var s=c[a],C=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(C===i||C===o))return e()}var y=document.getElementsByTagName("style");for(a=0;a<y.length;a++){s=y[a],C=s.getAttribute("data-href");if(C===i||C===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete r[t],d.parentNode.removeChild(d),n(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var c=new Promise((function(e,n){i=o[t]=[e,n]}));e.push(i[2]=c);var s,C=document.createElement("script");C.charset="utf-8",C.timeout=120,u.nc&&C.setAttribute("nonce",u.nc),C.src=a(t);var y=new Error;s=function(e){C.onerror=C.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;y.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",y.name="ChunkLoadError",y.type=i,y.request=r,n[1](y)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:C})}),12e4);C.onerror=C.onload=s,document.head.appendChild(C)}return Promise.all(e)},u.m=t,u.c=i,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/city-bus/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],C=s.push.bind(s);s.push=e,s=s.slice();for(var y=0;y<s.length;y++)e(s[y]);var d=C;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c05":function(t,e,n){},"0ee1":function(t,e,n){},3954:function(t,e,n){"use strict";n("0c05")},"4c37":function(t,e,n){},5321:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBrVVdVtpQEJ65iSDIOYUXW7TnFFegXYG4gh5XADsQV1C6AtmBuALtCtQVQFcgvkjgRTzF3CSH3OnchPAPCW2/B8LNvZnvzsw3Mwgr8ESUz3rOBRGUAanAzwFsACLkgfCVyL8BMB6KmUxn8Yy5igA8eUI+PMpM5vwIcSNJhK6UJSYpo4D7niubH9OZH2sPWp7TenHsGvwjuq6sa1shOcx7YrnyqT8cnsB/ApNUNZm2rdeof/qeczVS6vlgN9uYHhxWEY1KohwJJFAAOkfFTK4ZvX9xnJop1Jf9VPZyErLZD3uevOYQNqLbJPSA7diNvmdfzb63PHmv99Big0TYZqU0AxLX/a5ghMX0Xh3+AppMjaBzkA2joyPDPpf49tM4hgfnvdsWr+N8z657rt0SQAoiCbOLZaXUYxKDS4oao8C2iG1E+8EaBAhF8DZ7EIli66bveRU08HZzDkel6B+RKgjYEppEgarJnfRZ0mLWMGELWLZdY5LKtiRLRL5hDDiWK8MxVuNRMbX7FWJAiHk1mr/IHNHnVKrNuj/mXnXNoniebAgocUVWOKVNvQexQDrIZdtriTQ+pTJnWn3a+gS66gGaBPEwfH+wn8u1F9+vzJHPhw0O46p2vwla0r5BpVV7S6rTfc/cMVrc7p9e7OSdPOiN/A0K8163sI1EuooV0dS4oDIkRNCAx+AmXF0iEggfokUhlGxn+jG0ISHY+GxH6SzumwQ4J2fuSGf8KCuhBofpvTtICM5nvee+t8nHkhw36OmFeYx05XuzK3+XNxnRA3HxTDAs7WFsDrWCdUmYhk8NlTL1DHlYd1gXMiFVu45dD4Ycg1zJQ1PEeswC4ZoMohROQsu1b7cZdHHQtrT6uu57PSCMNvSMRwMqStEvJD9xbhahhMibII7Z7aoP4vIwnb6bI4pguU6LlP8TDXHK7aBECecTCnGqSPEloc1S/mZzh9nYeLvSfgifYRIhIWZFFdmYhVhxs0ld+URvsAWEEkGOhZjWZoSlXscT9yaY+dptH84hIUL1GleWIy/4gjeL+38AvF/s6y17/7kAAAAASUVORK5CYII="},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function r(t,e){var n=Object(i["B"])("router-view");return Object(i["u"])(),Object(i["d"])(n)}n("3954");var o=n("6b0d"),c=n.n(o);const a={},u=c()(a,[["render",r]]);var s=u,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),y=n("9e6b"),d=n.n(y),f=function(t){return Object(i["x"])("data-v-2efcbc72"),t=t(),Object(i["v"])(),t},A={class:"home"},m=f((function(){return Object(i["g"])("h3",null,"全台公車一次找",-1)})),p={class:"bus"},l={class:"bus-title"},h=f((function(){return Object(i["g"])("h4",null,"找公車",-1)})),g=f((function(){return Object(i["g"])("img",{src:d.a,alt:"arrow to right"},null,-1)})),b=[g],O={class:"bus-city"},S={class:"route"},v={class:"route-title"},I=f((function(){return Object(i["g"])("h4",null,"找站牌",-1)})),j=f((function(){return Object(i["g"])("img",{src:d.a,alt:"arrow to right"},null,-1)})),N=[j];function D(t,e,n,r,o,c){var a=Object(i["B"])("Navbar"),u=Object(i["B"])("CityCard");return Object(i["u"])(),Object(i["f"])("div",A,[Object(i["g"])("header",null,[Object(i["i"])(a)]),Object(i["g"])("main",null,[m,Object(i["g"])("section",p,[Object(i["g"])("div",l,[h,Object(i["g"])("a",{onClick:e[0]||(e[0]=Object(i["K"])((function(e){return c.getRoutes(t.cityName)}),["prevent"])),href:"##"},b)]),Object(i["g"])("div",O,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["A"])(o.cityList,(function(e){return Object(i["u"])(),Object(i["d"])(u,{class:Object(i["q"])({selected:t.cityName===e.CityName}),key:e.CityID,city:e},null,8,["class","city"])})),128))])]),Object(i["g"])("section",null,[Object(i["g"])("div",S,[Object(i["g"])("div",v,[I,Object(i["g"])("a",{onClick:e[1]||(e[1]=Object(i["K"])((function(e){return c.getStops(t.cityName)}),["prevent"])),href:"##"},N)])])])])])}var w=n("5530"),R=n("d178"),T=n("5321"),E=n.n(T),L=function(t){return Object(i["x"])("data-v-5fd27f80"),t=t(),Object(i["v"])(),t},k=L((function(){return Object(i["g"])("div",null,[Object(i["g"])("img",{src:E.a,alt:"bus icon"})],-1)})),B={class:"bus-city-name"};function U(t,e,n,r,o,c){return Object(i["u"])(),Object(i["f"])("div",{onClick:e[0]||(e[0]=function(t){return c.selectCity(n.city)}),class:"bus-city-card"},[k,Object(i["g"])("p",B,Object(i["E"])(n.city.CityName),1)])}var x={name:"CityCard",props:{city:{type:Object,required:!0}},data:function(){return{}},methods:{selectCity:function(t){this.$store.commit("setCity",t)}}};n("9c45");const V=c()(x,[["render",U],["__scopeId","data-v-5fd27f80"]]);var Y=V,P=n("b067"),K=n("5502"),G=n("3d20"),Q=n.n(G),X=Q.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),H={name:"Home",components:{Navbar:R["a"],CityCard:Y},data:function(){return{cityList:P}},computed:Object(w["a"])({},Object(K["b"])(["cityName"])),methods:{getRoutes:function(t){t?(this.$store.commit("resetCityRoutes"),this.$store.dispatch("searchRoutes"),this.$router.push({name:"Search",query:{type:"route"},params:{city:t}})):X.fire({icon:"warning",title:"請先選擇城市"})},getStops:function(t){t?"基隆市"!==t&&"連江縣"!==t?(this.$store.commit("resetCityStop"),this.$store.dispatch("searchStations"),this.$router.push({name:"Search",params:{city:t},query:{type:"stop"}})):X.fire({icon:"error",title:"未提供該縣市站牌查詢服務"}):X.fire({icon:"warning",title:"請先選擇城市"})}}};n("f438");const J=c()(H,[["render",D],["__scopeId","data-v-2efcbc72"]]);var F=J,W=[{path:"/",name:"Home",component:F},{path:"/search/:city",name:"Search",component:function(){return n.e("chunk-599b740d").then(n.bind(null,"2d3b"))}},{path:"/stop-sequence",name:"Sequence",component:function(){return n.e("chunk-a58df746").then(n.bind(null,"bec1"))}},{path:"/stop/:stopUID",name:"Stop",component:function(){return n.e("chunk-60e65a86").then(n.bind(null,"a945"))}}],Z=Object(C["a"])({history:Object(C["b"])("/city-bus/"),routes:W}),M=Z,z=n("1da1"),q=(n("96cf"),n("d81d"),n("4de4"),n("99af"),n("bc3a")),_=n.n(q),$=n("6c2d"),tt=_.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Bus",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});function et(){var t="12efae2e62544e008e3edb1edfc82542",e="SLIpweeVUHAwlA3-4jmwbHH0ryg",n=(new Date).toGMTString(),i=new $["a"]("SHA-1","TEXT");i.setHMACKey(e,"TEXT"),i.update("x-date: "+n);var r=i.getHMAC("B64"),o='hmac username="'.concat(t,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(r,'"');return{Authorization:o,"X-Date":n}}tt.interceptors.request.use((function(t){return t.headers=Object(w["a"])({Accept:"application/json","Content-Type":"application/json"},et()),t}),(function(t){return Promise.reject(t)}));var nt={getRoutesByCity:function(t){return tt.get("/Route/City/".concat(t),{params:{format:JSON}})},getStationsByCity:function(t){return tt.get("/Station/City/".concat(t),{params:{format:JSON}})},getRoutesStops:function(t){return tt.get("/StopOfRoute/City/".concat(t),{params:{format:JSON}})},getRoute:function(t,e){return tt.get("/Route/City/".concat(t,"/").concat(e),{params:{format:JSON}})},getRouteByName:function(t,e){return tt.get("StopOfRoute/City/".concat(t,"/").concat(e),{params:{format:JSON}})},getTimeOfArrival:function(t,e){return tt.get("/EstimatedTimeOfArrival/City/".concat(t,"/").concat(e),{params:{format:JSON}})}},it=Object(K["a"])({state:{slectedCity:{},cityRoutes:[],cityRoutesStops:[],cityStops:[],routeSequences:[],selectedRoute:{},selectedStop:{},timeOfArrival:[],isLoading:void 0},getters:{cityName:function(t){return t.selectedCity?t.selectedCity.CityName:void 0},cityNameEn:function(t){return t.selectedCity?t.selectedCity.City:void 0},stops:function(t){return t.cityStops.map((function(t){return Object(w["a"])(Object(w["a"])({},t),{},{StationName:t.StationName.Zh_tw})}))},departureRouteSequence:function(t){var e=0,n=t.routeSequences.filter((function(t){return t.Direction===e}));if(n.length){var i=n[0]["Stops"];return i}return[]},returnRouteSequence:function(t){var e=1,n=t.routeSequences.filter((function(t){return t.Direction===e}));if(n.length){var i=n[0]["Stops"];return i}return[]}},mutations:{setCity:function(t,e){t.selectedCity=e},setRouteSequences:function(t,e){t.routeSequences=e},setSelectedRoute:function(t,e){t.selectedRoute=e},setSelectedStop:function(t,e){t.selectedStop=e},resetCityStop:function(t){t.cityStops=[]},resetCityRoutes:function(t){t.CityRoutes=[]},resetRouteSequence:function(t){t.routeSequences=[]},resetSelectedStop:function(t){t.selectedStop={}},resetSelectedRoute:function(t){t.selectedRoute={}},changeLoadingStatus:function(t,e){t.isLoading=e}},actions:{searchRoutes:function(t){return Object(z["a"])(regeneratorRuntime.mark((function e(){var n,i,r,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,i=t.commit,i("changeLoadingStatus",!0),r=n.selectedCity.City,e.next=5,nt.getRoutesByCity(r);case 5:o=e.sent,c=o.data,n.cityRoutes=c,i("changeLoadingStatus",!1);case 9:case"end":return e.stop()}}),e)})))()},searchStations:function(t){return Object(z["a"])(regeneratorRuntime.mark((function e(){var n,i,r,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,i=t.commit,i("changeLoadingStatus",!0),r=n.selectedCity.City,e.next=5,nt.getStationsByCity(r);case 5:o=e.sent,c=o.data,n.cityStops=c,i("changeLoadingStatus",!1);case 9:case"end":return e.stop()}}),e)})))()},getRouteSequence:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var i,r,o,c,a,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.getters,r=t.commit,r("changeLoadingStatus",!0),o=i.cityNameEn,c=e.RouteName["Zh_tw"],n.next=6,nt.getRouteByName(o,c);case 6:a=n.sent,u=a.data,u.length>2?(s=u.filter((function(t){return t.RouteName["Zh_tw"]===c})),r("setRouteSequences",s),r("changeLoadingStatus",!1)):(r("setRouteSequences",u),r("changeLoadingStatus",!1));case 9:case"end":return n.stop()}}),n)})))()},getTimeOfArrival:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var i,r,o,c,a,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.state,r=t.getters,o=t.commit,o("changeLoadingStatus",!0),c=r.cityNameEn,a=e.RouteName["Zh_tw"],n.next=6,nt.getTimeOfArrival(c,a);case 6:u=n.sent,s=u.data,i.timeOfArrival=s,o("changeLoadingStatus",!1);case 10:case"end":return n.stop()}}),n)})))()},getRoute:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var i,r,o,c,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.getters,r=t.commit,r("changeLoadingStatus",!0),o=i.cityNameEn,c=e.RouteName["Zh_tw"],n.next=6,nt.getRoute(o,c);case 6:a=n.sent,u=a.data,r("setSelectedRoute",u[0]),r("changeLoadingStatus",!1);case 10:case"end":return n.stop()}}),n)})))()}},modules:{}});n("0ee1");Object(i["c"])(s).use(it).use(M).mount("#app")},"795d":function(t,e,n){},"9c45":function(t,e,n){"use strict";n("795d")},"9d64":function(t,e){t.exports="data:image/png;base64,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"},"9e6b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAALCAYAAAAHmmGnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgB7ZS7EcIwDEBlH8caJDVQsAEZgQk4NmCD2BPACNkENkiKAKUxE6SmsJA5wnEcDvm0eo0sWdU7SQKYIMrkkZDjnJ77dDLVoT4JTBPVKyptT2moiSU2oOJFhc6t6jQkkiX+QcXzIzrc1Glqyu13D0tsgYpnGYXnTZRS7LS9rD//BTCtoXVWFPxK05pjQnILX2eJHfklkiX2QNsyo/nzK31Fd09YYk/07XwAxCUCZCMaT0O1CJhuIL6fks/iIApwUj8AU3dGTsJGh+cAAAAASUVORK5CYII="},b067:function(t){t.exports=JSON.parse('[{"CityID":"A","CityName":"臺北市","CityCode":"TPE","City":"Taipei","CountyID":"A","Version":"21.08.1"},{"CityID":"B","CityName":"臺中市","CityCode":"TXG","City":"Taichung","CountyID":"B","Version":"21.08.1"},{"CityID":"C","CityName":"基隆市","CityCode":"KEE","City":"Keelung","CountyID":"C","Version":"21.08.1"},{"CityID":"D","CityName":"臺南市","CityCode":"TNN","City":"Tainan","CountyID":"D","Version":"21.08.1"},{"CityID":"E","CityName":"高雄市","CityCode":"KHH","City":"Kaohsiung","CountyID":"E","Version":"21.08.1"},{"CityID":"F","CityName":"新北市","CityCode":"NWT","City":"NewTaipei","CountyID":"F","Version":"21.08.1"},{"CityID":"G","CityName":"宜蘭縣","CityCode":"ILA","City":"YilanCounty","CountyID":"G","Version":"21.08.1"},{"CityID":"H","CityName":"桃園市","CityCode":"TAO","City":"Taoyuan","CountyID":"H","Version":"21.08.1"},{"CityID":"I","CityName":"嘉義市","CityCode":"CYI","City":"Chiayi","CountyID":"I","Version":"21.08.1"},{"CityID":"J","CityName":"新竹縣","CityCode":"HSQ","City":"HsinchuCounty","CountyID":"J","Version":"21.08.1"},{"CityID":"K","CityName":"苗栗縣","CityCode":"MIA","City":"MiaoliCounty","CountyID":"K","Version":"21.08.1"},{"CityID":"M","CityName":"南投縣","CityCode":"NAN","City":"NantouCounty","CountyID":"M","Version":"21.08.1"},{"CityID":"N","CityName":"彰化縣","CityCode":"CHA","City":"ChanghuaCounty","CountyID":"N","Version":"21.08.1"},{"CityID":"O","CityName":"新竹市","CityCode":"HSZ","City":"Hsinchu","CountyID":"O","Version":"21.08.1"},{"CityID":"P","CityName":"雲林縣","CityCode":"YUN","City":"YunlinCounty","CountyID":"P","Version":"21.08.1"},{"CityID":"Q","CityName":"嘉義縣","CityCode":"CYQ","City":"ChiayiCounty","CountyID":"Q","Version":"21.08.1"},{"CityID":"T","CityName":"屏東縣","CityCode":"PIF","City":"PingtungCounty","CountyID":"T","Version":"21.08.1"},{"CityID":"U","CityName":"花蓮縣","CityCode":"HUA","City":"HualienCounty","CountyID":"U","Version":"21.08.1"},{"CityID":"V","CityName":"臺東縣","CityCode":"TTT","City":"TaitungCounty","CountyID":"V","Version":"21.08.1"},{"CityID":"W","CityName":"金門縣","CityCode":"KIN","City":"KinmenCounty","CountyID":"W","Version":"21.08.1"},{"CityID":"X","CityName":"澎湖縣","CityCode":"PEN","City":"PenghuCounty","CountyID":"X","Version":"21.08.1"},{"CityID":"Z","CityName":"連江縣","CityCode":"LIE","City":"LienchiangCounty","CountyID":"Z","Version":"21.08.1"}]')},d178:function(t,e,n){"use strict";var i=n("7a23"),r=n("9d64"),o=n.n(r),c=function(t){return Object(i["x"])("data-v-30b23886"),t=t(),Object(i["v"])(),t},a=c((function(){return Object(i["g"])("h1",{class:"logo"},[Object(i["g"])("img",{src:o.a,alt:"wait for bus logo"})],-1)})),u=c((function(){return Object(i["g"])("h2",null,"全台公車整合資訊網",-1)}));function s(t,e,n,r,o,c){var s=Object(i["B"])("router-link");return Object(i["u"])(),Object(i["f"])("nav",null,[Object(i["i"])(s,{to:{name:"Home"}},{default:Object(i["I"])((function(){return[a]})),_:1}),u])}var C={name:"Navbar"},y=(n("e3b0"),n("6b0d")),d=n.n(y);const f=d()(C,[["render",s],["__scopeId","data-v-30b23886"]]);e["a"]=f},d72d:function(t,e,n){},e3b0:function(t,e,n){"use strict";n("d72d")},f438:function(t,e,n){"use strict";n("4c37")}});
//# sourceMappingURL=app.7356502d.js.map