parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"h73i":[function(require,module,exports) {
var t=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},e=-1,n=1,i=0;t.Diff=function(t,e){return[t,e]},t.prototype.diff_main=function(e,n,r,h){void 0===h&&(h=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+1e3*this.Diff_Timeout);var s=h;if(null==e||null==n)throw new Error("Null input. (diff_main)");if(e==n)return e?[new t.Diff(i,e)]:[];void 0===r&&(r=!0);var f=r,a=this.diff_commonPrefix(e,n),l=e.substring(0,a);e=e.substring(a),n=n.substring(a),a=this.diff_commonSuffix(e,n);var g=e.substring(e.length-a);e=e.substring(0,e.length-a),n=n.substring(0,n.length-a);var o=this.diff_compute_(e,n,f,s);return l&&o.unshift(new t.Diff(i,l)),g&&o.push(new t.Diff(i,g)),this.diff_cleanupMerge(o),o},t.prototype.diff_compute_=function(r,h,s,f){var a;if(!r)return[new t.Diff(n,h)];if(!h)return[new t.Diff(e,r)];var l=r.length>h.length?r:h,g=r.length>h.length?h:r,o=l.indexOf(g);if(-1!=o)return a=[new t.Diff(n,l.substring(0,o)),new t.Diff(i,g),new t.Diff(n,l.substring(o+g.length))],r.length>h.length&&(a[0][0]=a[2][0]=e),a;if(1==g.length)return[new t.Diff(e,r),new t.Diff(n,h)];var c=this.diff_halfMatch_(r,h);if(c){var u=c[0],p=c[1],d=c[2],_=c[3],b=c[4],v=this.diff_main(u,d,s,f),m=this.diff_main(p,_,s,f);return v.concat([new t.Diff(i,b)],m)}return s&&r.length>100&&h.length>100?this.diff_lineMode_(r,h,f):this.diff_bisect_(r,h,f)},t.prototype.diff_lineMode_=function(r,h,s){var f=this.diff_linesToChars_(r,h);r=f.chars1,h=f.chars2;var a=f.lineArray,l=this.diff_main(r,h,!1,s);this.diff_charsToLines_(l,a),this.diff_cleanupSemantic(l),l.push(new t.Diff(i,""));for(var g=0,o=0,c=0,u="",p="";g<l.length;){switch(l[g][0]){case n:c++,p+=l[g][1];break;case e:o++,u+=l[g][1];break;case i:if(o>=1&&c>=1){l.splice(g-o-c,o+c),g=g-o-c;for(var d=this.diff_main(u,p,!1,s),_=d.length-1;_>=0;_--)l.splice(g,0,d[_]);g+=d.length}c=0,o=0,u="",p=""}g++}return l.pop(),l},t.prototype.diff_bisect_=function(i,r,h){for(var s=i.length,f=r.length,a=Math.ceil((s+f)/2),l=a,g=2*a,o=new Array(g),c=new Array(g),u=0;u<g;u++)o[u]=-1,c[u]=-1;o[l+1]=0,c[l+1]=0;for(var p=s-f,d=p%2!=0,_=0,b=0,v=0,m=0,w=0;w<a&&!((new Date).getTime()>h);w++){for(var x=-w+_;x<=w-b;x+=2){for(var M=l+x,D=(I=x==-w||x!=w&&o[M-1]<o[M+1]?o[M+1]:o[M-1]+1)-x;I<s&&D<f&&i.charAt(I)==r.charAt(D);)I++,D++;if(o[M]=I,I>s)b+=2;else if(D>f)_+=2;else if(d){if((k=l+p-x)>=0&&k<g&&-1!=c[k])if(I>=(A=s-c[k]))return this.diff_bisectSplit_(i,r,I,D,h)}}for(var y=-w+v;y<=w-m;y+=2){for(var A,k=l+y,E=(A=y==-w||y!=w&&c[k-1]<c[k+1]?c[k+1]:c[k-1]+1)-y;A<s&&E<f&&i.charAt(s-A-1)==r.charAt(f-E-1);)A++,E++;if(c[k]=A,A>s)m+=2;else if(E>f)v+=2;else if(!d){if((M=l+p-y)>=0&&M<g&&-1!=o[M]){var I;D=l+(I=o[M])-M;if(I>=(A=s-A))return this.diff_bisectSplit_(i,r,I,D,h)}}}}return[new t.Diff(e,i),new t.Diff(n,r)]},t.prototype.diff_bisectSplit_=function(t,e,n,i,r){var h=t.substring(0,n),s=e.substring(0,i),f=t.substring(n),a=e.substring(i),l=this.diff_main(h,s,!1,r),g=this.diff_main(f,a,!1,r);return l.concat(g)},t.prototype.diff_linesToChars_=function(t,e){var n=[],i={};function r(t){for(var e="",r=0,s=-1,f=n.length;s<t.length-1;){-1==(s=t.indexOf("\n",r))&&(s=t.length-1);var a=t.substring(r,s+1);(i.hasOwnProperty?i.hasOwnProperty(a):void 0!==i[a])?e+=String.fromCharCode(i[a]):(f==h&&(a=t.substring(r),s=t.length),e+=String.fromCharCode(f),i[a]=f,n[f++]=a),r=s+1}return e}n[0]="";var h=4e4,s=r(t);return h=65535,{chars1:s,chars2:r(e),lineArray:n}},t.prototype.diff_charsToLines_=function(t,e){for(var n=0;n<t.length;n++){for(var i=t[n][1],r=[],h=0;h<i.length;h++)r[h]=e[i.charCodeAt(h)];t[n][1]=r.join("")}},t.prototype.diff_commonPrefix=function(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,i=Math.min(t.length,e.length),r=i,h=0;n<r;)t.substring(h,r)==e.substring(h,r)?h=n=r:i=r,r=Math.floor((i-n)/2+n);return r},t.prototype.diff_commonSuffix=function(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,i=Math.min(t.length,e.length),r=i,h=0;n<r;)t.substring(t.length-r,t.length-h)==e.substring(e.length-r,e.length-h)?h=n=r:i=r,r=Math.floor((i-n)/2+n);return r},t.prototype.diff_commonOverlap_=function(t,e){var n=t.length,i=e.length;if(0==n||0==i)return 0;n>i?t=t.substring(n-i):n<i&&(e=e.substring(0,n));var r=Math.min(n,i);if(t==e)return r;for(var h=0,s=1;;){var f=t.substring(r-s),a=e.indexOf(f);if(-1==a)return h;s+=a,0!=a&&t.substring(r-s)!=e.substring(0,s)||(h=s,s++)}},t.prototype.diff_halfMatch_=function(t,e){if(this.Diff_Timeout<=0)return null;var n=t.length>e.length?t:e,i=t.length>e.length?e:t;if(n.length<4||2*i.length<n.length)return null;var r=this;function h(t,e,n){for(var i,h,s,f,a=t.substring(n,n+Math.floor(t.length/4)),l=-1,g="";-1!=(l=e.indexOf(a,l+1));){var o=r.diff_commonPrefix(t.substring(n),e.substring(l)),c=r.diff_commonSuffix(t.substring(0,n),e.substring(0,l));g.length<c+o&&(g=e.substring(l-c,l)+e.substring(l,l+o),i=t.substring(0,n-c),h=t.substring(n+o),s=e.substring(0,l-c),f=e.substring(l+o))}return 2*g.length>=t.length?[i,h,s,f,g]:null}var s,f,a,l,g,o=h(n,i,Math.ceil(n.length/4)),c=h(n,i,Math.ceil(n.length/2));return o||c?(s=c?o&&o[4].length>c[4].length?o:c:o,t.length>e.length?(f=s[0],a=s[1],l=s[2],g=s[3]):(l=s[0],g=s[1],f=s[2],a=s[3]),[f,a,l,g,s[4]]):null},t.prototype.diff_cleanupSemantic=function(r){for(var h=!1,s=[],f=0,a=null,l=0,g=0,o=0,c=0,u=0;l<r.length;)r[l][0]==i?(s[f++]=l,g=c,o=u,c=0,u=0,a=r[l][1]):(r[l][0]==n?c+=r[l][1].length:u+=r[l][1].length,a&&a.length<=Math.max(g,o)&&a.length<=Math.max(c,u)&&(r.splice(s[f-1],0,new t.Diff(e,a)),r[s[f-1]+1][0]=n,f--,l=--f>0?s[f-1]:-1,g=0,o=0,c=0,u=0,a=null,h=!0)),l++;for(h&&this.diff_cleanupMerge(r),this.diff_cleanupSemanticLossless(r),l=1;l<r.length;){if(r[l-1][0]==e&&r[l][0]==n){var p=r[l-1][1],d=r[l][1],_=this.diff_commonOverlap_(p,d),b=this.diff_commonOverlap_(d,p);_>=b?(_>=p.length/2||_>=d.length/2)&&(r.splice(l,0,new t.Diff(i,d.substring(0,_))),r[l-1][1]=p.substring(0,p.length-_),r[l+1][1]=d.substring(_),l++):(b>=p.length/2||b>=d.length/2)&&(r.splice(l,0,new t.Diff(i,p.substring(0,b))),r[l-1][0]=n,r[l-1][1]=d.substring(0,d.length-b),r[l+1][0]=e,r[l+1][1]=p.substring(b),l++),l++}l++}},t.prototype.diff_cleanupSemanticLossless=function(e){function n(e,n){if(!e||!n)return 6;var i=e.charAt(e.length-1),r=n.charAt(0),h=i.match(t.nonAlphaNumericRegex_),s=r.match(t.nonAlphaNumericRegex_),f=h&&i.match(t.whitespaceRegex_),a=s&&r.match(t.whitespaceRegex_),l=f&&i.match(t.linebreakRegex_),g=a&&r.match(t.linebreakRegex_),o=l&&e.match(t.blanklineEndRegex_),c=g&&n.match(t.blanklineStartRegex_);return o||c?5:l||g?4:h&&!f&&a?3:f||a?2:h||s?1:0}for(var r=1;r<e.length-1;){if(e[r-1][0]==i&&e[r+1][0]==i){var h=e[r-1][1],s=e[r][1],f=e[r+1][1],a=this.diff_commonSuffix(h,s);if(a){var l=s.substring(s.length-a);h=h.substring(0,h.length-a),s=l+s.substring(0,s.length-a),f=l+f}for(var g=h,o=s,c=f,u=n(h,s)+n(s,f);s.charAt(0)===f.charAt(0);){h+=s.charAt(0),s=s.substring(1)+f.charAt(0),f=f.substring(1);var p=n(h,s)+n(s,f);p>=u&&(u=p,g=h,o=s,c=f)}e[r-1][1]!=g&&(g?e[r-1][1]=g:(e.splice(r-1,1),r--),e[r][1]=o,c?e[r+1][1]=c:(e.splice(r+1,1),r--))}r++}},t.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,t.whitespaceRegex_=/\s/,t.linebreakRegex_=/[\r\n]/,t.blanklineEndRegex_=/\n\r?\n$/,t.blanklineStartRegex_=/^\r?\n\r?\n/,t.prototype.diff_cleanupEfficiency=function(r){for(var h=!1,s=[],f=0,a=null,l=0,g=!1,o=!1,c=!1,u=!1;l<r.length;)r[l][0]==i?(r[l][1].length<this.Diff_EditCost&&(c||u)?(s[f++]=l,g=c,o=u,a=r[l][1]):(f=0,a=null),c=u=!1):(r[l][0]==e?u=!0:c=!0,a&&(g&&o&&c&&u||a.length<this.Diff_EditCost/2&&g+o+c+u==3)&&(r.splice(s[f-1],0,new t.Diff(e,a)),r[s[f-1]+1][0]=n,f--,a=null,g&&o?(c=u=!0,f=0):(l=--f>0?s[f-1]:-1,c=u=!1),h=!0)),l++;h&&this.diff_cleanupMerge(r)},t.prototype.diff_cleanupMerge=function(r){r.push(new t.Diff(i,""));for(var h,s=0,f=0,a=0,l="",g="";s<r.length;)switch(r[s][0]){case n:a++,g+=r[s][1],s++;break;case e:f++,l+=r[s][1],s++;break;case i:f+a>1?(0!==f&&0!==a&&(0!==(h=this.diff_commonPrefix(g,l))&&(s-f-a>0&&r[s-f-a-1][0]==i?r[s-f-a-1][1]+=g.substring(0,h):(r.splice(0,0,new t.Diff(i,g.substring(0,h))),s++),g=g.substring(h),l=l.substring(h)),0!==(h=this.diff_commonSuffix(g,l))&&(r[s][1]=g.substring(g.length-h)+r[s][1],g=g.substring(0,g.length-h),l=l.substring(0,l.length-h))),s-=f+a,r.splice(s,f+a),l.length&&(r.splice(s,0,new t.Diff(e,l)),s++),g.length&&(r.splice(s,0,new t.Diff(n,g)),s++),s++):0!==s&&r[s-1][0]==i?(r[s-1][1]+=r[s][1],r.splice(s,1)):s++,a=0,f=0,l="",g=""}""===r[r.length-1][1]&&r.pop();var o=!1;for(s=1;s<r.length-1;)r[s-1][0]==i&&r[s+1][0]==i&&(r[s][1].substring(r[s][1].length-r[s-1][1].length)==r[s-1][1]?(r[s][1]=r[s-1][1]+r[s][1].substring(0,r[s][1].length-r[s-1][1].length),r[s+1][1]=r[s-1][1]+r[s+1][1],r.splice(s-1,1),o=!0):r[s][1].substring(0,r[s+1][1].length)==r[s+1][1]&&(r[s-1][1]+=r[s+1][1],r[s][1]=r[s][1].substring(r[s+1][1].length)+r[s+1][1],r.splice(s+1,1),o=!0)),s++;o&&this.diff_cleanupMerge(r)},t.prototype.diff_xIndex=function(t,i){var r,h=0,s=0,f=0,a=0;for(r=0;r<t.length&&(t[r][0]!==n&&(h+=t[r][1].length),t[r][0]!==e&&(s+=t[r][1].length),!(h>i));r++)f=h,a=s;return t.length!=r&&t[r][0]===e?a:a+(i-f)},t.prototype.diff_prettyHtml=function(t){for(var r=[],h=/&/g,s=/</g,f=/>/g,a=/\n/g,l=0;l<t.length;l++){var g=t[l][0],o=t[l][1].replace(h,"&amp;").replace(s,"&lt;").replace(f,"&gt;").replace(a,"&para;<br>");switch(g){case n:r[l]='<ins style="background:#e6ffe6;">'+o+"</ins>";break;case e:r[l]='<del style="background:#ffe6e6;">'+o+"</del>";break;case i:r[l]="<span>"+o+"</span>"}}return r.join("")},t.prototype.diff_text1=function(t){for(var e=[],i=0;i<t.length;i++)t[i][0]!==n&&(e[i]=t[i][1]);return e.join("")},t.prototype.diff_text2=function(t){for(var n=[],i=0;i<t.length;i++)t[i][0]!==e&&(n[i]=t[i][1]);return n.join("")},t.prototype.diff_levenshtein=function(t){for(var r=0,h=0,s=0,f=0;f<t.length;f++){var a=t[f][0],l=t[f][1];switch(a){case n:h+=l.length;break;case e:s+=l.length;break;case i:r+=Math.max(h,s),h=0,s=0}}return r+=Math.max(h,s)},t.prototype.diff_toDelta=function(t){for(var r=[],h=0;h<t.length;h++)switch(t[h][0]){case n:r[h]="+"+encodeURI(t[h][1]);break;case e:r[h]="-"+t[h][1].length;break;case i:r[h]="="+t[h][1].length}return r.join("\t").replace(/%20/g," ")},t.prototype.diff_fromDelta=function(r,h){for(var s=[],f=0,a=0,l=h.split(/\t/g),g=0;g<l.length;g++){var o=l[g].substring(1);switch(l[g].charAt(0)){case"+":try{s[f++]=new t.Diff(n,decodeURI(o))}catch(p){throw new Error("Illegal escape in diff_fromDelta: "+o)}break;case"-":case"=":var c=parseInt(o,10);if(isNaN(c)||c<0)throw new Error("Invalid number in diff_fromDelta: "+o);var u=r.substring(a,a+=c);"="==l[g].charAt(0)?s[f++]=new t.Diff(i,u):s[f++]=new t.Diff(e,u);break;default:if(l[g])throw new Error("Invalid diff operation in diff_fromDelta: "+l[g])}}if(a!=r.length)throw new Error("Delta length ("+a+") does not equal source text length ("+r.length+").");return s},t.prototype.match_main=function(t,e,n){if(null==t||null==e||null==n)throw new Error("Null input. (match_main)");return n=Math.max(0,Math.min(n,t.length)),t==e?0:t.length?t.substring(n,n+e.length)==e?n:this.match_bitap_(t,e,n):-1},t.prototype.match_bitap_=function(t,e,n){if(e.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var i=this.match_alphabet_(e),r=this;function h(t,i){var h=t/e.length,s=Math.abs(n-i);return r.Match_Distance?h+s/r.Match_Distance:s?1:h}var s=this.Match_Threshold,f=t.indexOf(e,n);-1!=f&&(s=Math.min(h(0,f),s),-1!=(f=t.lastIndexOf(e,n+e.length))&&(s=Math.min(h(0,f),s)));var a,l,g=1<<e.length-1;f=-1;for(var o,c=e.length+t.length,u=0;u<e.length;u++){for(a=0,l=c;a<l;)h(u,n+l)<=s?a=l:c=l,l=Math.floor((c-a)/2+a);c=l;var p=Math.max(1,n-l+1),d=Math.min(n+l,t.length)+e.length,_=Array(d+2);_[d+1]=(1<<u)-1;for(var b=d;b>=p;b--){var v=i[t.charAt(b-1)];if(_[b]=0===u?(_[b+1]<<1|1)&v:(_[b+1]<<1|1)&v|(o[b+1]|o[b])<<1|1|o[b+1],_[b]&g){var m=h(u,b-1);if(m<=s){if(s=m,!((f=b-1)>n))break;p=Math.max(1,2*n-f)}}}if(h(u+1,n)>s)break;o=_}return f},t.prototype.match_alphabet_=function(t){for(var e={},n=0;n<t.length;n++)e[t.charAt(n)]=0;for(n=0;n<t.length;n++)e[t.charAt(n)]|=1<<t.length-n-1;return e},t.prototype.patch_addContext_=function(e,n){if(0!=n.length){if(null===e.start2)throw Error("patch not initialized");for(var r=n.substring(e.start2,e.start2+e.length1),h=0;n.indexOf(r)!=n.lastIndexOf(r)&&r.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)h+=this.Patch_Margin,r=n.substring(e.start2-h,e.start2+e.length1+h);h+=this.Patch_Margin;var s=n.substring(e.start2-h,e.start2);s&&e.diffs.unshift(new t.Diff(i,s));var f=n.substring(e.start2+e.length1,e.start2+e.length1+h);f&&e.diffs.push(new t.Diff(i,f)),e.start1-=s.length,e.start2-=s.length,e.length1+=s.length+f.length,e.length2+=s.length+f.length}},t.prototype.patch_make=function(r,h,s){var f,a;if("string"==typeof r&&"string"==typeof h&&void 0===s)f=r,(a=this.diff_main(f,h,!0)).length>2&&(this.diff_cleanupSemantic(a),this.diff_cleanupEfficiency(a));else if(r&&"object"==typeof r&&void 0===h&&void 0===s)a=r,f=this.diff_text1(a);else if("string"==typeof r&&h&&"object"==typeof h&&void 0===s)f=r,a=h;else{if("string"!=typeof r||"string"!=typeof h||!s||"object"!=typeof s)throw new Error("Unknown call format to patch_make.");f=r,a=s}if(0===a.length)return[];for(var l=[],g=new t.patch_obj,o=0,c=0,u=0,p=f,d=f,_=0;_<a.length;_++){var b=a[_][0],v=a[_][1];switch(o||b===i||(g.start1=c,g.start2=u),b){case n:g.diffs[o++]=a[_],g.length2+=v.length,d=d.substring(0,u)+v+d.substring(u);break;case e:g.length1+=v.length,g.diffs[o++]=a[_],d=d.substring(0,u)+d.substring(u+v.length);break;case i:v.length<=2*this.Patch_Margin&&o&&a.length!=_+1?(g.diffs[o++]=a[_],g.length1+=v.length,g.length2+=v.length):v.length>=2*this.Patch_Margin&&o&&(this.patch_addContext_(g,p),l.push(g),g=new t.patch_obj,o=0,p=d,c=u)}b!==n&&(c+=v.length),b!==e&&(u+=v.length)}return o&&(this.patch_addContext_(g,p),l.push(g)),l},t.prototype.patch_deepCopy=function(e){for(var n=[],i=0;i<e.length;i++){var r=e[i],h=new t.patch_obj;h.diffs=[];for(var s=0;s<r.diffs.length;s++)h.diffs[s]=new t.Diff(r.diffs[s][0],r.diffs[s][1]);h.start1=r.start1,h.start2=r.start2,h.length1=r.length1,h.length2=r.length2,n[i]=h}return n},t.prototype.patch_apply=function(t,r){if(0==t.length)return[r,[]];t=this.patch_deepCopy(t);var h=this.patch_addPadding(t);r=h+r+h,this.patch_splitMax(t);for(var s=0,f=[],a=0;a<t.length;a++){var l,g,o=t[a].start2+s,c=this.diff_text1(t[a].diffs),u=-1;if(c.length>this.Match_MaxBits?-1!=(l=this.match_main(r,c.substring(0,this.Match_MaxBits),o))&&(-1==(u=this.match_main(r,c.substring(c.length-this.Match_MaxBits),o+c.length-this.Match_MaxBits))||l>=u)&&(l=-1):l=this.match_main(r,c,o),-1==l)f[a]=!1,s-=t[a].length2-t[a].length1;else if(f[a]=!0,s=l-o,c==(g=-1==u?r.substring(l,l+c.length):r.substring(l,u+this.Match_MaxBits)))r=r.substring(0,l)+this.diff_text2(t[a].diffs)+r.substring(l+c.length);else{var p=this.diff_main(c,g,!1);if(c.length>this.Match_MaxBits&&this.diff_levenshtein(p)/c.length>this.Patch_DeleteThreshold)f[a]=!1;else{this.diff_cleanupSemanticLossless(p);for(var d,_=0,b=0;b<t[a].diffs.length;b++){var v=t[a].diffs[b];v[0]!==i&&(d=this.diff_xIndex(p,_)),v[0]===n?r=r.substring(0,l+d)+v[1]+r.substring(l+d):v[0]===e&&(r=r.substring(0,l+d)+r.substring(l+this.diff_xIndex(p,_+v[1].length))),v[0]!==e&&(_+=v[1].length)}}}}return[r=r.substring(h.length,r.length-h.length),f]},t.prototype.patch_addPadding=function(e){for(var n=this.Patch_Margin,r="",h=1;h<=n;h++)r+=String.fromCharCode(h);for(h=0;h<e.length;h++)e[h].start1+=n,e[h].start2+=n;var s=e[0],f=s.diffs;if(0==f.length||f[0][0]!=i)f.unshift(new t.Diff(i,r)),s.start1-=n,s.start2-=n,s.length1+=n,s.length2+=n;else if(n>f[0][1].length){var a=n-f[0][1].length;f[0][1]=r.substring(f[0][1].length)+f[0][1],s.start1-=a,s.start2-=a,s.length1+=a,s.length2+=a}if(0==(f=(s=e[e.length-1]).diffs).length||f[f.length-1][0]!=i)f.push(new t.Diff(i,r)),s.length1+=n,s.length2+=n;else if(n>f[f.length-1][1].length){a=n-f[f.length-1][1].length;f[f.length-1][1]+=r.substring(0,a),s.length1+=a,s.length2+=a}return r},t.prototype.patch_splitMax=function(r){for(var h=this.Match_MaxBits,s=0;s<r.length;s++)if(!(r[s].length1<=h)){var f=r[s];r.splice(s--,1);for(var a=f.start1,l=f.start2,g="";0!==f.diffs.length;){var o=new t.patch_obj,c=!0;for(o.start1=a-g.length,o.start2=l-g.length,""!==g&&(o.length1=o.length2=g.length,o.diffs.push(new t.Diff(i,g)));0!==f.diffs.length&&o.length1<h-this.Patch_Margin;){var u=f.diffs[0][0],p=f.diffs[0][1];u===n?(o.length2+=p.length,l+=p.length,o.diffs.push(f.diffs.shift()),c=!1):u===e&&1==o.diffs.length&&o.diffs[0][0]==i&&p.length>2*h?(o.length1+=p.length,a+=p.length,c=!1,o.diffs.push(new t.Diff(u,p)),f.diffs.shift()):(p=p.substring(0,h-o.length1-this.Patch_Margin),o.length1+=p.length,a+=p.length,u===i?(o.length2+=p.length,l+=p.length):c=!1,o.diffs.push(new t.Diff(u,p)),p==f.diffs[0][1]?f.diffs.shift():f.diffs[0][1]=f.diffs[0][1].substring(p.length))}g=(g=this.diff_text2(o.diffs)).substring(g.length-this.Patch_Margin);var d=this.diff_text1(f.diffs).substring(0,this.Patch_Margin);""!==d&&(o.length1+=d.length,o.length2+=d.length,0!==o.diffs.length&&o.diffs[o.diffs.length-1][0]===i?o.diffs[o.diffs.length-1][1]+=d:o.diffs.push(new t.Diff(i,d))),c||r.splice(++s,0,o)}}},t.prototype.patch_toText=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=t[n];return e.join("")},t.prototype.patch_fromText=function(r){var h=[];if(!r)return h;for(var s=r.split("\n"),f=0,a=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;f<s.length;){var l=s[f].match(a);if(!l)throw new Error("Invalid patch string: "+s[f]);var g=new t.patch_obj;for(h.push(g),g.start1=parseInt(l[1],10),""===l[2]?(g.start1--,g.length1=1):"0"==l[2]?g.length1=0:(g.start1--,g.length1=parseInt(l[2],10)),g.start2=parseInt(l[3],10),""===l[4]?(g.start2--,g.length2=1):"0"==l[4]?g.length2=0:(g.start2--,g.length2=parseInt(l[4],10)),f++;f<s.length;){var o=s[f].charAt(0);try{var c=decodeURI(s[f].substring(1))}catch(u){throw new Error("Illegal escape in patch_fromText: "+c)}if("-"==o)g.diffs.push(new t.Diff(e,c));else if("+"==o)g.diffs.push(new t.Diff(n,c));else if(" "==o)g.diffs.push(new t.Diff(i,c));else{if("@"==o)break;if(""!==o)throw new Error('Invalid patch mode "'+o+'" in: '+c)}f++}}return h},t.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},t.patch_obj.prototype.toString=function(){for(var t,r=["@@ -"+(0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1)+" +"+(0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2)+" @@\n"],h=0;h<this.diffs.length;h++){switch(this.diffs[h][0]){case n:t="+";break;case e:t="-";break;case i:t=" "}r[h+1]=t+encodeURI(this.diffs[h][1])+"\n"}return r.join("").replace(/%20/g," ")},module.exports=t,module.exports.diff_match_patch=t,module.exports.DIFF_DELETE=e,module.exports.DIFF_INSERT=n,module.exports.DIFF_EQUAL=i;
},{}],"FQmn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Nanostache=n,exports.delimitersRegex=void 0;let e=new RegExp("{{(.*?)}}","gm");function t(e,t){if(!(e in t))return"";const r=t[e];return"function"==typeof r?r.call(t,t):r}function r(e,r){const n=e.trim(),i=n.indexOf("?"),s=n.indexOf(":");if(i>0){return t(n.substring(0,i).trim(),r)?n.substring(i+1,s).trim():s>0?n.substring(s+1,n.length).trim():""}return t(n,r)}function n(t,n){return t.replace(e,(e,t)=>r(t,n))}exports.delimitersRegex=e;
},{}],"KeW6":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=n(require("diff-match-patch")),t=require("@solid-js/nanostache");function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return c(e)||i(e)||o(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){u(o,r,a,i,c,"next",e)}function c(e){u(o,r,a,i,c,"throw",e)}i(void 0)})}}var f={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}};document.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("form_explorer"),a=document.getElementById("form_services"),o=document.getElementById("form_typeofdocuments"),i=document.getElementById("form_firstdocumentdate"),c=document.getElementById("form_seconddocumentdate"),s=document.querySelectorAll("input[type=date]");function u(){return(u=d(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p().then(function(e){var t,n,r;s.forEach(function(e){e.setAttribute("max",(new Date).toISOString().split("T")[0])}),w(),t=e,n=Object.entries(t),(r=function(e){return e.sort(function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0})}(n))&&r.forEach(function(e){var t=new Option(e[0],e[0]);t.dataset.typeofdocuments=I(e[1]),a.add(t)}),b();var i=E();0===Object.keys(i).length&&(L("service",a.selectedOptions.item(0).value),L("typeofdocument",o.selectedOptions.item(0).value)),window.addEventListener("popstate",D),D()});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function m(e){return l.apply(this,arguments)}function l(){return(l=d(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:throw new Error(n.status);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(){return v.apply(this,arguments)}function v(){return(v=d(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Request("https://disinfo.quaidorsay.fr/api/cgus/list_services/v1/?multiple_versions_only=true",f),e.abrupt("return",m(t));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(){return(g=d(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=A(),e.next=3,h(t.service,t.type,t.firstDocumentDate);case 3:return n=e.sent,e.next=6,h(t.service,t.type,t.secondDocumentDate);case 6:return r=e.sent,e.abrupt("return",Array(n,r));case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e,t,n){return y.apply(this,arguments)}function y(){return(y=d(regeneratorRuntime.mark(function e(t,n,r){var a,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI("https://disinfo.quaidorsay.fr/api/cgus/get_version_at_date/v1/"+t+"/"+n+"/"+r),o=new Request(a,f),e.next=4,fetch(o);case 4:if(!(i=e.sent).ok){e.next=20;break}return e.next=8,i.json();case 8:if(!(c=e.sent).error){e.next=11;break}throw new Error(c.error);case 11:if(""!=c.data){e.next=17;break}return e.next=14,h(t,n,c.next_version.substr(0,10));case 14:return e.abrupt("return",e.sent);case 17:return e.abrupt("return",c);case 18:e.next=21;break;case 20:throw new Error(i.status);case 21:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(){n&&n.addEventListener("submit",O),a&&a.addEventListener("change",x),o&&o.addEventListener("change",k),i&&i.addEventListener("change",R),c&&c.addEventListener("change",R)}function b(){o.innerHTML="";var e=a.selectedOptions.item(0).dataset.typeofdocuments.split(",");if(e){var t=I(e);t&&t.forEach(function(e){o.add(new Option(e,e))})}}function D(e){var t=E();r(document.getElementsByClassName("diffviewer")).map(function(e){return e&&e.remove()}),S(),function(){var e=E(),t="";if(e.service&&a){var n=_(a,e.service);n?(n.setAttribute("selected","selected"),b()):t=t.concat("This service is not available")}if(e.typeofdocument&&o){var r=_(o,e.typeofdocument);r?r.setAttribute("selected","selected"):console.log("Type of document is not valid for this service")}e.date1&&i&&(i.value=e.date1);e.date2&&c&&(c.value=e.date2);""!=t&&M("error",t)}(),"submit"==t.action&&n.dispatchEvent(new Event("submit",{cancelable:!0}))}function E(){var e=new URLSearchParams(window.location.search);return Object.fromEntries(e)}function _(e,t){return e.querySelector('[value="'+t+'"]')}function L(e,t){var n=E(),r=new URL(window.location);null==r.searchParams.get(e)&&r.searchParams.get(e)==t&&0!=Object.keys(n).length||(r.searchParams.set(e,t),window.history.pushState({},"",r),window.dispatchEvent(new Event("popstate")))}function x(e){b(),L("service",a.selectedOptions.item(0).value),k()}function k(e){L("typeofdocument",o.selectedOptions.item(0).value)}function I(e){return e.sort(function(e,t){return e<t?-1:e>t?1:0})}function R(e){L("form_firstdocumentdate"==e.target.id?"date1":"date2",e.target.value)}function O(e){e.preventDefault();A();(function(){var e=A();return!!(e.service&&e.type&&e.firstDocumentDate&&e.secondDocumentDate)})()&&function(){return g.apply(this,arguments)}().then(function(e){!function(e){j.apply(this,arguments)}(e),function(){console.log("showLegend",legendMsg),r(document.getElementsByClassName("legend")).map(function(e){return e&&e.remove()});var e=document.createElement("DIV");e.classList.add("legend");var t=document.createElement("DIV"),a=document.createElement("DIV");t.classList.add("legend_item"),a.classList.add("legend_item"),t.innerHTML=legendMsg.add,a.innerHTML=legendMsg.remove,e.append(t),e.append(a),n&&T(e,n)}(),function(e){var n=A(),r=B(n.firstDocumentDate),a=B(n.secondDocumentDate),o=B(e[0].version_at_date.substr(0,10)),i=B(e[1].version_at_date.substr(0,10)),c=(0,t.Nanostache)(notificationsMsgs.dateClosest,{firstDocumentDate:r,secondDocumentDate:a,firstDocumentVersionAtDate:o,secondDocumentVersionAtDate:i,Date:Date});e[0].version_at_date==e[1].version_at_date&&(c=(0,t.Nanostache)(notificationsMsgs.nothingToCompare,{onlyDocumentDate:r}));M("info",c)}(e)})}function A(){var e=new FormData(n);return{service:e.get("form_services"),type:e.get("form_typeofdocuments"),firstDocumentDate:e.get("form_firstdocumentdate"),secondDocumentDate:e.get("form_seconddocumentdate")}}function j(){return(j=d(regeneratorRuntime.mark(function t(r){var a,o,i,c,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=new e.default,o=a.diff_main(r[0].data,r[1].data),i=q(o),(c=document.createElement("DIV")).classList.add("diffviewer_content"),c.innerHTML=i,(s=document.createElement("DIV")).classList.add("diffviewer"),s.append(c),n&&T(s,n);case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}function M(e,t){S();var r=document.createElement("DIV");r.classList.add("notification"),r.classList.add("notification-"+e);var a=document.createElement("DIV");a.classList.add("notification_content"),a.innerHTML=t,r.append(a),n&&T(r,n)}function S(){r(document.getElementsByClassName("notification")).map(function(e){return e&&e.remove()})}function T(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function q(e){for(var t=[],n=/&/g,r=/</g,a=/>/g,o=/\n/g,i=0;i<e.length;i++){var c=e[i][0],s=e[i][1].replace(n,"&amp;").replace(r,"&lt;").replace(a,"&gt;").replace(o,"<br>");switch(c){case 1:t[i]="<ins>"+s+"</ins>";break;case-1:t[i]="<del>"+s+"</del>";break;case 0:t[i]="<span>"+s+"</span>"}}return t.join("")}function B(e){return new Date(e).toLocaleString("default",{day:"2-digit",month:"2-digit",year:"numeric"})}window.fetch?function(){u.apply(this,arguments)}():M("error",notificationsMsgs.browserSupport)});
},{"regenerator-runtime/runtime":"KA2S","diff-match-patch":"h73i","@solid-js/nanostache":"FQmn"}]},{},["KeW6"], null)
//# sourceMappingURL=/explorer.js.map