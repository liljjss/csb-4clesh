(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"app"},a=Object(r["e"])("h1",null,[Object(r["e"])("label",{for:"new-task"},"TO-DO LIST")],-1),c=Object(r["e"])("button",null,"新增待辦",-1);function u(e,t,n,u,i,s){var l=Object(r["h"])("TODOLIST");return Object(r["f"])(),Object(r["c"])("div",o,[Object(r["e"])("form",{onSubmit:t[2]||(t[2]=Object(r["l"])((function(){return s.addNewTask.apply(s,arguments)}),["prevent"]))},[a,Object(r["k"])(Object(r["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.newTaskText=t}),id:"new-task",placeholder:"type... 輸入待辦事項"},null,512),[[r["j"],e.newTaskText]]),c],32),Object(r["e"])(l,{tasks:e.tasks,"onDelete-task":s.deleteTask},null,8,["tasks","onDelete-task"])])}n("4de4");function i(e,t,n,o,a,c){return Object(r["f"])(),Object(r["c"])("ul",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(n.tasks,(function(t){return Object(r["f"])(),Object(r["c"])("li",{key:t.id},[Object(r["d"])(Object(r["i"])(t.text)+" ",1),Object(r["e"])("button",{onClick:function(n){return e.$emit("delete-task",t.id)}},"Delete",8,["onClick"])])})),128))])}var s={name:"TODOLIST",props:["tasks"]};s.render=i;var l=s,f={name:"App",components:{TODOLIST:l},data:function(){return{newTaskText:"",tasks:[]}},methods:{addNewTask:function(){var e=this.newTaskText;e&&(this.tasks.push({id:Math.random(),text:this.newTaskText}),this.newTaskText=null)},deleteTask:function(e){var t=this.tasks.filter((function(t){return t.id!==e}));this.tasks=t}}};n("64be");f.render=u;var p=f;Object(r["b"])(p).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},c894:function(e,t,n){}});
//# sourceMappingURL=app.7282c797.js.map