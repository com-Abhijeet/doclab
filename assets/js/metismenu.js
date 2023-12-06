/*!
* metismenu https://github.com/onokumus/metismenu#readme
* A jQuery menu plugin
*/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):(e=e||self).metisMenu=n(e.jQuery)}(this,function(o){"use strict";function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var a=function(i){var n="transitionend",r={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(e){i(e).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)}};function e(e){var n=this,t=!1;return i(this).one(r.TRANSITION_END,function(){t=!0}),setTimeout(function(){t||r.triggerTransitionEnd(n)},e),this}return i.fn.mmEmulateTransitionEnd=e,i.event.special[r.TRANSITION_END]={bindType:n,delegateType:n,handle:function(e){if(i(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},r}(o=o&&o.hasOwnProperty("default")?o.default:o),e="metisMenu",g="metisMenu",n="."+g,t=o.fn[e],h={toggle:!0,preventDefault:!0,triggerElement:"a",parentTrigger:"li",subMenu:"ul"},l={SHOW:"show"+n,SHOWN:"shown"+n,HIDE:"hide"+n,HIDDEN:"hidden"+n,CLICK_DATA_API:"click"+n+".data-api"},i="metismenu",f="mm-active",u="mm-show",d="mm-collapse",c="mm-collapsing",r=function(){function r(e,n){this.element=e,this.config=s({},h,n),this.transitioning=null,this.init()}var e=r.prototype;return e.init=function(){var s=this,a=this.config,e=o(this.element);e.addClass(i),e.find(a.parentTrigger+"."+f).children(a.triggerElement).attr("aria-expanded","true"),e.find(a.parentTrigger+"."+f).parents(a.parentTrigger).addClass(f),e.find(a.parentTrigger+"."+f).parents(a.parentTrigger).children(a.triggerElement).attr("aria-expanded","true"),e.find(a.parentTrigger+"."+f).has(a.subMenu).children(a.subMenu).addClass(d+" "+u),e.find(a.parentTrigger).not("."+f).has(a.subMenu).children(a.subMenu).addClass(d),e.find(a.parentTrigger).children(a.triggerElement).on(l.CLICK_DATA_API,function(e){var n=o(this);if("true"!==n.attr("aria-disabled")){a.preventDefault&&"#"===n.attr("href")&&e.preventDefault();var t=n.parent(a.parentTrigger),i=t.siblings(a.parentTrigger),r=i.children(a.triggerElement);t.hasClass(f)?(n.attr("aria-expanded","false"),s.removeActive(t)):(n.attr("aria-expanded","true"),s.setActive(t),a.toggle&&(s.removeActive(i),r.attr("aria-expanded","false"))),a.onTransitionStart&&a.onTransitionStart(e)}})},e.setActive=function(e){o(e).addClass(f);var n=o(e).children(this.config.subMenu);0<n.length&&!n.hasClass(u)&&this.show(n)},e.removeActive=function(e){o(e).removeClass(f);var n=o(e).children(this.config.subMenu+"."+u);0<n.length&&this.hide(n)},e.show=function(e){var n=this;if(!this.transitioning&&!o(e).hasClass(c)){var t=o(e),i=o.Event(l.SHOW);if(t.trigger(i),!i.isDefaultPrevented()){if(t.parent(this.config.parentTrigger).addClass(f),this.config.toggle){var r=t.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+u);this.hide(r)}t.removeClass(d).addClass(c).height(0),this.setTransitioning(!0);t.height(e[0].scrollHeight).one(a.TRANSITION_END,function(){n.config&&n.element&&(t.removeClass(c).addClass(d+" "+u).height(""),n.setTransitioning(!1),t.trigger(l.SHOWN))}).mmEmulateTransitionEnd(350)}}},e.hide=function(e){var n=this;if(!this.transitioning&&o(e).hasClass(u)){var t=o(e),i=o.Event(l.HIDE);if(t.trigger(i),!i.isDefaultPrevented()){t.parent(this.config.parentTrigger).removeClass(f),t.height(t.height())[0].offsetHeight,t.addClass(c).removeClass(d).removeClass(u),this.setTransitioning(!0);var r=function(){n.config&&n.element&&(n.transitioning&&n.config.onTransitionEnd&&n.config.onTransitionEnd(),n.setTransitioning(!1),t.trigger(l.HIDDEN),t.removeClass(c).addClass(d))};0===t.height()||"none"===t.css("display")?r():t.height(0).one(a.TRANSITION_END,r).mmEmulateTransitionEnd(350)}}},e.setTransitioning=function(e){this.transitioning=e},e.dispose=function(){o.removeData(this.element,g),o(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null},r.jQueryInterface=function(i){return this.each(function(){var e=o(this),n=e.data(g),t=s({},h,e.data(),"object"==typeof i&&i?i:{});if(n||(n=new r(this,t),e.data(g,n)),"string"==typeof i){if(void 0===n[i])throw new Error('No method named "'+i+'"');n[i]()}})},r}();return o.fn[e]=r.jQueryInterface,o.fn[e].Constructor=r,o.fn[e].noConflict=function(){return o.fn[e]=t,r.jQueryInterface},r});
//# sourceMappingURL=metisMenu.min.js.map