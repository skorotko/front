(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1334:function(e,t,a){"use strict";a.r(t);var n=a(30),o=a(31),r=a(34),i=a(32),c=a(33),s=a(1),l=a.n(s),d=a(1333),p=a(1330),u=a(1331),b=a(1332),m=a(411),h=a(412),f=a(413),g=a(562),v=(a(924),function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).redirectToHomePage=function(){var e=a.props,t=e.companyId,n=e.history;switch(a.props.userRole){case 2:return n.push("/dashboardrecruiter");case 4:return n.push("/candidates");case 5:return n.push("/companies/".concat(t));default:n.push("/dashboard")}},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user,a=t.avatar,n=t.name,o=t.userRole;return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.l,{className:"d-lg-none",display:"md",mobile:!0}),l.a.createElement(g.e,{onClick:this.redirectToHomePage,style:{color:"var(--white)",cursor:"pointer"}},l.a.createElement("span",{style:{fontWeight:"bold"}},"UP"),"People"),l.a.createElement(g.l,{className:"d-md-down-none",display:"lg"}),1===o&&l.a.createElement(d.a,{className:"d-md-down-none",navbar:!0},l.a.createElement(p.a,{className:"px-3"},l.a.createElement(u.a,{style:{color:"var(--white)"},href:"/"},"Dashboard"))),l.a.createElement(d.a,{className:"ml-auto",navbar:!0},l.a.createElement(p.a,{className:"d-md-down-none"},l.a.createElement(u.a,{href:"#"},l.a.createElement("i",{style:{color:"var(--white)"},className:"icon-bell"}),l.a.createElement(b.a,{pill:!0,color:"danger"},"5"))),l.a.createElement("h6",{style:{marginBottom:0}},n),l.a.createElement(g.d,{direction:"down"},l.a.createElement(m.a,{nav:!0},l.a.createElement("img",{src:a,className:"img-avatar",alt:n})),l.a.createElement(h.a,{right:!0,style:{right:"auto"}},l.a.createElement(f.a,{header:!0,tag:"div",className:"text-center"},l.a.createElement("strong",null,"Account")),l.a.createElement(f.a,{onClick:function(){return e.props.history.push("/email/inbox")}},l.a.createElement("i",{className:"fa fa-envelope-o"})," Messages"),l.a.createElement(f.a,{onClick:function(t){return e.props.onLogout(t)}},l.a.createElement("i",{className:"fa fa-lock"})," Logout")))))}}]),t}(s.Component));v.defaultProps={children:[],onLogout:function(){return null}},t.default=v},274:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach(function(t){n(e,t,a[t])})}return e}a.d(t,"a",function(){return o})},281:function(e,t,a){"use strict";var n=a(24),o=a(106),r=a(271),i=a(272),c=a(1),s=a.n(c),l=a(0),d=a.n(l),p=a(105),u=a.n(p),b=a(50),m={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:b.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(Object(i.a)(a))),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,i=e.className,c=e.close,l=e.cssModule,d=e.color,p=e.outline,m=e.size,h=e.tag,f=e.innerRef,g=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+d,O=Object(b.m)(u()(i,{close:c},c||"btn",c||v,!!m&&"btn-"+m,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===h&&(h="a");var j=c?"Close":null;return s.a.createElement(h,Object(n.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:O,ref:f,onClick:this.onClick,"aria-label":a||j}))},t}(s.a.Component);h.propTypes=m,h.defaultProps={color:"secondary",tag:"button"},t.a=h},411:function(e,t,a){"use strict";var n=a(24),o=a(106),r=a(271),i=a(272),c=a(1),s=a.n(c),l=a(0),d=a.n(l),p=a(105),u=a.n(p),b=a(308),m=a(50),h=a(281),f={caret:d.a.bool,color:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,disabled:d.a.bool,onClick:d.a.func,"aria-haspopup":d.a.bool,split:d.a.bool,tag:m.q,nav:d.a.bool},g={isOpen:d.a.bool.isRequired,toggle:d.a.func.isRequired,inNavbar:d.a.bool.isRequired},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(Object(i.a)(a))),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this.props,a=t.className,r=t.color,i=t.cssModule,c=t.caret,l=t.split,d=t.nav,p=t.tag,f=Object(o.a)(t,["className","color","cssModule","caret","split","nav","tag"]),g=f["aria-label"]||"Toggle Dropdown",v=Object(m.m)(u()(a,{"dropdown-toggle":c||l,"dropdown-toggle-split":l,"nav-link":d}),i),O=f.children||s.a.createElement("span",{className:"sr-only"},g);return d&&!p?(e="a",f.href="#"):p?e=p:(e=h.a,f.color=r,f.cssModule=i),this.context.inNavbar?s.a.createElement(e,Object(n.a)({},f,{className:v,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:O})):s.a.createElement(b.d,Object(n.a)({},f,{className:v,component:e,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:O}))},t}(s.a.Component);v.propTypes=f,v.defaultProps={"aria-haspopup":!0,color:"secondary"},v.contextTypes=g,t.a=v},412:function(e,t,a){"use strict";var n=a(24),o=a(274),r=a(106),i=a(1),c=a.n(i),s=a(0),l=a.n(s),d=a(105),p=a.n(d),u=a(308),b=a(50),m={tag:b.q,children:l.a.node.isRequired,right:l.a.bool,flip:l.a.bool,modifiers:l.a.object,className:l.a.string,cssModule:l.a.object,persist:l.a.bool},h={isOpen:l.a.bool.isRequired,direction:l.a.oneOf(["up","down","left","right"]).isRequired,inNavbar:l.a.bool.isRequired},f={flip:{enabled:!1}},g={up:"top",left:"left",right:"right",down:"bottom"},v=function(e,t){var a=e.className,i=e.cssModule,s=e.right,l=e.tag,d=e.flip,m=e.modifiers,h=e.persist,v=Object(r.a)(e,["className","cssModule","right","tag","flip","modifiers","persist"]),O=Object(b.m)(p()(a,"dropdown-menu",{"dropdown-menu-right":s,show:t.isOpen}),i),j=l;if(h||t.isOpen&&!t.inNavbar){j=u.c;var k=g[t.direction]||"bottom",y=s?"end":"start";v.placement=k+"-"+y,v.component=l,v.modifiers=d?m:Object(o.a)({},m,f)}return c.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu"},v,{"aria-hidden":!t.isOpen,className:O,"x-placement":v.placement}))};v.propTypes=m,v.defaultProps={tag:"div",flip:!0},v.contextTypes=h,t.a=v},413:function(e,t,a){"use strict";var n=a(24),o=a(106),r=a(271),i=a(272),c=a(1),s=a.n(c),l=a(0),d=a.n(l),p=a(105),u=a.n(p),b=a(50),m={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:b.q,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},h={toggle:d.a.func},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(Object(i.a)(a))),a.getTabIndex=a.getTabIndex.bind(Object(i.a)(Object(i.a)(a))),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(b.n)(this.props,["toggle"]),r=a.className,i=a.cssModule,c=a.divider,l=a.tag,d=a.header,p=a.active,m=Object(o.a)(a,["className","cssModule","divider","tag","header","active"]),h=Object(b.m)(u()(r,{disabled:m.disabled,"dropdown-item":!c&&!d,active:p,"dropdown-header":d,"dropdown-divider":c}),i);return"button"===l&&(d?l="h6":c?l="div":m.href&&(l="a")),s.a.createElement(l,Object(n.a)({type:"button"===l&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:t,className:h,onClick:this.onClick}))},t}(s.a.Component);f.propTypes=m,f.defaultProps={tag:"button",toggle:!0},f.contextTypes=h,t.a=f},924:function(e,t,a){}}]);
//# sourceMappingURL=64.71956559.chunk.js.map