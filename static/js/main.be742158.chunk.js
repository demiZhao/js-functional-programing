(this["webpackJsonpjs-functional-programing"]=this["webpackJsonpjs-functional-programing"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(4),r=s.n(n),i=s(2),a=s(1),l=function(e){return e<10?"0".concat(e):e},o=function(e){var t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}},u=Object(a.memo)((function(e){var t=e.setTime;console.log("Clocksetting rendered");var s=Object(a.useState)(null),n=Object(i.a)(s,2),r=n[0],l=n[1],o=Object(a.useRef)(),u=Object(a.useRef)(),j=Object(a.useRef)();return Object(c.jsxs)("div",{className:"clock-settings",children:[r&&Object(c.jsx)("div",{className:"error",children:r}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"hh",children:"hh: "}),Object(c.jsx)("input",{ref:o,type:"text",id:"hh",maxLength:"2"}),Object(c.jsx)("label",{htmlFor:"mm",children:"mm: "}),Object(c.jsx)("input",{ref:u,type:"text",id:"mm",maxLength:"2"}),Object(c.jsx)("label",{htmlFor:"ss",children:"ss: "}),Object(c.jsx)("input",{ref:j,type:"text",id:"ss",maxLength:"2"}),Object(c.jsx)("button",{className:"btn-primary",onClick:function(){l(null);var e,s,c=o.current.value,n=u.current.value,r=j.current.value;e=n,s=r,isNaN(c)||isNaN(e)||isNaN(s)?l("Error! Please enter number."):(t(function(e){var t=e.hours,s=e.minutes,c=e.seconds,n=new Date;return n.setHours(t),n.setMinutes(s),n.setSeconds(c),n.getTime()}({hours:c,minutes:n,seconds:r})),o.current.value="",u.current.value="",j.current.value="")},children:"Set"})]})]})})),j=function(e){var t=e.title;console.log("DigitalClock rendered");var s=Object(a.useContext)(m),n=s.time,r=s.setTime,i=o(n),j=i.hours,d=i.minutes,b=i.seconds;return Object(c.jsxs)("div",{className:"clock",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsxs)("div",{className:"digital-clock",children:[l(j),":",l(d),":",l(b)]}),Object(c.jsx)(u,{setTime:r})]})},d=function(e){var t=e.title;console.log("AnalogClock rendered");var s=Object(a.useContext)(m),n=s.time,r=s.setTime,i=o(n),l=i.hours,j=i.minutes,d=i.seconds,b={transform:"rotate(".concat(6*d,"deg)")},h={transform:"rotate(".concat(6*j,"deg)")},O={transform:"rotate(".concat(30*l,"deg)")};return Object(c.jsxs)("div",{className:"clock",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsxs)("div",{className:"analog-clock",children:[Object(c.jsx)("div",{className:"dial seconds",style:b}),Object(c.jsx)("div",{className:"dial minutes",style:h}),Object(c.jsx)("div",{className:"dial hours",style:O})]}),Object(c.jsx)(u,{setTime:r})]})},m=(s(10),Object(a.createContext)()),b=function(){console.log("App rendered");var e=Object(a.useState)((new Date).getTime()),t=Object(i.a)(e,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){n(s+1e3)}),1e3);return function(){clearInterval(e)}}),[s]),Object(c.jsx)(m.Provider,{value:{time:s,setTime:n},children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d,{title:"Analog"}),Object(c.jsx)(j,{title:"Digital"})]})})},h=document.getElementById("root");r.a.render(Object(c.jsx)(b,{}),h)}},[[11,1,2]]]);
//# sourceMappingURL=main.be742158.chunk.js.map