(this.webpackJsonpcampgrounds=this.webpackJsonpcampgrounds||[]).push([[0],{12:function(e,t,a){e.exports={container:"Details_container__2Oj6o",cardButtons:"Details_cardButtons__1mp0R",img:"Details_img__2FBxc",title:"Details_title__OugfD",DescrAuthPrice:"Details_DescrAuthPrice__34iBY",location:"Details_location__3rk2w",reviewContainer:"Details_reviewContainer__3WnDJ",titleReview:"Details_titleReview__3SPSe",textareaTitle:"Details_textareaTitle__2cjpH",textarea:"Details_textarea__2nz_6",reviewCard:"Details_reviewCard__2K-Uh",card:"Details_card__25dEN",NoCommentsMsg:"Details_NoCommentsMsg__1eNcn",warning:"Details_warning__EDbfE",reviewBtn:"Details_reviewBtn__2Cpwn",submitReviewBtn:"Details_submitReviewBtn__1mndp",deleteReviewButton:"Details_deleteReviewButton__GZ1DP",authorReview:"Details_authorReview__2U1bi"}},23:function(e,t,a){e.exports={background:"Home_background__3HbSX",middleContainer:"Home_middleContainer__qPjjp",title:"Home_title__3h164",message:"Home_message__3Y9k4",homeButton:"Home_homeButton__QywTi"}},27:function(e,t,a){e.exports={container:"CampsCard_container__e7ffi",img:"CampsCard_img__3sxmh",containerInfo:"CampsCard_containerInfo__3JXPw",title:"CampsCard_title__1tu2g",description:"CampsCard_description__38J2C",location:"CampsCard_location__19D1b",button:"CampsCard_button__1Jnu4"}},28:function(e,t,a){e.exports={navbar:"NavbarComp_navbar__2raUi",campgroundsLogo:"NavbarComp_campgroundsLogo__3Wnzz",campgroundsLink:"NavbarComp_campgroundsLink__c5qYo",loginLink:"NavbarComp_loginLink__152zl",active:"NavbarComp_active__KQnEd"}},38:function(e,t,a){e.exports={login:"LoginComp_login__2Nr3o",signUp:"LoginComp_signUp__3pJBo",errorMsg:"LoginComp_errorMsg__2oOW3",loginBtn:"LoginComp_loginBtn__wWWF6",card:"LoginComp_card__2mGIf"}},39:function(e,t,a){e.exports={signup:"SignupComp_signup__1F1p1",login:"SignupComp_login__2CWFt",errorMsg:"SignupComp_errorMsg__3DF0s",signupBtn:"SignupComp_signupBtn__2ghD2",card:"SignupComp_card__1arrs"}},40:function(e,t,a){e.exports={container:"NewCamp_container__1i68C",form:"NewCamp_form__2zNpO",h1:"NewCamp_h1__2iugb",button:"NewCamp_button__3TkYp",file:"NewCamp_file__1i_Fo"}},42:function(e,t,a){e.exports={container:"Camps_container__2FW0O",h1:"Camps_h1__7jZsE",button:"Camps_button__3Z1wg",titleContainer:"Camps_titleContainer__3KJQ3"}},43:function(e,t,a){e.exports={container:"Edit_container__1s2P1",form:"Edit_form__UvPpR",h1:"Edit_h1__3kTf6",button:"Edit_button__3vqQL"}},55:function(e,t,a){e.exports={cardContainer:"Login_cardContainer__nypt3",card:"Login_card__1SygN"}},69:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(25),r=a.n(s),i=(a(69),a(13)),o=a(10),l=a(23),d=a.n(l),j=a(1),m=function(){return Object(j.jsx)("div",{className:d.a.background,children:Object(j.jsxs)("div",{className:d.a.main,children:[Object(j.jsx)("div",{className:d.a.nav,children:Object(j.jsxs)("ul",{className:d.a.ul,children:[Object(j.jsx)("div",{className:d.a.logolink,children:"CampGrounds"}),Object(j.jsx)(i.c,{to:"/campgrounds/camps",className:d.a.link,children:"All campgrounds"}),Object(j.jsx)(i.c,{to:"/campgrounds/login",className:d.a.loginLink,children:"Login"})]})}),Object(j.jsxs)("div",{className:d.a.middleContainer,children:[Object(j.jsx)("h1",{className:d.a.title,children:"CampGrounds"}),Object(j.jsx)("div",{className:d.a.message,children:Object(j.jsxs)("p",{children:["Welcome to CampGrounds! ",Object(j.jsx)("br",{}),"Jump right in and explore our many campgrounds. ",Object(j.jsx)("br",{})," Login or sign up to share some of your own and comment on others!"]})}),Object(j.jsx)(i.c,{to:"/campgrounds/camps",children:Object(j.jsx)("button",{className:d.a.homeButton,children:"View Campgrounds"})})]})]})})},u=a(14),p=a.n(u),b=a(21),g=a(7),O=a(42),h=a.n(O),x=a(8),f=a(27),_=a.n(f),v=a(16),C=a(59),w=(a(90),a(84),C.initializeApp({apiKey:"AIzaSyBSLQzk8EEiurhYnDpYTtw8baP0wa7r_6w",authDomain:"camps-e7367.firebaseapp.com",databaseURL:"https://camps-e7367-default-rtdb.firebaseio.com",projectId:"camps-e7367",storageBucket:"camps-e7367.appspot.com",messagingSenderId:"387310064891",appId:"1:387310064891:web:763d90a99df1402ff4cc5e",measurementId:"G-Y4YYFMEZTE"})),y=function(e){var t=Object(n.useState)(),a=Object(g.a)(t,2),c=a[0],s=a[1],r=e.item,o=e.dataKey;return Object(n.useEffect)((function(){w.storage().ref().child("images/".concat(o)).getDownloadURL().then((function(e){s(e)})).catch((function(e){return console.log("Getting image failed on campCard ".concat(JSON.stringify(e.message)))}))}),[e.item]),Object(j.jsxs)("div",{className:_.a.container,children:[Object(j.jsx)("div",{className:_.a.containerImg,children:Object(j.jsx)("img",{src:c,alt:"",className:_.a.img})}),Object(j.jsxs)("div",{className:_.a.containerInfo,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:_.a.title,children:r.title}),Object(j.jsx)("div",{className:_.a.description,children:r.description}),Object(j.jsx)("div",{className:_.a.location,children:r.location})]}),Object(j.jsx)("div",{children:Object(j.jsx)(i.c,{to:"/campgrounds/details/".concat(o),children:Object(j.jsx)(v.a,{variant:"primary",size:"lg",type:"button",className:_.a.button,children:"View"})})})]})]})},N=function(){var e=Object(n.useState)("/campgrounds/login"),t=Object(g.a)(e,2),a=t[0],c=t[1],s=Object(x.b)(),r=Object(x.c)((function(e){return e.isLoggedin})),o=Object(x.c)((function(e){return e.allCamps})),l=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://camps-e7367-default-rtdb.firebaseio.com/campgrounds.json",e.next=3,fetch("https://camps-e7367-default-rtdb.firebaseio.com/campgrounds.json",{method:"GET"});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:a=e.sent,s({type:"setAllCamps",payload:a}),e.next=13;break;case 11:"Getting all camps failed!",console.log("Getting all camps failed!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);return Object(n.useEffect)((function(){c(r?"/campgrounds/newcamp":"/campgrounds/login")}),[]),Object(j.jsxs)("div",{className:h.a.container,children:[Object(j.jsxs)("div",{className:h.a.titleContainer,children:[Object(j.jsx)("h1",{className:h.a.h1,children:"All CampGrounds"}),Object(j.jsx)("div",{children:Object(j.jsx)(i.c,{to:a,children:Object(j.jsx)(v.a,{variant:"success",size:"lg",type:"button",className:h.a.button,children:"Add Campground"})})})]}),function(){if(Object.keys(o).length)return Object.keys(o).map((function(e,t){return Object(j.jsx)(y,{item:o[e],dataKey:e},t)}))}()]})},k=a(55),S=a.n(k),D=a(9),L=a(2),F=a(38),T=a.n(F),E=a.p+"static/media/LoginPic.e44accc1.jpeg",B=a(15),I=a(6),G=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(g.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),r=Object(g.a)(s,2),i=r[0],l=r[1],d=Object(n.useState)(!1),m=Object(g.a)(d,2),u=m[0],O=m[1],h=Object(x.c)((function(e){return e.logginFromCamps})),f=Object(o.g)(),_=Object(x.b)(),C=function(e){c(Object(L.a)(Object(L.a)({},a),{},Object(D.a)({},e.target.id,e.currentTarget.value)))},w=function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSLQzk8EEiurhYnDpYTtw8baP0wa7r_6w",e.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSLQzk8EEiurhYnDpYTtw8baP0wa7r_6w",{method:"POST",body:JSON.stringify({email:a.email,password:a.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,!t.ok){e.next=17;break}return _({type:"loggedin"}),_({type:"idToken",payload:n.idToken}),localStorage.setItem("token",n.idToken),localStorage.setItem("userEmail",n.email),h?f.replace("/campgrounds/newcamp"):(f.push("/campgrounds/camps"),_({type:"logoutFromCampsBtn"})),O(!1),e.abrupt("return",n);case 17:n&&n.error&&n.error.message&&(c=n.error.message,l(c),O(!0));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(B.a,{style:{width:"27rem"},className:T.a.card,children:[Object(j.jsx)(B.a.Img,{variant:"top",src:E}),Object(j.jsxs)(B.a.Body,{children:[Object(j.jsx)(B.a.Title,{className:"mb-4",children:Object(j.jsx)("p",{className:T.a.login,children:"Login"})}),u&&Object(j.jsx)("p",{className:T.a.errorMsg,children:i}),Object(j.jsxs)(I.a,{children:[Object(j.jsx)(I.a.Group,{className:"mb-3",children:Object(j.jsx)(I.a.Control,{id:"email",type:"email",placeholder:"Enter email",onChange:C})}),Object(j.jsx)(I.a.Group,{className:"mb-3",children:Object(j.jsx)(I.a.Control,{id:"password",type:"password",placeholder:"Password",onChange:C})}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(v.a,{onClick:function(e){e.preventDefault(),_({type:"loginFormData",payload:a}),w()},variant:"success",size:"lg",type:"submit",className:T.a.loginBtn,children:"Login"})})]}),Object(j.jsx)("p",{className:T.a.signUp,onClick:function(e){e.preventDefault(),_({type:"signupComp"})},children:"Or sign up."})]})]})})},P=a(39),z=a.n(P),A=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(g.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),r=Object(g.a)(s,2),i=r[0],l=r[1],d=Object(n.useState)(!1),m=Object(g.a)(d,2),u=m[0],O=m[1],h=Object(x.c)((function(e){return e.logginFromCamps})),f=Object(x.b)(),_=Object(o.g)(),C=function(e){c(Object(L.a)(Object(L.a)({},a),{},Object(D.a)({},e.target.id,e.currentTarget.value)))},w=function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSLQzk8EEiurhYnDpYTtw8baP0wa7r_6w",e.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSLQzk8EEiurhYnDpYTtw8baP0wa7r_6w",{method:"POST",body:JSON.stringify({email:a.email,password:a.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,!t.ok){e.next=17;break}return f({type:"loggedin"}),f({type:"idToken",payload:n.idToken}),localStorage.setItem("token",n.idToken),localStorage.setItem("userEmail",n.email),h?_.replace("/campgrounds/newcamp"):(_.push("/campgrounds/camps"),f({type:"logoutFromCampsBtn"})),O(!1),e.abrupt("return",n);case 17:n&&n.error&&n.error.message&&(c=n.error.message,l(c),O(!0));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(B.a,{style:{width:"27rem"},className:z.a.card,children:[Object(j.jsx)(B.a.Img,{variant:"top",src:E}),Object(j.jsxs)(B.a.Body,{children:[Object(j.jsx)(B.a.Title,{className:"mb-4",children:Object(j.jsx)("p",{className:z.a.signup,children:"Sign up"})}),u&&Object(j.jsx)("p",{className:z.a.errorMsg,children:i}),Object(j.jsxs)(I.a,{children:[Object(j.jsx)(I.a.Group,{className:"mb-3",children:Object(j.jsx)(I.a.Control,{type:"email",id:"email",placeholder:"Email",onChange:C})}),Object(j.jsx)(I.a.Group,{className:"mb-3",children:Object(j.jsx)(I.a.Control,{type:"password",id:"password",placeholder:"Password",onChange:C})}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(v.a,{onClick:function(e){e.preventDefault(),f({type:"loginFormData",payload:a}),w()},variant:"success",size:"lg",type:"submit",className:z.a.signupBtn,children:"Sign up"})})]}),Object(j.jsx)("p",{className:z.a.login,onClick:function(e){e.preventDefault(),f({type:"loginComp"})},children:"Or login."})]})]})})},R=function(){var e=Object(x.c)((function(e){return e.showLogin})),t=Object(x.c)((function(e){return e.showSignup}));return Object(j.jsx)("div",{className:S.a.cardContainer,children:Object(j.jsxs)("div",{className:S.a.card,children:[e&&Object(j.jsx)(G,{}),t&&Object(j.jsx)(A,{})]})})},Y=a(40),U=a.n(Y),J=function(){var e=localStorage.getItem("userEmail"),t=Object(o.g)(),a=Object(x.c)((function(e){return e.loginFormData})),c={title:"",location:"",price:"",description:"",author:e||a.email},s=Object(n.useState)(c),r=Object(g.a)(s,2),i=r[0],l=r[1],d=Object(n.useState)(),m=Object(g.a)(d,2),u=m[0],O=m[1],h=Object(n.useState)(!1),f=Object(g.a)(h,2),_=f[0],C=f[1],y=Object(n.useState)(!1),N=Object(g.a)(y,2),k=N[0],S=N[1],F=function(){var t=Object(b.a)(p.a.mark((function t(){var n,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://camps-e7367-default-rtdb.firebaseio.com/campgrounds.json",t.next=3,fetch("https://camps-e7367-default-rtdb.firebaseio.com/campgrounds.json",{method:"POST",body:JSON.stringify({title:i.title,location:i.location,price:i.price,description:i.description,author:e||a.email})});case 3:if(!(n=t.sent).ok){t.next=12;break}return t.next=7,n.json();case 7:return c=t.sent,s=c.name,t.abrupt("return",s);case 12:"Adding new camp failed!",console.log("Adding new camp failed!");case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(e){l(Object(L.a)(Object(L.a)({},i),{},Object(D.a)({},e.target.id,e.target.value)))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:U.a.container,children:[Object(j.jsx)("h1",{className:U.a.h1,children:"New CampGround"}),Object(j.jsxs)(I.a,{className:U.a.form,noValidate:!0,validated:_,children:[Object(j.jsxs)(I.a.Group,{className:"mb-3",children:[Object(j.jsx)(I.a.Label,{htmlFor:"title",children:"Title"}),Object(j.jsx)(I.a.Control,{type:"text",id:"title",onChange:T,required:!0})]}),Object(j.jsxs)(I.a.Group,{className:"mb-3",children:[Object(j.jsx)(I.a.Label,{htmlFor:"location",children:"Location"}),Object(j.jsx)(I.a.Control,{type:"text",id:"location",onChange:T,required:!0})]}),Object(j.jsxs)(I.a.Group,{className:"mb-3",children:[Object(j.jsx)(I.a.Label,{htmlFor:"price",children:"Campground price"}),Object(j.jsx)(I.a.Control,{type:"number",id:"price",onChange:T,required:!0})]}),Object(j.jsxs)(I.a.Group,{className:"mb-3",children:[Object(j.jsx)(I.a.Label,{htmlFor:"description",children:"Description"}),Object(j.jsx)(I.a.Control,{as:"textarea",rows:3,id:"description",onChange:T,required:!0})]}),Object(j.jsx)(I.a.Group,{children:Object(j.jsx)(I.a.Control,{type:"file",className:U.a.file,id:"image",onChange:function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];t&&O(t)}},required:!0})}),Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{className:U.a.button,variant:"success",size:"lg",type:"button",onClick:function(e){e.preventDefault(),S(!0),F().then((function(e){if(u&&u.name){var a=w.storage().ref();u.dataKey=e,a.child("images/".concat(u.dataKey)).put(u).then((function(){t.push("/campgrounds/camps")}))}})),!1===e.target.checkValidity()&&e.stopPropagation(),C(!0)},disabled:k,children:"Add campground"})})]})]})})},M=a(28),V=a.n(M),W=a(47),q=a(64),Q=a(60),K=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],c=t[1],s=Object(x.b)(),r=Object(x.c)((function(e){return e.isLoggedin})),o=function(){s({type:"logoutFromCampsBtn"}),c(!1)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(W.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",expanded:a,bg:"dark",variant:"dark",className:V.a.navbar,children:Object(j.jsxs)(Q.a,{children:[Object(j.jsx)(i.c,{to:"/campgrounds",className:V.a.campgroundsLogo,onClick:o,children:"CampGrounds"}),Object(j.jsx)(W.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){c(!a)}}),Object(j.jsx)(W.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(q.a,{className:"me-auto",children:[Object(j.jsx)(i.c,{onClick:o,to:"/campgrounds/camps",id:"all",className:V.a.campgroundsLink,activeClassName:V.a.active,children:"All campgrounds"}),!r&&Object(j.jsx)(i.c,{to:"/campgrounds/login",id:"login",className:V.a.loginLink,activeClassName:V.a.active,onClick:function(){s({type:"loginComp"}),c(!1)},children:"Login"}),r&&Object(j.jsx)(i.c,{to:"/campgrounds/login",id:"login",className:V.a.loginLink,activeClassName:V.a.active,onClick:function(){s({type:"loggedout"}),s({type:"getToken",token:null}),s({type:"loginComp"}),localStorage.removeItem("token"),localStorage.removeItem("userEmail"),c(!1)},children:"Logout"})]})})]})})})},H=a(12),Z=a.n(H),X=a(43),$=a.n(X),ee=function(e){var t=e.campId,a=e.getCampFunc,c=e.campData,s={title:c.title,location:c.location,price:c.price,description:c.description},r=Object(n.useState)(s),i=Object(g.a)(r,2),o=i[0],l=i[1],d=Object(x.b)(),m=function(e){l(Object(L.a)(Object(L.a)({},o),{},Object(D.a)({},e.target.id,e.target.value)))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:$.a.container,children:[Object(j.jsx)("h1",{className:$.a.h1,children:"Update CampGround"}),Object(j.jsxs)(I.a,{className:$.a.form,children:[Object(j.jsxs)(I.a.Group,{className:"mb-3",children:[Object(j.jsx)(I.a.Label,{htmlFor:"title",children:"Title"}),Object(j.jsx)(I.a.Control,{type:"text",id:"title",defaultValue:c.title,onChange:m})]}),Object(j.jsxs)(I.a.Group,{className:"mb-3",children:[Object(j.jsx)(I.a.Label,{htmlFor:"location",children:"Location"}),Object(j.jsx)(I.a.Control,{type:"text",id:"location",defaultValue:c.location,onChange:m})]}),Object(j.jsxs)(I.a.Group,{className:"mb-3",children:[Object(j.jsx)(I.a.Label,{htmlFor:"price",children:"Campground price"}),Object(j.jsx)(I.a.Control,{type:"number",id:"price",defaultValue:c.price,onChange:m})]}),Object(j.jsxs)(I.a.Group,{className:"mb-4",children:[Object(j.jsx)(I.a.Label,{htmlFor:"description",children:"Description"}),Object(j.jsx)(I.a.Control,{as:"textarea",rows:3,id:"description",defaultValue:c.description,onChange:m})]}),Object(j.jsxs)("div",{className:$.a.button,children:[Object(j.jsx)(v.a,{onClick:function(e){w.database().ref().child("campgrounds/".concat(t)).update({title:o.title,location:o.location,price:o.price,description:o.description}).then((function(){d({type:"updateCamp",payload:t,payloadData:{title:o.title,location:o.location,price:o.price,description:o.description}}),d({type:"detailsComp"}),a()})).catch((function(e){console.log(e)}))},variant:"success",size:"lg",type:"button",className:"mb-3",children:"Update"}),Object(j.jsx)(v.a,{onClick:function(e){d({type:"detailsComp"})},variant:"secondary",size:"lg",type:"button",className:"mb-3",children:"Cancel"})]})]})]})})},te=a(62),ae=a(37),ne=function(){var e=localStorage.getItem("userEmail"),t=localStorage.getItem("userEmail"),a=Object(o.g)(),c=Object(x.b)(),s=Object(o.h)(),r=Object(x.c)((function(e){return e.loginFormData})),i=Object(x.c)((function(e){return e.allCamps})),l=Object(x.c)((function(e){return e.showEdit})),d=Object(x.c)((function(e){return e.isLoggedin})),m={comment:"",author:e||r.email,id:""},u=Object(n.useState)(!1),O=Object(g.a)(u,2),h=O[0],f=O[1],_=Object(n.useState)(""),C=Object(g.a)(_,2),y=C[0],N=C[1],k=Object(n.useState)(!1),S=Object(g.a)(k,2),F=S[0],T=S[1],E=Object(n.useState)(""),G=Object(g.a)(E,2),P=G[0],z=G[1],A=Object(n.useState)([]),R=Object(g.a)(A,2),Y=R[0],U=R[1],J=Object(n.useState)(),M=Object(g.a)(J,2),V=M[0],W=M[1],q=Object(n.useState)(m),Q=Object(g.a)(q,2),K=Q[0],H=Q[1],X=Object(n.useState)({author:"",description:"",location:"",price:"",title:"",comments:{}}),$=Object(g.a)(X,2),ne=$[0],ce=$[1],se=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://camps-e7367-default-rtdb.firebaseio.com/campgrounds.json",e.next=3,fetch("https://camps-e7367-default-rtdb.firebaseio.com/campgrounds.json",{method:"GET"});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:a=e.sent,c({type:"setAllCamps",payload:a}),e.next=13;break;case 11:"Getting all camps failed!",console.log("Getting all camps failed!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(Object.keys(i).length){var e=Object.keys(i).find((function(e){return e===s.camp}));e&&(ce(i[e]),z(e))}}),[i]);Object(n.useEffect)((function(){se(),w.storage().ref().child("images/".concat(s.camp)).getDownloadURL().then((function(e){W(e)}))}),[]);Object(n.useEffect)((function(){var e=[],t=ne.comments;for(var a in t){var n=Object(L.a)(Object(L.a)({},t[a]),{},{id:a});e.push(n)}U(e)}),[ne]);var re=function(){var t=Object(b.a)(p.a.mark((function t(){var a,n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="".concat("https://camps-e7367-default-rtdb.firebaseio.com/campgrounds/").concat(P,"/comments.json")||!1,!K.comment.trim().length){t.next=15;break}return t.next=4,fetch(a,{method:"POST",body:JSON.stringify({author:e||r.email,comment:K.comment})});case 4:if(!(n=t.sent).ok){t.next=13;break}return t.next=8,n.json();case 8:return c=t.sent,se(),t.abrupt("return",c);case 13:"Adding new camp failed!",console.log("Adding new camp failed!");case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ie=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),T(!0),N(""),e.next=5,re();case 5:H(m),T(!1),!1===t.target.checkValidity()&&t.stopPropagation(),f(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(b.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.database().ref(),n=t.currentTarget.id,e.next=4,a.child("campgrounds/".concat(s.camp,"/comments/").concat(n)).remove();case 4:se();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[!l&&ne&&Object(j.jsxs)("div",{className:Z.a.container,children:[Object(j.jsxs)("div",{children:[t===ne.author&&Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:Z.a.cardButtons,children:[Object(j.jsx)(v.a,{variant:"primary",type:"button",className:Z.a.reviewBtn,size:"lg",onClick:function(e){c({type:"editComp"})},children:"Update"}),Object(j.jsx)(v.a,{variant:"danger",type:"button",className:Z.a.reviewBtn,size:"lg",onClick:function(e){var t,n=w.database().ref();t=w.storage().ref(),n.child("campgrounds/".concat(s.camp)).remove(),t.child("images/".concat(s.camp)).delete().then((function(){c({type:"removeCamp",payload:s.camp}),a.replace("/campgrounds/camps")})).catch((function(e){console.log("error")}))},children:"Delete"})]})}),Object(j.jsx)("div",{className:Z.a.card,children:Object(j.jsxs)(B.a,{style:{width:"40rem"},children:[Object(j.jsx)(B.a.Img,{variant:"top",src:V}),Object(j.jsxs)(B.a.Body,{children:[Object(j.jsx)(B.a.Title,{className:Z.a.title,children:ne.title}),Object(j.jsx)(B.a.Text,{className:Z.a.DescrAuthPrice,children:ne.description})]}),Object(j.jsxs)(te.a,{className:"list-group-flush",children:[Object(j.jsx)(ae.a,{className:Z.a.location,children:ne.location}),Object(j.jsxs)(ae.a,{className:Z.a.DescrAuthPrice,children:["Submitted by ",ne.author]}),Object(j.jsxs)(ae.a,{className:Z.a.DescrAuthPrice,children:["Price/night: $",ne.price]})]})]})})]}),Object(j.jsxs)("div",{className:Z.a.reviewContainer,children:[d&&Object(j.jsx)("h1",{className:Z.a.titleReview,children:"Leave a review"}),!d&&Object(j.jsx)("h1",{className:Z.a.titleReview,children:"Reviews"}),d&&Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:Z.a.textareaTitle,children:"Review text"}),Object(j.jsxs)(I.a,{className:Z.a.reviewForm,noValidate:!0,validated:h,children:[Object(j.jsx)(I.a.Group,{className:"mb-3",children:Object(j.jsx)(I.a.Control,{as:"textarea",rows:3,id:"comment",onChange:function(e){H(Object(L.a)(Object(L.a)({},K),{},Object(D.a)({},e.target.id,e.target.value))),N(e.target.value)},value:y,required:!0})}),Object(j.jsx)(v.a,{variant:"success",size:"lg",type:"button",className:Z.a.submitReviewBtn,onClick:ie,disabled:F,children:"Submit"})]})]}),Y.length<=0&&Object(j.jsx)("div",{className:Z.a.NoCommentsMsg,children:"No reviews available."}),Object(j.jsx)("div",{className:Z.a.commCont,children:Y.length>0&&Y.map((function(e,a){return Object(j.jsxs)(B.a,{className:Z.a.reviewCard,children:[Object(j.jsx)(B.a.Title,{className:Z.a.authorReview,children:e.author}),Object(j.jsx)(B.a.Text,{children:e.comment}),t===e.author&&Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{variant:"danger",type:"button",className:Z.a.deleteReviewButton,onClick:oe,id:e.id,children:"Delete"})})]},a)}))})]})]}),l&&Object(j.jsx)(ee,{campData:ne,campId:P,getCampFunc:se})]})})};var ce=function(){var e=Object(x.c)((function(e){return e.isLoggedin}));return Object(j.jsx)(i.b,{basename:"/",children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(K,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/campgrounds",exact:!0,children:Object(j.jsx)(m,{})}),Object(j.jsx)(o.b,{path:"/campgrounds/camps",children:Object(j.jsx)(N,{})}),Object(j.jsx)(o.b,{path:"/campgrounds/details/:camp",children:Object(j.jsx)(ne,{})}),Object(j.jsxs)(o.b,{path:"/campgrounds/newcamp",children:[e&&Object(j.jsx)(J,{}),!e&&Object(j.jsx)(o.a,{to:"/campgrounds/login"})]}),Object(j.jsx)(o.b,{path:"/campgrounds/login",children:Object(j.jsx)(R,{})}),Object(j.jsx)(o.b,{path:"*",children:Object(j.jsx)(o.a,{to:"/campgrounds"})})]})]})})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},re=(a(88),a(63)),ie={showLogin:!0,showSignup:!1,showEdit:!1,showDetails:!0,loginFormData:{email:"",password:""},idToken:localStorage.getItem("token")||"",userId:localStorage.getItem("userId")||"",isLoggedin:!!localStorage.getItem("token"),logginFromCamps:!1,allCamps:{}},oe=Object(re.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loginComp":return Object(L.a)(Object(L.a)({},e),{},{showLogin:!0,showSignup:!1});case"signupComp":return Object(L.a)(Object(L.a)({},e),{},{showSignup:!0,showLogin:!1});case"detailsComp":return Object(L.a)(Object(L.a)({},e),{},{showDetails:!0,showEdit:!1});case"editComp":return Object(L.a)(Object(L.a)({},e),{},{showEdit:!0,showDetails:!1});case"signupFormData":return Object(L.a)(Object(L.a)({},e),{},{signUpFormData:t.payload});case"loginFormData":return Object(L.a)(Object(L.a)({},e),{},{loginFormData:t.payload});case"loggedin":return Object(L.a)(Object(L.a)({},e),{},{isLoggedin:!0});case"loggedout":return Object(L.a)(Object(L.a)({},e),{},{isLoggedin:!1,loginFormData:null});case"logginFromCampsBtn":return Object(L.a)(Object(L.a)({},e),{},{logginFromCamps:!0});case"logoutFromCampsBtn":return Object(L.a)(Object(L.a)({},e),{},{logginFromCamps:!1});case"setAllCamps":return Object(L.a)(Object(L.a)({},e),{},{allCamps:t.payload});case"removeCamp":var a=e.allCamps;return delete a[t.payload],Object(L.a)(Object(L.a)({},e),{},{allCamps:a});case"updateCamp":var n=e.allCamps;return n[t.payload]=t.payloadData,Object(L.a)(Object(L.a)({},e),{},{allCamps:n});case"getToken":return Object(L.a)(Object(L.a)({},e),{},{idToken:t.payload});default:return e}})),le=oe;r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x.a,{store:le,children:Object(j.jsx)(i.a,{children:Object(j.jsx)(ce,{})})})}),document.getElementById("root")),se()}},[[89,1,2]]]);
//# sourceMappingURL=main.c90921fb.chunk.js.map