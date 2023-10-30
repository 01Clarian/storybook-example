import{r as N}from"./index-76fb7be0.js";import{P as o}from"./index-8d47fad6.js";var S={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=N,I=Symbol.for("react.element"),O=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,P=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function A(t,e,a){var s,n={},d=null,m=null;a!==void 0&&(d=""+a),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(m=e.ref);for(s in e)D.call(e,s)&&!j.hasOwnProperty(s)&&(n[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)n[s]===void 0&&(n[s]=e[s]);return{$$typeof:I,type:t,key:d,ref:m,props:n,_owner:P.current}}p.Fragment=O;p.jsx=A;p.jsxs=A;S.exports=p;var E=S.exports;const i=E.jsx,k=E.jsxs;function u({task:{id:t,title:e,state:a},onArchiveTask:s,onPinTask:n}){return k("div",{className:`list-item ${a}`,children:[k("label",{htmlFor:"checked","aria-label":`archiveTask-${t}`,className:"checkbox",children:[i("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${t}`,checked:a==="TASK_ARCHIVED"}),i("span",{className:"checkbox-custom",onClick:()=>s(t)})]}),i("label",{htmlFor:"title","aria-label":e,className:"title",children:i("input",{type:"text",value:e,readOnly:!0,name:"title",placeholder:"Input title"})}),a!=="TASK_ARCHIVED"&&i("button",{className:"pin-button",onClick:()=>n(t),id:`pinTask-${t}`,"aria-label":`pinTask-${t}`,children:i("span",{className:"icon-star"})},`pinTask-${t}`)]})}u.propTypes={task:o.shape({id:o.string.isRequired,title:o.string.isRequired,state:o.string.isRequired}),onArchiveTask:o.func,onPinTask:o.func};u.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const q={component:u,title:"Task",tags:["autodocs"]},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...r.args.task,state:"TASK_PINNED"}}},l={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}};var f,_,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var T,g,v;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const C=["Default","Pinned","Archived"],w=Object.freeze(Object.defineProperty({__proto__:null,Archived:l,Default:r,Pinned:c,__namedExportsOrder:C,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,u as T,i as a,w as b,k as j};
//# sourceMappingURL=Task.stories-468792f0.js.map
