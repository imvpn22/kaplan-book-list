(this["webpackJsonpkaplan-book-list"]=this["webpackJsonpkaplan-book-list"]||[]).push([[0],{32:function(e,t,o){},33:function(e,t,o){},60:function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"getBookList",(function(){return N})),o.d(n,"getBookListSuccess",(function(){return L})),o.d(n,"getUserData",(function(){return w}));var s=o(1),i=o(5),a=o.n(i),r=(o(32),o(33),o(6)),c=o(7),l=o(10),u=o(9),h=o(0),b=function(e){var t=e.book;return Object(h.jsxs)("div",{className:"book-card",children:[Object(h.jsx)("div",{className:"book-img",children:t.volumeInfo.imageLinks?Object(h.jsx)("img",{src:t.volumeInfo.imageLinks.thumbnail,alt:t.volumeInfo.title+" image"}):Object(h.jsx)("i",{className:"fas fa-book"})}),Object(h.jsxs)("div",{className:"book-data",children:[Object(h.jsxs)("div",{className:"book-title",children:[" ",t.volumeInfo.title," "]}),Object(h.jsxs)("div",{className:"book-author",children:[t.volumeInfo.authors.reduce((function(e,t){return e+" "+t}),"")," "]}),Object(h.jsxs)("div",{className:"book-other",children:[Object(h.jsxs)("div",{children:["Publisher: ",t.volumeInfo.publisher]}),Object(h.jsxs)("div",{children:["Published Date: ",t.volumeInfo.publishedDate]})]})]})]})},p=function(e){return Object(h.jsx)("div",{className:"popup-overlay "+(e.isPopupShow?"":"hidden"),children:Object(h.jsxs)("div",{className:"popup-content",children:[Object(h.jsx)("div",{className:"popup-title",children:e.title}),Object(h.jsx)("span",{className:"close-icon",onClick:e.closePopup,children:Object(h.jsx)("i",{className:"fa fa-times"})}),e.children]})})},d=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(r.a)(this,o);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={title:"",authors:"",publisher:""},e.handleTitleChange=function(t){e.setState({title:t.target.value})},e.handleAuthorChange=function(t){e.setState({authors:t.target.value})},e.handlePublisherChange=function(t){e.setState({publisher:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var o=e.state,n=o.title,s=o.authors,i=o.publisher,a=Date.now(),r=new Date(a),c="".concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate());e.props.createBook({id:a,volumeInfo:{title:n,authors:[s],publisher:i,publishedDate:c}}),e.setState({title:"",authors:"",publisher:""})},e}return Object(c.a)(o,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.title,o=e.authors,n=e.publisher;return Object(h.jsxs)("form",{className:"new-book-form",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("div",{className:"form-item",children:[Object(h.jsx)("label",{children:"Title :"}),Object(h.jsx)("input",{value:t,placeholder:"Enter book Title",onChange:this.handleTitleChange,required:!0})]}),Object(h.jsxs)("div",{className:"form-item",children:[Object(h.jsx)("label",{children:"Author :"}),Object(h.jsx)("input",{value:o,placeholder:"Enter book Author",onChange:this.handleAuthorChange,required:!0})]}),Object(h.jsxs)("div",{className:"form-item",children:[Object(h.jsx)("label",{children:"Publisher :"}),Object(h.jsx)("input",{value:n,placeholder:"Enter book Publisher",onChange:this.handlePublisherChange,required:!0})]}),Object(h.jsx)("div",{className:"form-item new-btn-box",children:Object(h.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})})]})}}]),o}(s.Component),j=o(3),f=o(8),m=o(15),v=o.n(m),g=o(25),O=o(26),k=o.n(O),x="GET_BOOK_LIST_SUCCESS",S="GET_BOOK_LIST",N=function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){var o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep");case 2:o=e.sent,t(L(o.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){return{type:x,res:e}},w=function(e){return{type:S,userId:e}},y=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(r.a)(this,o);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={bookList:[],isLoading:!0,isFailed:!1,searchQur:"",isPopupShow:!1},e.getBookList=function(){e.setState({isLoading:!0,isFailed:!1}),e.props.actions.getBookList().then((function(){e.props.items&&e.props.items.length?(e.setState({bookList:e.props.items,isLoading:!1,isFailed:!1}),localStorage.setItem("bookList",JSON.stringify(e.props.items))):e.setState({bookList:[],isLoading:!1,isFailed:!0})}))},e.handleQuery=function(t){var o=t.target.value;o=o.replace(/[-\\/\\^$*+?.()|[\]{}]/g,"\\$&"),e.setState({searchQur:o})},e.filterBooks=function(){var t=e.state,o=t.bookList,n=t.searchQur,s=new RegExp(n,"ig");return o.filter((function(e){return!!(e.volumeInfo.title&&e.volumeInfo.title.match(s)||e.volumeInfo.publisher&&e.volumeInfo.publisher.match(s)||e.volumeInfo.authors&&e.volumeInfo.authors.length&&e.volumeInfo.authors.reduce((function(e,t){return e+" "+t}),"").match(s))}))},e.openPopup=function(){e.setState({isPopupShow:!0})},e.closePopup=function(){e.setState({isPopupShow:!1})},e.createBook=function(t){var o=e.state.bookList;o.push(t),e.setState(o),localStorage.setItem("bookList",JSON.stringify(o)),e.closePopup()},e}return Object(c.a)(o,[{key:"componentDidMount",value:function(){this.props.items&&this.props.items.length?this.setState({bookList:this.props.items}):this.getBookList()}},{key:"render",value:function(){var e=this,t=this.state,o=t.isLoading,n=t.isFailed,s=t.isPopupShow,i=this.filterBooks();return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("div",{className:"header",children:"Kaplan Book List"}),Object(h.jsxs)("div",{className:"sub-header",children:[Object(h.jsxs)("div",{className:"search-box",children:[Object(h.jsx)("input",{type:"text",placeholder:"Search by title, author, publisher",value:this.state.queryText,onChange:function(t){return e.handleQuery(t)},required:!0,autoFocus:!0}),Object(h.jsx)("button",{value:"Search",children:Object(h.jsx)("i",{className:this.props.isSearching?"fas fa-circle-notch fa-spin":"fas fa-search"})})]}),Object(h.jsx)("div",{className:"new-btn-box",children:Object(h.jsx)("button",{onClick:this.openPopup,children:"Create New Book"})})]}),Object(h.jsx)("div",{className:"book-list",children:i.length?i.map((function(e){return Object(h.jsx)(b,{book:e},e.id)})):o?"Loading":n?"Failed":"No data"}),Object(h.jsx)(p,{title:"Create New Book",isPopupShow:s,closePopup:this.closePopup,children:Object(h.jsx)(d,{createBook:this.createBook})})]})}}]),o}(s.Component),I=Object(f.b)((function(e){return{items:e.books.items}}),(function(e){return{actions:Object(j.b)(n,e)}}))(y);var C,P=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(I,{})})},B=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,61)).then((function(t){var o=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;o(e),n(e),s(e),i(e),a(e)}))},F=o(27),D=function(e){return function(t,o,n){return e((function(e,o){var n,s=performance.now(),i=t(e,o),a=performance.now(),r=(n=a-s,Math.round(100*n)/100);return console.log("reducer process time:",r),i}),o,n)}},T=function(e){return function(t){return function(o){console.group(o.type),console.info("dispatching",o);var n=t(o);return console.log("next state",e.getState()),console.groupEnd(),n}}},E=o(4),A=localStorage.getItem("bookList");try{C=JSON.parse(A)}catch(M){C={}}var q={books:{items:C}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(E.a)({},q.books),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return console.log(t.res),Object(E.a)(Object(E.a)({},e),{},{items:t.res.items});case S:return Object(E.a)({},e);default:return e}},Q=Object(j.c)({books:J});var _=function(e){var t=[T,F.a],o=[j.a.apply(void 0,t),D],n=j.d.apply(void 0,o);return Object(j.e)(Q,e,n)}({});a.a.render(Object(h.jsx)(f.a,{store:_,children:Object(h.jsx)(P,{})}),document.getElementById("root")),B()}},[[60,1,2]]]);
//# sourceMappingURL=main.a62ccb6e.chunk.js.map