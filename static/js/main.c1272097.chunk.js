(this["webpackJsonpazure-reactjs"]=this["webpackJsonpazure-reactjs"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},3:function(e,t,n){e.exports={inputField:"Editor_inputField__5eP71",cardContainer:"Editor_cardContainer__1PPrd",cardInner:"Editor_cardInner__2U0c2"}},4:function(e,t,n){e.exports={flipcard:"Card_flipcard__2R_6E",flipcardinner:"Card_flipcardinner__2xSu6",flipcardfront:"Card_flipcardfront__2oaO7",flipcardback:"Card_flipcardback__2MAcl"}},54:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),o=n(22),r=n.n(o),s=(n(28),n.p,n(29),n(8)),c=n(12),l=n.n(c),d=n(23),u=n(5),p=n(6),f=n(9),h=n(7),j=n(3),b=n.n(j),x=n(13),m=n.n(x),v=n(10),C=n.n(v),w="kGC9gjzuKywAAAAAAAAAAeJaVHET9K7wPmfSQMnj0sjTsnvPzaOwD9xwCCtgLNf6",O=function(){return fetch("https://content.dropboxapi.com/2/files/download",{headers:{Authorization:"Bearer "+w,"Dropbox-API-Arg":'{"path": "/azure.json"}'}}).then((function(e){return e.json()})).then((function(e){return e}))},g=function(e,t,n){var a={question:t,answer:n},i={Authorization:"Bearer "+w,"Dropbox-API-Arg":'{"path": "/azure.json","mode": "overwrite","autorename": true,"mute": false,"strict_conflict": false}',"Content-Type":"application/octet-stream"};C.a.post("https://content.dropboxapi.com/2/files/upload",a,{headers:i}).then((function(e){return console.log(e)}))},k=function(e){var t={Authorization:"Bearer "+w,"Dropbox-API-Arg":'{"path": "/azure.json","mode": "overwrite","autorename": true,"mute": false,"strict_conflict": false}',"Content-Type":"application/octet-stream"};C.a.post("https://content.dropboxapi.com/2/files/upload",e,{headers:t}).then((function(e){return console.log(e)}))},A=n(4),_=n.n(A),y=n(0),B=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).render=function(){return Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:_.a.flipcard,children:Object(y.jsxs)("div",{className:_.a.flipcardinner,children:[Object(y.jsxs)("div",{className:_.a.flipcardfront,children:[Object(y.jsx)("h3",{children:a.props.item.question}),Object(y.jsx)("button",{onClick:function(){a.onButtonClickHandlerUpdate(a.props.index)},children:"Update"}),Object(y.jsx)("button",{onClick:function(){a.onButtonClickHandlerDelete(a.props.index)},children:"Delete"})]}),Object(y.jsxs)("div",{className:_.a.flipcardback,children:[Object(y.jsx)("p",{children:a.props.item.answer}),Object(y.jsx)("button",{onClick:function(){a.onButtonClickHandlerUpdate(a.props.index)},children:"Update"}),Object(y.jsx)("button",{onClick:function(){a.onButtonClickHandlerDelete(a.props.index)},children:"Delete"})]})]})})})},a}return Object(p.a)(n,[{key:"onButtonClickHandlerUpdate",value:function(e){g(0,"test","test")}},{key:"onButtonClickHandlerDelete",value:function(e){if(window.confirm("are you sure you want to delete?"))if("delete"==window.prompt("type delete to continue")){var t=Object(s.a)(this.state.dataList);console.log(t[e.index]),t.splice(e.index,1),this.setState({dataList:t}),k(t)}else alert("item not deleted")}}]),n}(i.a.Component),L=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n),(e=t.call(this)).handleChangeQuestion=function(t){e.setState({question:t.target.value})},e.handleChangeAnswer=function(t){e.setState({answer:t.target.value})},e.render=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:"Question"}),Object(y.jsx)(m.a,{className:b.a.inputField,innerRef:e.questionField,html:e.state.question,disabled:!1,onChange:e.handleChangeQuestion,tagName:"div"}),Object(y.jsx)("h3",{children:"Answer"}),Object(y.jsx)(m.a,{className:b.a.inputField,innerRef:e.answerField,html:e.state.answer,disabled:!1,onChange:e.handleChangeAnswer,tagName:"div"}),Object(y.jsx)("button",{onClick:function(){e.onButtonClickHandlerAdd()},children:"Submit"}),Object(y.jsxs)("div",{className:b.a.cardContainer,children:[" ",e.state.dataList.map((function(e,t){return Object(y.jsx)("div",{className:b.a.cardInner,children:Object(y.jsx)(B,{item:e,index:t})},t)}))]})]})},e.questionField=i.a.createRef(),e.answerField=i.a.createRef(),e.state={question:"",answer:"",dataList:[]};return e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=O();console.log(t),function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:n=t.sent,e.setState({dataList:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}},{key:"onButtonClickHandlerAdd",value:function(){if(""==this.state.question||""==this.state.answer)alert("please type question and answer");else{var e={question:this.state.question,answer:this.state.answer},t=this.state.dataList;t.push(e),this.setState({dataList:t}),console.log(this.state.dataList),this.setState({question:"",answer:""}),function(e){var t={Authorization:"Bearer "+w,"Dropbox-API-Arg":'{"path": "/azure.json","mode": "overwrite","autorename": true,"mute": false,"strict_conflict": false}',"Content-Type":"application/octet-stream"};C.a.post("https://content.dropboxapi.com/2/files/upload",e,{headers:t}).then((function(e){return console.log(e)}))}(this.state.dataList)}}},{key:"onButtonClickHandlerUpdate",value:function(e){g(0,"test","test")}},{key:"onButtonClickHandlerDelete",value:function(e){if(window.confirm("are you sure you want to delete?"))if("delete"==window.prompt("type delete to continue")){var t=Object(s.a)(this.state.dataList);console.log(t[e.index]),t.splice(e.index,1),this.setState({dataList:t}),k(t)}else alert("item not deleted")}}]),n}(i.a.Component);var D=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(L,{})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root")),q()}},[[54,1,2]]]);
//# sourceMappingURL=main.c1272097.chunk.js.map