(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),s=a.n(i),l=(a(13),a(3)),c=a(4),u=a(6),o=a(5),m=a(7),h=function(e){return r.a.createElement("form",{onSubmit:e.submit,className:"form"},r.a.createElement("input",{type:"text",value:e.value,placeholder:"Wpisz miasto",onChange:e.change}),r.a.createElement("button",null,"Wyszukaj miasta"))},p=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Aplikacja pogodowa"))},d=function(e){var t=e.weather,a=t.sunrise,n=t.sunset,i=t.temp,s=t.pressure,l=t.wind,c=t.err,u=e.weather.city,o=null;if(!c&&u){var m=new Date(1e3*a).toLocaleTimeString(),h=new Date(1e3*n).toLocaleTimeString();u=u.charAt(0).toUpperCase()+u.slice(1),o=r.a.createElement("div",{class:"results"},r.a.createElement("h4",null,"Wyniki wyszukiwania dla ",r.a.createElement("em",null,u)),r.a.createElement("h5",null,"Aktualna temperatura: ",i," \xb0C"),r.a.createElement("h5",null,"Aktualne ci\u015bnienie: ",s," hPa"),r.a.createElement("h5",null,"Wsch\xf3d s\u0142o\u0144ca dzisiaj: ",m),r.a.createElement("h5",null,"Zach\xf3d s\u0142o\u0144ca dzisiaj: ",h),r.a.createElement("h5",null," Aktualna si\u0142a wiatru: ",l," m/s"))}return r.a.createElement("div",{className:"result"},c?"Nie ma w bazie "+u:o)},w=(a(14),"6dd59afe128b829271e3c378ec2ba2cc"),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",date:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",err:!1},a.handleInputChange=function(e){a.setState({value:e.target.value})},a.handleCitySubmit=function(e){e.preventDefault();var t="https://api.openweathermap.org/data/2.5/weather?q="+a.state.value+"&appid="+w+"&units=metric";fetch(t).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(e){var t=(new Date).toLocaleString();a.setState((function(a){return{err:!1,date:t,city:a.value,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:e.main.temp,pressure:e.main.pressure,wind:e.wind.speed}}))})).catch((function(e){console.log(e),a.setState((function(e){return{err:!0,city:e.value}}))}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement("div",{className:"main"},r.a.createElement(h,{value:this.state.value,change:this.handleInputChange,submit:this.handleCitySubmit}),r.a.createElement(d,{weather:this.state})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9f4261ac.chunk.js.map