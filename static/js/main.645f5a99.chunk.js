(this["webpackJsonpcovid19-map"]=this["webpackJsonpcovid19-map"]||[]).push([[0],{30:function(e,t,a){e.exports=a(46)},35:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(7),i=a.n(l),o=(a(35),a(36),a(18)),s=a(21),c=a(22),m=a(28),d=a(23),h=a(29),u=a(6),f=a(10),p=a.n(f),v=a(13),y=[],E=[],b=[],g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={setTooltipContent:e.setTooltipContent,chart:"pie"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",{download:!0,complete:function(t){e.confirmed=[];var a=!0,r=67786,n=!0,l=!1,i=void 0;try{for(var o,s=t.data[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value;if(a)a=!1;else{for(var m="",d=c.length-1;""===m&&d>0;)m=c[d],d-=1;""===m&&(m=0),(m=Number(m))>r&&(r=m);var h={markerOffset:0,name:c[0]?c[0]+", "+c[1]:c[1],coordinates:[c[3],c[2]],size:m,val:m};y.push(h)}}}catch(f){l=!0,i=f}finally{try{n||null==s.return||s.return()}finally{if(l)throw i}}console.log(r);for(var u=0;u<y.length;u++)y[u].size=(y[u].size-0)/(r-0);e.setState({})}}),p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv",{download:!0,complete:function(t){e.recovered=[];var a=!0,r=67786,n=!0,l=!1,i=void 0;try{for(var o,s=t.data[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value;if(a)a=!1;else{for(var m="",d=c.length-1;""===m&&d>0;)m=c[d],d-=1;""===m&&(m=0),(m=Number(m))>r&&(r=m);var h={markerOffset:0,name:c[0]?c[0]+", "+c[1]:c[1],coordinates:[c[3],c[2]],size:m,val:m};E.push(h)}}}catch(f){l=!0,i=f}finally{try{n||null==s.return||s.return()}finally{if(l)throw i}}for(var u=0;u<E.length;u++)E[u].size=(E[u].size-0)/(r-0);e.setState({})}}),p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv",{download:!0,complete:function(t){e.deaths=[];var a=!0,r=67786,n=!0,l=!1,i=void 0;try{for(var o,s=t.data[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value;if(a)a=!1;else{for(var m="",d=c.length-1;""===m&&d>0;)m=c[d],d-=1;""===m&&(m=0),(m=Number(m))>r&&(r=m);var h={markerOffset:0,name:c[0]?c[0]+", "+c[1]:c[1],coordinates:[c[3],c[2]],size:m,val:m};b.push(h)}}}catch(f){l=!0,i=f}finally{try{n||null==s.return||s.return()}finally{if(l)throw i}}for(var u=0;u<b.length;u++)b[u].size=(b[u].size-0)/(r-0);e.setState({})}})}},{key:"render",value:function(){var e=this,t=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,null,n.a.createElement("div",{className:"ml-3 small controls"},n.a.createElement(v.a.Check,{inline:!0,checked:"pie"===t.state.chart,label:"Circles",type:"radio",name:"a",id:"inline-radio-1",onClick:function(){t.setState({chart:"pie"})}}),n.a.createElement(v.a.Check,{inline:!0,checked:"bar"===t.state.chart,label:"Bars",type:"radio",name:"a",id:"inline-radio-2",onClick:function(){t.setState({chart:"bar"})}}))),n.a.createElement(u.ComposableMap,{projection:"geoMercator",height:window.innerWidth,width:window.innerHeight-50,style:{width:"100%",height:"100%"}},n.a.createElement(u.ZoomableGroup,{zoom:1,maxZoom:1e3},n.a.createElement(u.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-10m.json"},(function(t){return t.geographies.map((function(t){return n.a.createElement(u.Geography,{key:t.rsmKey,geography:t,onMouseEnter:function(){var a,r=t.properties,n=r.NAME,l=r.POP_EST;"Antarctica"!==n&&e.state.setTooltipContent("".concat(n," \u2014 ").concat((a=l)>1e9?Math.round(a/1e8)/10+"Bn":a>1e6?Math.round(a/1e5)/10+"M":Math.round(a/100)/10+"K"))},onMouseLeave:function(){e.state.setTooltipContent("")},style:{default:{fill:"#ddd",outline:"none"},hover:{fill:"#999",outline:"none"},pressed:{fill:"#ddd",outline:"none"}}})}))})),y.map((function(e){var a=e.name,r=e.coordinates,l=e.markerOffset,i=e.size,o=e.val;return n.a.createElement(u.Marker,{coordinates:r},n.a.createElement("rect",{style:"bar"===t.state.chart?{display:"block",hover:{fill:"#F00"}}:{display:"none",hover:{fill:"#F00"}},x:-3,y:40*-i/2,width:2,height:40*i/2,fill:"#F008"}),n.a.createElement("circle",{style:"pie"===t.state.chart?{display:"block",hover:{fill:"#F00"}}:{display:"none",hover:{fill:"#F00"}},r:10*Math.sqrt(i),fill:"#F008"}),n.a.createElement("title",null,a+" - "+o+" confirmed"),n.a.createElement("text",{textAnchor:"middle",y:l,style:{fontSize:"2px",fontFamily:"system-ui",fill:"#5D5A6D"}}))})),E.map((function(e){var a=e.name,r=e.coordinates,l=e.markerOffset,i=e.size,o=e.val;return n.a.createElement(u.Marker,{coordinates:r},n.a.createElement("rect",{style:"bar"===t.state.chart?{display:"block",hover:{fill:"#0F0"}}:{display:"none",hover:{fill:"#0F0"}},x:-1,y:40*-i/2,width:2,height:40*i/2,fill:"#0F08"}),n.a.createElement("circle",{style:"pie"===t.state.chart?{display:"block",hover:{fill:"#0F0"}}:{display:"none",hover:{fill:"#0F0"}},r:10*Math.sqrt(i),fill:"#0F08"}),n.a.createElement("title",null,a+" - "+o+" recovered"),n.a.createElement("text",{textAnchor:"middle",y:l,style:{fontSize:"2px",fontFamily:"system-ui",fill:"#5D5A6D"}}))})),b.map((function(e){var a=e.name,r=e.coordinates,l=e.markerOffset,i=e.size,o=e.val;return n.a.createElement(u.Marker,{coordinates:r},n.a.createElement("rect",{style:"bar"===t.state.chart?{display:"block",hover:{fill:"#000"}}:{display:"none",hover:{fill:"#000"}},x:1,y:40*-i/2,width:2,height:40*i/2,fill:"#0008"}),n.a.createElement("circle",{style:"pie"===t.state.chart?{display:"block",hover:{fill:"#000"}}:{display:"none",hover:{fill:"#000"}},r:5*Math.sqrt(i),fill:"#0008"}),n.a.createElement("title",null,a+" - "+o+" deaths"),n.a.createElement("text",{textAnchor:"middle",y:l,style:{fontSize:"2px",fontFamily:"system-ui",fill:"#5D5A6D"}}))})))))}}]),t}(n.a.Component),_=Object(r.memo)(g),k=a(25),S=a(26),w=a(27),x=a(8),C=a(17),O=a(11),D=a(12);var z=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],i=Object(r.useState)(!1),s=Object(o.a)(i,2),c=s[0],m=s[1];return[n.a.createElement(C.a,{bg:"light",fixed:"top",className:"p-0 pl-2"},n.a.createElement(C.a.Brand,null,n.a.createElement(O.a,{icon:D.c}),n.a.createElement("span",{className:"small"}," COVID19 ")),n.a.createElement("span",{className:"small text-danger"},"Map data responsibly!")),n.a.createElement(S.a,{fluid:!0,className:"w-100 h-100 p-0"},n.a.createElement(w.a,{noGutters:"true",className:"h-100"},n.a.createElement(x.a,{className:"h-100"},n.a.createElement(_,{setTooltipContent:l,style:{marginTop:"50px"}}),n.a.createElement(k.a,null,a)))),n.a.createElement("div",{className:"info small text-muted",style:c?{display:"none"}:{display:"block"},onClick:function(){m(!0)}},n.a.createElement("span",{class:"text-danger"},"Red: confirmed"),n.a.createElement("br",null),n.a.createElement("span",{class:"text-success"},"Green: recovered"),n.a.createElement("br",null),n.a.createElement("span",{class:"text-dark"},"Black: deceased"),n.a.createElement("br",null),n.a.createElement("sub",null,"Using live data from ",n.a.createElement("br",null),n.a.createElement("a",{target:"_blank",href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"},n.a.createElement(O.a,{icon:D.b})," John Hopkins repository"),n.a.createElement("br",null),"Last synchronized on ",(new Date).toLocaleDateString()," at ",(new Date).toLocaleTimeString(),n.a.createElement("br",null),n.a.createElement("a",{target:"_blank",href:"https://github.com/daniel-karl/covid19-map"},n.a.createElement(O.a,{icon:D.a})," Who made this?")))]};i.a.render(n.a.createElement(z,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.645f5a99.chunk.js.map