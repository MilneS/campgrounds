(this.webpackJsonpcampgrounds=this.webpackJsonpcampgrounds||[]).push([[0],{10:function(e,a,t){e.exports={container:"Details_container__2Oj6o",cardButtonsBig:"Details_cardButtonsBig__3kkC0",cardButtonsSmall:"Details_cardButtonsSmall__bA5k9",img:"Details_img__2FBxc",title:"Details_title__OugfD",DescrAuthPrice:"Details_DescrAuthPrice__34iBY",location:"Details_location__3rk2w",reviewContainer:"Details_reviewContainer__3WnDJ",titleReview:"Details_titleReview__3SPSe",textareaTitle:"Details_textareaTitle__2cjpH",textarea:"Details_textarea__2nz_6",reviewCard:"Details_reviewCard__2K-Uh",warning:"Details_warning__EDbfE",cardMid:"Details_cardMid__HHsnk",cardSmall:"Details_cardSmall__28Mj2",cardBig:"Details_cardBig__19Y40"}},21:function(e,a,t){e.exports={background:"Home_background__3HbSX",warning:"Home_warning__2jRo3",middleContainer:"Home_middleContainer__qPjjp",title:"Home_title__3h164",message:"Home_message__3Y9k4",homeButton:"Home_homeButton__QywTi",homeFooter:"Home_homeFooter__1YuwF"}},28:function(e,a,t){e.exports={container:"CampsCard_container__e7ffi",img:"CampsCard_img__3sxmh",containerInfo:"CampsCard_containerInfo__3JXPw",title:"CampsCard_title__1tu2g",description:"CampsCard_description__38J2C",location:"CampsCard_location__19D1b",button:"CampsCard_button__1Jnu4",buttonSmall:"CampsCard_buttonSmall__2Rl_s"}},29:function(e,a,t){e.exports={containerBig:"NewCamp_containerBig__1cORp",form:"NewCamp_form__2zNpO",h1:"NewCamp_h1__2iugb",button:"NewCamp_button__3TkYp",containerSmall:"NewCamp_containerSmall__2wM-6",h2:"NewCamp_h2__1seBp",file:"NewCamp_file__1i_Fo"}},30:function(e,a,t){e.exports={login:"LoginComp_login__2Nr3o",signUp:"LoginComp_signUp__3pJBo",errorMsg:"LoginComp_errorMsg__2oOW3",smallCard:"LoginComp_smallCard__2zLBS",bigCard:"LoginComp_bigCard__2jDlV"}},31:function(e,a,t){e.exports={signup:"SignupComp_signup__1F1p1",login:"SignupComp_login__2CWFt",errorMsg:"SignupComp_errorMsg__3DF0s",smallCard:"SignupComp_smallCard__2rrC-",bigCard:"SignupComp_bigCard__3lSZ5"}},32:function(e,a,t){e.exports={navbar:"NavbarComp_navbar__2raUi",campgroundsLogo:"NavbarComp_campgroundsLogo__3Wnzz",campgroundsLink:"NavbarComp_campgroundsLink__c5qYo",loginLink:"NavbarComp_loginLink__152zl",active:"NavbarComp_active__KQnEd"}},33:function(e,a,t){e.exports={containerBig:"Edit_containerBig__2koeC",form:"Edit_form__UvPpR",h1:"Edit_h1__3kTf6",button:"Edit_button__3vqQL",containerSmall:"Edit_containerSmall__1irxs",h2:"Edit_h2__2rXIL"}},36:function(e,a,t){e.exports={container:"Camps_container__2FW0O",h1:"Camps_h1__7jZsE",h2:"Camps_h2__3_D6w",button:"Camps_button__3Z1wg",buttonSmall:"Camps_buttonSmall__1dk-m",titleContainer:"Camps_titleContainer__3KJQ3"}},57:function(e,a,t){e.exports={cardContainer:"Login_cardContainer__nypt3",card:"Login_card__1SygN"}},69:function(e,a,t){},70:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(25),i=t.n(n),r=(t(69),t(70),t(13)),o=t(14),l=t(21),d=t.n(l),j=t(0),m=function(){return Object(j.jsx)("div",{className:d.a.background,children:Object(j.jsxs)("div",{className:d.a.main,children:[Object(j.jsx)("div",{className:d.a.nav,children:Object(j.jsxs)("ul",{className:d.a.ul,children:[Object(j.jsx)("div",{className:d.a.logolink,children:"CampGrounds"}),Object(j.jsx)(r.c,{to:"/campgrounds/camps",className:d.a.link,children:"All campgrounds"}),Object(j.jsx)(r.c,{to:"/campgrounds/login",className:d.a.loginLink,children:"Login"})]})}),Object(j.jsxs)("div",{className:d.a.middleContainer,children:[Object(j.jsx)("h1",{className:d.a.title,children:"CampGrounds"}),Object(j.jsx)("div",{className:d.a.message,children:Object(j.jsxs)("p",{children:["Welcome to CampGrounds! ",Object(j.jsx)("br",{}),"Jump right in and explore our many campgrounds. ",Object(j.jsx)("br",{})," Feel free to share some of your own and comment on others!"]})}),Object(j.jsx)(r.c,{to:"/campgrounds/camps",children:Object(j.jsx)("button",{className:d.a.homeButton,children:"View Campgrounds"})}),Object(j.jsx)("span",{className:d.a.warning,children:"\u26a0 Comments under construction \u26a0"}),Object(j.jsx)("div",{className:d.a.homeFooter,children:"\xa9 2021"})]})]})})},b=t(18),p=t.n(b),u=t(26),h=t(36),g=t.n(h),O=t(8),x=t(28),C=t.n(x),_=t(9),f=t(60),N=(t(91),t(84),f.initializeApp({apiKey:"AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",authDomain:"campgrounds-daabb.firebaseapp.com",databaseURL:"https://campgrounds-daabb-default-rtdb.firebaseio.com",projectId:"campgrounds-daabb",storageBucket:"campgrounds-daabb.appspot.com",messagingSenderId:"939628795347",appId:"1:939628795347:web:643c09cd414dfe13b2cb26",measurementId:"G-4KSK6ZMC4Y"})),v=function(e){var a=Object(c.useState)(),t=Object(O.a)(a,2),s=t[0],n=t[1],i=e.item,o=e.dataKey;return N.storage().ref().child("images/".concat(o)).getDownloadURL().then((function(e){n(e)})),Object(j.jsxs)("div",{className:C.a.container,children:[Object(j.jsx)("div",{className:C.a.containerImg,children:Object(j.jsx)("img",{src:s,alt:"",className:C.a.img})}),Object(j.jsxs)("div",{className:C.a.containerInfo,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:C.a.title,children:i.title}),Object(j.jsx)("div",{className:C.a.description,children:i.description}),Object(j.jsx)("div",{className:C.a.location,children:i.location})]}),Object(j.jsx)("div",{className:C.a.button,children:Object(j.jsx)(r.c,{to:"/campgrounds/details/".concat(o),children:Object(j.jsx)(_.a,{variant:"primary",size:"lg",type:"button",className:"mb-3",children:"View"})})}),Object(j.jsx)("div",{className:C.a.buttonSmall,children:Object(j.jsx)(r.c,{to:"/campgrounds/details/".concat(o),children:Object(j.jsx)(_.a,{variant:"primary",size:"sm",type:"button",className:"mb-3",children:"View"})})})]})]})},y=t(11),w=function(){var e=Object(y.b)(),a=Object(y.c)((function(e){return e.isLoggedin})),t=Object(y.c)((function(e){return e.allCamps}));Object(c.useEffect)((function(){n()}),[]);var s=function(){e({type:"logginFromCampsBtn"})},n=function(){var a=Object(u.a)(p.a.mark((function a(){var t,c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",a.next=3,fetch("https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",{method:"GET"});case 3:if(!(t=a.sent).ok){a.next=11;break}return a.next=7,t.json();case 7:c=a.sent,e({type:"setAllCamps",payload:c}),a.next=13;break;case 11:"Getting all camps failed!",console.log("Getting all camps failed!");case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:g.a.container,children:[Object(j.jsxs)("div",{className:g.a.titleContainer,children:[Object(j.jsx)("h1",{className:g.a.h1,children:"All CampGrounds"}),Object(j.jsx)("h2",{className:g.a.h2,children:"All CampGrounds"}),Object(j.jsxs)("div",{className:g.a.button,children:[a&&Object(j.jsx)(r.c,{to:"/campgrounds/newcamp",children:Object(j.jsx)(_.a,{variant:"success",size:"lg",type:"button",className:"mb-3",children:"Add Campground"})}),!a&&Object(j.jsx)(r.c,{to:"/campgrounds/login",children:Object(j.jsx)(_.a,{variant:"success",size:"lg",type:"button",className:"mb-3",onClick:s,children:"Add Campground"})})]}),Object(j.jsxs)("div",{className:g.a.buttonSmall,children:[a&&Object(j.jsx)(r.c,{to:"/campgrounds/newcamp",children:Object(j.jsx)(_.a,{variant:"success",size:"sm",type:"button",className:"mb-3",children:"Add Campground"})}),!a&&Object(j.jsx)(r.c,{to:"/campgrounds/login",children:Object(j.jsx)(_.a,{variant:"success",size:"sm",type:"button",className:"mb-3",onClick:s,children:"Add Campground"})})]})]}),function(){if(Object.keys(t).length)return Object.keys(t).map((function(e,a){return Object(j.jsx)(v,{item:t[e],dataKey:e},a)}))}()]})},k=t(57),S=t.n(k),L=t(12),D=t(2),F=t(30),I=t.n(F),z=t.p+"static/media/LoginPic.e44accc1.jpeg",T=t(7),G=t(3),A=function(){var e=Object(y.c)((function(e){return e.logginFromCamps})),a=Object(o.g)(),t=Object(y.b)(),s=Object(c.useState)(),n=Object(O.a)(s,2),i=n[0],r=n[1],l=Object(c.useState)(!1),d=Object(O.a)(l,2),m=d[0],b=d[1],h=Object(c.useState)({email:"",password:""}),g=Object(O.a)(h,2),x=g[0],C=g[1],f=function(e){e.preventDefault(),t({type:"signupComp"})},N=function(e){C(Object(D.a)(Object(D.a)({},x),{},Object(L.a)({},e.target.id,e.currentTarget.value)))},v=function(e){e.preventDefault(),t({type:"loginFormData",payload:x}),w()},w=function(){var c=Object(u.a)(p.a.mark((function c(){var s,n,i;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",c.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",{method:"POST",body:JSON.stringify({email:x.email,password:x.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:return s=c.sent,c.next=6,s.json();case 6:if(n=c.sent,!s.ok){c.next=17;break}return t({type:"loggedin"}),t({type:"idToken",payload:n.idToken}),localStorage.setItem("token",n.idToken),localStorage.setItem("userEmail",n.email),e?a.replace("/campgrounds/newcamp"):(a.push("/campgrounds/camps"),t({type:"logoutFromCampsBtn"})),b(!1),c.abrupt("return",n);case 17:i="Authentication failed!",n&&n.error&&n.error.message&&(i=n.error.message,r(i),b(!0));case 19:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:I.a.bigCard,children:Object(j.jsxs)(T.a,{style:{width:"27rem"},children:[Object(j.jsx)(T.a.Img,{variant:"top",src:z}),Object(j.jsxs)(T.a.Body,{children:[Object(j.jsx)(T.a.Title,{className:"mb-4",children:Object(j.jsx)("p",{className:I.a.login,children:"Login"})}),m&&Object(j.jsx)("p",{className:I.a.errorMsg,children:i}),Object(j.jsxs)(G.a,{children:[Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{id:"email",type:"email",placeholder:"Enter email",onChange:N})}),Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{id:"password",type:"password",placeholder:"Password",onChange:N})}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(_.a,{onClick:v,variant:"success",size:"lg",type:"submit",className:"mb-3",children:"Login"})})]}),Object(j.jsx)("p",{className:I.a.signUp,onClick:f,children:"Or sign up."})]})]})}),Object(j.jsx)("div",{className:I.a.smallCard,children:Object(j.jsxs)(T.a,{style:{width:"18rem"},children:[Object(j.jsx)(T.a.Img,{variant:"top",src:z}),Object(j.jsxs)(T.a.Body,{children:[Object(j.jsx)(T.a.Title,{className:"mb-4",children:Object(j.jsx)("p",{className:I.a.login,children:"Login"})}),m&&Object(j.jsx)("p",{className:I.a.errorMsg,children:i}),Object(j.jsxs)(G.a,{children:[Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{id:"email",type:"email",placeholder:"Enter email",onChange:N})}),Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{id:"password",type:"password",placeholder:"Password",onChange:N})}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(_.a,{onClick:v,variant:"success",size:"sm",type:"submit",className:"mb-3",children:"Login"})})]}),Object(j.jsx)("p",{className:I.a.signUp,onClick:f,children:"Or sign up."})]})]})})]})},B=t(31),P=t.n(B),E=function(){var e=Object(o.g)(),a=Object(c.useState)({email:"",password:""}),t=Object(O.a)(a,2),s=t[0],n=t[1],i=Object(c.useState)(),r=Object(O.a)(i,2),l=r[0],d=r[1],m=Object(c.useState)(!1),b=Object(O.a)(m,2),h=b[0],g=b[1],x=Object(y.b)(),C=function(e){e.preventDefault(),x({type:"loginComp"})},f=function(e){n(Object(D.a)(Object(D.a)({},s),{},Object(L.a)({},e.target.id,e.currentTarget.value)))},N=function(e){e.preventDefault(),x({type:"loginFormData",payload:s}),v()},v=function(){var a=Object(u.a)(p.a.mark((function a(){var t,c,n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",a.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",{method:"POST",body:JSON.stringify({email:s.email,password:s.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:return t=a.sent,a.next=6,t.json();case 6:if(c=a.sent,!t.ok){a.next=16;break}return x({type:"loggedin"}),x({type:"idToken",payload:c.idToken}),localStorage.setItem("token",c.idToken),e.push("/campgrounds/camps"),g(!1),a.abrupt("return",c);case 16:n="Authentication failed!",c&&c.error&&c.error.message&&(n=c.error.message,d(n),g(!0));case 18:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:P.a.bigCard,children:Object(j.jsxs)(T.a,{style:{width:"27rem"},children:[Object(j.jsx)(T.a.Img,{variant:"top",src:z}),Object(j.jsxs)(T.a.Body,{children:[Object(j.jsx)(T.a.Title,{className:"mb-4",children:Object(j.jsx)("p",{className:P.a.signup,children:"Sign up"})}),h&&Object(j.jsx)("p",{className:P.a.errorMsg,children:l}),Object(j.jsxs)(G.a,{children:[Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{type:"email",id:"email",placeholder:"Email",onChange:f})}),Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{type:"password",id:"password",placeholder:"Password",onChange:f})}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(_.a,{onClick:N,variant:"success",size:"lg",type:"submit",className:"mb-3",children:"Sign up"})})]}),Object(j.jsx)("p",{className:P.a.login,onClick:C,children:"Or login."})]})]})}),Object(j.jsx)("div",{className:P.a.smallCard,children:Object(j.jsxs)(T.a,{style:{width:"18rem"},children:[Object(j.jsx)(T.a.Img,{variant:"top",src:z}),Object(j.jsxs)(T.a.Body,{children:[Object(j.jsx)(T.a.Title,{className:"mb-4",children:Object(j.jsx)("p",{className:P.a.signup,children:"Sign up"})}),h&&Object(j.jsx)("p",{className:P.a.errorMsg,children:l}),Object(j.jsxs)(G.a,{children:[Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{type:"email",id:"email",placeholder:"Email",onChange:f})}),Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{type:"password",id:"password",placeholder:"Password",onChange:f})}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(_.a,{onClick:N,variant:"success",size:"sm",type:"submit",className:"mb-3",children:"Sign up"})})]}),Object(j.jsx)("p",{className:P.a.login,onClick:C,children:"Or login."})]})]})})]})},U=function(){var e=Object(y.c)((function(e){return e.showLogin})),a=Object(y.c)((function(e){return e.showSignup}));return Object(j.jsx)("div",{className:S.a.cardContainer,children:Object(j.jsxs)("div",{className:S.a.card,children:[e&&Object(j.jsx)(A,{}),a&&Object(j.jsx)(E,{})]})})},M=t(29),V=t.n(M),J=function(){var e,a=Object(o.g)(),t=Object(y.c)((function(e){return e.loginFormData})),s=Object(c.useState)({title:"",location:"",price:"",description:""}),n=Object(O.a)(s,2),i=n[0],r=n[1],l=Object(c.useState)(),d=Object(O.a)(l,2),m=d[0],b=d[1],h=function(){var e=Object(u.a)(p.a.mark((function e(){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",e.next=3,fetch("https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",{method:"POST",body:JSON.stringify({title:i.title,location:i.location,price:i.price,description:i.description,author:t.email})});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c.name);case 11:"Adding new camp failed!",console.log("Adding new camp failed!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){r(Object(D.a)(Object(D.a)({},i),{},Object(L.a)({},e.target.id,e.target.value)))},x=function(e){if(e.target.files&&e.target.files[0]){var a=e.target.files[0];a&&b(a)}},C=Object(c.useState)(!1),f=Object(O.a)(C,2),v=f[0],w=f[1],k=function(t){t.preventDefault(),h().then((function(t){m&&m.name&&(e=N.storage().ref(),m.dataKey=t,e.child("images/".concat(m.dataKey)).put(m).then((function(){a.push("/campgrounds/camps")})))})),!1===t.target.checkValidity()&&t.stopPropagation(),w(!0)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:V.a.containerBig,children:[Object(j.jsx)("h1",{className:V.a.h1,children:"New CampGround"}),Object(j.jsxs)(G.a,{className:V.a.form,noValidate:!0,validated:v,children:[Object(j.jsxs)(G.a.Group,{className:"mb-3",children:[Object(j.jsx)(G.a.Label,{htmlFor:"title",children:"Title"}),Object(j.jsx)(G.a.Control,{type:"text",id:"title",onChange:g,required:!0})]}),Object(j.jsxs)(G.a.Group,{className:"mb-3",children:[Object(j.jsx)(G.a.Label,{htmlFor:"location",children:"Location"}),Object(j.jsx)(G.a.Control,{type:"text",id:"location",onChange:g,required:!0})]}),Object(j.jsxs)(G.a.Group,{className:"mb-3",children:[Object(j.jsx)(G.a.Label,{htmlFor:"price",children:"Campground price"}),Object(j.jsx)(G.a.Control,{type:"number",id:"price",onChange:g,required:!0})]}),Object(j.jsxs)(G.a.Group,{className:"mb-4",children:[Object(j.jsx)(G.a.Label,{htmlFor:"description",children:"Description"}),Object(j.jsx)(G.a.Control,{as:"textarea",rows:3,id:"description",onChange:g,required:!0})]}),Object(j.jsx)(G.a.Group,{className:"mb-4",children:Object(j.jsx)(G.a.Control,{type:"file",id:"image",onChange:x,required:!0})}),Object(j.jsx)("div",{className:V.a.button,children:Object(j.jsx)(_.a,{variant:"success",size:"lg",type:"button",className:"mb-3",onClick:k,children:"Add campground"})})]})]}),Object(j.jsxs)("div",{className:V.a.containerSmall,children:[Object(j.jsx)("h2",{className:V.a.h2,children:"New CampGround"}),Object(j.jsxs)(G.a,{className:V.a.form,noValidate:!0,validated:v,children:[Object(j.jsxs)(G.a.Group,{className:"mb-2",children:[Object(j.jsx)(G.a.Label,{htmlFor:"title",children:"Title"}),Object(j.jsx)(G.a.Control,{type:"text",id:"title",onChange:g,required:!0})]}),Object(j.jsxs)(G.a.Group,{className:"mb-2",children:[Object(j.jsx)(G.a.Label,{htmlFor:"location",children:"Location"}),Object(j.jsx)(G.a.Control,{type:"text",id:"location",onChange:g,required:!0})]}),Object(j.jsxs)(G.a.Group,{className:"mb-2",children:[Object(j.jsx)(G.a.Label,{htmlFor:"price",children:"Campground price"}),Object(j.jsx)(G.a.Control,{type:"number",id:"price",onChange:g,required:!0})]}),Object(j.jsxs)(G.a.Group,{className:"mb-3",children:[Object(j.jsx)(G.a.Label,{htmlFor:"description",children:"Description"}),Object(j.jsx)(G.a.Control,{as:"textarea",rows:3,id:"description",onChange:g,required:!0})]}),Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{type:"file",id:"image",onChange:x,required:!0,className:V.a.file})}),Object(j.jsx)("div",{className:V.a.button,children:Object(j.jsx)(_.a,{variant:"success",size:"sm",type:"button",className:"mb-3",onClick:k,children:"Add campground"})})]})]})]})},R=t(32),q=t.n(R),H=t(49),K=t(44),Q=t(62),W=function(e){var a=Object(y.b)(),t=Object(y.c)((function(e){return e.isLoggedin})),c=function(){a({type:"logoutFromCampsBtn"})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(H.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:q.a.navbar,children:Object(j.jsxs)(Q.a,{children:[Object(j.jsx)(r.c,{to:"/campgrounds",className:q.a.campgroundsLogo,onClick:c,children:"CampGrounds"}),Object(j.jsx)(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(H.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(K.a,{className:"me-auto",children:[Object(j.jsx)(K.a.Link,{href:"",children:Object(j.jsx)(r.c,{onClick:c,to:"/campgrounds/camps",id:"all",className:q.a.campgroundsLink,activeClassName:q.a.active,children:"All campgrounds"})}),!t&&Object(j.jsx)(K.a.Link,{children:Object(j.jsx)(r.c,{to:"/campgrounds/login",id:"login",className:q.a.loginLink,activeClassName:q.a.active,onClick:function(){a({type:"loginComp"})},children:"Login"})}),t&&Object(j.jsx)(K.a.Link,{children:Object(j.jsx)(r.c,{to:"/campgrounds/login",id:"login",className:q.a.loginLink,activeClassName:q.a.active,onClick:function(){a({type:"loggedout"}),a({type:"getToken",token:null}),localStorage.removeItem("token"),localStorage.removeItem("userEmail")},children:"Logout"})})]})})]})})})},Y=t(10),Z=t.n(Y),X=t(33),$=t.n(X),ee=function(e){var a=Object(y.b)(),t=e.campData,s=e.campId,n=function(e){a({type:"detailsComp"})},i={title:t.title,location:t.location,price:t.price,description:t.description},r=Object(c.useState)(i),o=Object(O.a)(r,2),l=o[0],d=o[1],m=function(e){d(Object(D.a)(Object(D.a)({},l),{},Object(L.a)({},e.target.id,e.target.value)))},b=function(e){N.database().ref().child("campgrounds/".concat(s)).update({title:l.title,location:l.location,price:l.price,description:l.description}).then((function(){a({type:"detailsComp"})})).catch((function(e){console.log(e)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:$.a.containerBig,children:[Object(j.jsx)("h1",{className:$.a.h1,children:"Update CampGround"}),Object(j.jsxs)(G.a,{className:$.a.form,children:[Object(j.jsxs)(G.a.Group,{className:"mb-3",children:[Object(j.jsx)(G.a.Label,{htmlFor:"title",children:"Title"}),Object(j.jsx)(G.a.Control,{type:"text",id:"title",defaultValue:t.title,onChange:m})]}),Object(j.jsxs)(G.a.Group,{className:"mb-3",children:[Object(j.jsx)(G.a.Label,{htmlFor:"location",children:"Location"}),Object(j.jsx)(G.a.Control,{type:"text",id:"location",defaultValue:t.location,onChange:m})]}),Object(j.jsxs)(G.a.Group,{className:"mb-3",children:[Object(j.jsx)(G.a.Label,{htmlFor:"price",children:"Campground price"}),Object(j.jsx)(G.a.Control,{type:"number",id:"price",defaultValue:t.price,onChange:m})]}),Object(j.jsxs)(G.a.Group,{className:"mb-4",children:[Object(j.jsx)(G.a.Label,{htmlFor:"description",children:"Description"}),Object(j.jsx)(G.a.Control,{as:"textarea",rows:3,id:"description",defaultValue:t.description,onChange:m})]}),Object(j.jsxs)("div",{className:$.a.button,children:[Object(j.jsx)(_.a,{onClick:b,variant:"success",size:"lg",type:"button",className:"mb-3",children:"Update"}),Object(j.jsx)(_.a,{onClick:n,variant:"secondary",size:"lg",type:"button",className:"mb-3",children:"Cancel"})]})]})]}),Object(j.jsxs)("div",{className:$.a.containerSmall,children:[Object(j.jsx)("h2",{className:$.a.h2,children:"Update CampGround"}),Object(j.jsxs)(G.a,{className:$.a.form,children:[Object(j.jsxs)(G.a.Group,{className:"mb-2",children:[Object(j.jsx)(G.a.Label,{htmlFor:"title",children:"Title"}),Object(j.jsx)(G.a.Control,{type:"text",id:"title",defaultValue:t.title,onChange:m})]}),Object(j.jsxs)(G.a.Group,{className:"mb-2",children:[Object(j.jsx)(G.a.Label,{htmlFor:"location",children:"Location"}),Object(j.jsx)(G.a.Control,{type:"text",id:"location",defaultValue:t.location,onChange:m})]}),Object(j.jsxs)(G.a.Group,{className:"mb-2",children:[Object(j.jsx)(G.a.Label,{htmlFor:"price",children:"Campground price"}),Object(j.jsx)(G.a.Control,{type:"number",id:"price",defaultValue:t.price,onChange:m})]}),Object(j.jsxs)(G.a.Group,{className:"mb-3",children:[Object(j.jsx)(G.a.Label,{htmlFor:"description",children:"Description"}),Object(j.jsx)(G.a.Control,{as:"textarea",rows:3,id:"description",defaultValue:t.description,onChange:m})]}),Object(j.jsxs)("div",{className:$.a.button,children:[Object(j.jsx)(_.a,{onClick:b,variant:"success",size:"sm",type:"button",className:"mb-3",children:"Update"}),Object(j.jsx)(_.a,{onClick:n,variant:"secondary",size:"sm",type:"button",className:"mb-3",children:"Cancel"})]})]})]})]})},ae=t(48),te=t(23),ce=function(){var e=Object(o.g)(),a=Object(y.b)(),t=localStorage.getItem("userEmail"),s=Object(o.h)(),n=Object(y.c)((function(e){return e.allCamps})),i=Object(y.c)((function(e){return e.showEdit})),r=Object(c.useState)(),l=Object(O.a)(r,2),d=l[0],m=l[1],b=Object(c.useState)(),h=Object(O.a)(b,2),g=h[0],x=h[1],C=function(){var e=Object(u.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",e.next=3,fetch("https://campgrounds-daabb-default-rtdb.firebaseio.com/campgrounds.json",{method:"GET"});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:c=e.sent,a({type:"setAllCamps",payload:c}),e.next=13;break;case 11:"Getting all camps failed!",console.log("Getting all camps failed!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){if(C(),Object.keys(n).length){var e=Object.keys(n).find((function(e){return e===s.camp}));e&&(m(n[e]),x(e))}}),[n]),Object(c.useEffect)((function(){D()}),[]);var f,v,w=Object(c.useState)(),k=Object(O.a)(w,2),S=k[0],L=k[1],D=function(){f=N.storage().ref(),f.child("images/".concat(s.camp)).getDownloadURL().then((function(e){L(e)}))},F=function(a){v=N.database().ref(),f=N.storage().ref(),v.child("campgrounds/".concat(s.camp)).remove(),f.child("images/".concat(s.camp)).delete().then((function(){e.replace("/campgrounds/camps")})).catch((function(e){console.log(e)}))},I=function(e){a({type:"editComp"})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[!i&&d&&Object(j.jsxs)("div",{className:Z.a.container,children:[Object(j.jsxs)("div",{children:[t===d.author&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:Z.a.cardButtonsBig,children:[Object(j.jsx)(_.a,{variant:"primary",type:"button",className:"mb-2",size:"lg",onClick:I,children:"Update"}),Object(j.jsx)(_.a,{variant:"danger",type:"button",className:"mb-2",size:"lg",onClick:F,children:"Delete"})]}),Object(j.jsxs)("div",{className:Z.a.cardButtonsSmall,children:[Object(j.jsx)(_.a,{variant:"primary",type:"button",className:"mb-2",size:"sm",onClick:I,children:"Update"}),Object(j.jsx)(_.a,{variant:"danger",type:"button",className:"mb-2",size:"sm",onClick:F,children:"Delete"})]})]}),Object(j.jsx)("div",{className:Z.a.cardBig,children:Object(j.jsxs)(T.a,{style:{width:"40rem"},children:[Object(j.jsx)(T.a.Img,{variant:"top",src:S}),Object(j.jsxs)(T.a.Body,{children:[Object(j.jsx)(T.a.Title,{className:Z.a.title,children:d.title}),Object(j.jsx)(T.a.Text,{className:Z.a.DescrAuthPrice,children:d.description})]}),Object(j.jsxs)(ae.a,{className:"list-group-flush",children:[Object(j.jsx)(te.a,{className:Z.a.location,children:d.location}),Object(j.jsxs)(te.a,{className:Z.a.DescrAuthPrice,children:["Submitted by ",d.author]}),Object(j.jsxs)(te.a,{className:Z.a.DescrAuthPrice,children:["Price/night: $",d.price]})]})]})}),Object(j.jsx)("div",{className:Z.a.cardMid,children:Object(j.jsxs)(T.a,{style:{width:"30rem"},children:[Object(j.jsx)(T.a.Img,{variant:"top",src:S}),Object(j.jsxs)(T.a.Body,{children:[Object(j.jsx)(T.a.Title,{className:Z.a.title,children:d.title}),Object(j.jsx)(T.a.Text,{className:Z.a.DescrAuthPrice,children:d.description})]}),Object(j.jsxs)(ae.a,{className:"list-group-flush",children:[Object(j.jsx)(te.a,{className:Z.a.location,children:d.location}),Object(j.jsxs)(te.a,{className:Z.a.DescrAuthPrice,children:["Submitted by ",d.author]}),Object(j.jsxs)(te.a,{className:Z.a.DescrAuthPrice,children:["Price/night: $",d.price]})]})]})}),Object(j.jsx)("div",{className:Z.a.cardSmall,children:Object(j.jsxs)(T.a,{style:{width:"18rem"},children:[Object(j.jsx)(T.a.Img,{variant:"top",src:S}),Object(j.jsxs)(T.a.Body,{children:[Object(j.jsx)(T.a.Title,{className:Z.a.title,children:d.title}),Object(j.jsx)(T.a.Text,{className:Z.a.DescrAuthPrice,children:d.description})]}),Object(j.jsxs)(ae.a,{className:"list-group-flush",children:[Object(j.jsx)(te.a,{className:Z.a.location,children:d.location}),Object(j.jsxs)(te.a,{className:Z.a.DescrAuthPrice,children:["Submitted by ",d.author]}),Object(j.jsxs)(te.a,{className:Z.a.DescrAuthPrice,children:["Price/night: $",d.price]})]})]})})]}),Object(j.jsxs)("div",{className:Z.a.reviewContainer,children:[Object(j.jsx)("h1",{className:Z.a.titleReview,children:"Leave a review"}),Object(j.jsx)("p",{className:Z.a.textareaTitle,children:"Review text"}),Object(j.jsxs)(G.a,{className:Z.a.reviewForm,children:[Object(j.jsx)(G.a.Group,{className:"mb-3",children:Object(j.jsx)(G.a.Control,{as:"textarea",rows:3})}),Object(j.jsx)(_.a,{variant:"success",size:"lg",type:"button",className:"mb-5",children:"Submit"})]}),Object(j.jsxs)(T.a,{className:Z.a.reviewCard,children:[Object(j.jsx)(T.a.Title,{children:"Author"}),Object(j.jsx)(T.a.Text,{children:"Review: Text"}),Object(j.jsx)("div",{className:Z.a.reviewButton,children:Object(j.jsx)(_.a,{variant:"danger",type:"button",className:"mb-1",children:"Delete"})})]}),Object(j.jsx)("div",{className:Z.a.warning,children:" \u26a0 Comments under construction \u26a0 "})]})]}),i&&Object(j.jsx)(ee,{campData:d,campId:g})]})})};var se=function(){var e=Object(y.c)((function(e){return e.isLoggedin}));return Object(j.jsx)(r.b,{basename:"/",children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(W,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/campgrounds",exact:!0,children:Object(j.jsx)(m,{})}),Object(j.jsx)(o.b,{path:"/campgrounds/camps",children:Object(j.jsx)(w,{})}),Object(j.jsx)(o.b,{path:"/campgrounds/details/:camp",children:Object(j.jsx)(ce,{})}),Object(j.jsxs)(o.b,{path:"/campgrounds/newcamp",children:[e&&Object(j.jsx)(J,{}),!e&&Object(j.jsx)(o.a,{to:"/campgrounds/login"})]}),Object(j.jsx)(o.b,{path:"/campgrounds/login",children:Object(j.jsx)(U,{})}),Object(j.jsx)(o.b,{path:"*",children:Object(j.jsx)(o.a,{to:"/campgrounds"})})]})]})})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),c(e),s(e),n(e),i(e)}))},ie=(t(89),t(64)),re={showLogin:!0,showSignup:!1,showEdit:!1,showDetails:!0,loginFormData:{email:"",password:""},idToken:localStorage.getItem("token"),userId:localStorage.getItem("userId"),isLoggedin:!!localStorage.getItem("token"),logginFromCamps:!1,allCamps:{},allImages:{}},oe=Object(ie.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"loginComp":return Object(D.a)(Object(D.a)({},e),{},{showLogin:!0,showSignup:!1});case"signupComp":return Object(D.a)(Object(D.a)({},e),{},{showSignup:!0,showLogin:!1});case"detailsComp":return Object(D.a)(Object(D.a)({},e),{},{showDetails:!0,showEdit:!1});case"editComp":return Object(D.a)(Object(D.a)({},e),{},{showEdit:!0,showDetails:!1});case"signupFormData":return Object(D.a)(Object(D.a)({},e),{},{signUpFormData:a.payload});case"loginFormData":return Object(D.a)(Object(D.a)({},e),{},{loginFormData:a.payload});case"loggedin":return Object(D.a)(Object(D.a)({},e),{},{isLoggedin:!0});case"loggedout":return Object(D.a)(Object(D.a)({},e),{},{isLoggedin:!1,loginFormData:null});case"logginFromCampsBtn":return Object(D.a)(Object(D.a)({},e),{},{logginFromCamps:!0});case"logoutFromCampsBtn":return Object(D.a)(Object(D.a)({},e),{},{logginFromCamps:!1});case"setAllCamps":return Object(D.a)(Object(D.a)({},e),{},{allCamps:a.payload});case"setAllImages":return Object(D.a)(Object(D.a)({},e),{},{allImages:a.payload});case"getToken":return Object(D.a)(Object(D.a)({},e),{},{idToken:a.payload});default:return e}})),le=oe;i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y.a,{store:le,children:Object(j.jsx)(r.a,{children:Object(j.jsx)(se,{})})})}),document.getElementById("root")),ne()}},[[90,1,2]]]);
//# sourceMappingURL=main.aca3bc3a.chunk.js.map