(this["webpackJsonpjs-functional-programing"]=this["webpackJsonpjs-functional-programing"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(4),r=c.n(n),a=c(2),i=c(1),l=function(e){return e<10?"0".concat(e):e},o=function(e){var t=new Date(e);return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}},u=Object(i.memo)((function(e){var t=e.title,c=e.setTime;console.log("Clocksetting rendered");var n=Object(i.useState)(null),r=Object(a.a)(n,2),l=r[0],o=r[1],u=Object(i.useRef)(),j=Object(i.useRef)(),d=Object(i.useRef)();return Object(s.jsxs)("div",{className:"clock-settings",children:[l&&Object(s.jsx)("div",{className:"error",children:l}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"".concat(t,"hh"),children:"hh:"}),Object(s.jsx)("input",{ref:u,type:"text",id:"".concat(t,"hh"),maxLength:"2"}),Object(s.jsx)("label",{htmlFor:"".concat(t,"mm"),children:"mm:"}),Object(s.jsx)("input",{ref:j,type:"text",id:"".concat(t,"mm"),maxLength:"2"}),Object(s.jsx)("label",{htmlFor:"".concat(t,"ss"),children:"ss:"}),Object(s.jsx)("input",{ref:d,type:"text",id:"".concat(t,"ss"),maxLength:"2"}),Object(s.jsx)("button",{className:"btn-primary",onClick:function(){o(null);var e,t,s=u.current.value,n=j.current.value,r=d.current.value;e=n,t=r,isNaN(s)||isNaN(e)||isNaN(t)?o("Error! Please enter number."):(c(function(e){var t=e.hours,c=e.minutes,s=e.seconds,n=new Date;return n.setHours(t),n.setMinutes(c),n.setSeconds(s),n.getTime()}({hours:s,minutes:n,seconds:r})),u.current.value="",j.current.value="",d.current.value="")},children:"Set"})]})]})})),j=function(e){var t=e.title;console.log("DigitalClock rendered");var c=Object(i.useContext)(m),n=c.time,r=c.setTime,a=o(n),j=a.hours,d=a.minutes,b=a.seconds;return Object(s.jsxs)("div",{className:"clock",children:[Object(s.jsx)("h3",{children:t}),Object(s.jsxs)("div",{className:"digital-clock",children:[l(j),":",l(d),":",l(b)]}),Object(s.jsx)(u,{setTime:r,title:t})]})},d=function(e){var t=e.title;console.log("AnalogClock rendered");var c=Object(i.useContext)(m),n=c.time,r=c.setTime,a=o(n),l=a.hours,j=a.minutes,d=a.seconds,b={transform:"rotate(".concat(6*d,"deg)")},h={transform:"rotate(".concat(6*j,"deg)")},O={transform:"rotate(".concat(30*l,"deg)")};return Object(s.jsxs)("div",{className:"clock",children:[Object(s.jsx)("h3",{children:t}),Object(s.jsxs)("div",{className:"analog-clock",children:[Object(s.jsx)("div",{className:"dial seconds",style:b}),Object(s.jsx)("div",{className:"dial minutes",style:h}),Object(s.jsx)("div",{className:"dial hours",style:O})]}),Object(s.jsx)(u,{setTime:r,title:t})]})},m=(c(10),Object(i.createContext)()),b=function(){console.log("App rendered");var e=Object(i.useState)((new Date).getTime()),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=setInterval((function(){n(c+1e3)}),1e3);return function(){clearInterval(e)}}),[c]),Object(s.jsx)(m.Provider,{value:{time:c,setTime:n},children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(d,{title:"Analog"}),Object(s.jsx)(j,{title:"Digital"})]})})},h=document.getElementById("root");r.a.render(Object(s.jsx)(b,{}),h)}},[[11,1,2]]]);
//# sourceMappingURL=main.f8769c50.chunk.js.map