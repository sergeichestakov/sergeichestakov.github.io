(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(217),i=a.n(o),s=a(202),c=a(222),l=a.n(c);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(p(t)),t.gotoNext=t.gotoNext.bind(p(t)),t.gotoPrevious=t.gotoPrevious.bind(p(t)),t.gotoImage=t.gotoImage.bind(p(t)),t.handleClickImage=t.handleClickImage.bind(p(t)),t.openLightbox=t.openLightbox.bind(p(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},o.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},o.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},o.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},o.gotoImage=function(e){this.setState({currentImage:e})},o.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},o.renderGallery=function(){var e=this.props.images;if(e){var t=e.map(function(e,t){return r.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:t},r.a.createElement("a",{className:"image fit thumb",href:e.src,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.thumbnail,alt:"project",height:"272"})),r.a.createElement("h3",null,e.caption),r.a.createElement("p",null,e.description))});return r.a.createElement("div",{className:"row"},t)}},o.render=function(){return r.a.createElement("div",null,this.renderGallery(),r.a.createElement(l.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},n}(n.Component);m.displayName="Gallery";var u=m,h=a(269),d=a.n(h),g=a(270),f=a.n(g),b=a(271),v=a.n(b),E=a(272),y=a.n(E),I=a(273),x=a.n(I),k=a(274),N=a.n(k),w=a(275),C=a.n(w),S=a(276),_=a.n(S),P=a(277),j=a.n(P);function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var L=[{id:"1",src:"https://getschedulehelper.com",thumbnail:v.a,caption:"Schedule Helper",description:"Chrome Extension that helps UC Davis students build their schedules by highlighting conflicts and displaying professor ratings. Over 15,000 monthly active users."},{id:"2",src:"https://docs.expo.io/versions/latest/sdk/in-app-purchases/",thumbnail:f.a,caption:"Expo In-App Purchases",description:"React Native module and NPM package that abstracts over the native Android and iOS billing libraries and exposes a JS API to allow developers to monetize their RN/Expo apps."},{id:"3",src:"https://crates.io/crates/todo-to-issue",thumbnail:N.a,caption:"Todo-to-issue",description:"CLI tool that converts forgotten TODO comments into actionable GitHub issues interactively. Written entirely in Rust."},{id:"4",src:"https://github.com/mattrasto/phase",thumbnail:C.a,caption:"Phase",description:"Network graph visualization library for complex systems and simulations. Built on top of D3.js to expose a simple API for creating dynamic graphs with real-time events."},{id:"5",src:"https://devpost.com/software/nosegoes-45g87z",thumbnail:y.a,caption:"Nose Goes",description:"Python application that allows a user to control their web browser entirely hands free using only facial gestures and voice commands. Built using OpenCV, Selenium, and GCP."},{id:"6",src:"https://devpost.com/software/smart-sensor",thumbnail:x.a,caption:"Smart Sensor",description:"IoT Device that monitors the number of people in a room and automates lights to reduce energy consumption. Won Best Environmental Hack at HackDavis."},{id:"7",src:"https://comma-visualizer.herokuapp.com/",thumbnail:_.a,caption:"Speed Visualizer",description:"Web application that allows you to visualize the distribution of speed for every trip recorded by Comma.ai on any given day from their dataset. Built using Flask, SQLite, and Mapbox.js."},{id:"8",src:"https://devpost.com/software/uncover-your-usage",thumbnail:j.a,caption:"Uncover Your Usage",description:"Web application that uses a custom pretrained model to predict your annual energy usage based on an analysis of your household features. Built using Flask, Vue.js, and Keras."}],D=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(O(t)),t.gotoNext=t.gotoNext.bind(O(t)),t.gotoPrevious=t.gotoPrevious.bind(O(t)),t.openLightbox=t.openLightbox.bind(O(t)),t.handleClickImage=t.handleClickImage.bind(O(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},o.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},o.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},o.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},o.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},o.render=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Sergei Chestakov | Portfolio"),r.a.createElement("meta",{name:"description",content:"Personal Portfolio Website for Sergei Chestakov"}),r.a.createElement("link",{rel:"shortcut icon",type:"image/jpg",href:d.a}),r.a.createElement("meta",{name:"theme-color",content:"#212121"})),r.a.createElement("div",{id:"main"},r.a.createElement("section",{id:"one"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",{class:"description"},"I'm currently working as a software engineer at"," ",r.a.createElement("a",{href:"https://repl.it"},"Repl.it")," where we're building the future of online, collaborative IDEs. Previously, I worked at"," ",r.a.createElement("a",{href:"https://coda.io"},"Coda"),","," ",r.a.createElement("a",{href:"https://duckduckgo.com"},"Google"),", and"," ",r.a.createElement("a",{href:"https://expo.io"},"Expo"),". In my free time, I build side projects, read books, run, skate, and powerlift.")),r.a.createElement("section",{id:"two"},r.a.createElement("h2",null,"Projects"),r.a.createElement("p",null,"I'm passionate about creating products that make people's lives easier. Here are some things I've built:"),r.a.createElement(u,{images:L.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})}),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/sergeichestakov",target:"_blank",rel:"noopener noreferrer",className:"button"},"See More")))),r.a.createElement("section",{id:"three"},r.a.createElement("h2",null,"Contact"),r.a.createElement("p",null,"Hit me up if you're in the Bay Area! I'd love to grab coffee and chat."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"4u 12u$(small)"},r.a.createElement("ul",{className:"labeled-icons"},r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-twitter"},r.a.createElement("span",{className:"label"},"Twitter")),r.a.createElement("a",{href:"https://twitter.com/sergeichestakov"},"@SergeiChestakov")))),r.a.createElement("div",{className:"4u 12u$(small)"},r.a.createElement("ul",{className:"labeled-icons"},r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email")),r.a.createElement("a",{href:"mailto:sergei332@gmail.com"},"sergei332@gmail.com"))))))))},n}(r.a.Component);t.default=D},197:function(e,t,a){e.exports=a.p+"static/sergeichestakov-68d49bdb9fd2d8fc57e7fdbb4b0195ec.jpg"},202:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(203);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:sergei332@gmail.com",className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/sergeichestakov",className:"icon fa-github",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"label"},"Github"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://linkedin.com/in/sergeichestakov/",className:"icon fa-linkedin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"label"},"LinkedIn"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/sergeichestakov",className:"icon fa-twitter",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"label"},"Twitter"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://open.spotify.com/user/sergei332",className:"icon fa-spotify",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"label"},"Spotify"))))))},n}(r.a.Component),i=a(197),s=a.n(i);var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"inner"},r.a.createElement("a",{href:"#one",className:"image avatar"},r.a.createElement("img",{src:s.a,alt:"Profile"})),r.a.createElement("h1",null,r.a.createElement("strong",null,"Hi I'm Sergei "),r.a.createElement("br",null),r.a.createElement("span",{id:"description"},"CS Student & "),r.a.createElement("br",null),"Software Engineer")),r.a.createElement(o,null))},n}(r.a.Component);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(c,null),e)},n}(r.a.Component);t.a=l},269:function(e,t,a){e.exports=a.p+"static/favicon-0af07b895ec1dee2abc4b7d5bdf4c5d3.jpg"},270:function(e,t,a){e.exports=a.p+"static/expo-d85a68a59231a0de694b7e74913cd048.jpg"},271:function(e,t,a){e.exports=a.p+"static/schedule-helper-52c6bafdf47f1e53895d8f17b4131089.png"},272:function(e,t,a){e.exports=a.p+"static/nosegoes-11fc1fe85fcb634a202da221704b508e.jpg"},273:function(e,t,a){e.exports=a.p+"static/smart-sensor-73efb41c51f0394e22d4b43601ef34d6.jpg"},274:function(e,t,a){e.exports=a.p+"static/todo-to-issue-2854999b4a0358839be721c5f2300bba.png"},275:function(e,t,a){e.exports=a.p+"static/phase-e2debf942a8fa36302cc7967812f9986.png"},276:function(e,t,a){e.exports=a.p+"static/comma-c910cfbc5c28ba4ea831af62ea3689d1.png"},277:function(e,t,a){e.exports=a.p+"static/uncoveryourusage-6c32bd4a8858c3cfc82a3a1a983da327.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-208f7c9abe1bf890879b.js.map