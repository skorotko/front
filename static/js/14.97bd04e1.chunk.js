(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1324:function(e,t,n){},1400:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(31),o=n(34),c=n(32),i=n(33),s=n(1),u=n.n(s),l=n(51),p=n(108),f=n(914),d=n(357),h=n(563),m=n(564),v=n(279),b=n(280),y=n(358),g=n(300),k=n(353),E=n(281),w=n(386),x=n(315),j=n(347),C=n.n(j),O=n(388),T=n.n(O),S=n(288),B=(n(389),n(1324),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={selectPlatform:[],selectSeniority:[],selectCompany:[],selectLocation:[],salary:"",comment:"",link:"",selectedVacancyStatus:"",description:x.EditorState.createEmpty(),details:x.EditorState.createEmpty()},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(p.a)({},a,r))},n.handleDescriptionStateChange=function(e){n.setState({description:e})},n.handleDetailsStateChange=function(e){n.setState({details:e})},n.handlePlatformChange=function(e){n.setState({selectPlatform:e})},n.handleSeniorityChange=function(e){n.setState({selectSeniority:e})},n.handleCompanyChange=function(e){n.setState({selectCompany:e})},n.handleLocationChange=function(e){n.setState({selectLocation:e})},n.onRadioBtnClick=function(e){n.setState({selectedVacancyStatus:e})},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.salary,r=t.description,o=t.details,c=n.props.onEditVacancy,i=Number(a),s=T()(Object(x.convertToRaw)(r.getCurrentContent())),u=T()(Object(x.convertToRaw)(o.getCurrentContent()));c(Object(l.a)({},n.state,{salary:i,description:s,details:u}))},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.vacancy,a=t.options;if(this.props!==e){if(null!==n.platform){var r=a.platforms.find(function(e){return e.id===n.platform.id});this.setState({selectPlatform:r})}if(null!==n.seniority){var o=a.seniority.find(function(e){return e.id===n.seniority.id});this.setState({selectSeniority:o})}if(null!==n.company){var c=a.companies.find(function(e){return e.id===n.company.id});this.setState({selectCompany:c})}if(null!==n.location){var i=a.location.find(function(e){return e.id===n.location.id});this.setState({selectLocation:i})}var s=n.description,u=C()(s);if(u){var l=x.ContentState.createFromBlockArray(u.contentBlocks),p=x.EditorState.createWithContent(l);this.setState({description:p})}var f=n.details;if(f){var d=C()(f);if(d){var h=x.ContentState.createFromBlockArray(d.contentBlocks),m=x.EditorState.createWithContent(h);this.setState({details:m})}}var v=null!==n.salary?n.salary:"",b=null!==n.comment?n.comment:"",y=null!==n.link?n.link:"",g=n.status.id;this.setState({salary:v,comment:b,link:y,selectedVacancyStatus:g})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectPlatform,a=t.selectSeniority,r=t.selectCompany,o=t.selectLocation,c=t.salary,i=t.comment,s=t.link,l=t.selectedVacancyStatus,p=t.description,x=t.details,j=this.props,C=j.options,O=C.platforms,T=C.seniority,B=C.companies,M=C.location,A=j.vacancy.id;return u.a.createElement(d.a,{onSubmit:this.handleSubmit},u.a.createElement(h.a,null,u.a.createElement(m.a,{md:9},u.a.createElement(v.a,null,u.a.createElement(b.a,null,u.a.createElement("h6",null,"Description"),u.a.createElement(w.Editor,{editorState:p,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleDescriptionStateChange}),u.a.createElement("h6",null,"Freelancer Description"),u.a.createElement(w.Editor,{editorState:x,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleDetailsStateChange})))),u.a.createElement(m.a,{md:3},u.a.createElement(v.a,null,u.a.createElement(b.a,null,u.a.createElement(h.a,null,u.a.createElement(m.a,null,u.a.createElement(y.a,null,u.a.createElement(S.a,{value:n,options:O,placeholder:"Platform",onChange:this.handlePlatformChange})),u.a.createElement(y.a,null,u.a.createElement(S.a,{value:a,options:T,placeholder:"Seniority",onChange:this.handleSeniorityChange})),u.a.createElement(y.a,null,u.a.createElement(S.a,{value:r,options:B,placeholder:"Company",onChange:this.handleCompanyChange})),u.a.createElement(y.a,null,u.a.createElement(S.a,{value:o,options:M,placeholder:"Location",onChange:this.handleLocationChange})),u.a.createElement(y.a,{row:!0},u.a.createElement(m.a,null,u.a.createElement(g.a,{id:"salary",type:"text",name:"salary",value:c,placeholder:"Salary",onChange:this.handleInputChange}),u.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"cui-dollar icons font-lg"}))),u.a.createElement(y.a,{row:!0},u.a.createElement(m.a,null,u.a.createElement(g.a,{id:"comment",type:"textarea",name:"comment",value:i,placeholder:"Comment",onChange:this.handleInputChange}),u.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"icon-note icons font-lg"}))),u.a.createElement(y.a,{row:!0},u.a.createElement(m.a,null,u.a.createElement(g.a,{id:"link",type:"url",name:"link",value:s,placeholder:"Link",onChange:this.handleInputChange}),u.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"icon-link icons font-lg"}))),u.a.createElement(k.a,{style:{display:"flex",marginBottom:"1rem"}},u.a.createElement(E.a,{className:"btn-default",active:0===l,onClick:function(){return e.onRadioBtnClick(0)}},u.a.createElement("i",{className:"fa fa-fire"})),u.a.createElement(E.a,{className:"btn-default",active:1===l,onClick:function(){return e.onRadioBtnClick(1)}},u.a.createElement("i",{className:"fa fa-check-circle"})),u.a.createElement(E.a,{className:"btn-default",active:2===l,onClick:function(){return e.onRadioBtnClick(2)}},u.a.createElement("i",{className:"fa fa-history"})),u.a.createElement(E.a,{className:"btn-default",active:3===l,onClick:function(){return e.onRadioBtnClick(3)}},u.a.createElement("i",{className:"fa fa-ban"}))),u.a.createElement(y.a,{row:!0},u.a.createElement(m.a,null,u.a.createElement(E.a,{type:"submit",color:"primary",block:!0},"Save"))),u.a.createElement(y.a,{row:!0},u.a.createElement(m.a,null,u.a.createElement(f.a,{to:"/vacancies/".concat(A),style:{textDecoration:"none"}},u.a.createElement(E.a,{type:"button",outline:!0,color:"secondary",block:!0},"Cancel")))))))))))}}]),t}(s.Component));B.defaultProps={vacancy:{id:null,seniority:{},platform:{},company:{},location:{},status:{},salary:"",link:"",date:"",description:"",details:""}};var M=n(433),A=n(472),N=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={vacancy:{id:null,date:"",company:{},platform:{},seniority:{},status:{},location:{},salary:null,link:"",description:"",details:""}},n.editVacancy=function(e){var t=n.props.match.params.id;Object(A.d)(t,e).then(function(e){n.props.history.push("/vacancies/".concat(e.id))})},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(A.c)(t).then(function(t){e.setState({vacancy:t})})}},{key:"render",value:function(){var e=this.state.vacancy,t=this.props.options;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Edit Vacancy"),u.a.createElement(B,{options:t,vacancy:e,onEditVacancy:this.editVacancy}))}}]),t}(s.Component);t.default=Object(M.a)(N)},279:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(1),c=n.n(o),i=n(0),s=n.n(i),u=n(105),l=n.n(u),p=n(50),f={tag:p.q,inverse:s.a.bool,color:s.a.string,block:Object(p.h)(s.a.bool,'Please use the props "body"'),body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var t=e.className,n=e.cssModule,o=e.color,i=e.block,s=e.body,u=e.inverse,f=e.outline,d=e.tag,h=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),v=Object(p.m)(l()(t,"card",!!u&&"text-white",!(!i&&!s)&&"card-body",!!o&&(f?"border":"bg")+"-"+o),n);return c.a.createElement(d,Object(a.a)({},m,{className:v,ref:h}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},280:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(1),c=n.n(o),i=n(0),s=n.n(i),u=n(105),l=n.n(u),p=n(50),f={tag:p.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var t=e.className,n=e.cssModule,o=e.innerRef,i=e.tag,s=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(p.m)(l()(t,"card-body"),n);return c.a.createElement(i,Object(a.a)({},s,{className:u,ref:o}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},287:function(e,t,n){"use strict";n.d(t,"o",function(){return s}),n.d(t,"n",function(){return u}),n.d(t,"g",function(){return l}),n.d(t,"p",function(){return p}),n.d(t,"m",function(){return f}),n.d(t,"i",function(){return d}),n.d(t,"f",function(){return h}),n.d(t,"l",function(){return m}),n.d(t,"j",function(){return v}),n.d(t,"a",function(){return b}),n.d(t,"c",function(){return y}),n.d(t,"e",function(){return g}),n.d(t,"k",function(){return k}),n.d(t,"b",function(){return E}),n.d(t,"d",function(){return w}),n.d(t,"h",function(){return x});var a=n(277),r=n.n(a),o=n(278),c="http://api.uppeople.co/api",i=function(){return localStorage.getItem("token")},s=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/returnOptionsForSelects"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("Error while fetching: ".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/returnEmailTemplate"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i(),e.prev=1,e.next=4,fetch("".concat(c,"/interview/emailBox"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/interview/mailBoxSend"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/calendarView"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/dashBoardAdmin"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/dashBoardAdmin"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(a=e.sent,console.log(a),!a.ok){e.next=8;break}return e.abrupt("return",a.json());case 8:throw new Error("".concat(a.statusText));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/dashBoardRecruiter"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/returnAllLinks"),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error("".concat(n.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/addLink"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/deleteLink/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),g=function(e,t){var n=i();return fetch("".concat(c,"/main/listAllCandUsers/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))}).then(function(e){return{candidates:e.candidates,candidatesCount:e.Count,totalPages:e.Page,perPage:e.perPage,currentPage:e.currentPage,platforms:e.platforms,companies:e.company,statuses:e.statuses,recruiter:e.recruiter}}).catch(function(e){return console.log("error in fetch: ",e)})},k=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/returnAllPlatforms/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/add-platform"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/delete-platform/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/admin/returnAllLogs/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},288:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(374);t.a=function(e){var t=e.name,n=void 0===t?"select":t,a=e.defaultValue,c=e.isMulti,i=void 0!==c&&c,s=e.isDisabled,u=void 0!==s&&s,l=e.closeMenuOnSelect,p=e.inputValue,f=e.value,d=e.options,h=e.components,m=e.theme,v=e.styles,b=e.selectOption,y=e.selectProps,g=e.setValue,k=e.placeholder,E=e.onChange,w=e.onInputChange;return r.a.createElement(o.a,{name:n,defaultValue:a,isMulti:i,isDisabled:u,inputValue:p,value:f,options:d,closeMenuOnSelect:l,components:h,theme:m,styles:v,selectOption:b,selectProps:y,setValue:g,placeholder:k,className:"basic-multi-select",classNamePrefix:"select",onChange:E,onInputChange:w})}},300:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(271),c=n(272),i=n(1),s=n.n(i),u=n(0),l=n.n(u),p=n(105),f=n.n(p),d=n(50),h={children:l.a.node,type:l.a.string,size:l.a.string,bsSize:l.a.string,state:Object(d.h)(l.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:l.a.bool,invalid:l.a.bool,tag:d.q,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),static:Object(d.h)(l.a.bool,'Please use the prop "plaintext"'),plaintext:l.a.bool,addon:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(c.a)(Object(c.a)(n))),n.focus=n.focus.bind(Object(c.a)(Object(c.a)(n))),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,c=e.bsSize,i=e.state,u=e.valid,l=e.invalid,p=e.tag,h=e.addon,m=e.static,v=e.plaintext,b=e.innerRef,y=Object(r.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,k=new RegExp("\\D","g"),E=p||("select"===o||"textarea"===o?o:"input"),w="form-control";v||m?(w+="-plaintext",E=p||"input"):"file"===o?w+="-file":g&&(w=h?null:"form-check-input"),i&&"undefined"===typeof u&&"undefined"===typeof l&&("danger"===i?l=!0:"success"===i&&(u=!0)),y.size&&k.test(y.size)&&(Object(d.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=y.size,delete y.size);var x=Object(d.m)(f()(t,l&&"is-invalid",u&&"is-valid",!!c&&"form-control-"+c,w),n);return("input"===E||p&&"function"===typeof p)&&(y.type=o),!y.children||v||m||"select"===o||"string"!==typeof E||"select"===E||(Object(d.s)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete y.children),s.a.createElement(E,Object(a.a)({},y,{ref:b,className:x}))},t}(s.a.Component);m.propTypes=h,m.defaultProps={type:"text"},t.a=m},347:function(e,t,n){var a,r;"undefined"!=typeof self&&self,e.exports=(a=n(282),r=n(315),function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,o,i){var s=e.nodeName.toLowerCase();if(i){var u=i(s,e);if(u){var p=c.Entity.__create(u.type,u.mutability,u.data||{});return{chunk:(0,l.getAtomicBlockChunk)(p)}}}if("#text"===s&&"\n"!==e.textContent)return(0,l.createTextChunk)(e,t,o);if("br"===s)return{chunk:(0,l.getSoftNewlineChunk)()};if("img"===s&&e instanceof HTMLImageElement){var d={};d.src=e.getAttribute&&e.getAttribute("src")||e.src,d.alt=e.alt,d.height=e.style.height,d.width=e.style.width,e.style.float&&(d.alignment=e.style.float);var m=c.Entity.__create("IMAGE","MUTABLE",d);return{chunk:(0,l.getAtomicBlockChunk)(m)}}if("iframe"===s&&e instanceof HTMLIFrameElement){var b={};b.src=e.getAttribute&&e.getAttribute("src")||e.src,b.height=e.height,b.width=e.width;var g=c.Entity.__create("EMBEDDED_LINK","MUTABLE",b);return{chunk:(0,l.getAtomicBlockChunk)(g)}}var k=(0,f.default)(s,a),w=void 0;k&&("ul"===s||"ol"===s?(a=s,n+=1):("unordered-list-item"!==k&&"ordered-list-item"!==k&&(a="",n=-1),E?(w=(0,l.getFirstBlockChunk)(k,(0,v.default)(e)),E=!1):w=(0,l.getBlockDividerChunk)(k,n,(0,v.default)(e)))),w||(w=(0,l.getEmptyChunk)()),t=(0,h.default)(s,e,t);for(var x=e.firstChild;x;){var j=(0,y.default)(x),C=r(x,t,n,a,j||o,i),O=C.chunk;w=(0,l.joinChunks)(w,O),x=x.nextSibling}return{chunk:w}}function o(e,t){var n=e.trim().replace(k,g),a=(0,u.default)(n);return a?(E=!0,{chunk:r(a,new i.OrderedSet,-1,"",void 0,t).chunk}):null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o(e,t);if(n){var a=n.chunk,r=new i.OrderedMap({});a.entities&&a.entities.forEach(function(e){e&&(r=r.set(e,c.Entity.__get(e)))});var s=0;return{contentBlocks:a.text.split("\r").map(function(e,t){var n=s+e.length,r=a&&a.inlines.slice(s,n),o=a&&a.entities.slice(s,n),u=new i.List(r.map(function(e,t){var n={style:e,entity:null};return o[t]&&(n.entity=o[t]),c.CharacterMetadata.create(n)}));return s=n,new c.ContentBlock({key:(0,c.genKey)(),type:a&&a.blocks[t]&&a.blocks[t].type||"unstyled",depth:a&&a.blocks[t]&&a.blocks[t].depth,data:a&&a.blocks[t]&&a.blocks[t].data||new i.Map({}),text:e,characterList:u})}),entityMap:r}}return null};var c=n(1),i=n(0),s=n(4),u=a(s),l=n(5),p=n(6),f=a(p),d=n(7),h=a(d),m=n(8),v=a(m),b=n(9),y=a(b),g=" ",k=new RegExp("&nbsp;","g"),E=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.joinChunks=t.getAtomicBlockChunk=t.getBlockDividerChunk=t.getFirstBlockChunk=t.getEmptyChunk=t.getSoftNewlineChunk=t.createTextChunk=t.getWhitespaceChunk=void 0;var a=n(0),r=t.getWhitespaceChunk=function(e){return{text:" ",inlines:[new a.OrderedSet],entities:[e],blocks:[]}};t.createTextChunk=function(e,t,n){var a=e.textContent;return""===a.trim()?{chunk:r(n)}:{chunk:{text:a,inlines:Array(a.length).fill(t),entities:Array(a.length).fill(n),blocks:[]}}},t.getSoftNewlineChunk=function(){return{text:"\n",inlines:[new a.OrderedSet],entities:new Array(1),blocks:[]}},t.getEmptyChunk=function(){return{text:"",inlines:[],entities:[],blocks:[]}},t.getFirstBlockChunk=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new a.Map({})}]}},t.getBlockDividerChunk=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new a.Map({})}]}},t.getAtomicBlockChunk=function(e){return{text:"\r ",inlines:[new a.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new a.Map({})}]}},t.joinChunks=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=r.filter(function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&n.aliasedElements.indexOf(e)>-1}).keySeq().toSet().toArray();if(1===n.length)return n[0]};var a=n(0),r=new a.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=a[e],o=void 0;if(r)o=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var c=t;o=(o=n).withMutations(function(e){var t=c.style.color,n=c.style.backgroundColor,a=c.style.fontSize,r=c.style.fontFamily.replace(/^"|"$/g,"");t&&e.add("color-"+t.replace(/ /g,"")),n&&e.add("bgcolor-"+n.replace(/ /g,"")),a&&e.add("fontsize-"+a.replace(/px$/g,"")),r&&e.add("fontfamily-"+r)}).toOrderedSet()}return o};var a={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e.style.textAlign)return new a.Map({"text-align":e.style.textAlign})};var a=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1);t.default=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,t=a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,t=a.Entity.__create("LINK","MUTABLE",n))}return t}}]))},353:function(e,t,n){"use strict";var a=n(24),r=n(106),o=n(1),c=n.n(o),i=n(0),s=n.n(i),u=n(105),l=n.n(u),p=n(50),f={tag:p.q,"aria-label":s.a.string,className:s.a.string,cssModule:s.a.object,role:s.a.string,size:s.a.string,vertical:s.a.bool},d=function(e){var t=e.className,n=e.cssModule,o=e.size,i=e.vertical,s=e.tag,u=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),f=Object(p.m)(l()(t,!!o&&"btn-group-"+o,i?"btn-group-vertical":"btn-group"),n);return c.a.createElement(s,Object(a.a)({},u,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div",role:"group"},t.a=d},433:function(e,t,n){"use strict";var a=n(51),r=n(30),o=n(31),c=n(34),i=n(32),s=n(33),u=n(1),l=n.n(u),p=n(287);t.a=function(e){return function(t){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(o)))).state={platforms:[],seniority:[],companies:[],location:[]},t}return Object(s.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(p.o)().then(function(t){var n={platforms:t.platforms,seniority:t.seniorities,companies:t.companies,location:t.location};e.setState(Object(a.a)({},n))})}},{key:"render",value:function(){return l.a.createElement(e,Object.assign({options:this.state},this.props))}}]),n}(u.Component)}},472:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return p});var a=n(277),r=n.n(a),o=n(278),c="http://api.uppeople.co/api",i=function(){return localStorage.getItem("token")},s=function(e){var t=i();return fetch("".concat(c,"/main/viewVacancy/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then(function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))}).then(function(e){var t=e[0];return{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}}).catch(function(e){return console.log("error in fetch: ",e)})},u=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/addNewVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),l=function(e,t){var n=i();return fetch("".concat(c,"/main/editVacancy/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))}).then(function(e){var t=e[0];return{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}}).catch(function(e){return console.log("error in fetch: ",e)})},p=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(),e.prev=1,e.next=4,fetch("".concat(c,"/main/deleteVacancy/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=14.97bd04e1.chunk.js.map