window.yoast=window.yoast||{},window.yoast.analysisReport=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=542)}({0:function(e,t){e.exports=window.yoast.propTypes},1:function(e,t){e.exports=window.wp.element},13:function(e,t){e.exports=window.yoast.componentsNew},147:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},241:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},242:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},243:function(e,t,r){var o=r(268);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},244:function(e,t,r){var o=r(269).default,n=r(270);e.exports=function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},268:function(e,t){function r(t,o){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t,o)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},269:function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},270:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},3:function(e,t){e.exports=window.wp.i18n},4:function(e,t){e.exports=window.React},40:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.__esModule=!0,e.exports.default=e.exports},5:function(e,t){e.exports=window.yoast.styledComponents},542:function(e,t,r){"use strict";r.r(t),r.d(t,"ContentAnalysis",(function(){return F})),r.d(t,"AnalysisResult",(function(){return B})),r.d(t,"AnalysisList",(function(){return C})),r.d(t,"renderRatingToColor",(function(){return j})),r.d(t,"SiteSEOReport",(function(){return V}));var o,n,s,a=r(40),i=r.n(a),u=r(1),l=r(3),c=r(4),p=r.n(c),d=r(5),f=r.n(d),m=r(0),b=r.n(m),x=r(94),y=r.n(x),g=r(6),h=r(13),_=f.a.li(o||(o=i()(["\n\t// This is the height of the IconButtonToggle.\n\tmin-height: 24px;\n\tpadding: 0;\n\tdisplay: flex;\n\talign-items: flex-start;\n"]))),k=f()(h.SvgIcon)(n||(n=i()(["\n\tmargin: 3px 11px 0 0; // icon 13 + 11 right margin = 24 for the 8px grid.\n"]))),v=f.a.p(s||(s=i()(["\n\tmargin: 0 16px 0 0;\n\tflex: 1 1 auto;\n"]))),w=function(e){return Object(u.createElement)(_,null,Object(u.createElement)(k,{icon:"circle",color:e.bulletColor,size:"13px"}),Object(u.createElement)(v,{dangerouslySetInnerHTML:{__html:e.text}}),e.hasMarksButton&&!function(e){return"hidden"===e.marksButtonStatus}(e)&&Object(u.createElement)(h.IconButtonToggle,{marksButtonStatus:e.marksButtonStatus,className:e.marksButtonClassName,onClick:e.onButtonClick,id:e.buttonId,icon:"eye",pressed:e.pressed,ariaLabel:e.ariaLabel}))};w.propTypes={text:b.a.string.isRequired,bulletColor:b.a.string.isRequired,hasMarksButton:b.a.bool.isRequired,buttonId:b.a.string.isRequired,pressed:b.a.bool.isRequired,ariaLabel:b.a.string.isRequired,onButtonClick:b.a.func.isRequired,marksButtonStatus:b.a.string,marksButtonClassName:b.a.string},w.defaultProps={marksButtonStatus:"enabled",marksButtonClassName:""};var O,B=w,R=f.a.ul(O||(O=i()(["\n\tmargin: 8px 0;\n\tpadding: 0;\n\tlist-style: none;\n"])));function j(e){switch(e){case"good":return g.colors.$color_good;case"OK":return g.colors.$color_ok;case"bad":return g.colors.$color_bad;default:return g.colors.$color_score_icon}}function C(e){var t=e.results,r=e.marksButtonActivatedResult,o=e.marksButtonStatus,n=e.marksButtonClassName,s=e.onMarksButtonClick;return Object(u.createElement)(R,{role:"list"},t.map((function(e){var t,a=j(e.rating),i=e.markerId===r;return t="disabled"===o?Object(l.__)("Marks are disabled in current view","wordpress-seo"):i?Object(l.__)("Remove highlight from the text","wordpress-seo"):Object(l.__)("Highlight this result in the text","wordpress-seo"),Object(u.createElement)(B,{key:e.id,text:e.text,bulletColor:a,hasMarksButton:e.hasMarks,ariaLabel:t,pressed:i,buttonId:e.id,onButtonClick:function(){return s(e.id,e.marker)},marksButtonClassName:n,marksButtonStatus:o})})))}C.propTypes={results:b.a.array.isRequired,marksButtonActivatedResult:b.a.string,marksButtonStatus:b.a.string,marksButtonClassName:b.a.string,onMarksButtonClick:b.a.func},C.defaultProps={marksButtonActivatedResult:"",marksButtonStatus:"enabled",marksButtonClassName:"",onMarksButtonClick:y.a};var S,M,N=r(241),P=r.n(N),E=r(242),I=r.n(E),T=r(243),A=r.n(T),q=r(244),L=r.n(q),z=r(147),$=r.n(z);var H=f.a.div(S||(S=i()(["\n\twidth: 100%;\n\tbackground-color: white;\n\tborder-bottom: 1px solid transparent; // Avoid parent and child margin collapsing.\n"]))),G=f()(h.Collapsible)(M||(M=i()(["\n\tmargin-bottom: 8px;\n\n\tbutton:first-child svg {\n\t\tmargin: -2px 8px 0 -2px; // Compensate icon size set to 18px.\n\t}\n\n\t"," {\n\t\tpadding: 8px 0;\n\t\tcolor: ","\n\t}\n"])),h.StyledIconsButton,g.colors.$color_blue),D=function(e){A()(n,e);var t,r,o=(t=n,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=$()(t);if(r){var n=$()(this).constructor;e=Reflect.construct(o,arguments,n)}else e=o.apply(this,arguments);return L()(this,e)});function n(){return P()(this,n),o.apply(this,arguments)}return I()(n,[{key:"renderCollapsible",value:function(e,t,r){return Object(u.createElement)(G,{initialIsOpen:!0,title:"".concat(e," (").concat(r.length,")"),prefixIcon:{icon:"angle-up",color:g.colors.$color_grey_dark,size:"18px"},prefixIconCollapsed:{icon:"angle-down",color:g.colors.$color_grey_dark,size:"18px"},suffixIcon:null,suffixIconCollapsed:null,headingProps:{level:t,fontSize:"13px",fontWeight:"bold"}},Object(u.createElement)(C,{results:r,marksButtonActivatedResult:this.props.activeMarker,marksButtonStatus:this.props.marksButtonStatus,marksButtonClassName:this.props.marksButtonClassName,onMarksButtonClick:this.props.onMarkButtonClick}))}},{key:"render",value:function(){var e=this.props,t=e.problemsResults,r=e.improvementsResults,o=e.goodResults,n=e.considerationsResults,s=e.errorsResults,a=e.headingLevel,i=s.length,c=t.length,p=r.length,d=n.length,f=o.length;return Object(u.createElement)(H,null,i>0&&this.renderCollapsible(Object(l.__)("Errors","wordpress-seo"),a,s),c>0&&this.renderCollapsible(Object(l.__)("Problems","wordpress-seo"),a,t),p>0&&this.renderCollapsible(Object(l.__)("Improvements","wordpress-seo"),a,r),d>0&&this.renderCollapsible(Object(l.__)("Considerations","wordpress-seo"),a,n),f>0&&this.renderCollapsible(Object(l.__)("Good results","wordpress-seo"),a,o))}}]),n}(p.a.Component);D.propTypes={onMarkButtonClick:b.a.func,problemsResults:b.a.array,improvementsResults:b.a.array,goodResults:b.a.array,considerationsResults:b.a.array,errorsResults:b.a.array,headingLevel:b.a.number,marksButtonStatus:b.a.string,marksButtonClassName:b.a.string,activeMarker:b.a.string},D.defaultProps={onMarkButtonClick:function(){},problemsResults:[],improvementsResults:[],goodResults:[],considerationsResults:[],errorsResults:[],headingLevel:4,marksButtonStatus:"enabled",marksButtonClassName:"",activeMarker:""};var K,W,F=D,J=f.a.div(K||(K=i()(["\n"]))),Q=f.a.p(W||(W=i()(["\n\tfont-size: 14px;\n"]))),U=function(e){return Object(u.createElement)(J,{className:e.className},Object(u.createElement)(Q,{className:"".concat(e.className,"__text")},e.seoAssessmentText),Object(u.createElement)(h.StackedProgressBar,{className:"progress",items:e.seoAssessmentItems,barHeight:e.barHeight}),Object(u.createElement)(h.ScoreAssessments,{className:"assessments",items:e.seoAssessmentItems}))};U.propTypes={className:b.a.string,seoAssessmentText:b.a.string,seoAssessmentItems:b.a.arrayOf(b.a.shape({html:b.a.string.isRequired,value:b.a.number.isRequired,color:b.a.string.isRequired})),barHeight:b.a.string},U.defaultProps={className:"seo-assessment",seoAssessmentText:"SEO Assessment",seoAssessmentItems:null,barHeight:"24px"};var V=U},6:function(e,t){e.exports=window.yoast.styleGuide},94:function(e,t){e.exports=window.lodash.noop}});