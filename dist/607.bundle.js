(self.webpackChunkcandidate_tester=self.webpackChunkcandidate_tester||[]).push([[607],{138:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(294);const a=n.p+"321405dfea5852a6a4fdfcbb853ef712.png",i=r.memo((function(){return r.createElement("div",{className:"box custom-box favorite right-shadow"},r.createElement("img",{alt:"favorite",src:a}))}));var o=n(955),c=n(69),l=n(349),u="yyyy-MM-dd",s=n(697),m=n.n(s),f=r.forwardRef((function(e,t){var n=e.setSelectedDay,a=e.selected,i=e.day,c=e.id,l="box box-day";return a&&(l+=" selected"),r.createElement("button",{type:"button",ref:t,className:l,id:c,onClick:function(e){n(e.currentTarget.id)}},(0,o.Z)(i,"EEE dd.LL."))}));f.propTypes={setSelectedDay:m().func.isRequired,selected:m().bool.isRequired,day:m().string.isRequired,id:m().string.isRequired};const d=f;function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const h=function(){var e,t,n=(0,r.useRef)(null),a=(e=(0,r.useState)((0,o.Z)(new Date,u)),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],s=a[1],m=(0,c.Z)(new Date,7),f=new Array(14).fill(0).map((function(e,t){return(0,l.Z)(m,t)}));return(0,r.useEffect)((function(){setTimeout((function(){n&&n.current&&n.current.scrollIntoView()}),500)}),[]),r.createElement("div",{className:"box box-daytimeline"},f.map((function(e){var t=!1,a=(0,o.Z)(e,u);return i===a&&(t=!0),r.createElement(d,{key:e,ref:t?n:null,day:e,selected:t,id:a,setSelectedDay:s})})))};var v=r.memo((function(e){var t=e.title,n=e.start,a=e.end,i=new Date(n),c=new Date(a),l=(c.getTime()-i.getTime())/36e5,u=new Date,s=i<u&&u<c;return r.createElement("div",{className:"box program-box ".concat(s?"live":""),style:{minWidth:"calc(".concat(Math.round(1e4*l)/1e4," * var(--hour-timeline-width))")}},r.createElement("h3",null,t),r.createElement("p",null,(0,o.Z)(i,"HH:mm "),"-",(0,o.Z)(c," HH:mm")))}));v.propTypes={title:m().string.isRequired,start:m().string.isRequired,end:m().string.isRequired};const b=v;var p=r.memo((function(e){var t=e.channels;return r.createElement("div",{className:"channels"},r.createElement("div",{className:"timeline-time border-bottom right-shadow"}),t.map((function(e){return r.createElement("div",{className:"box custom-box box-channel border-bottom right-shadow",key:e.id},r.createElement("img",{src:e.images.logo,alt:e.title}))})))}));p.propTypes={channels:m().arrayOf(m().shape({images:m().objectOf({logo:m().string.isRequired}).isRequired,title:m().string.isRequired})).isRequired};const g=p,E=r.memo((function(){var e=new Array(24).fill(0).map((function(e,t){var n=t<10?"0".concat(t):t.toString();return"".concat(n,":00")}));return r.createElement("div",{className:"timeline-time"},e.map((function(e){return r.createElement("div",{key:e,className:"timeline-hour"},r.createElement("div",{className:"hour-line"}),e)})))}));var w=function(e,t,n,r){try{e.scrollTo({top:n,left:t,behavior:r?"smooth":"auto"})}catch(r){e.scrollTo(t,n)}},S=n(104);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const R=function(){var e=(0,r.useRef)(),t=(0,r.useRef)(),n=N((0,r.useState)(!0),2),a=n[0],i=n[1],o=N((0,r.useState)([]),2),c=o[0],l=o[1],u=N((0,r.useState)(null),2),s=u[0],m=u[1],f=function(){var e=new Date,t=e.getHours()+100*e.getMinutes()/6e3;m("calc(".concat(Math.round(100*t)/100," * var(--hour-timeline-width))"))},d=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e&&e.current){var n=parseInt(getComputedStyle(e.current).left,10);w(e.current.parentElement,n-window.innerWidth/4,0,t)}};return(0,r.useEffect)((function(){f(),("epg",fetch("".concat("http://localhost:1337","/").concat("epg")).then((function(e){return e.json()}))).then((function(e){return l(e.channels)})).finally((function(){return setTimeout((function(){return i(!1)}),1500)})),setInterval(f,3e5),new IntersectionObserver((function(e){e[0].isIntersecting?t.current.classList.remove("show"):t.current.classList.add("show")})).observe(e.current)}),[]),(0,r.useEffect)((function(){setTimeout((function(){return d(!1)}),500)}),[c]),r.createElement("div",{className:"border-top timeline-container"},a&&r.createElement(S.Z,null),r.createElement("button",{type:"button",className:"now-button",onClick:d,ref:t},"Now"),r.createElement(g,{channels:c}),r.createElement("div",{className:"timeline-channels",style:{height:"calc(".concat(c.length," * var(--box-size) + var(--box-size) / 2")}},r.createElement("div",{className:"now-line",style:{left:s},ref:e},r.createElement("div",{className:"now-line-notch"})),r.createElement(E,null),c.map((function(e){return r.createElement("div",{key:e.id,className:"box timeline-channel"},e.schedules.map((function(e){return r.createElement(b,{key:e.start,title:e.title,start:e.start,end:e.end})})))}))))},A=function(){return r.createElement("div",null,r.createElement("div",{className:"flex"},r.createElement(i,null),r.createElement(h,null)),r.createElement(R,null))}}}]);