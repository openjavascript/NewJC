(function(e,t){e("JC.Common",[],function(){function e(e){return/\\/.test(e)?e=e.replace(/[\\]+/g,"\\"):e=e.replace(/[\/]+/g,"/"),e}function t(e){var t=[],n={};for(var r=0,i=e.length;r<i;r++)e[r]in n||(t.push(e[r]),n[e[r]]=e[r]);return t}function n(){return"jc_gid_"+JC.f.ts()+"_"+JC.GID_COUNT++}function r(e){var t=[],n,r;for(n=0,r=e.length;n<r;n++)t.push(e[n]);return t}function i(e){var t="",e=e||location.href;return/\:\/\//.test(e)&&e.replace(/^.*?\:\/\/([^\/]+)/,function(e,n){t=n}),t}function s(e,t){t=t||document.URL,t=t.replace(/^.*?\:\/\/[^\/]+/,"").replace(/[^\/]+$/,"");if(!e)return t;/\/$/.test(t)||(t+="/");if(/(^\.\.\/|^\.\/)/.test(e)){var n=new RegExp("^\\.\\.\\/"),r=0;while(n.exec(e)!=null)e=e.replace(n,""),r++;for(var i=0;i<r;i++)t=t.replace(/[^\/]+\/$/,"");return t==""?"/":(e=e.replace(/^\.\//,""),e.replace(/\/\/$/,"/"),t+e)}return e}function o(e){for(var t=1,n=arguments.length;t<n;t++)e=e.replace(new RegExp("\\{"+(t-1)+"\\}","g"),arguments[t]);return e}function u(e,t){for(var n in t)e=e.replace(new RegExp("\\{"+n+"\\}","g"),t[n]);return e}function a(e,t){var n=!1;t||(t=e,e=location.href);if(/\?/.test(e)){e=e.split("?"),e=e[e.length-1],e=e.split("&");for(var r=0,i=e.length;r<i;r++)if(e[r].split("=")[0].toLowerCase()==t.toLowerCase()){n=!0;break}}return n}function f(e,t){var n="";!t&&(t=e,e=location.href),e.indexOf("#")>-1&&(n=e.split("#")[1],e=e.split("#")[0]);for(var r in t)e=p(e,r),e.indexOf("?")>-1?e+="&"+r+"="+t[r]:e+="?"+r+"="+t[r];return n&&(e+="#"+n),e=l(e.replace(/\?\&/g,"?")),e}function l(e){return e&&(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;")),e}function c(e,t){var n="",r,i,s;!t&&(t=e,e=location.href),e.indexOf("#")>-1&&(e=e.split("#")[0]);if(e.indexOf("?")>-1){r=e.split("?")[1].split("&");for(i=0;i<r.length;i++){s=r[i].split("="),s[0]=decodeURIComponent(s[0]||"").replace(/^\s+|\s+$/g,"");if(s[0].toLowerCase()==t.toLowerCase()){n=l(s[1]||"");break}}}return n}function h(e,t){var n=[],r,i,s,o;!t&&(t=e,e=location.href),e=e.replace(/[\?]+/g,"?").split("?");if(e.length>1){e=e[1],r=e.split("&");if(r.length)for(i=0,s=r.length;i<s;i++)o=r[i].split("="),o[0]=decodeURIComponent(o[0])||"",o[0].trim()==t&&n.push(l(o[1]||""))}return n}function p(e,t){var n="",r,i=[],s,o;!t&&(t=e,e=location.href),e.indexOf("#")>-1&&(n=e.split("#")[1],e=e.split("#")[0]);if(e.indexOf("?")>-1){r=e.split("?")[1].split("&"),e=e.split("?")[0];for(s=0;s<r.length;s++){var u=r[s].split("=");u[0]=u[0].replace(/^\s+|\s+$/g,"");if(u[0].toLowerCase()==t.toLowerCase())continue;i.push(u.join("="))}e+="?"+i.join("&")}return n&&(e+="#"+n),e=l(e),e}function d(e,t){!t&&(t=e,e=location.href);for(var n in t)e=p(e,t[n]);return e}function v(e){return e=e||"本示例需要HTTP环境",/file\:|\\/.test(location.href)?(alert(e),!1):!0}function m(e,t,n){!e&&(e=location.href),e=e.replace(/\#[\s\S]*/,""),n=n||"rnd";var r;return!t&&(r={},r[n]=(new Date).getTime(),e=f(e,r)),e=l(e),e}function g(e,t,n){return n=n||0,e=m(e||location.href,t),!t&&(e=f(e,{rnd:(new Date).getTime()})),e=l(e),setTimeout(function(){location.href=e},n),e}function y(e,t){return e=parseFloat(e)||0,typeof t=="undefined"&&(t=2),e&&(e=parseFloat(e.toFixed(t))),e}function b(e,t,n){return t=t||2,n=n||"0",e+="",e.length>=t?e:(e=(new Array(t+1)).join(n)+e,e.slice(e.length-t))}function w(e,t){return e=e||new Date,typeof t=="undefined"&&(t="-"),[e.getFullYear(),b(e.getMonth()+1),b(e.getDate())].join(t)}function E(e){if(!e)return;e=e.replace(/[^\d]+/g,"");var t;return e.length===8?t=new Date(e.slice(0,4),parseInt(e.slice(4,6),10)-1,parseInt(e.slice(6),10)):e.length===6&&(t=new Date(e.slice(0,4),parseInt(e.slice(4,6),10)-1,1)),t}function S(e,t,n){if(!e)return null;var r=E;return t&&!n&&(t=$(t)).length&&t.attr("dateParse")&&(r=window[t.attr("dateParse")]||r),e=r(e),e&&e.start&&(e=e.start),e}function x(e){var t;return e=e||new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),t}function T(e){var t=new Date;return t.setTime(e.getTime()),t}function N(e,t){return[e.getFullYear(),e.getMonth(),e.getDate()].join()===[t.getFullYear(),t.getMonth(),t.getDate()].join()}function C(e,t){return[e.getFullYear(),e.getMonth()].join()===[t.getFullYear(),t.getMonth()].join()}function k(e,t){var n=[],r=!1,i=0,s;n=O(e.getFullYear()),e=e.getTime(),t=t.getTime();for(i=0,s=n.length;i<s;i++)if(e>=n[i].start&&e<=n[i].end&&t>=n[i].start&&t<=n[i].end)return console.log(i,e,n[i]),!0;return r}function L(e,t){var n=[],r=!1,i=0,s;if(!A(e,t))return!1;n=M(e.getFullYear()),e=e.getTime(),t=t.getTime();for(i=0,s=n.length;i<s;i++)if(e>=n[i].start&&e<=n[i].end&&t>=n[i].start&&t<=n[i].end)return!0;return r}function A(e,t){return e.getFullYear()===t.getFullYear()}function O(e,t){var n=[],r,i=1,t=t||0,e=parseInt(e,10),s=new Date(e,0,1);s.getDay()>1&&s.setDate(s.getDate()-s.getDay()+7),s.getDay()===0&&s.setDate(s.getDate()+1),t>0&&(t=(new Date(2e3,1,2)-new Date(2e3,1,1))*t);while(s.getFullYear()<=e){r={week:i++,start:null,end:null},r.start=s.getTime()+t,s.setDate(s.getDate()+6),r.end=s.getTime()+t,s.setDate(s.getDate()+1);if(s.getFullYear()>e){s=new Date(s.getFullYear(),0,1);if(s.getDay()<2)break}n.push(r)}return n}function M(e){var t=[],e=parseInt(e,10);return t.push({start:x(new Date(e,0,1)),end:x(new Date(e,2,31)),season:1},{start:x(new Date(e,3,1)),end:x(new Date(e,5,30)),season:2},{start:x(new Date(e,6,1)),end:x(new Date(e,8,30)),season:3},{start:x(new Date(e,9,1)),end:x(new Date(e,11,31)),season:4}),t}function _(e,t){var n={},r=JC.f.weekOfYear(e.getFullYear(),t),i=0,s=r.length,o=e.getTime(),u=JC.f.pureDate(new Date),a=JC.f.pureDate(new Date);for(i;i<s;i++)if(o>=r[i].start&&o<=r[i].end)return u.setTime(r[i].start),a.setTime(r[i].end),n.start=u,n.end=a,n.w=i+1,n}function D(e){var t=e.getFullYear(),n=JC.f.seasonOfYear(t),r,i={},s,o=e.getTime();for(r=0;r<4;r++)if(o>=n[r].start.getTime()&&o<=n[r].end.getTime())return i.start=n[r].start,i.end=n[r].end,i.q=r+1,i}function P(e){var t,n=new Date(e.getFullYear(),e.getMonth()+1);return n.setDate(n.getDate()-1),t=n.getDate(),t}function H(){var e=document.getElementsByTagName("script"),e=e[e.length-1],t=e.getAttribute("src");return/\//.test(t)?(t=t.split("/"),t.pop(),t=t.join("/")+"/"):/\\/.test(t)&&(t=t.split("\\"),t.pop(),t=t.join("\\")+"/"),t}function B(e,t,n,r,i){var s=new Date,o,t=t||200,n=n||0,t=t-n,u=0,a,r=r||200,i=i||2,f=setInterval(function(){o=new Date-s,u=o/r*t,u,u>=t&&(u=t,a=!0,clearInterval(f)),cb&&e(u+n,a,o,r,i,n,t)},i);return f}function j(e){return typeof e=="string"&&(e=e.replace(/[\s]/g,"").toLowerCase(),!e||e!="false"&&e!="0"&&e!="null"&&e!="undefined"?e&&(e=!0):e=!1),!!e}function F(e,t,n){n=n||document;var r=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";n.attachEvent&&(r="on"+r),t?(n.detachEvent&&document.detachEvent(r,e),n.removeEventListener&&document.removeEventListener(r,e)):(n.attachEvent&&document.attachEvent(r,e),n.addEventListener&&document.addEventListener(r,e))}function I(e,t){e=$(e);var n;if(t){while((e=e.parent()).length)if(e.is(t)){n=e;break}}else n=e.parent();return n}function q(e,t,n){e&&(e=$(e));if(/\,/.test(t)){var r=[],i;return t=t.split(","),$.each(t,function(t,s){s=s.trim(),i=q(e,s,n),i&&i.length&&i.each(function(){r.push($(this))})}),$(r)}var s=/^([\/]+)/,o=/^([\|]+)/,u=/^([<\(]+)/;if(s.test(t))return t=t.replace(s,function(t,r){for(var i=0,s=r.length;i<s;i++)e=e.parent();return n=e,""}),t=t.trim(),t?n.find(t):n;if(o.test(t))return t=t.replace(o,function(t,r){for(var i=1,s=r.length;i<s;i++)e=e.parent();return n=e,""}),t=t.trim(),t?n.find(t):n;if(u.test(t)){t=t.replace(u,"").trim();if(t){if(/[\s]/.test(t)){var a;return t.replace(/^([^\s]+)([\s\S]+)/,function(t,n,r){a=I(e,n).find(r.trim())}),a||t}return I(e,t)}return e.parent()}return n?n.find(t):jQuery(t)}function R(e){var t="";return e&&(e=$(e)).length&&(t=e.html().trim().replace(/[\r\n]/g,"")),t}function U(e){var t=/^function\s+([^()]+)[\s\S]*/,n="",r=e.toString();return t.test(r)&&(n=r.replace(t,"$1")),n.trim()}function z(e){e=$(e||document);if(!(e&&e.length&&window.JC))return;JC.AutoSelect&&JC.AutoSelect(e),JC.Calendar&&JC.Calendar.initTrigger(e),JC.DCalendar&&JC.DCalendar.init&&JC.DCalendar.init(e),JC.AutoChecked&&JC.AutoChecked(e),JC.AjaxUpload&&JC.AjaxUpload.init(e),JC.Placeholder&&JC.Placeholder.init(e),JC.TableFreeze&&JC.TableFreeze.init(e),JC.Drag&&JC.Drag.init(e),JC.ImageCutter&&JC.ImageCutter.init(e),JC.Tab&&JC.Tab.init&&JC.Tab.init(e);if(!window.Bizs)return;Bizs.DisableLogic&&Bizs.DisableLogic.init(e),Bizs.FormLogic&&Bizs.FormLogic.init(e),Bizs.MoneyTips&&Bizs.MoneyTips.init(e),Bizs.AutoSelectComplete&&Bizs.AutoSelectComplete.init(e),Bizs.InputSelect&&Bizs.InputSelect.init(e),Bizs.TaskViewer&&Bizs.TaskViewer.init(e)}function W(e){e=e||"";var t=e,n,r,i,s;if(/^URL/.test(e)){n=e.replace(/^URL/,"").replace(/[\s]*,[\s]*/g,",").trim().split(","),e=location.href;var o={},u=[];if(n.length){for(r=0,i=n.length;r<i;r++)/\&/.test(n[r])?u=u.concat(n[r].split("&")):u=u.concat(n[r]);n=u}for(r=0,i=n.length;r<i;r++){s=n[r].replace(/[\s]+/g,"").split("=");if(!s[0])continue;o[s[0]]=s[1]||""}e=f(e,o),t=e}return t=l(e),t}function X(e){var t=null,n=/^now/i,r=/^nowfirst/,i=/^([\d]{8}|[\d]{4}.[\d]{2}.[\d]{2})/,s,o,u;if(e&&typeof e=="string")if(n.test(e)||r.test(e)||i.test(e)){s=new Date,r.test(e)&&s.setDate(1),i.test(e)&&(s=JC.f.parseISODate(e.replace(/[^\d]/g,"").slice(0,8)),e=e.replace(i,"")),e=e.replace(n,"").replace(/[\s]+/g,""),o=e.split(",");var a=/d$/i,f=/w$/i,l=/m$/i,c=/y$/i;for(var h=0,p=o.length;h<p;h++){u=o[h]||"";if(!u)continue;u=u.replace(/[^\-\ddwmy]+/gi,""),a.test(u)?(u=parseInt(u.replace(a,""),10),u&&s.setDate(s.getDate()+u)):f.test(u)?(u=parseInt(u.replace(f,""),10),u&&s.setDate(s.getDate()+u*7)):l.test(u)?(u=parseInt(u.replace(l,""),10),u&&s.setMonth(s.getMonth()+u)):c.test(u)&&(u=parseInt(u.replace(c,""),10),u&&s.setFullYear(s.getFullYear()+u))}t=s}else t=E(e);return t}function V(e,t,n,r){var i="0.00";!t&&(t=3),typeof n=="undefined"&&(n=2),!r&&(r=",");var s=!1,o;typeof e=="number"&&(e=y(e,n));if(typeof e=="string"){e=e.replace(/[,]/g,"");if(!/^[\d\.]+$/.test(e))return i;if(e.split(".").length>2)return i}e=e||0,e+="",/^\-/.test(e)&&(s=!0),e=e.replace(/[^\d\.]/g,"");var u=e.split("."),a=[];while(u[0].length>t){var f=u[0].slice(u[0].length-t,u[0].length);a.push(f),u[0]=u[0].slice(0,u[0].length-t)}return a.push(u[0]),u[0]=a.reverse().join(r),n?(!u[1]&&(u[1]=""),u[1]+=(new Array(n+1)).join("0"),u[1]=u[1].slice(0,n)):u.length>1&&u.pop(),o=u.join("."),s&&(o="-"+o),o}function J(e,t){typeof e=="string"&&(t=e,e=new Date),!e&&(e=new Date),!t&&(t="YY-MM-DD");var n=t,r,i=["january","february","march","april","may","june","july","august","september","october","november","december"],s=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];return n=n.replace(/YY/g,e.getFullYear()).replace(/WK/g,function(){var t=1,n=0,r;return JC.Calendar&&(n=JC.Calendar.weekDayOffset),r=O(e.getFullYear(),JC.Calendar.weekDayOffset),$(r).each(function(n,r){if(e.getTime()>=r.start&&e.getTime()<=r.end)return t=r.week,!1}),t}).replace(/YQ/g,function(){var t=1,n=0,r;return r=M(e.getFullYear()),$(r).each(function(n,r){if(e.getTime()>=r.start&&e.getTime()<=r.end)return t=r.season,!1}),t}).replace(/MM/g,b(e.getMonth()+1)).replace(/DD/g,b(e.getDate())).replace(/yy/g,function(t){return r=b(e.getYear()),r.slice(r.length-2)}).replace(/mm/g,e.getMonth()+1).replace(/dd/g,e.getDate()).replace(/d/g,e.getDate()).replace(/y/g,e.getFullYear()).replace(/m/g,function(t){return i[e.getMonth()]}).replace(/M/g,function(t){return s[e.getMonth()]}).replace(/HH/g,b(e.getHours())).replace(/h/g,e.getHours()).replace(/NN/g,b(e.getMinutes())).replace(/n/g,e.getMinutes()).replace(/SS/g,b(e.getSeconds())).replace(/s/g,e.getSeconds()),n}function K(e,t,n){typeof n=="undefined"&&(n=!0);if(e&&t)for(var r in t)n?e[r]=t[r]:r in e||(e[r]=t[r]);return e}function Q(e,t,n,r){if(typeof e=="undefined")return;t=$(t||(window.TIMEOUT_HOST=window.TIMEOUT_HOST||{})),n=n||"NORMAL",typeof e=="function"&&(e=setTimeout(e,r||50)),t.data(n)&&clearTimeout(t.data(n)),t.data(n,e)}function G(e){e&&(e=$(e));var t;return e&&e.length?(t=e.attr("validEncoder")||"encodeURIComponent",t=window[t]||encodeURIComponent):t=encodeURIComponent,t}function Y(e,t){t=t||{};var n,r,i;for(n in e){t[n]=e[n];switch(Object.prototype.toString.call(t[n])){case"[object Object]":t[n]=t[n].constructor===Object?Y(t[n]):t[n];break;case"[object Array]":t[n]=e[n].slice();for(r=0,i=t[n].length;r<i;r++)Object.prototype.toString.call(t[n][r])=="[object Object]"&&(t[n][r]=Y(t[n][r]));break;case"[object Date]":t[n]=new Date,t[n].setTime(e[n].getTime());break;default:t[n]=e[n]}}return t}function Z(e){e=e||document;var t={width:0,height:0,docWidth:0,docHeight:0,bodyWidth:0,bodyHeight:0,scrollWidth:0,scrollHeight:0};return t.docWidth=e.documentElement.offsetWidth,t.docHeight=e.documentElement.offsetHeight,e.body&&(t.bodyWidth=e.body.offsetWidth,t.bodyHeight=e.body.offsetHeight),t.scrollWidth=e.documentElement.scrollWidth,t.scrollHeight=e.documentElement.scrollHeight,t.width=Math.max(t.docWidth,t.bodyWidth,t.scrollHeight),t.height=Math.max(t.docHeight,t.bodyHeight,t.scrollHeight),t}function et(e){e=$(e||window);var t={width:e.width(),height:e.height(),scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop()};return t.viewportX=t.scrollLeft,t.maxViewportX=t.scrollLeft+t.width,t.viewportY=t.scrollTop,t.maxViewportY=t.scrollTop+t.height,t}return window.JWIN=window.JWIN||$(window),window.JDOC=window.JDOC||$(document),!window.console&&(window.console={log:function(){window.status=r(arguments).join(" ")}}),!console.dir&&(console.dir=function(){}),!console.error&&(console.error=function(){}),window.JC=window.JC||{},JC.log=function(){JC.debug&&console.log(r(arguments).join(" "))},JC.dir=function(){JC.debug&&$.each(r(arguments),function(e,t){console.dir(t)})},JC.error=function(){JC.debug&&$.each(r(arguments),function(e,t){console.error(t)})},JC.clear=function(){console.clear&&console.clear()},JC.PATH=JC.PATH||H(),window.Bizs=window.Bizs||{},JC.common=JC.f={addUrlParams:f,cloneDate:T,dateDetect:X,delUrlParam:p,delUrlParams:d,easyEffect:B,filterXSS:l,formatISODate:w,funcName:U,getJqParent:I,getUrlParam:c,getUrlParams:h,hasUrlParam:a,urlHostName:i,httpRequire:v,isSameDay:N,isSameWeek:k,isSameMonth:C,isSameSeason:L,isSameYear:A,weekOfYear:O,seasonOfYear:M,dayOfWeek:_,dayOfSeason:D,jcAutoInitComps:z,autoInit:z,addAutoInit:function(){},maxDayOfMonth:P,mousewheelEvent:F,padChar:b,parentSelector:q,parseBool:j,parseFinance:y,parseISODate:E,parseDate:S,printf:o,printKey:u,cloneObject:Y,pureDate:x,reloadPage:g,removeUrlSharp:m,relativePath:s,scriptContent:R,scriptPath:H,sliceArgs:r,urlDetect:W,moneyFormat:V,dateFormat:J,extendObject:K,safeTimeout:Q,encoder:G,fixPath:e,arrayId:t,docSize:Z,winSize:et,gid:n,backward:function(e){if(window.JC_BACKWARD||e)for(var t in JC.common){if(t=="backward")continue;window[t]=window[t]||JC.common[t]}},has_url_param:a,add_url_params:f,get_url_param:c,del_url_param:p,reload_page:g,parse_finance_num:y,pad_char_f:b,script_path_f:H,ts:function(){return(new Date).getTime()}},JC.f.backward(),!String.prototype.trim&&(String.prototype.trim=function(){return $.trim(this)}),!Array.prototype.indexOf&&(Array.prototype.indexOf=function(e){var t=-1;return $.each(this,function(n,r){if(r==e)return t=n,!1}),t}),!Array.prototype.first&&(Array.prototype.first=function(){var e;return this.length&&(e=this[0]),e}),!Array.prototype.last&&(Array.prototype.last=function(){var e;return this.length&&(e=this[this.length-1]),e}),window.ZINDEX_COUNT=window.ZINDEX_COUNT||50001,JC.GID_COUNT=1,function(){if(!window.jQuery)return;var e=$.fn.val;$.fn.val=function(){var t=e.apply(this,arguments),n=this;return arguments.length&&(this.prop("nodeName")||"").toLowerCase()=="input"&&(this.attr("type")||"").toLowerCase()=="hidden"&&setTimeout(function(){n.trigger("change")},1),t}}(),JC.f})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);