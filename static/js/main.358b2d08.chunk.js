(this.webpackJsonpinsta_stat=this.webpackJsonpinsta_stat||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(4),c=a.n(n),i=a(5),o=a(6),d=a(9),l=a(8),u={instagramAppId:"534548134144297",instagramSecret:"59b380e96bbb3de5f48ce4438c1916f9",redirectUri:"https://tantrojan.github.io/"},m=a(7),p=a.n(m),h=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var r;Object(i.a)(this,a),(r=t.call(this,e)).state={requestUrl:"https://api.instagram.com/oauth/authorize?",instagramAppId:u.instagramAppId,instagramSecret:u.instagramSecret,redirectUri:u.redirectUri,userAccessToken:"",userId:""};var s=window.location.search,n=new URLSearchParams(s).get("code");return console.log("Inside constructor"),r.getUserAccessToken(n),r}return Object(o.a)(a,[{key:"getUserAccessToken",value:function(e){var t={client_id:this.state.instagramAppId,client_secret:this.state.instagramSecret,grant_type:"authorization_code",redirect_uri:this.state.redirectUri,code:e};fetch("https://api.instagram.com/oauth/access_token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:p.a.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},{key:"getUserCode",value:function(){var e=new XMLHttpRequest;console.log("Inside getUserAccessToken");var t=this.state.requestUrl+"client_id="+this.state.instagramAppId+"&redirect_uri="+this.state.redirectUri+"&scope=user_profile,user_media&response_type=code";e.addEventListener("load",(function(){console.log(e.responseURL),window.location.replace(e.responseURL)})),e.open("GET",t),e.send()}},{key:"render",value:function(){var e;return e=""===this.state.userAccessToken?s.a.createElement("button",{type:"button",onClick:this.getUserCode.bind(this),className:"btn btn-primary"},"Give Authorization"):s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},this.state.userId),s.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},this.state.userAccessToken),s.a.createElement("p",{className:"card-text"},"Stay Hungry, Stay Foolish"))),s.a.createElement("div",null,e)}}]),a}(r.Component);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.358b2d08.chunk.js.map