(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),l=n(4),r=n(1),h=n.n(r),u=(n(12),n(13),n(0)),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={time:(new Date).toLocaleTimeString()},e.timerId=setInterval((function(){}),0),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()}),console.log(e.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props;e!==t&&console.log("The Clock was renamed from ".concat(e.name," to ").concat(t.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.props.name,t=this.state.time;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("div",{className:"Clock__name",children:e}),Object(u.jsx)("div",{className:"Clock__time",children:t})]})}}]),n}(h.a.Component),p=["What are you doing?","What?!","Ouch!","Stop!","Click!","Click! Click!","Click! Click! Click!","One more time and I'll tell your mom that's you ate all candies","What's wrong with you?","Okay...","Fine. Name the price.","Am I a joke to you?","I'm calling the police!","Long story short...","HELP!!!","Look what you've done!","Now I need whiskey"],d=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isVisible:!0,name:"Hello, gorgeous!"},e.changeName=function(){var t=Math.floor(Math.random()*p.length);e.setState({name:p[t]})},e.showClock=function(){e.setState({isVisible:!0})},e.hideClock=function(){e.setState({isVisible:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.isVisible;return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"App__container",children:[Object(u.jsx)("h1",{className:"App__title",children:"React clock"}),Object(u.jsx)("div",{className:"App__clock",children:n&&Object(u.jsx)(m,{name:t})}),Object(u.jsxs)("div",{className:"App__bar",children:[Object(u.jsx)("button",{type:"button",className:"App__button App__button--show",onClick:this.showClock,disabled:n,children:"Show clock"}),Object(u.jsx)("button",{type:"button",className:"App__button App__button--hide",onClick:this.hideClock,disabled:!n,children:"Hide clock"}),Object(u.jsx)("button",{type:"button",className:"App__button",onClick:this.changeName,children:"Change name"})]})]})})}}]),n}(h.a.Component),b=d;a.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.77cf920b.chunk.js.map