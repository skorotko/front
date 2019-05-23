(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1381:function(e,t,r){"use strict";r.r(t);var n=r(108),a=r(30),c=r(31),o=r(34),u=r(32),s=r(33),i=r(109),p=r(1),l=r.n(p),h=r(1333),f=r(1330),m=r(1331),d=r(357),b=r(358),v=r(363),w=r(564),x=r(300),j=r(563),k=r(281),E=r(287),y=function(e){function t(e){var r;return Object(a.a)(this,t),(r=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,c=t.value;return r.setState(Object(n.a)({},a,c))},r.handleSubmit=function(){var e=r.state,t={email:e.email,subject:e.subject,body:e.body};Object(E.p)(t)},r.toggle=r.toggle.bind(Object(i.a)(Object(i.a)(r))),r.state={email:"",subject:"",body:"",dropdownOpen:!1},r}return Object(s.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){var e=this,t=this.state,r=t.email,n=t.subject,a=t.body;return console.log(this.props),l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("div",{className:"email-app"},l.a.createElement("nav",null,l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement(m.a,{href:"#/email/inbox"},l.a.createElement("i",{className:"fa fa-inbox"})," Inbox")),l.a.createElement(f.a,null,l.a.createElement(m.a,{href:"#"},l.a.createElement("i",{className:"fa fa-rocket"})," Sent")))),l.a.createElement("main",null,l.a.createElement("p",{className:"text-center"},"New Message"),l.a.createElement(d.a,{onSubmit:this.handleSubmit},l.a.createElement(b.a,{row:!0,className:"mb-3"},l.a.createElement(v.a,{for:"email",xs:2,sm:1},"To:"),l.a.createElement(w.a,{xs:10,sm:11},l.a.createElement(x.a,{type:"email",id:"email",name:"email",value:r,placeholder:"Type email",autoComplete:"email",onChange:this.handleInputChange}))),l.a.createElement(b.a,{row:!0,className:"mb-3"},l.a.createElement(v.a,{for:"subject",xs:2,sm:1},"Subject:"),l.a.createElement(w.a,{xs:10,sm:11},l.a.createElement(x.a,{type:"text",id:"subject",name:"subject",value:n,placeholder:"Type subject",autoComplete:"email",onChange:this.handleInputChange})))),l.a.createElement(j.a,null,l.a.createElement(w.a,{sm:11,className:"ml-auto"},l.a.createElement(b.a,{className:"mt-4"},l.a.createElement(x.a,{type:"textarea",id:"message",name:"body",value:a,rows:"12",placeholder:"Click here to reply",onChange:this.handleInputChange})),l.a.createElement(b.a,null,l.a.createElement(k.a,{type:"submit",color:"success",className:"mr-1",onClick:this.handleSubmit},"Send"),l.a.createElement(k.a,{color:"danger",className:"mr-1",onClick:function(){return e.props.history.push("/email/inbox")}},"Discard")))))))}}]),t}(p.Component);t.default=y},287:function(e,t,r){"use strict";r.d(t,"o",function(){return s}),r.d(t,"n",function(){return i}),r.d(t,"g",function(){return p}),r.d(t,"p",function(){return l}),r.d(t,"m",function(){return h}),r.d(t,"i",function(){return f}),r.d(t,"f",function(){return m}),r.d(t,"l",function(){return d}),r.d(t,"j",function(){return b}),r.d(t,"a",function(){return v}),r.d(t,"c",function(){return w}),r.d(t,"e",function(){return x}),r.d(t,"k",function(){return j}),r.d(t,"b",function(){return k}),r.d(t,"d",function(){return E}),r.d(t,"h",function(){return y});var n=r(277),a=r.n(n),c=r(278),o="http://api.uppeople.co/api",u=function(){return localStorage.getItem("token")},s=function(){var e=Object(c.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u(),e.prev=1,e.next=4,fetch("".concat(o,"/main/returnOptionsForSelects"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json());case 7:throw new Error("Error while fetching: ".concat(r.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/returnEmailTemplate"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u(),e.prev=1,e.next=4,fetch("".concat(o,"/interview/emailBox"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,fetch("".concat(o,"/interview/mailBoxSend"),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u(),e.prev=1,e.next=4,fetch("".concat(o,"/main/calendarView"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u(),e.prev=1,e.next=4,fetch("".concat(o,"/main/dashBoardAdmin"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,fetch("".concat(o,"/main/dashBoardAdmin"),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(n=e.sent,console.log(n),!n.ok){e.next=8;break}return e.abrupt("return",n.json());case 8:throw new Error("".concat(n.statusText));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u(),e.prev=1,e.next=4,fetch("".concat(o,"/main/dashBoardRecruiter"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/returnAllLinks"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(r=e.sent).ok){e.next=7;break}return e.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/addLink"),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/deleteLink/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),x=function(e,t){var r=u();return fetch("".concat(o,"/main/listAllCandUsers/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))}).then(function(e){return{candidates:e.candidates,candidatesCount:e.Count,totalPages:e.Page,perPage:e.perPage,currentPage:e.currentPage,platforms:e.platforms,companies:e.company,statuses:e.statuses,recruiter:e.recruiter}}).catch(function(e){return console.log("error in fetch: ",e)})},j=function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/returnAllPlatforms/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/add-platform"),{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/delete-platform/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,fetch("".concat(o,"/admin/returnAllLogs/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=95.722fe675.chunk.js.map