(this["webpackJsonpschool-aic"]=this["webpackJsonpschool-aic"]||[]).push([[0],{168:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(72),o=n.n(a),c=n(31),u=n(73),l=n(178),d=n(175),s=n(180),h=n(179),g=n(75),v=function(e){return[{id:0,color:e&&e.find((function(e){return 0==e.id}))?"lightgreen":"wheat"},{id:1,color:e&&e.find((function(e){return 1==e.id}))?"lightgreen":"wheat"},{id:2,color:e&&e.find((function(e){return 2==e.id}))?"lightgreen":"wheat"},{id:3,color:e&&e.find((function(e){return 3==e.id}))?"lightgreen":"wheat"},{id:4,color:e&&e.find((function(e){return 4==e.id}))?"lightgreen":"wheat"},{id:5,color:e&&e.find((function(e){return 5==e.id}))?"lightgreen":"wheat"},{id:6,color:e&&e.find((function(e){return 6==e.id}))?"lightgreen":"wheat"},{id:7,color:e&&e.find((function(e){return 7==e.id}))?"lightgreen":"wheat"},{id:8,color:e&&e.find((function(e){return 8==e.id}))?"lightgreen":"wheat"},{id:9,color:e&&e.find((function(e){return 9==e.id}))?"lightgreen":"wheat"}]},f=[{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:0,target:5},{source:1,target:4},{source:1,target:6},{source:0,target:8},{source:2,target:5},{source:2,target:9},{source:3,target:7},{source:7,target:1},{source:8,target:9},{source:9,target:1}],m=function(e,t){if(e.id==t.id)return{success:!0,visited:[t]};var n=[],r=[];r.push(e);for(var i=function(){var e=r.shift();return null==e||n.find((function(t){return t.id==e.id}))?"continue":(console.log(e,t),n.push(e),e.id==t.id?{v:{success:!0,visited:n}}:void(r=r.concat(w(e))))};r.length>0;){var a=i();if("continue"!==a&&"object"===typeof a)return a.v}return{success:!1,visited:n}},p=function(e,t){if(e.id==t.id)return{success:!0,visited:[t]};var n=[],r=[];r.push(e);for(var i=function(){var e=r.pop();return null==e||n.find((function(t){return t.id==e.id}))?"continue":(n.push(e),e.id==t.id?{v:{success:!0,visited:n}}:void(r=r.concat(w(e))))};r.length>0;){var a=i();if("continue"!==a&&"object"===typeof a)return a.v}return{success:!1,visited:n}},E=function(e){return v([]).find((function(t){return t.id==e}))},w=function(e){var t=f.filter((function(t){return t.source==e.id}));if(null==t||t.length<1)return[];var n,r=[],i=Object(g.a)(t);try{for(i.s();!(n=i.n()).done;){var a=n.value,o=E(a.target);null!=o&&r.push(o)}}catch(c){i.e(c)}finally{i.f()}return r};var b=function(){var e=Object(r.useState)(v([])),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(0),g=Object(c.a)(o,2),w=g[0],b=g[1],j=Object(r.useState)(9),y=Object(c.a)(j,2),O=y[0],S=y[1],k=Object(r.useState)(null),R=Object(c.a)(k,2),B=R[0],C=R[1],z=function(e){var t=e(E(w),E(O));a(v(t.visited)),C(t)};return i.a.createElement(d.a,{style:{height:"100vh",width:"100vw"}},i.a.createElement(d.a,{padding:16,style:{height:"5vh",width:"100vw"}},i.a.createElement(s.a,{marginRight:8,onChange:function(e){return b(e.target.value)}},i.a.createElement("option",{value:"0",selected:"selected"},"0"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"6"},"6"),i.a.createElement("option",{value:"7"},"7"),i.a.createElement("option",{value:"8"},"8"),i.a.createElement("option",{value:"9"},"9")),i.a.createElement(s.a,{marginRight:16,onChange:function(e){return S(e.target.value)}},i.a.createElement("option",{value:"0"},"0"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"6"},"6"),i.a.createElement("option",{value:"7"},"7"),i.a.createElement("option",{value:"8"},"8"),i.a.createElement("option",{value:"9",selected:"selected"},"9")),i.a.createElement(h.a,{marginRight:8,onClick:function(){return z(m)}},"BFS"),i.a.createElement(h.a,{marginRight:16,onClick:function(){return z(p)}},"DFS"),function(){if(null==B)return null;var e=B.visited.map((function(e){return e.id})).join(", "),t=B.success?"T\xecm th\u1ea5y \u0111\u01b0\u1eddng: ".concat(e):"Kh\xf4ng t\xecm th\u1ea5y \u0111\u01b0\u1eddng: ".concat(e,", X"),n=B.success?"success":"danger";return i.a.createElement(l.a,{isRemoveable:!0,marginTop:16,appearance:"card",intent:n,children:t})}()),i.a.createElement(d.a,{style:{height:"95vh",width:"100vw"}},i.a.createElement(u.Graph,{id:"graph-id",data:{nodes:n,links:f},config:{width:window.innerWidth,height:window.innerHeight,directed:!0,nodeHighlightBehavior:!0,d3:{gravity:-1e3,linkLength:300},node:{size:2e3,fontSize:10,highlightFontSize:15}}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,n){e.exports=n(168)}},[[83,1,2]]]);
//# sourceMappingURL=main.03c91709.chunk.js.map