(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),c=a.n(o),r=(a(13),a(4)),s=a.n(r);var u=function(){const[e,t]=Object(n.useState)([]),[a,o]=Object(n.useState)(""),c=Object(n.useRef)(null);Object(n.useEffect)(()=>{const e=localStorage.getItem("todoList");e&&t(JSON.parse(e))},[]);const r=e=>{localStorage.setItem("todoList",JSON.stringify(e))},u=()=>{if(""!==c.current.value){const n=[...e,{task:a,completed:!1}];t(n),r(n),c.current.value="",o("")}else s()("You have to write the name for your task to add it to the list.")};return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Todo List"),l.a.createElement("div",null,l.a.createElement("input",{id:"add-task",ref:c,type:"text",placeholder:"Task...",onKeyDown:e=>{"Enter"===e.key&&u()},onChange:e=>{o(e.target.value)}}),l.a.createElement("button",{onClick:u}," Add Task ")),l.a.createElement("hr",null),l.a.createElement("ul",null,e.map((a,n)=>l.a.createElement("div",{id:"task"},l.a.createElement("li",{key:n},a.task),l.a.createElement("button",{onClick:()=>(a=>{const n=e.map(e=>e.task===a?{task:a,completed:!e.completed}:e);t(n),r(n)})(a.task)},a.completed?"undo":"completed"),l.a.createElement("button",{id:"delete-button",onClick:()=>(a=>{const n=e.filter(e=>e.task!==a);t(n),r(n)})(a.task)},"remove"),a.completed?l.a.createElement("h2",null,l.a.createElement("span",{role:"img","aria-label":"Checked"},"\u2705")):""))))};var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:o,getTTFB:c}=t;a(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),i()},5:function(e,t,a){e.exports=a(14)}},[[5,1,2]]]);
//# sourceMappingURL=main.f638dfd7.chunk.js.map