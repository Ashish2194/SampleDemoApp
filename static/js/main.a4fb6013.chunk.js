(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[0],{156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(46),s=a.n(o),c=(a(55),a(2)),l=a(3),i=a(5),u=a(4),d=a(6),p=(a(56),a(29)),m=a(47),h=a.n(m),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getStockValueColor=function(e){return e.current_value<e.history.slice(-2)[0].value?"red":e.current_value>e.history.slice(-2)[0].value?"green":null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.stock_data.history;return r.a.createElement("tr",{className:this.props.stock_data.is_selected?"selected":null,id:this.props.stock_name,onClick:this.props.toggleStockSelection.bind(this,this.props.stock_name)},r.a.createElement("td",null,this.props.stock_name.toUpperCase()),r.a.createElement("td",{className:this.getStockValueColor(this.props.stock_data)},this.props.stock_data.current_value.toFixed(2)),r.a.createElement("td",null,r.a.createElement(p.Sparklines,{data:e.map((function(e){return e.value}))},r.a.createElement(p.SparklinesLine,{color:"blue"}))),r.a.createElement("td",{className:"updated_at"},r.a.createElement(h.a,{date:e.slice(-1)[0].time})))}}]),t}(r.a.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getArrow=function(){return"up"===a.props.current_trend?r.a.createElement("span",{className:"up-arrow"},"\u21e7"):"down"===a.props.current_trend?r.a.createElement("span",{className:"down-arrow"},"\u21e9"):"-"},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{title:"Market Trend",className:"icon market-trend"},this.getArrow())}}]),t}(r.a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"highlighter"},r.a.createElement("button",{className:"button button1"},r.a.createElement("div",{className:"dot"}),r.a.createElement("span",{className:"live-text"},"Live Stocks")),r.a.createElement("button",{className:"button button2",onClick:this.props.resetData},"Clear history")),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",{className:"value"},"Value ",r.a.createElement(k,{current_trend:this.props.market_trend})),r.a.createElement("th",null,"History"),r.a.createElement("th",null,"Last Updated"))),r.a.createElement("tbody",null,Object.keys(this.props.stocks).map((function(t,a){var n=e.props.stocks[t];return r.a.createElement(b,{key:a,stock_name:t,stock_data:n,toggleStockSelection:e.props.toggleStockSelection})})),this.props.areStocksLoaded()?null:r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4"},"No stocks loaded yet!")))))}}]),t}(n.Component),f=a(48),v=(a(154),{responsive:!0,scales:{xAxes:[{type:"time",distribution:"linear",ticks:{source:"auto"},time:{displayFormats:{second:"h:mm:ss a"},unit:"second"},scaleLabel:{display:!0,labelString:"Time"}}],yAxes:[{ticks:{beginAtZero:!0,stepValue:10,steps:10},scaleLabel:{display:!0,labelString:"Price ($)"}}]},pan:{enabled:!0,mode:"x"},zoom:{enabled:!0,drag:!1,mode:"x"}}),E=["rgb(244, 67, 54)","rgb(76, 175, 80)","rgb(63, 81, 181)","rgb(255, 152, 0)","rgb(33, 150, 243)","rgb(139, 195, 74)","rgb(255, 87, 34)","rgb(121, 85, 72)","rgb(233, 30, 99)","rgb(205, 220, 57)","rgb(156, 39, 176)","rgb(255, 235, 59)","rgb(158, 158, 158)","rgb(103, 58, 183)","rgb(0, 150, 136)","rgb(255, 193, 7)","rgb(96, 125, 139)","rgb(33, 33, 33)","rgb(169, 4, 4)","rgb(1, 74, 64)","rgb(179, 3, 72)","rgb(84, 58, 68)"],S=function(e,t,a){return{label:e.toUpperCase(),fill:!1,lineTension:0,backgroundColor:t,borderColor:t,borderCapStyle:"butt",borderJoinStyle:"miter",pointBorderColor:t,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:t,pointHoverBorderColor:t,pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10,data:a}},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).updateChart=function(){var e=a.refs.chart.chartInstance;if(0===Object.keys(a.props.stocks).length)return e.data.datasets=[],e.update();Object.keys(a.props.stocks).map((function(t,n){var r=a.props.stocks[t],o=e.data.datasets.find((function(e){return e.label===t.toUpperCase()}));if(r.is_selected){var s=a.props.stocks[t];o?o.data=a.getStockValues(s):s&&(e.data.datasets=e.data.datasets.concat([S(t,E[n],a.getStockValues(s))]))}else o&&e.data.datasets.splice(e.data.datasets.indexOf(o),1);e.update()}))},a.componentDidUpdate=function(){a.updateChart()},a.getStockValues=function(e){return e.history.map((function(e){return{t:new Date(e.time),y:e.value}}))},a.resetZoom=function(){a.refs.chart.chartInstance.resetZoom()},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"graph-header"},"Graph"),r.a.createElement("div",null,r.a.createElement("div",{className:"graph-subtitle"},r.a.createElement("div",null,this.refs.chart&&this.refs.chart.chartInstance.data.datasets.length>0?"Scroll/pinch to zoom, drag to pan.":"Click on any stocks on your left to see graphs."),r.a.createElement("button",{className:"button button3",onClick:this.resetZoom},"Reset zoom")),r.a.createElement(f.a,{data:{datasets:[]},options:v,ref:"chart"})))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).saveNewStockValues=function(e){a.props.hideSpinner();var t=JSON.parse(e.data),n=0,r=0,o=Date.now(),s=a.state.stocks;t.map((function(e){a.state.stocks[e[0]]?(s[e[0]].current_value>Number(e[1])?n++:r++,s[e[0]].current_value=Number(e[1]),s[e[0]].history.push({time:o,value:Number(e[1])})):s[e[0]]={current_value:Number(e[1]),history:[{time:Date.now(),value:Number(e[1])}],is_selected:!1}})),a.setState({stocks:s,market_trend:a.newMarketTrend(n,r)})},a.newMarketTrend=function(e,t){if(e!==t)return e>t?"up":"down"},a.toggleStockSelection=function(e){var t=a.state.stocks;t[e].is_selected=!t[e].is_selected,a.setState({stocks:t})},a.resetData=function(){var e=a.state.stocks;Object.keys(a.state.stocks).map((function(t,a){e[t].history=[e[t].history.pop()]})),a.setState({stocks:e})},a.areStocksLoaded=function(){return Object.keys(a.state.stocks).length>0},a.state={stocks:{},market_trend:void 0,connectionError:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.connection=new WebSocket("ws://stocks.mnet.website/"),this.connection.onmessage=this.saveNewStockValues,this.connection.onclose=function(){e.setState({connectionError:!0})}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.showSpinner?r.a.createElement("div",{id:"loader"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"column-30"},r.a.createElement(g,{stocks:this.state.stocks,toggleStockSelection:this.toggleStockSelection,resetData:this.resetData,market_trend:this.state.market_trend,areStocksLoaded:this.areStocksLoaded})),r.a.createElement("div",{className:"column-70"},r.a.createElement(y,{stocks:this.state.stocks}))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).hideSpinner=function(){e.setState({showSpinner:!1})},e.state={hasError:!1,showSpinner:!0},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(r.a.Fragment,null,"You need to click on \xa0",r.a.createElement("code",null,"Load Unsafe Scripts"),"\xa0 to proceed.",r.a.createElement("br",null)," Look for the \xa0",r.a.createElement("code",null,"shield icon"),"\xa0 on your browser's addreess bar.  \u21e7"):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{hideSpinner:this.hideSpinner,showSpinner:this.state.showSpinner}))}}],[{key:"getDerivedStateFromError",value:function(e){return console.log("some error has occured"),{hasError:!0}}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){e.exports=a(156)},55:function(e,t,a){},56:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.a4fb6013.chunk.js.map