(this["webpackJsonpprojects-showcase"]=this["webpackJsonpprojects-showcase"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(6),r=n.n(c),i=n(5),o=n(7),l=n(8),u=n(11),d=n(12),j=n(10),p=n(9),h=n.n(p),m=(n(37),n(0)),b=function(e){var t=e.eachProjectItem,n=t.name,s=t.imageUrl;return Object(m.jsxs)("li",{className:"list",children:[Object(m.jsx)("img",{alt:n,src:s}),Object(m.jsx)("p",{className:"name",children:n})]})},f=(n(39),[{id:"ALL",displayText:"All"},{id:"STATIC",displayText:"Static"},{id:"RESPONSIVE",displayText:"Responsive"},{id:"DYNAMIC",displayText:"Dynamic"},{id:"REACT",displayText:"React"}]),g="INITIAL",x="SUCCESS",O="FAILURE",v="IN_PROGRESS",w=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={activeId:f[0].id,projectsList:[],apiStatus:g},e.getProjects=Object(o.a)(Object(i.a)().mark((function t(){var n,s,a,c,r,o;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.activeId,e.setState({apiStatus:v}),s="https://apis.ccbp.in/ps/projects?category=".concat(n),a={method:"GET"},t.next=6,fetch(s,a);case 6:if(!1!==(c=t.sent).ok){t.next=15;break}return t.next=10,c.json();case 10:r=t.sent,o=r.projects.map((function(e){return{id:e.id,name:e.name,imageUrl:e.image_url}})),e.setState({projectsList:o,apiStatus:x}),t.next=16;break;case 15:e.setState({apiStatus:O});case 16:case"end":return t.stop()}}),t)}))),e.renderProjectsListView=function(){var t=e.state.projectsList;return Object(m.jsx)("ul",{className:"unordered-projcets-list",children:t.map((function(e){return Object(m.jsx)(b,{eachProjectItem:e},e.id)}))})},e.onClickFailure=function(){e.getProjects()},e.renderFailureView=function(){return Object(m.jsxs)("div",{className:"faillure-container",children:[Object(m.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png ",alt:"failure view",className:"faillure-view-img"}),Object(m.jsx)("h1",{className:"heading",children:"Oops! Something Went Wrong"}),Object(m.jsx)("p",{className:"para",children:"We cannot seem to find the page you are looking for."}),Object(m.jsx)("button",{onClick:e.onClickFailure,type:"button",className:"faillure-button",children:"Retry"})]})},e.renderLoadingView=function(){return Object(m.jsx)("div",{"data-testid":"loader",className:"products-loader-container",children:Object(m.jsx)(h.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e.onChangeDropDown=function(t){e.setState({activeId:t.target.value},e.getProjects)},e.renderAllItems=function(){switch(e.state.apiStatus){case x:return e.renderProjectsListView();case O:return e.renderFailureView();case v:return e.renderLoadingView();default:return null}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getProjects()}},{key:"render",value:function(){var e=this.state.activeId;return Object(m.jsxs)("div",{className:"bg-container",children:[Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("img",{className:"logo",src:"https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png",alt:"website logo"})}),Object(m.jsx)("select",{className:"select",onChange:this.onChangeDropDown,value:e,children:f.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.displayText},e.id)}))}),this.renderAllItems()]})}}]),n}(s.Component),S=w,y=(n(40),function(){return Object(m.jsx)(S,{})});r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.35d18ef5.chunk.js.map