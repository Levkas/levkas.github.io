(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),i=a.n(s),r=(a(13),a(0));function o(){return Object(r.jsx)("nav",{className:"green darken-1",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#",className:"brand-logo",children:"Movies finder"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#",children:"My other app"})})})]})})}var l=a(2),j=a(3),h=a(5),d=a(4),m=a(8),u=function(e){return Object(r.jsxs)("div",{id:e.imdbID,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image movie-image",children:"N/A"===e.Poster?Object(r.jsx)("img",{className:"activator film__img",src:"https://via.placeholder.com/300x400?text=".concat(e.Title)}):Object(r.jsx)("img",{className:"activator film__img",src:e.Poster})}),Object(r.jsxs)("div",{className:"card-content movie-content",children:[Object(r.jsx)("span",{className:"card-title activator green-text text-darken-1",children:e.Title}),Object(r.jsxs)("p",{children:[e.Year," ",Object(r.jsx)("span",{className:"right",children:e.Type})," "]})]})]})},v=function(e){return console.log("movies",e.movies),Object(r.jsx)("div",{className:"movies",children:e.movies.map((function(e){return Object(r.jsx)(u,Object(m.a)({},e),e.imdbID)}))})},b=function(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})},x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={searchValue:""},c.changeSearchValue=function(e){var t=e.target.value;c.setState({searchValue:t})},c.findMovie=function(e){13===e.keyCode&&c.props.getMovie(c.state.searchValue)},c}return Object(j.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("input",{placeholder:"Input name movie",type:"text",className:"validate",value:this.state.searchValue,onChange:this.changeSearchValue,onKeyDown:this.findMovie})})})}}]),a}(n.a.Component),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[]},e.getMovie=function(t){fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=24b3a9f2")).then((function(e){return e.json()})).then((function(t){t.totalResults>0?e.setState({movies:t.Search}):e.setState({movies:[]})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?s=Matrix&apikey=24b3a9f2").then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search})}))}},{key:"render",value:function(){var e;return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(x,{getMovie:this.getMovie}),(null===(e=this.state.movies)||void 0===e?void 0:e.length)?Object(r.jsx)(v,{movies:this.state.movies}):Object(r.jsx)(b,{})]})}}]),a}(n.a.Component);function f(){return Object(r.jsx)("footer",{className:"page-footer green lighten-2",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More my app"})]})})})}var p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(O,{}),Object(r.jsx)(f,{})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.37edcfcb.chunk.js.map