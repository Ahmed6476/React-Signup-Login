(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{135:function(e,a,t){},136:function(e,a,t){},263:function(e,a,t){},265:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),r=t(118),c=t.n(r),i=(t(135),t.p,t(136),"localhost"===window.location.hostname.split(":")[0]?"http://localhost:5001":""),l=t(24),o=t.n(l),d=t(7),j=(t(155),t.p+"static/media/Ajux_loader.6281c6f4.gif"),u=t(2);var b=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{style:{width:"65%",top:"10%",left:"20%",position:"fixed"},src:j,alt:""})})})},h=(t(95),t(43)),m=t(281),p=t(26),O=t(9),x=t(53),v=function(e,a){switch(a.type){case"USER_LOGIN":if(a.payload.name&&a.payload.email&&a.payload._id)return Object(x.a)(Object(x.a)({},e),{},{user:a.payload});console.log("invalid data in USER_LOGIN reducer");case"USER_LOGOUT":return Object(x.a)(Object(x.a)({},e),{},{user:null});default:return e}},f=Object(s.createContext)("Initial Value"),g={darkTheme:!0,user:void 0};function w(e){var a=e.children,t=Object(s.useReducer)(v,g),n=Object(O.a)(t,2),r=n[0],c=n[1];return Object(u.jsx)(f.Provider,{value:{state:r,dispatch:c},children:a})}var N=p.a({email:p.b("Enter your email").email("Enter a valid email").required("Email is required"),password:p.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var y=function(){var e=Object(d.f)(),a=Object(s.useContext)(f),t=(a.state,a.dispatch),n=Object(h.a)({validationSchema:N,initialValues:{email:"",password:""},onSubmit:function(e){console.log("values: ",e),o.a.post("".concat(i,"/api/v1/login"),{email:e.email,password:e.password},{withCredentials:!0}).then((function(e){console.log("res: ",e.data),e.data.email&&t({type:"USER_LOGIN",payload:{name:e.data.name,email:e.data.email,_id:e.data._id}})}))}});return Object(u.jsxs)("div",{className:"center",children:[Object(u.jsx)("h1",{children:"Login page"}),Object(u.jsx)("div",{className:"main_div",children:Object(u.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(u.jsxs)(m.a,{spacing:0,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{name:"email",value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email),helperText:n.touched.email&&n.errors.email}),Object(u.jsx)("span",{}),Object(u.jsx)("label",{children:"Email"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{type:"password",name:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(u.jsx)("span",{}),Object(u.jsx)("label",{children:"Password"})]})]}),Object(u.jsx)("button",{className:"button",children:"Login"}),Object(u.jsxs)("div",{class:"link",children:["I don't have an account? ",Object(u.jsx)("a",{href:"",onClick:function(){e.push("/signup")},children:"Signup"})]})]})})]})},C=p.a({name:p.b("Enter your name").required("Name is required"),address:p.b("Enter your name").required("Name is required"),email:p.b("Enter your email").email("Enter a valid email").required("Email is required"),password:p.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var S=function(){var e=Object(d.f)(),a=Object(h.a)({validationSchema:C,initialValues:{name:"",address:"",email:"",password:""},onSubmit:function(a){o.a.post("".concat(i,"/api/v1/signup"),{name:a.name,email:a.email,password:a.password,address:a.address}).then((function(t){console.log("res: ",t.data),a.email&&e.push("/")}))}});return Object(u.jsxs)("div",{className:"center",children:[Object(u.jsx)("h1",{children:"Signup page"}),Object(u.jsx)("div",{className:"main_div",children:Object(u.jsx)("form",{onSubmit:a.handleSubmit,children:Object(u.jsxs)(m.a,{spacing:0,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{name:"name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),Object(u.jsx)("span",{}),Object(u.jsx)("label",{children:"UserName"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{name:"address",value:a.values.address,onChange:a.handleChange,error:a.touched.address&&Boolean(a.errors.address),helperText:a.touched.address&&a.errors.address}),Object(u.jsx)("span",{}),Object(u.jsx)("label",{children:"Address"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(u.jsx)("span",{}),Object(u.jsx)("label",{children:"Email"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{type:"password",name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(u.jsx)("span",{}),Object(u.jsx)("label",{children:"Password"})]}),Object(u.jsx)("button",{className:"button",children:"Signup"}),Object(u.jsx)("div",{}),Object(u.jsxs)("div",{class:"link",children:["Alredy has account? ",Object(u.jsx)("a",{href:"",onClick:function(){e.push("/")},children:"Login"})]})]})})})]})},E=(t(263),t(32)),_=t(279),L=t(125),T=t(126),U=t(0);var q=function(){var e=Object(s.useContext)(f),a=(e.state,e.dispatch),t=Object(s.useState)({}),n=Object(O.a)(t,2),r=n[0],c=n[1];Object(s.useEffect)((function(){o.a.get("".concat(i,"/api/v1/profile"),{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),c(e.data)}))}),[]),Object(d.f)(),Object(h.a)({initialValues:{title:"",description:""},onSubmit:function(e){console.log("values: ",e),o.a.post("".concat(i,"/api/v1/create"),{title:e.title,description:e.description}).then((function(a){console.log(a.data);var t=e.title;localStorage.setItem("title",t)})).catch((function(e){console.log(e)}))}});var l=Object(s.useState)(!1),j=Object(O.a)(l,2),b=j[0],m=j[1],p=function(){return m(!b)};return Object(u.jsx)("div",{children:Object(u.jsxs)(U.b.Provider,{value:{color:"#fff"},children:[Object(u.jsx)("div",{className:"navbar",children:Object(u.jsx)(E.b,{to:"#",className:"menu-bars",children:Object(u.jsx)(L.a,{onClick:p})})}),Object(u.jsx)("nav",{className:b?"nav-menu active":"nav-menu",children:Object(u.jsxs)("ul",{className:"nav-menu-items",onClick:p,children:[Object(u.jsx)("li",{className:"navbar-toggle",children:Object(u.jsx)(E.b,{to:"#",className:"menu-bars",children:Object(u.jsx)(T.a,{style:{color:"white",marginLeft:"220px"}})})}),Object(u.jsxs)("li",{className:"style",children:[Object(u.jsxs)("span",{style:{color:"white",fontSize:"20px"},children:["Name: ",Object(u.jsx)("br",{})," ",r.name]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{style:{color:"white",fontSize:"20px"},children:["Email:",Object(u.jsx)("br",{})," ",r.email]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{color:"white",fontSize:"20px"},children:Object(u.jsx)(_.a,{variant:"outlined",onClick:function(){o.a.post("".concat(i,"/api/v1/logout"),{},{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),a({type:"USER_LOGOUT"})}))},children:"Logout"})})]}),");"]})})]})})};var k=function(){Object(d.f)();var e=Object(s.useContext)(f),a=e.state,t=e.dispatch;return Object(s.useEffect)((function(){return o.a.get("".concat(i,"/api/v1/profile"),{withCredentials:!0}).then((function(e){console.log("res: ",e.data),e.data.email?t({type:"USER_LOGIN",payload:{name:e.data.name,email:e.data.email,_id:e.data._id}}):t({type:"USER_LOGOUT"})})).catch((function(e){t({type:"USER_LOGOUT"})})),function(){}}),[]),Object(u.jsxs)(u.Fragment,{children:[void 0===a.user?Object(u.jsx)(d.c,{children:Object(u.jsx)(d.a,{exact:!0,path:"/",children:Object(u.jsx)(b,{})})}):null,null===a.user?Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",component:y}),Object(u.jsx)(d.a,{path:"/signup",component:S})]}):null,a.user?Object(u.jsx)(d.c,{children:Object(u.jsx)(d.a,{exact:!0,path:"/",children:Object(u.jsx)(q,{})})}):null]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,282)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{children:Object(u.jsx)(E.a,{children:Object(u.jsx)(k,{})})})}),document.getElementById("root")),P()},95:function(e,a,t){}},[[265,1,2]]]);
//# sourceMappingURL=main.ee95e7e8.chunk.js.map