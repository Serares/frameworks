(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{104:function(e,n,r){e.exports={Order:"Order_Order__3y9o8"}},108:function(e,n,r){"use strict";r.r(n);var t=r(4),a=r(5),i=r(7),o=r(6),s=r(8),c=r(0),u=r.n(c),d=r(17),p=r(104),l=r.n(p),m=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map(function(e){return u.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",padding:"2px",border:"1px solid #eee",margin:"0 3px"},key:e.name},e.name,"(",e.amount,")")});return u.a.createElement("div",{className:l.a.Order},u.a.createElement("p",null,"Ingredients:",t),u.a.createElement("p",null,"Price ",u.a.createElement("strong",null,e.price)))},f=r(40),h=r(13),O=r(14),b=r(39),g=function(e){function n(){return Object(t.a)(this,n),Object(i.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=u.a.createElement(b.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return u.a.createElement(m,{key:e.id,price:+e.price,ingredients:e.ingredients})})),u.a.createElement("div",null,e)}}]),n}(c.Component);n.default=Object(h.b)(function(e){return{orders:e.orders.orders,loading:e.orders.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{fetchOrders:function(n,r){return e(O.d(n,r))}}})(Object(f.a)(g,d.a))}}]);
//# sourceMappingURL=5.4a2f0fae.chunk.js.map