(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[13],{40:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),l=a(1);function o(){return c.a.createElement("div",{className:"dsbrd"},c.a.createElement("div",{className:"links-dsbrd"},c.a.createElement(l.b,{className:"dsLnk",to:""},"Profile"),c.a.createElement(l.b,{className:"dsLnk",to:""},"Earn"),c.a.createElement(l.b,{className:"dsLnk",to:"/Login"},"Logout")))}},57:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(9),c=a(10),l=a(12),o=a(11),s=a(0),i=a.n(s),r=a(1),m=a(40),u=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).deleteAccount=function(){fetch("http://localhost:5000/delete/".concat(e.props.match.params.id),{method:"POST",headers:{"Content-Type":"application/json"}})},e.onupdateform=function(){fetch("http://localhost:5000/update/".concat(e.props.match.params.id),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,name:e.state.name})})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onnameChange=function(t){e.setState({name:t.target.value})},e.state={name:void 0,email:void 0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/getuserdata/".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){e.setState({name:t[0].name,email:t[0].email})}))}}]),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null),i.a.createElement("div",{className:"dsbrd-cntnt"},i.a.createElement("p",{className:"title"},"Profile :"),i.a.createElement("p",{className:"title-des"},"Name : ",this.state.name),i.a.createElement("p",{className:"title-des"},"Email : ",this.state.email),i.a.createElement(r.b,{onClick:this.deleteAccount,to:"/Login",className:"title-des-btn"},"Delete Account")),i.a.createElement("form",{className:"update-form"},i.a.createElement("input",{onChange:this.onnameChange,type:"name",placeholder:"Enter new Name"}),i.a.createElement("input",{onChange:this.onEmailChange,type:"email",placeholder:"Enter new Email"}),i.a.createElement("input",{type:"submit",onClick:this.onupdateform,value:"Update Profile"})))}}]),a}(s.Component)}}]);
//# sourceMappingURL=13.d1acbde1.chunk.js.map