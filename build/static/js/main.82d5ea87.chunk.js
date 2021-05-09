(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={button:"ContactList_button__1b5R0",item:"ContactList_item__2bTB-",list:"ContactList_list__1QlQQ"}},20:function(t,e,n){t.exports={input:"Filter_input__2Qxyb"}},28:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(13),i=n.n(o),s=(n(28),n(7)),u=n(8),l=n(10),b=n(9),j=n(11),m=n(6),d=n.n(m),O=n(3),f=n(19),h=n.n(f),p=n(4),C={addNewContact:Object(p.b)("contacts/AddNewContact",(function(t){var e=t.name,n=t.number;return{payload:{id:h.a.generate(),name:e,number:n}}})),deleteContact:Object(p.b)("contacts/DeleteContact"),filterContact:Object(p.b)("contacts/FilterContact")},v=n(1),x=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props,o=r.contacts,i=r.onSubmit;return o.some((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts")):o.some((function(t){return t.number.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts")):(i(t.state),void t.setState({name:"",number:""}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleChange,c=this.handleSubmit;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{className:d.a.ContactForm,onSubmit:c,children:[Object(v.jsxs)("label",{className:d.a.label,children:["Name",Object(v.jsx)("input",{className:d.a.input,type:"text",name:"name",value:e,onChange:a})]}),Object(v.jsxs)("label",{className:d.a.label,children:["Number",Object(v.jsx)("input",{className:d.a.input,type:"text",name:"number",value:n,onChange:a})]}),Object(v.jsx)("button",{className:d.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),_=Object(O.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(C.addNewContact(n,a))}}}))(x),y=n(20),g=n.n(y),N=Object(O.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(C.filterContact(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(v.jsxs)("label",{children:["Find contacts by name",Object(v.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})})),w=n(15),k=n.n(w),F=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},L=Object(O.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:F(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(C.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(v.jsx)("ul",{className:k.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(v.jsxs)("li",{className:k.a.item,children:[a,": ",c,Object(v.jsx)("button",{className:k.a.button,type:"button",onClick:function(){n(e)},children:"Delete"})]},e)}))})})),S=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(_,{}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(N,{}),Object(v.jsx)(L,{})]})}}]),n}(c.Component),A=Object(O.b)(null,null)(S),D=(n(44),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(A,{})})}}]),n}(c.Component)),Q=(n(45),n(46),n(14)),T=n(2),B=Object(p.c)([],(a={},Object(j.a)(a,C.addNewContact,(function(t,e){var n=e.payload;return[].concat(Object(Q.a)(t),[n])})),Object(j.a)(a,C.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),E=Object(p.c)("",Object(j.a)({},C.filterContact,(function(t,e){return e.payload}))),J=Object(T.c)({items:B,filter:E}),z=n(21),H=n.n(z),I=n(5),M=n(22),P=n.n(M),R=[].concat(Object(Q.a)(Object(p.d)({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})),[H.a]),q={key:"contacts",storage:P.a,blacklist:["filter"]},G=Object(p.a)({reducer:{contacts:Object(I.g)(q,J)},middleware:R,devTools:!1}),K={store:G,persistor:Object(I.h)(G)},U=n(23);i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(O.a,{store:K.store,children:Object(v.jsx)(U.a,{loading:null,persistor:K.persistor,children:Object(v.jsx)(D,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__xk8dv",label:"ContactForm_label__3-rH2",button:"ContactForm_button__1kpCE",input:"ContactForm_input__1L7f2"}}},[[50,1,2]]]);
//# sourceMappingURL=main.82d5ea87.chunk.js.map