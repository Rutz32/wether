(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=(n(15),n(2)),l=n(3),m=n(5),s=n(4),u=n(6),p=(n(17),n(1)),h=(r.a.Component,function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.getWether},r.a.createElement("input",{type:"text",name:"city",placeholder:"please enter your city name"}),r.a.createElement("br",null),r.a.createElement("button",{className:"clickMe",onSubmit:this.handleMe},"Click Me"))}}]),t}(r.a.Component)),d="e5bb6a6ec2a2ebedd2be9141ca009d3b",b="https://api.openweathermap.org/data/2.5",f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).getWether=function(t){t.preventDefault();var n=t.target.elements.city.value,a="".concat(b,"/weather?q=").concat(n,"&APPID=").concat(d,"&units=imperial");fetch(a).then(function(e){return e.json()}).then(function(t){e.setState({CityName:t.name,temp:t.main.temp,minTemperature:t.main.temp_min,maxTemperature:t.main.temp_max,WindSpeed:t.wind.speed,WetherDescription:t.weather[0].description})}).catch(function(e){return console.log("Error is here: ",e)})},e.state={CityName:"",minTemperature:"",WetherDescription:"",maxTemperature:"",WindSpeed:"",temp:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"valueDisplay"},r.a.createElement(h,{getWether:this.getWether}),r.a.createElement("div",{className:"AllValues"},r.a.createElement("p",null,"City: ",this.state.CityName),r.a.createElement("p",null,"Wether Description:",this.state.WetherDescription),r.a.createElement("p",null,"temp: ",this.state.temp),r.a.createElement("p",null,"temp_max: ",this.state.maxTemperature),r.a.createElement("p",null,"temp_min: ",this.state.minTemperature),r.a.createElement("p",null,"Wind Speed: ",this.state.WindSpeed)))}}]),t}(r.a.Component),E=(n(18),n(20),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.9067dfa9.chunk.js.map