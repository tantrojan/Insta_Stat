(this.webpackJsonpinsta_stat=this.webpackJsonpinsta_stat||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(2),c=a.n(r),o=a(3),i=a(4),l=a(6),u=a(5),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={requestUrl:"https://api.instagram.com/oauth/authorize?",instagramAppId:"534548134144297",redirectUri:"https://tantrojan.github.io/",userAccessToken:""},e}return Object(i.a)(a,[{key:"getUserAccessToken",value:function(){var e=new XMLHttpRequest;console.log("Inside getUserAccessToken");var t=this.state.requestUrl+"client_id="+this.state.instagramAppId+"&redirect_uri="+this.state.redirectUri+"&scope=user_profile,user_media&response_type=code";e.addEventListener("load",(function(){console.log(e.responseURL),window.open(e.responseURL)})),e.open("GET",t),e.send()}},{key:"render",value:function(){var e;return e=""===this.state.userAccessToken?n.a.createElement("button",{type:"button",onClick:this.getUserAccessToken.bind(this),className:"btn btn-primary"},"Give Authorization"):n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Steve Jobs"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"steve@apple.com"),n.a.createElement("p",{className:"card-text"},"Stay Hungry, Stay Foolish"))),n.a.createElement("div",null,e)}}]),a}(s.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.f9d182ed.chunk.js.map