(this.webpackJsonpawesomeapp=this.webpackJsonpawesomeapp||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),s=c(6),r=c.n(s),a=c(7),j=c(5),o=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"toDo",children:[Object(n.jsx)("i",{class:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),Object(n.jsxs)("li",{children:[" ",e.text," "]})]})})},l=function(){var e=Object(i.useState)(),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(i.useState)([]),l=Object(j.a)(r,2),u=l[0],d=l[1],b=function(e){console.log("Deleted"),d((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"main_div",children:Object(n.jsxs)("div",{className:"inner_div",children:[Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"circle",children:Object(n.jsx)("h1",{children:"ToDo List"})}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",placeholder:"Add a items",onChange:function(e){s(e.target.value)},value:c}),Object(n.jsx)("button",{onClick:function(){d((function(e){return[].concat(Object(a.a)(e),[c])})),s("")},children:" + "}),Object(n.jsx)("ol",{children:u.map((function(e,t){return Object(n.jsx)(o,{id:t,text:e,onSelect:b},t)}))})]})})})};c(13);r.a.render(Object(n.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ec287aff.chunk.js.map