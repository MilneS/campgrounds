(this.webpackJsonpcampgrounds=this.webpackJsonpcampgrounds||[]).push([[0],{19:function(e,a,t){e.exports={background:"Home_background__3HbSX",main:"Home_main__2lnS5",nav:"Home_nav__L-O1k",ul:"Home_ul__Bfg-A",link:"Home_link__3seiP",logolink:"Home_logolink__3o38C",middleContainer:"Home_middleContainer__qPjjp",title:"Home_title__3h164",message:"Home_message__3Y9k4",homeButton:"Home_homeButton__QywTi",homeFooter:"Home_homeFooter__1YuwF"}},22:function(e,a,t){e.exports={container:"Details_container__2Oj6o",img:"Details_img__2FBxc",title:"Details_title__OugfD",DescrAuthPrice:"Details_DescrAuthPrice__34iBY",location:"Details_location__3rk2w",reviewContainer:"Details_reviewContainer__3WnDJ",titleReview:"Details_titleReview__3SPSe",textareaTitle:"Details_textareaTitle__2cjpH",textarea:"Details_textarea__2nz_6",reviewCard:"Details_reviewCard__2K-Uh"}},25:function(e,a,t){e.exports={container:"CampsCard_container__e7ffi",img:"CampsCard_img__3sxmh",containerInfo:"CampsCard_containerInfo__3JXPw",title:"CampsCard_title__1tu2g",description:"CampsCard_description__38J2C",location:"CampsCard_location__19D1b",button:"CampsCard_button__1Jnu4"}},26:function(e,a,t){e.exports={navbar:"NavbarComp_navbar__2raUi",campgroundsLogo:"NavbarComp_campgroundsLogo__3Wnzz",campgroundsLink:"NavbarComp_campgroundsLink__c5qYo",loginLink:"NavbarComp_loginLink__152zl",active:"NavbarComp_active__KQnEd"}},33:function(e,a,t){e.exports={container:"NewCamp_container__1i68C",form:"NewCamp_form__2zNpO",h1:"NewCamp_h1__2iugb",button:"NewCamp_button__3TkYp"}},38:function(e,a,t){e.exports={container:"Camps_container__2FW0O",h1:"Camps_h1__7jZsE",button:"Camps_button__3Z1wg"}},39:function(e,a,t){e.exports={login:"LoginComp_login__2Nr3o",signUp:"LoginComp_signUp__3pJBo",errorMsg:"LoginComp_errorMsg__2oOW3"}},40:function(e,a,t){e.exports={signup:"SignupComp_signup__1F1p1",login:"SignupComp_login__2CWFt",errorMsg:"SignupComp_errorMsg__3DF0s"}},48:function(e,a,t){e.exports={cardContainer:"Login_cardContainer__nypt3",card:"Login_card__1SygN"}},61:function(e,a,t){},62:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(23),r=t.n(s),i=(t(61),t(62),t(8)),o=t(19),l=t.n(o),d=t(11),j=t(1),m=function(){return Object(j.jsx)("div",{className:l.a.background,children:Object(j.jsxs)("div",{className:l.a.main,children:[Object(j.jsx)("div",{className:l.a.nav,children:Object(j.jsxs)("ul",{className:l.a.ul,children:[Object(j.jsx)("div",{className:l.a.logolink,children:"CampGrounds"}),Object(j.jsx)(d.b,{to:"/campgrounds/campgrounds",className:l.a.link,children:"All campgrounds"}),Object(j.jsx)(d.b,{to:"/campgrounds/login",className:l.a.link,children:"Login"})]})}),Object(j.jsxs)("div",{className:l.a.middleContainer,children:[Object(j.jsx)("h1",{className:l.a.title,children:"CampGrounds"}),Object(j.jsx)("div",{className:l.a.message,children:Object(j.jsxs)("p",{children:["Welcome to CampGrounds! ",Object(j.jsx)("br",{}),"Jump right in and explore our many campgrounds. ",Object(j.jsx)("br",{})," Feel free to share some of your own and comment on others!"]})}),Object(j.jsx)(d.b,{to:"/campgrounds/campgrounds",children:Object(j.jsx)("button",{className:l.a.homeButton,children:"View Campgrounds"})}),Object(j.jsx)("div",{className:l.a.homeFooter,children:"\xa9 2021"})]})]})})},b=t(20),u=t.n(b),p=t(27),g=t(38),O=t.n(g),h=t(9),x=t(25),_=t.n(x),f=t(16),v=t(52),C=(t(79),v.initializeApp({apiKey:"AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",authDomain:"campgrounds-daabb.firebaseapp.com",databaseURL:"https://campgrounds-daabb-default-rtdb.firebaseio.com",projectId:"campgrounds-daabb",storageBucket:"campgrounds-daabb.appspot.com",messagingSenderId:"939628795347",appId:"1:939628795347:web:643c09cd414dfe13b2cb26",measurementId:"G-4KSK6ZMC4Y"})),N=function(e){var a=Object(n.useState)(),t=Object(h.a)(a,2),c=t[0],s=t[1],r=e.item,i=e.dataKey;return C.storage().ref().child("images/".concat(i)).getDownloadURL().then((function(e){s(e)})),Object(j.jsxs)("div",{className:_.a.container,children:[Object(j.jsx)("div",{className:_.a.containerImg,children:Object(j.jsx)("img",{src:c,alt:"",className:_.a.img})}),Object(j.jsxs)("div",{className:_.a.containerInfo,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:_.a.title,children:r.title}),Object(j.jsx)("div",{className:_.a.description,children:r.description}),Object(j.jsx)("div",{className:_.a.location,children:r.location})]}),Object(j.jsx)("div",{className:_.a.button,children:Object(j.jsx)(d.b,{to:"/campgrounds/details/".concat(i),children:Object(j.jsx)(f.a,{variant:"primary",size:"lg",type:"button",className:"mb-3",children:"View"})})})]})]})},y=t(7),w=function(){var e=Object(y.b)(),a=Object(y.c)((function(e){return e.isLoggedin})),t=Object(y.c)((function(e){return e.allCamps}));Object(n.useEffect)((function(){c()}),[]);var c=function(){var a=Object(p.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",a.next=3,fetch("https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",{method:"GET"});case 3:if(!(t=a.sent).ok){a.next=11;break}return a.next=7,t.json();case 7:n=a.sent,e({type:"setAllCamps",payload:n}),a.next=13;break;case 11:"Getting all camps failed!",console.log("Getting all camps failed!");case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:O.a.container,children:[Object(j.jsx)("h1",{className:O.a.h1,children:"All CampGrounds"}),Object(j.jsxs)("div",{className:O.a.button,children:[a&&Object(j.jsx)(d.b,{to:"/campgrounds/newcamp",children:Object(j.jsx)(f.a,{variant:"success",size:"lg",type:"button",className:"mb-3",children:"Add Campground"})}),!a&&Object(j.jsx)(d.b,{to:"/campgrounds/login",children:Object(j.jsx)(f.a,{variant:"success",size:"lg",type:"button",className:"mb-3",onClick:function(){e({type:"logginFromCampsBtn"})},children:"Add Campground"})})]}),function(){if(Object.keys(t).length)return Object.keys(t).map((function(e,a){return Object(j.jsx)(N,{item:t[e],dataKey:e},a)}))}()]})},k=t(48),L=t.n(k),S=t(13),D=t(2),F=t(39),z=t.n(F),I=t.p+"static/media/LoginPic.e44accc1.jpeg",A=t(12),T=t(6),P=function(){var e=Object(y.c)((function(e){return e.logginFromCamps})),a=Object(i.g)(),t=Object(y.b)(),c=Object(n.useState)(),s=Object(h.a)(c,2),r=s[0],o=s[1],l=Object(n.useState)(!1),d=Object(h.a)(l,2),m=d[0],b=d[1],g=Object(n.useState)({email:"",password:""}),O=Object(h.a)(g,2),x=O[0],_=O[1],v=function(e){_(Object(D.a)(Object(D.a)({},x),{},Object(S.a)({},e.target.id,e.currentTarget.value)))},C=function(){var n=Object(p.a)(u.a.mark((function n(){var c,s,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",n.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",{method:"POST",body:JSON.stringify({email:x.email,password:x.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:return c=n.sent,n.next=6,c.json();case 6:if(s=n.sent,!c.ok){n.next=14;break}return t({type:"loggedin"}),e?a.push("/campgrounds/newcamp"):(a.push("/campgrounds/campgrounds"),t({type:"logoutFromCampsBtn"})),b(!1),n.abrupt("return",s);case 14:r="Authentication failed!",s&&s.error&&s.error.message&&(r=s.error.message,o(r),b(!0));case 16:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(A.a,{style:{width:"27rem"},children:[Object(j.jsx)(A.a.Img,{variant:"top",src:I}),Object(j.jsxs)(A.a.Body,{children:[Object(j.jsx)(A.a.Title,{className:"mb-4",children:Object(j.jsx)("p",{className:z.a.login,children:"Login"})}),m&&Object(j.jsx)("p",{className:z.a.errorMsg,children:r}),Object(j.jsxs)(T.a,{children:[Object(j.jsx)(T.a.Group,{className:"mb-3",children:Object(j.jsx)(T.a.Control,{id:"email",type:"email",placeholder:"Enter email",onChange:v})}),Object(j.jsx)(T.a.Group,{className:"mb-3",children:Object(j.jsx)(T.a.Control,{id:"password",type:"password",placeholder:"Password",onChange:v})}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(f.a,{onClick:function(e){e.preventDefault(),t({type:"loginFormData",payload:x}),C()},variant:"success",size:"lg",type:"submit",className:"mb-3",children:"Login"})})]}),Object(j.jsx)("p",{className:z.a.signUp,onClick:function(e){e.preventDefault(),t({type:"signupComp"})},children:"Or sign up."})]})]})})},G=t(40),B=t.n(G),U=function(){var e=Object(i.g)(),a=Object(n.useState)({username:"",email:"",password:""}),t=Object(h.a)(a,2),c=t[0],s=t[1],r=Object(n.useState)(),o=Object(h.a)(r,2),l=o[0],d=o[1],m=Object(n.useState)(!1),b=Object(h.a)(m,2),g=b[0],O=b[1],x=Object(y.b)(),_=function(e){s(Object(D.a)(Object(D.a)({},c),{},Object(S.a)({},e.target.id,e.currentTarget.value)))},v=function(){var a=Object(p.a)(u.a.mark((function a(){var t,n,s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",a.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",{method:"POST",body:JSON.stringify({displayName:c.username,email:c.email,password:c.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:return t=a.sent,a.next=6,t.json();case 6:if(n=a.sent,!t.ok){a.next=14;break}return x({type:"loggedin"}),e.push("/campgrounds/campgrounds"),O(!1),a.abrupt("return",n);case 14:s="Authentication failed!",n&&n.error&&n.error.message&&(s=n.error.message,d(s),O(!0));case 16:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(A.a,{style:{width:"27rem"},children:[Object(j.jsx)(A.a.Img,{variant:"top",src:I}),Object(j.jsxs)(A.a.Body,{children:[Object(j.jsx)(A.a.Title,{className:"mb-4",children:Object(j.jsx)("p",{className:B.a.signup,children:"Sign up"})}),g&&Object(j.jsx)("p",{className:B.a.errorMsg,children:l}),Object(j.jsxs)(T.a,{children:[Object(j.jsx)(T.a.Group,{className:"mb-3",children:Object(j.jsx)(T.a.Control,{type:"text",id:"username",placeholder:"Username",onChange:_})}),Object(j.jsx)(T.a.Group,{className:"mb-3",children:Object(j.jsx)(T.a.Control,{type:"email",id:"email",placeholder:"Email",onChange:_})}),Object(j.jsx)(T.a.Group,{className:"mb-3",children:Object(j.jsx)(T.a.Control,{type:"password",id:"password",placeholder:"Password",onChange:_})}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(f.a,{onClick:function(e){e.preventDefault(),x({type:"signupFormData",payload:c}),v()},variant:"success",size:"lg",type:"submit",className:"mb-3",children:"Sign up"})})]}),Object(j.jsx)("p",{className:B.a.login,onClick:function(e){e.preventDefault(),x({type:"loginComp"})},children:"Or login."})]})]})})},J=function(){var e=Object(y.c)((function(e){return e.showLogin})),a=Object(y.c)((function(e){return e.showSignup}));return Object(j.jsx)("div",{className:L.a.cardContainer,children:Object(j.jsxs)("div",{className:L.a.card,children:[e&&Object(j.jsx)(P,{}),a&&Object(j.jsx)(U,{})]})})},H=t(33),M=t.n(H),R=function(){var e,a=Object(i.g)(),t=Object(y.c)((function(e){return e.loginFormData})),c=Object(n.useState)({title:"",location:"",price:"",description:""}),s=Object(h.a)(c,2),r=s[0],o=s[1],l=Object(n.useState)(),d=Object(h.a)(l,2),m=d[0],b=d[1],g=function(){var e=Object(p.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",e.next=3,fetch("https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",{method:"POST",body:JSON.stringify({title:r.title,location:r.location,price:r.price,description:r.description,author:t.email})});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n.name);case 11:"Adding new camp failed!",console.log("Adding new camp failed!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){o(Object(D.a)(Object(D.a)({},r),{},Object(S.a)({},e.target.id,e.target.value)))};return Object(j.jsxs)("div",{className:M.a.container,children:[Object(j.jsx)("h1",{className:M.a.h1,children:"New CampGround"}),Object(j.jsxs)(T.a,{className:M.a.form,children:[Object(j.jsxs)(T.a.Group,{className:"mb-3",children:[Object(j.jsx)(T.a.Label,{htmlFor:"title",children:"Title"}),Object(j.jsx)(T.a.Control,{type:"text",id:"title",onChange:O})]}),Object(j.jsxs)(T.a.Group,{className:"mb-3",children:[Object(j.jsx)(T.a.Label,{htmlFor:"location",children:"Location"}),Object(j.jsx)(T.a.Control,{type:"text",id:"location",onChange:O})]}),Object(j.jsxs)(T.a.Group,{className:"mb-3",children:[Object(j.jsx)(T.a.Label,{htmlFor:"price",children:"Campground price"}),Object(j.jsx)(T.a.Control,{type:"number",id:"price",onChange:O})]}),Object(j.jsxs)(T.a.Group,{className:"mb-4",children:[Object(j.jsx)(T.a.Label,{htmlFor:"description",children:"Description"}),Object(j.jsx)(T.a.Control,{as:"textarea",rows:3,id:"description",onChange:O})]}),Object(j.jsx)(T.a.Group,{className:"mb-4",children:Object(j.jsx)(T.a.Control,{type:"file",id:"image",onChange:function(e){if(e.target.files&&e.target.files[0]){var a=e.target.files[0];a&&b(a)}}})}),Object(j.jsx)("div",{className:M.a.button,children:Object(j.jsx)(f.a,{variant:"success",size:"lg",type:"button",className:"mb-3",onClick:function(t){t.preventDefault(),g().then((function(t){m&&m.name&&(e=C.storage().ref(),m.dataKey=t,e.child("images/".concat(m.dataKey)).put(m).then((function(){a.push("/campgrounds")})))}))},children:"Add campground"})})]})]})},K=t(26),W=t.n(K),E=t(41),Q=t(54),V=function(e){var a=Object(y.b)(),t=Object(y.c)((function(e){return e.isLoggedin})),n=function(){a({type:"logoutFromCampsBtn"})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(E.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:W.a.navbar,children:Object(j.jsxs)(Q.a,{children:[Object(j.jsx)(d.b,{to:"/campgrounds",className:W.a.campgroundsLogo,onClick:n,children:"CampGrounds"}),Object(j.jsx)(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(j.jsxs)(E.a.Collapse,{id:"responsive-navbar-nav",children:[Object(j.jsx)(d.b,{onClick:n,to:"/campgrounds/campgrounds",id:"all",className:W.a.campgroundsLink,activeClassName:W.a.active,children:"All campgrounds"}),!t&&Object(j.jsx)(d.b,{to:"/campgrounds/login",id:"login",className:W.a.loginLink,activeClassName:W.a.active,onClick:function(){a({type:"loginComp"})},children:"Login"}),t&&Object(j.jsx)(d.b,{to:"/campgrounds/login",id:"login",className:W.a.loginLink,activeClassName:W.a.active,onClick:function(){a({type:"loggedout"})},children:"Logout"})]})]})})})},Y=t(22),Z=t.n(Y),q=t(56),X=t(30),$=function(){var e=Object(i.h)(),a=Object(y.c)((function(e){return e.allCamps})),t=Object(n.useState)(),c=Object(h.a)(t,2),s=c[0],r=c[1];C.storage().ref().child("images/".concat(e.camp)).getDownloadURL().then((function(e){r(e)}));return Object(j.jsxs)("div",{className:Z.a.container,children:[function(){if(Object.keys(a).length)return Object.keys(a).map((function(t,n){if(t===e.camp){var c=a[t];return Object(j.jsx)("div",{children:Object(j.jsxs)(A.a,{style:{width:"40rem"},children:[Object(j.jsx)(A.a.Img,{variant:"top",src:s}),Object(j.jsxs)(A.a.Body,{children:[Object(j.jsx)(A.a.Title,{className:Z.a.title,children:c.title}),Object(j.jsx)(A.a.Text,{className:Z.a.DescrAuthPrice,children:c.description})]}),Object(j.jsxs)(q.a,{className:"list-group-flush",children:[Object(j.jsx)(X.a,{className:Z.a.location,children:c.location}),Object(j.jsxs)(X.a,{className:Z.a.DescrAuthPrice,children:["Submitted by ",c.author]}),Object(j.jsxs)(X.a,{className:Z.a.DescrAuthPrice,children:["$Price/night: ",c.price]})]})]})},n)}}))}(),Object(j.jsxs)("div",{className:Z.a.reviewContainer,children:[Object(j.jsx)("h1",{className:Z.a.titleReview,children:"Leave a review"}),Object(j.jsx)("p",{className:Z.a.textareaTitle,children:"Review text"}),Object(j.jsxs)(T.a,{children:[Object(j.jsx)(T.a.Group,{className:"mb-3",children:Object(j.jsx)(T.a.Control,{as:"textarea",rows:3})}),Object(j.jsx)(f.a,{variant:"success",size:"lg",type:"button",className:"mb-5",children:"Submit"})]}),Object(j.jsxs)(A.a,{className:Z.a.reviewCard,children:[Object(j.jsx)(A.a.Title,{children:"Author"}),Object(j.jsx)(A.a.Text,{children:"Review: Text"}),Object(j.jsx)("div",{className:Z.a.reviewButton,children:Object(j.jsx)(f.a,{variant:"danger",type:"button",className:"mb-1",children:"Delete"})})]})]})]})};var ee=function(){var e=Object(y.c)((function(e){return e.isLoggedin}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/campgrounds",exact:!0,children:Object(j.jsx)(m,{})}),Object(j.jsx)(V,{})]}),Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/campgrounds/campgrounds",exact:!0,children:Object(j.jsx)(w,{})}),Object(j.jsx)(i.b,{path:"/campgrounds/details/:camp",exact:!0,children:Object(j.jsx)($,{})}),Object(j.jsxs)(i.b,{path:"/campgrounds/newcamp",children:[e&&Object(j.jsx)(R,{}),!e&&Object(j.jsx)(i.a,{to:"/campgrounds/login"})]}),Object(j.jsx)(i.b,{path:"/campgrounds/login",children:Object(j.jsx)(J,{})}),Object(j.jsx)(i.b,{path:"/campgrounds/*",children:Object(j.jsx)(i.a,{to:"/campgrounds"})})]})]})},ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,81)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),s(e),r(e)}))},te=(t(77),t(55)),ne={showLogin:!0,showSignup:!1,signUpFormData:{username:"",email:"",password:""},loginFormData:{email:"",password:""},isLoggedin:!1,logginFromCamps:!1,allCamps:{},allImages:{}},ce=Object(te.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"loginComp":return Object(D.a)(Object(D.a)({},e),{},{showLogin:!0,showSignup:!1});case"signupComp":return Object(D.a)(Object(D.a)({},e),{},{showSignup:!0,showLogin:!1});case"signupFormData":return Object(D.a)(Object(D.a)({},e),{},{signUpFormData:a.payload});case"loginFormData":return Object(D.a)(Object(D.a)({},e),{},{loginFormData:a.payload});case"loggedin":return Object(D.a)(Object(D.a)({},e),{},{isLoggedin:!0});case"loggedout":return Object(D.a)(Object(D.a)({},e),{},{isLoggedin:!1});case"logginFromCampsBtn":return Object(D.a)(Object(D.a)({},e),{},{logginFromCamps:!0});case"logoutFromCampsBtn":return Object(D.a)(Object(D.a)({},e),{},{logginFromCamps:!1});case"setAllCamps":return Object(D.a)(Object(D.a)({},e),{},{allCamps:a.payload});case"setAllImages":return Object(D.a)(Object(D.a)({},e),{},{allImages:a.payload});default:return e}})),se=ce;r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y.a,{store:se,children:Object(j.jsx)(d.a,{children:Object(j.jsx)(ee,{})})})}),document.getElementById("root")),ae()}},[[78,1,2]]]);
//# sourceMappingURL=main.e48d0be8.chunk.js.map