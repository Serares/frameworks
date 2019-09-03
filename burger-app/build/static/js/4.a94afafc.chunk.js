(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(102),r=n.n(l);t.a=function(e){var t=null,n=[r.a.InputElement];e.invalid&&e.shouldValidate&&e.touched&&n.push(r.a.Invalid);var a=null;switch(e.invalid&&e.touched&&(a=i.a.createElement("p",null,"Please enter a valid value for ",e.inputName,"!")),e.elementType){case"input":t=i.a.createElement("input",Object.assign({onChange:e.changed},e.elementConfig,{value:e.value,className:n.join(" ")}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({onChange:e.changed},e.elementConfig,{value:e.value,className:n.join(" ")}));break;case"select":t=i.a.createElement("select",Object.assign({onChange:e.changed},e.elementConfig,{value:e.value,className:n.join(" ")}),e.elementConfig.option.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=i.a.createElement("input",Object.assign({onChange:e.changed},e.elementConfig,{value:e.value,className:n.join(" ")}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label},e.label),t,a)}},102:function(e,t,n){e.exports={Input:"Input_Input__15W6Z",Label:"Input_Label__3r7lC",InputElement:"Input_InputElement__1VmBV",Invalid:"Input_Invalid__1ycfH"}},106:function(e,t,n){e.exports={Auth:"Auth_Auth__2f_yZ"}},107:function(e,t,n){"use strict";n.r(t);var a=n(21),i=n(3),l=n(4),r=n(5),u=n(7),o=n(6),c=n(8),s=n(0),d=n.n(s),p=n(96),h=n(101),m=n(30),g=n(39),v=n(106),f=n.n(v),b=n(14),E=n(13),y=n(19),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0,isEmail:!0,minLength:6},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!1},n.inputChangedHandler=function(e,t){var l=Object(i.a)({},n.state.controls,Object(a.a)({},t,Object(i.a)({},n.state.controls[t],{value:e.target.value,valid:Object(y.a)(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:l})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthModeHandler=function(){n.setState(function(e){return{isSignup:!e.isSignup}})},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map(function(t){return d.a.createElement(h.a,{key:t.id,inputName:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){e.inputChangedHandler(n,t.id)}})});this.props.loading&&(a=d.a.createElement(g.a,null));var i=null;this.props.error&&(i=d.a.createElement("p",{style:{color:"red"}},this.props.error));var l=null;return this.props.isAuthenticated&&(l=d.a.createElement(p.a,{to:this.props.authRedirectPath})),d.a.createElement("div",{className:f.a.Auth},l,i,d.a.createElement("form",{onSubmit:this.submitHandler},a,d.a.createElement(m.a,{btnType:"Success"},"Submit"),"Currently ",this.state.isSignup?"Registering new email":"Signing in"),d.a.createElement(m.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"Go to ",this.state.isSignup?"Sign in":"Sign up"))}}]),t}(s.Component);t.default=Object(E.b)(function(e){return{price:e.burgerBuilder.totalPrice,loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!=e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetAuthRedirectPath:function(){return e(b.j("/"))}}})(j)}}]);
//# sourceMappingURL=4.a94afafc.chunk.js.map