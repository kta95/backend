(this.webpackJsonppartz=this.webpackJsonppartz||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),o=n.n(c),r=n(6),a=n(3),i=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content," ",Object(u.jsx)("button",{onClick:n,children:c})]})},l=n(4),j=n.n(l),f="/api/notes",b=function(){var t=j.a.get(f),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},d=function(t){return j.a.post(f,t).then((function(t){return t.data}))},p=function(t,e){return j.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},m=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},O=(n(39),function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16,backgroundColor:"gray"},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})}),h=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)(""),l=Object(a.a)(o,2),j=l[0],f=l[1],h=Object(i.useState)(!1),v=Object(a.a)(h,2),g=v[0],x=v[1],S=Object(i.useState)("some error happened....."),k=Object(a.a)(S,2),y=k[0],w=k[1];Object(i.useEffect)((function(){b().then((function(t){c(t)}))}),[]);var C=g?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(m,{message:y}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return x(!g)},children:["show ",g?"important":"all"]})}),Object(u.jsx)("ul",{children:C.map((function(t,e){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){console.log("importance of "+t+"needs to be toggled");var e=n.find((function(e){return e.id===t})),o=Object(r.a)(Object(r.a)({},e),{},{important:!e.important});p(t,o).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(o){w("the note '".concat(e.content,"' was already deleted from server")),setTimeout((function(){w(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},e)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:j,date:(new Date).toISOString(),important:Math.random()>.5};d(e).then((function(t){c(n.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(O,{})]})};o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6761b274.chunk.js.map