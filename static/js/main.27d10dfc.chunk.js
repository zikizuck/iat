(this.webpackJsonpiat=this.webpackJsonpiat||[]).push([[0],{118:function(e,t,a){e.exports=a(263)},123:function(e,t,a){},124:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(112),s=a.n(c),l=(a(123),a(124),a(10)),o=a(11),i=a(13),m=a(12),u=a(14),p=(a(72),a(47),a(42)),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.onhand>0?"qty":"";this.props.stock5;return r.a.createElement("div",null,r.a.createElement("div",{className:"card "},r.a.createElement("div",null,this.props.id),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.item),r.a.createElement("p",{className:"card-text"},"W.A.I # :",this.props.WAI),r.a.createElement("p",{className:"card-text"},"YouTech # :",this.props.YT),r.a.createElement("p",{className:"card-text"},"Lester # :",this.props.Lester),r.a.createElement("p",{className:"card-text"},"J & N # :",this.props.JN),r.a.createElement("p",{className:"card-text"},"Class :",this.props.class),r.a.createElement("p",{className:"card-text"},this.props.vpartno," "),r.a.createElement("p",{className:"card-text"},this.props.descrip),r.a.createElement("p",{className:e},"In Stock: ",this.props.onhand),r.a.createElement("p",{className:"card-text"},"IAT Price :",this.props.price,"  "))))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={product:[],search:"",search2:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://sheet.best/api/sheets/60b772a2-1a0e-422e-9467-6182a09001c3").then((function(e){return e.json()})).then((function(t){e.setState({product:t}),console.log(t)}))}},{key:"clickHandler",value:function(e){""!==e.target.value&&this.setState({search:e.target.value.toUpperCase()})}},{key:"search2Handler",value:function(e){""!==e.target.value&&this.setState({search2:e.target.value.toUpperCase()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"by IAT number",onChange:this.clickHandler.bind(this),onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}}),r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"By WAI number",onChange:this.search2Handler.bind(this),onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Reset")),r.a.createElement("div",{className:"card-deck"},this.state.product.filter((function(t){return t.item.includes(e.state.search)})).map((function(e){return r.a.createElement(h,e)})))))}}]),t}(n.Component),v=(a(130),a(265)),b=a(19),f=a(31),g=f.object().shape({title:f.string().min(2).max(255).required(),image:f.mixed().required(),tags:f.string()}),E=(a(262),a(45)),y=a(116),N=a.n(y),k=(n.Component,function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e);return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getDate()+" "+t.getFullYear()}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"IAT inventory"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})))}}]),t}(n.Component));var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.27d10dfc.chunk.js.map