(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),i=s(7),r=s.n(i),o=(s(14),s(1)),u=s(2),c=s(4),l=s(3),h=s(5),d=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"button",onClick:this.props.onClick},this.props.expr)}}]),e}(a.a.Component),p=function(t){function e(t){var s;return Object(o.a)(this,e),(s=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={isReset:!0},s}return Object(h.a)(e,t),Object(u.a)(e,[{key:"isClear",value:function(){return"0"===this.props.display?"AC":"C"}},{key:"updateDisplay",value:function(t){var e=this.props.display+t;this.props.updateState(void 0,e,void 0)}},{key:"calc",value:function(t){this.props.calculate(t),this.setState({isReset:!0})}},{key:"handleClick",value:function(t){if(parseFloat(t)||"0"===t)this.state.isReset?(this.props.updateState(void 0,t,void 0),this.setState({isReset:!1})):this.updateDisplay(t);else switch(t){case"+":case"-":case"\xd7":case"\xf7":case"%":this.state.isReset||this.calc(t);break;case"=":this.props.calculate(t);break;case"+/-":if("0"!==this.props.display){var e=this.props.display.startsWith("-")?this.props.display.substring(1):"-"+this.props.display;this.props.updateState(void 0,e,void 0)}break;case".":-1===this.props.display.indexOf(".")&&this.updateDisplay(t);break;case"AC":this.props.updateState(0,"0",null),this.setState({isReset:!0});break;default:this.props.updateState(void 0,"0",void 0),this.setState({isReset:!0})}}},{key:"renderButton",value:function(t){return a.a.createElement(d,{expr:t,onClick:this.handleClick.bind(this,t)})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"buttons-row"},this.renderButton(this.isClear()),this.renderButton("+/-"),this.renderButton("%"),this.renderButton("\xf7")),a.a.createElement("div",{className:"buttons-row"},this.renderButton("7"),this.renderButton("8"),this.renderButton("9"),this.renderButton("\xd7")),a.a.createElement("div",{className:"buttons-row"},this.renderButton("4"),this.renderButton("5"),this.renderButton("6"),this.renderButton("-")),a.a.createElement("div",{className:"buttons-row"},this.renderButton("1"),this.renderButton("2"),this.renderButton("3"),this.renderButton("+")),a.a.createElement("div",{className:"buttons-row"},a.a.createElement("div",{className:"button"}),this.renderButton("0"),this.renderButton("."),this.renderButton("=")))}}]),e}(a.a.Component),v=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,this.props.value)}}]),e}(a.a.Component);s(15);var b=function(t){function e(t){var s;return Object(o.a)(this,e),(s=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={result:0,disp:"0",op:null},s}return Object(h.a)(e,t),Object(u.a)(e,[{key:"updateState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.result,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.disp,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.op;this.setState({result:t,disp:e,op:s})}},{key:"calculate",value:function(t){var e,s=("+"===(e=this.state.op)?function(t,e){return t+e}:"-"===e?function(t,e){return t-e}:"\xd7"===e?function(t,e){return t*e}:"\xf7"===e?function(t,e){return t/e}:"%"===e?function(t,e){return t%e}:function(t,e){return e})(this.state.result,parseFloat(this.state.disp));this.updateState(s,s.toString(),t)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(v,{value:this.state.disp}),a.a.createElement(p,{display:this.state.disp,result:this.state.result,updateState:this.updateState.bind(this),calculate:this.calculate.bind(this)}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,s){t.exports=s(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.122a449c.chunk.js.map