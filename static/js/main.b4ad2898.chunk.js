(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{112:function(e,t,n){"use strict";var o=n(51),a=n(30),r=n(31),c=n(34),u=n(32),l=n(33),i=n(1),s=n.n(i),d="http://api.uppeople.co/api",h=function(e){return fetch("".concat(d,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():"".concat(e.statusText)}).then(function(e){return console.log(e),e}).catch(function(e){return console.log("[userSignIn error]: ",e)})},m=function(e){return console.log(e),fetch("".concat(d,"/signup/logout"),{method:"GET",headers:{Authorization:"Bearer "+e}}).then(function(e){return e.ok?e.json():"".concat(e.statusText)}).then(function(e){return e}).catch(function(e){return console.log(e)})};n.d(t,"a",function(){return f}),n.d(t,"b",function(){return g});var f=Object(i.createContext)({user:{id:null,role:null,companyId:null,name:"",email:"",avatar:"",phone:""},authorized:!1,authError:null,token:null,signIn:function(){return null},signOut:function(){return null}}),p={user:{id:null,role:null,companyId:null,name:"",email:"",avatar:"",phone:""},authorized:!1,authError:null,token:null},g=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state=Object(o.a)({},p),n.signIn=function(e){h(e).then(function(e){if("Unauthorized"!==e&&void 0!==e.access_token){localStorage.setItem("token",e.access_token);var t={id:e.user.id,name:e.user.name,email:e.user.email,avatar:e.user.image,phone:e.user.tel,role:e.user.role_id,companyId:e.user.company_id};localStorage.setItem("user",JSON.stringify(t)),n.setState({user:t,authorized:!0,authError:null,token:e.access_token})}else n.setState({authError:e},function(){return console.log(n.state.authError)})})},n.signOut=function(){var e=localStorage.getItem("token");m(e),localStorage.removeItem("user"),localStorage.removeItem("token"),n.resetState()},n.resetState=function(){n.setState(Object(o.a)({},p))},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=Object(o.a)({},this.state,{signIn:this.signIn,signOut:this.signOut});return s.a.createElement(f.Provider,{value:e},this.props.children)}}]),t}(i.Component);g.Consumer=f.Consumer},159:function(e,t,n){"use strict";(function(e){var o=n(30),a=n(31),r=n(34),c=n(32),u=n(33),l=n(1),i=n.n(l),s=n(261),d=n(262),h=n(49),m=n(160),f=n(41),p=n.n(f),g=n(260),b=n(71),v=(n(255),function(){return i.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},i.a.createElement(g.a,{color:"info",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}))}),E=p()({loader:function(){return Promise.all([n.e(30),n.e(97)]).then(n.bind(null,270))},loading:v}),O=p()({loader:function(){return n.e(37).then(n.bind(null,266))},loading:v}),j=p()({loader:function(){return n.e(44).then(n.bind(null,267))},loading:v}),w=p()({loader:function(){return n.e(51).then(n.bind(null,268))},loading:v}),y=p()({loader:function(){return n.e(52).then(n.bind(null,269))},loading:v}),k=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return i.a.createElement(s.a,null,i.a.createElement(d.a,null,i.a.createElement(h.a,{exact:!0,path:"/login",name:"Login Page",render:function(e){return i.a.createElement(O,e)}}),i.a.createElement(h.a,{exact:!0,path:"/register",name:"Register Page",component:j}),i.a.createElement(h.a,{exact:!0,path:"/404",name:"Page 404",component:w}),i.a.createElement(h.a,{exact:!0,path:"/500",name:"Page 500",component:y}),i.a.createElement(b.c,null,i.a.createElement(b.b,null),i.a.createElement(h.a,{path:"/",name:"Home",render:function(e){return i.a.createElement(E,e)}}))))}}]),t}(l.Component);t.a=Object(m.hot)(e)(k)}).call(this,n(161)(e))},164:function(e,t,n){e.exports=n(259)},255:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);n(165),n(194),n(195),n(224),n(228),n(230),n(241);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var o=n(1),a=n.n(o),r=n(107),c=n.n(r),u=n(112),l=n(159);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(258);c.a.render(a.a.createElement(u.b,null,a.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return h}),n.d(t,"c",function(){return m});var o=n(30),a=n(31),r=n(34),c=n(32),u=n(33),l=n(1),i=n.n(l),s=Object(l.createContext)({component:null,props:{},showModal:function(){},hideModal:function(){}}),d=s.Consumer,h=function(){return i.a.createElement(d,null,function(e){var t=e.component,n=e.props,o=e.hideModal;return t&&i.a.createElement(t,Object.assign({},n,{onRequestClose:o}))})},m=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).showModal=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.setState({component:e,props:t})},n.hideModal=function(){return n.setState({component:null,props:{}})},n.state={component:null,props:{},showModal:n.showModal,hideModal:n.hideModal},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return i.a.createElement(s.Provider,{value:this.state},this.props.children)}}]),t}(l.Component)}},[[164,19,20]]]);
//# sourceMappingURL=main.b4ad2898.chunk.js.map