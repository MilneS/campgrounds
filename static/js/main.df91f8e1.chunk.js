(this.webpackJsonpcampgrounds=this.webpackJsonpcampgrounds||[]).push([[0],{19:function(e,t,a){e.exports={background:"Home_background__3HbSX",main:"Home_main__2lnS5",nav:"Home_nav__L-O1k",ul:"Home_ul__Bfg-A",link:"Home_link__3seiP",logolink:"Home_logolink__3o38C",middleContainer:"Home_middleContainer__qPjjp",title:"Home_title__3h164",message:"Home_message__3Y9k4",homeButton:"Home_homeButton__QywTi",homeFooter:"Home_homeFooter__1YuwF"}},22:function(e,t,a){e.exports={container:"Details_container__2Oj6o",img:"Details_img__2FBxc",title:"Details_title__OugfD",DescrAuthPrice:"Details_DescrAuthPrice__34iBY",location:"Details_location__3rk2w",reviewContainer:"Details_reviewContainer__3WnDJ",titleReview:"Details_titleReview__3SPSe",textareaTitle:"Details_textareaTitle__2cjpH",textarea:"Details_textarea__2nz_6",reviewCard:"Details_reviewCard__2K-Uh"}},25:function(e,t,a){e.exports={container:"CampsCard_container__e7ffi",img:"CampsCard_img__3sxmh",containerInfo:"CampsCard_containerInfo__3JXPw",title:"CampsCard_title__1tu2g",description:"CampsCard_description__38J2C",location:"CampsCard_location__19D1b",button:"CampsCard_button__1Jnu4"}},26:function(e,t,a){e.exports={navbar:"NavbarComp_navbar__2raUi",campgroundsLogo:"NavbarComp_campgroundsLogo__3Wnzz",campgroundsLink:"NavbarComp_campgroundsLink__c5qYo",loginLink:"NavbarComp_loginLink__152zl",active:"NavbarComp_active__KQnEd"}},33:function(e,t,a){e.exports={container:"NewCamp_container__1i68C",form:"NewCamp_form__2zNpO",h1:"NewCamp_h1__2iugb",button:"NewCamp_button__3TkYp"}},38:function(e,t,a){e.exports={container:"Camps_container__2FW0O",h1:"Camps_h1__7jZsE",button:"Camps_button__3Z1wg"}},39:function(e,t,a){e.exports={login:"LoginComp_login__2Nr3o",signUp:"LoginComp_signUp__3pJBo",errorMsg:"LoginComp_errorMsg__2oOW3"}},40:function(e,t,a){e.exports={signup:"SignupComp_signup__1F1p1",login:"SignupComp_login__2CWFt",errorMsg:"SignupComp_errorMsg__3DF0s"}},48:function(e,t,a){e.exports={cardContainer:"Login_cardContainer__nypt3",card:"Login_card__1SygN"}},61:function(e,t,a){},62:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(23),r=a.n(s),i=(a(61),a(62),a(8)),o=a(19),l=a.n(o),j=a(11),d=a(1),b=function(){return Object(d.jsx)("div",{className:l.a.background,children:Object(d.jsxs)("div",{className:l.a.main,children:[Object(d.jsx)("div",{className:l.a.nav,children:Object(d.jsxs)("ul",{className:l.a.ul,children:[Object(d.jsx)("div",{className:l.a.logolink,children:"CampGrounds"}),Object(d.jsx)(j.b,{to:"/campgrounds",className:l.a.link,children:"All campgrounds"}),Object(d.jsx)(j.b,{to:"/login",className:l.a.link,children:"Login"})]})}),Object(d.jsxs)("div",{className:l.a.middleContainer,children:[Object(d.jsx)("h1",{className:l.a.title,children:"CampGrounds"}),Object(d.jsx)("div",{className:l.a.message,children:Object(d.jsxs)("p",{children:["Welcome to CampGrounds! ",Object(d.jsx)("br",{}),"Jump right in and explore our many campgrounds. ",Object(d.jsx)("br",{})," Feel free to share some of your own and comment on others!"]})}),Object(d.jsx)(j.b,{to:"/campgrounds",children:Object(d.jsx)("button",{className:l.a.homeButton,children:"View Campgrounds"})}),Object(d.jsx)("div",{className:l.a.homeFooter,children:"\xa9 2021"})]})]})})},m=a(20),u=a.n(m),p=a(27),g=a(38),O=a.n(g),h=a(9),x=a(25),_=a.n(x),f=a(16),v=a(52),C=(a(79),v.initializeApp({apiKey:"AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",authDomain:"campgrounds-daabb.firebaseapp.com",databaseURL:"https://campgrounds-daabb-default-rtdb.firebaseio.com",projectId:"campgrounds-daabb",storageBucket:"campgrounds-daabb.appspot.com",messagingSenderId:"939628795347",appId:"1:939628795347:web:643c09cd414dfe13b2cb26",measurementId:"G-4KSK6ZMC4Y"})),N=function(e){var t=Object(n.useState)(),a=Object(h.a)(t,2),c=a[0],s=a[1],r=e.item,i=e.dataKey;return C.storage().ref().child("images/".concat(i)).getDownloadURL().then((function(e){s(e)})),Object(d.jsxs)("div",{className:_.a.container,children:[Object(d.jsx)("div",{className:_.a.containerImg,children:Object(d.jsx)("img",{src:c,alt:"",className:_.a.img})}),Object(d.jsxs)("div",{className:_.a.containerInfo,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:_.a.title,children:r.title}),Object(d.jsx)("div",{className:_.a.description,children:r.description}),Object(d.jsx)("div",{className:_.a.location,children:r.location})]}),Object(d.jsx)("div",{className:_.a.button,children:Object(d.jsx)(j.b,{to:"/details/".concat(i),children:Object(d.jsx)(f.a,{variant:"primary",size:"lg",type:"button",className:"mb-3",children:"View"})})})]})]})},y=a(7),w=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.isLoggedin})),a=Object(y.c)((function(e){return e.allCamps}));Object(n.useEffect)((function(){c()}),[]);var c=function(){var t=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",t.next=3,fetch("https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",{method:"GET"});case 3:if(!(a=t.sent).ok){t.next=11;break}return t.next=7,a.json();case 7:n=t.sent,e({type:"setAllCamps",payload:n}),t.next=13;break;case 11:"Getting all camps failed!",console.log("Getting all camps failed!");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:O.a.container,children:[Object(d.jsx)("h1",{className:O.a.h1,children:"All CampGrounds"}),Object(d.jsxs)("div",{className:O.a.button,children:[t&&Object(d.jsx)(j.b,{to:"/newcamp",children:Object(d.jsx)(f.a,{variant:"success",size:"lg",type:"button",className:"mb-3",children:"Add Campground"})}),!t&&Object(d.jsx)(j.b,{to:"/login",children:Object(d.jsx)(f.a,{variant:"success",size:"lg",type:"button",className:"mb-3",onClick:function(){e({type:"logginFromCampsBtn"})},children:"Add Campground"})})]}),function(){if(Object.keys(a).length)return Object.keys(a).map((function(e,t){return Object(d.jsx)(N,{item:a[e],dataKey:e},t)}))}()]})},k=a(48),L=a.n(k),S=a(13),D=a(2),F=a(39),z=a.n(F),I=a.p+"static/media/LoginPic.e44accc1.jpeg",A=a(12),T=a(6),P=function(){var e=Object(y.c)((function(e){return e.logginFromCamps})),t=Object(i.g)(),a=Object(y.b)(),c=Object(n.useState)(),s=Object(h.a)(c,2),r=s[0],o=s[1],l=Object(n.useState)(!1),j=Object(h.a)(l,2),b=j[0],m=j[1],g=Object(n.useState)({email:"",password:""}),O=Object(h.a)(g,2),x=O[0],_=O[1],v=function(e){_(Object(D.a)(Object(D.a)({},x),{},Object(S.a)({},e.target.id,e.currentTarget.value)))},C=function(){var n=Object(p.a)(u.a.mark((function n(){var c,s,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",n.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",{method:"POST",body:JSON.stringify({email:x.email,password:x.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:return c=n.sent,n.next=6,c.json();case 6:if(s=n.sent,!c.ok){n.next=14;break}return a({type:"loggedin"}),e?t.push("/newcamp"):(t.push("/campgrounds"),a({type:"logoutFromCampsBtn"})),m(!1),n.abrupt("return",s);case 14:r="Authentication failed!",s&&s.error&&s.error.message&&(r=s.error.message,o(r),m(!0));case 16:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(A.a,{style:{width:"27rem"},children:[Object(d.jsx)(A.a.Img,{variant:"top",src:I}),Object(d.jsxs)(A.a.Body,{children:[Object(d.jsx)(A.a.Title,{className:"mb-4",children:Object(d.jsx)("p",{className:z.a.login,children:"Login"})}),b&&Object(d.jsx)("p",{className:z.a.errorMsg,children:r}),Object(d.jsxs)(T.a,{children:[Object(d.jsx)(T.a.Group,{className:"mb-3",children:Object(d.jsx)(T.a.Control,{id:"email",type:"email",placeholder:"Enter email",onChange:v})}),Object(d.jsx)(T.a.Group,{className:"mb-3",children:Object(d.jsx)(T.a.Control,{id:"password",type:"password",placeholder:"Password",onChange:v})}),Object(d.jsx)("div",{className:"d-grid gap-2",children:Object(d.jsx)(f.a,{onClick:function(e){e.preventDefault(),a({type:"loginFormData",payload:x}),C()},variant:"success",size:"lg",type:"submit",className:"mb-3",children:"Login"})})]}),Object(d.jsx)("p",{className:z.a.signUp,onClick:function(e){e.preventDefault(),a({type:"signupComp"})},children:"Or sign up."})]})]})})},G=a(40),B=a.n(G),U=function(){var e=Object(i.g)(),t=Object(n.useState)({username:"",email:"",password:""}),a=Object(h.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(),o=Object(h.a)(r,2),l=o[0],j=o[1],b=Object(n.useState)(!1),m=Object(h.a)(b,2),g=m[0],O=m[1],x=Object(y.b)(),_=function(e){s(Object(D.a)(Object(D.a)({},c),{},Object(S.a)({},e.target.id,e.currentTarget.value)))},v=function(){var t=Object(p.a)(u.a.mark((function t(){var a,n,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",t.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",{method:"POST",body:JSON.stringify({displayName:c.username,email:c.email,password:c.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:if(n=t.sent,!a.ok){t.next=14;break}return x({type:"loggedin"}),e.push("/campgrounds"),O(!1),t.abrupt("return",n);case 14:s="Authentication failed!",n&&n.error&&n.error.message&&(s=n.error.message,j(s),O(!0));case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(A.a,{style:{width:"27rem"},children:[Object(d.jsx)(A.a.Img,{variant:"top",src:I}),Object(d.jsxs)(A.a.Body,{children:[Object(d.jsx)(A.a.Title,{className:"mb-4",children:Object(d.jsx)("p",{className:B.a.signup,children:"Sign up"})}),g&&Object(d.jsx)("p",{className:B.a.errorMsg,children:l}),Object(d.jsxs)(T.a,{children:[Object(d.jsx)(T.a.Group,{className:"mb-3",children:Object(d.jsx)(T.a.Control,{type:"text",id:"username",placeholder:"Username",onChange:_})}),Object(d.jsx)(T.a.Group,{className:"mb-3",children:Object(d.jsx)(T.a.Control,{type:"email",id:"email",placeholder:"Email",onChange:_})}),Object(d.jsx)(T.a.Group,{className:"mb-3",children:Object(d.jsx)(T.a.Control,{type:"password",id:"password",placeholder:"Password",onChange:_})}),Object(d.jsx)("div",{className:"d-grid gap-2",children:Object(d.jsx)(f.a,{onClick:function(e){e.preventDefault(),x({type:"signupFormData",payload:c}),v()},variant:"success",size:"lg",type:"submit",className:"mb-3",children:"Sign up"})})]}),Object(d.jsx)("p",{className:B.a.login,onClick:function(e){e.preventDefault(),x({type:"loginComp"})},children:"Or login."})]})]})})},J=function(){var e=Object(y.c)((function(e){return e.showLogin})),t=Object(y.c)((function(e){return e.showSignup}));return Object(d.jsx)("div",{className:L.a.cardContainer,children:Object(d.jsxs)("div",{className:L.a.card,children:[e&&Object(d.jsx)(P,{}),t&&Object(d.jsx)(U,{})]})})},H=a(33),M=a.n(H),R=function(){var e,t=Object(i.g)(),a=Object(y.c)((function(e){return e.loginFormData})),c=Object(n.useState)({title:"",location:"",price:"",description:""}),s=Object(h.a)(c,2),r=s[0],o=s[1],l=Object(n.useState)(),j=Object(h.a)(l,2),b=j[0],m=j[1],g=function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",e.next=3,fetch("https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",{method:"POST",body:JSON.stringify({title:r.title,location:r.location,price:r.price,description:r.description,author:a.email})});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.name);case 11:"Adding new camp failed!",console.log("Adding new camp failed!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){o(Object(D.a)(Object(D.a)({},r),{},Object(S.a)({},e.target.id,e.target.value)))};return Object(d.jsxs)("div",{className:M.a.container,children:[Object(d.jsx)("h1",{className:M.a.h1,children:"New CampGround"}),Object(d.jsxs)(T.a,{className:M.a.form,children:[Object(d.jsxs)(T.a.Group,{className:"mb-3",children:[Object(d.jsx)(T.a.Label,{htmlFor:"title",children:"Title"}),Object(d.jsx)(T.a.Control,{type:"text",id:"title",onChange:O})]}),Object(d.jsxs)(T.a.Group,{className:"mb-3",children:[Object(d.jsx)(T.a.Label,{htmlFor:"location",children:"Location"}),Object(d.jsx)(T.a.Control,{type:"text",id:"location",onChange:O})]}),Object(d.jsxs)(T.a.Group,{className:"mb-3",children:[Object(d.jsx)(T.a.Label,{htmlFor:"price",children:"Campground price"}),Object(d.jsx)(T.a.Control,{type:"number",id:"price",onChange:O})]}),Object(d.jsxs)(T.a.Group,{className:"mb-4",children:[Object(d.jsx)(T.a.Label,{htmlFor:"description",children:"Description"}),Object(d.jsx)(T.a.Control,{as:"textarea",rows:3,id:"description",onChange:O})]}),Object(d.jsx)(T.a.Group,{className:"mb-4",children:Object(d.jsx)(T.a.Control,{type:"file",id:"image",onChange:function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];t&&m(t)}}})}),Object(d.jsx)("div",{className:M.a.button,children:Object(d.jsx)(f.a,{variant:"success",size:"lg",type:"button",className:"mb-3",onClick:function(a){a.preventDefault(),g().then((function(a){b&&b.name&&(e=C.storage().ref(),b.dataKey=a,e.child("images/".concat(b.dataKey)).put(b).then((function(){t.push("/campgrounds")})))}))},children:"Add campground"})})]})]})},K=a(26),W=a.n(K),E=a(41),Q=a(54),V=function(e){var t=Object(y.b)(),a=Object(y.c)((function(e){return e.isLoggedin})),n=function(){t({type:"logoutFromCampsBtn"})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(E.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:W.a.navbar,children:Object(d.jsxs)(Q.a,{children:[Object(d.jsx)(j.b,{to:"/",className:W.a.campgroundsLogo,onClick:n,children:"CampGrounds"}),Object(d.jsx)(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(E.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(j.b,{onClick:n,to:"/campgrounds",id:"all",className:W.a.campgroundsLink,activeClassName:W.a.active,children:"All campgrounds"}),!a&&Object(d.jsx)(j.b,{to:"/login",id:"login",className:W.a.loginLink,activeClassName:W.a.active,onClick:function(){t({type:"loginComp"})},children:"Login"}),a&&Object(d.jsx)(j.b,{to:"/login",id:"login",className:W.a.loginLink,activeClassName:W.a.active,onClick:function(){t({type:"loggedout"})},children:"Logout"})]})]})})})},Y=a(22),Z=a.n(Y),q=a(56),X=a(30),$=function(){var e=Object(i.h)(),t=Object(y.c)((function(e){return e.allCamps})),a=Object(n.useState)(),c=Object(h.a)(a,2),s=c[0],r=c[1];C.storage().ref().child("images/".concat(e.camp)).getDownloadURL().then((function(e){r(e)}));return Object(d.jsxs)("div",{className:Z.a.container,children:[function(){if(Object.keys(t).length)return Object.keys(t).map((function(a,n){if(a===e.camp){var c=t[a];return Object(d.jsx)("div",{children:Object(d.jsxs)(A.a,{style:{width:"40rem"},children:[Object(d.jsx)(A.a.Img,{variant:"top",src:s}),Object(d.jsxs)(A.a.Body,{children:[Object(d.jsx)(A.a.Title,{className:Z.a.title,children:c.title}),Object(d.jsx)(A.a.Text,{className:Z.a.DescrAuthPrice,children:c.description})]}),Object(d.jsxs)(q.a,{className:"list-group-flush",children:[Object(d.jsx)(X.a,{className:Z.a.location,children:c.location}),Object(d.jsxs)(X.a,{className:Z.a.DescrAuthPrice,children:["Submitted by ",c.author]}),Object(d.jsxs)(X.a,{className:Z.a.DescrAuthPrice,children:["$Price/night: ",c.price]})]})]})},n)}}))}(),Object(d.jsxs)("div",{className:Z.a.reviewContainer,children:[Object(d.jsx)("h1",{className:Z.a.titleReview,children:"Leave a review"}),Object(d.jsx)("p",{className:Z.a.textareaTitle,children:"Review text"}),Object(d.jsxs)(T.a,{children:[Object(d.jsx)(T.a.Group,{className:"mb-3",children:Object(d.jsx)(T.a.Control,{as:"textarea",rows:3})}),Object(d.jsx)(f.a,{variant:"success",size:"lg",type:"button",className:"mb-5",children:"Submit"})]}),Object(d.jsxs)(A.a,{className:Z.a.reviewCard,children:[Object(d.jsx)(A.a.Title,{children:"Author"}),Object(d.jsx)(A.a.Text,{children:"Review: Text"}),Object(d.jsx)("div",{className:Z.a.reviewButton,children:Object(d.jsx)(f.a,{variant:"danger",type:"button",className:"mb-1",children:"Delete"})})]})]})]})};var ee=function(){var e=Object(y.c)((function(e){return e.isLoggedin}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",exact:!0,children:Object(d.jsx)(b,{})}),Object(d.jsx)(V,{})]}),Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/campgrounds",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(i.b,{path:"/details/:camp",exact:!0,children:Object(d.jsx)($,{})}),Object(d.jsxs)(i.b,{path:"/newcamp",children:[e&&Object(d.jsx)(R,{}),!e&&Object(d.jsx)(i.a,{to:"/login"})]}),Object(d.jsx)(i.b,{path:"/login",children:Object(d.jsx)(J,{})}),Object(d.jsx)(i.b,{path:"/*",children:Object(d.jsx)(i.a,{to:"/"})})]})]})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},ae=(a(77),a(55)),ne={showLogin:!0,showSignup:!1,signUpFormData:{username:"",email:"",password:""},loginFormData:{email:"",password:""},isLoggedin:!1,logginFromCamps:!1,allCamps:{},allImages:{}},ce=Object(ae.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loginComp":return Object(D.a)(Object(D.a)({},e),{},{showLogin:!0,showSignup:!1});case"signupComp":return Object(D.a)(Object(D.a)({},e),{},{showSignup:!0,showLogin:!1});case"signupFormData":return Object(D.a)(Object(D.a)({},e),{},{signUpFormData:t.payload});case"loginFormData":return Object(D.a)(Object(D.a)({},e),{},{loginFormData:t.payload});case"loggedin":return Object(D.a)(Object(D.a)({},e),{},{isLoggedin:!0});case"loggedout":return Object(D.a)(Object(D.a)({},e),{},{isLoggedin:!1});case"logginFromCampsBtn":return Object(D.a)(Object(D.a)({},e),{},{logginFromCamps:!0});case"logoutFromCampsBtn":return Object(D.a)(Object(D.a)({},e),{},{logginFromCamps:!1});case"setAllCamps":return Object(D.a)(Object(D.a)({},e),{},{allCamps:t.payload});case"setAllImages":return Object(D.a)(Object(D.a)({},e),{},{allImages:t.payload});default:return e}})),se=ce;r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y.a,{store:se,children:Object(d.jsx)(j.a,{children:Object(d.jsx)(ee,{})})})}),document.getElementById("root")),te()}},[[78,1,2]]]);
//# sourceMappingURL=main.df91f8e1.chunk.js.map