(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1380:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return b});var r=n(30),a=n(31),c=n(34),o=n(32),u=n(33),i=n(1),s=n.n(i),p=n(498),l=n(563),f=n(564),h=n(408),d=n(385),v=n(287),m=[{id:"1",name:"Resume"},{id:"2",name:"Interview"},{id:"3",name:"Individual"}],b=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,u=new Array(a),i=0;i<a;i++)u[i]=arguments[i];return(n=Object(c.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(u)))).state={templates:[]},n}return Object(u.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=this;Object(v.n)().then(function(e){t.setState({templates:e})})}},{key:"render",value:function(){var t=this.state.templates,e=t.length>0&&m.map(function(e){return s.a.createElement(p.a,{tabId:e.id,key:e.id},s.a.createElement(d.a,{content:t[Number(e.id-1)].text}))});return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,null,s.a.createElement(f.a,null,s.a.createElement(h.a,{tabs:m},e))))}}]),e}(i.Component)},287:function(t,e,n){"use strict";n.d(e,"o",function(){return i}),n.d(e,"n",function(){return s}),n.d(e,"g",function(){return p}),n.d(e,"p",function(){return l}),n.d(e,"m",function(){return f}),n.d(e,"i",function(){return h}),n.d(e,"f",function(){return d}),n.d(e,"l",function(){return v}),n.d(e,"j",function(){return m}),n.d(e,"a",function(){return b}),n.d(e,"c",function(){return w}),n.d(e,"e",function(){return j}),n.d(e,"k",function(){return x}),n.d(e,"b",function(){return k}),n.d(e,"d",function(){return T}),n.d(e,"h",function(){return C});var r=n(277),a=n.n(r),c=n(278),o="http://api.uppeople.co/api",u=function(){return localStorage.getItem("token")},i=function(){var t=Object(c.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(),t.prev=1,t.next=4,fetch("".concat(o,"/main/returnOptionsForSelects"),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(n=t.sent).ok){t.next=7;break}return t.abrupt("return",n.json());case 7:throw new Error("Error while fetching: ".concat(n.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(c.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(),t.prev=1,t.next=4,fetch("".concat(o,"/admin/returnEmailTemplate"),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(n=t.sent).ok){t.next=7;break}return t.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(),t.prev=1,t.next=4,fetch("".concat(o,"/interview/emailBox"),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(n=t.sent).ok){t.next=7;break}return t.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u(),t.prev=1,t.next=4,fetch("".concat(o,"/interview/mailBoxSend"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(),t.prev=1,t.next=4,fetch("".concat(o,"/main/calendarView"),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(n=t.sent).ok){t.next=7;break}return t.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(),t.prev=1,t.next=4,fetch("".concat(o,"/main/dashBoardAdmin"),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(n=t.sent).ok){t.next=7;break}return t.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u(),t.prev=1,t.next=4,fetch("".concat(o,"/main/dashBoardAdmin"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(r=t.sent,console.log(r),!r.ok){t.next=8;break}return t.abrupt("return",r.json());case 8:throw new Error("".concat(r.statusText));case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 14:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(),t.prev=1,t.next=4,fetch("".concat(o,"/main/dashBoardRecruiter"),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(n=t.sent).ok){t.next=7;break}return t.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(),t.prev=1,t.next=4,fetch("".concat(o,"/admin/returnAllLinks"),{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}});case 4:if(!(n=t.sent).ok){t.next=7;break}return t.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u(),t.prev=1,t.next=4,fetch("".concat(o,"/admin/addLink"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u(),t.prev=1,t.next=4,fetch("".concat(o,"/admin/deleteLink/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),j=function(t,e){var n=u();return fetch("".concat(o,"/main/listAllCandUsers/").concat(t),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))}).then(function(t){return{candidates:t.candidates,candidatesCount:t.Count,totalPages:t.Page,perPage:t.perPage,currentPage:t.currentPage,platforms:t.platforms,companies:t.company,statuses:t.statuses,recruiter:t.recruiter}}).catch(function(t){return console.log("error in fetch: ",t)})},x=function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u(),t.prev=1,t.next=4,fetch("".concat(o,"/admin/returnAllPlatforms/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u(),t.prev=1,t.next=4,fetch("".concat(o,"/admin/add-platform"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u(),t.prev=1,t.next=4,fetch("".concat(o,"/admin/delete-platform/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u(),t.prev=1,t.next=4,fetch("".concat(o,"/admin/returnAllLogs/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(r=t.sent).ok){t.next=7;break}return t.abrupt("return",r.json());case 7:throw new Error("".concat(r.statusText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",console.log("error in fetch: ",t.t0));case 13:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()},385:function(t,e,n){"use strict";n.d(e,"a",function(){return x});var r=n(30),a=n(31),c=n(34),o=n(32),u=n(33),i=n(1),s=n.n(i),p=n(386),l=n(315),f=n(353),h=n(563),d=n(564),v=n(281),m=n(388),b=n.n(m),w=n(347),j=n.n(w),x=(n(389),function(t){function e(t){var n;Object(r.a)(this,e),(n=Object(c.a)(this,Object(o.a)(e).call(this,t))).onEditorStateChange=function(t){n.setState({editorState:t})},n.handleSubmit=function(){var t=n.state.editorState,e=n.props,r=e.title,a=e.onUpdate,c=e.close;if("Send details"===r)a({sendDetails:b()(Object(l.convertToRaw)(t.getCurrentContent()))});else if("About company"===r){a({about:b()(Object(l.convertToRaw)(t.getCurrentContent()))})}else if("Interview details"===r){a({interviewDetail:b()(Object(l.convertToRaw)(t.getCurrentContent()))})}else if("About candidate"===r){a({aboutOne:b()(Object(l.convertToRaw)(t.getCurrentContent()))})}else if("Description"===r){a({descriptionOne:b()(Object(l.convertToRaw)(t.getCurrentContent()))})}else if("Details"===r){a({detailsOne:b()(Object(l.convertToRaw)(t.getCurrentContent()))})}else{a({content:b()(Object(l.convertToRaw)(t.getCurrentContent()))})}c()};var a=null===t.content?"":t.content,u=j()(a);if(u){var i=l.ContentState.createFromBlockArray(u.contentBlocks),s=l.EditorState.createWithContent(i);n.state={editorState:s}}return n}return Object(u.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this.state.editorState;return s.a.createElement("div",{onSubmit:this.handleSubmit},s.a.createElement(p.Editor,{editorState:t,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.onEditorStateChange}),s.a.createElement(f.a,null,s.a.createElement(h.a,null,s.a.createElement(d.a,{xl:12},s.a.createElement(v.a,{color:"primary",onClick:this.handleSubmit},"Save")))))}}]),e}(i.Component))},408:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var r=n(30),a=n(31),c=n(34),o=n(32),u=n(33),i=n(1),s=n.n(i),p=n(1330),l=n(1331),f=n(563),h=n(564),d=n(1333),v=n(497),m=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,u=new Array(a),i=0;i<a;i++)u[i]=arguments[i];return(n=Object(c.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(u)))).state={tabs:n.props.tabs,activeTab:new Array(1).fill("1"),active:!0},n.toggle=function(t,e){var r=n.state.activeTab.slice();r[t]=e,n.setState({activeTab:r})},n}return Object(u.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this,e=this.state,n=e.activeTab,r=e.tabs,a=this.props,c=a.vacanciesCount,o=a.candidatesCount,u=a.commentsCount,i=a.interviewsCount,m=a.reviewsCount,b=a.testsCount,w=a.offersCount,j=r.map(function(e){return s.a.createElement(p.a,{key:e.id},s.a.createElement(l.a,{active:n[0]===e.id,name:e.name,onClick:function(){return t.toggle(0,e.id)}},function(t){switch(t){case"Vacancies":return"".concat(t," ").concat(c||"");case"Candidates":return"".concat(t," ").concat(o||"");case"Comments":return"".concat(t," ").concat(u||"");case"Interviews":return"".concat(t," ").concat(i||"");case"Reviews":return"".concat(t," ").concat(m||"");case"Tests":return"".concat(t," ").concat(b||"");case"Offers":return"".concat(t," ").concat(w||"");default:return t}}(e.name)))});return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(f.a,null,s.a.createElement(h.a,{xs:"12",md:"12",className:"mb-4"},s.a.createElement(d.a,{tabs:!0},j),s.a.createElement(v.a,{activeTab:n[0]},this.props.children))))}}]),e}(i.Component);m.defaultProps={vacanciesCount:null,candidatesCount:null,commentsCount:null,children:[]}}}]);
//# sourceMappingURL=84.59b6fc70.chunk.js.map