(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-navBarMemo-index"],{"0200":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},onLoad:function(){},methods:{onPageJump:function(e){uni.navigateTo({url:e})},onShare:function(e){uni.reLaunch({url:e})},onSwitchTab:function(e){uni.switchTab({url:e})},onJumpWebview:function(e){window.open(e)}}};t.default=a},"18a8":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("nav-bar",{attrs:{back:!1}},[e._v("案例展示")]),a("v-uni-view",{staticClass:"table_box"},[a("v-uni-view",{staticClass:"table_title"},[e._v("使用文档")]),a("v-uni-view",{staticClass:"table_content"},[a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onJumpWebview("https://ext.dcloud.net.cn/plugin?id=813")}}},[e._v("文档地址：https://ext.dcloud.net.cn/plugin?id=813")])],1)],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("默认固定导航 (nvue版)")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo1")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("不固定导航")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo2")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("透明导航")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo3")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("透明固定导航 (nvue版)")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo10")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("颜色渐变固定导航")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo11")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("复杂的颜色渐变导航")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo4")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("显示首页按钮、标题居左、字体颜色、背景颜色")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShare("/pages/demo/navBarMemo/demo5")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("分享出去的页面效果")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo6")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("左插槽-地址选择")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo7")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("中插槽-搜索框")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo8")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("右插槽-搜索图标")])],1),a("v-uni-view",{staticClass:"nav_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageJump("/pages/demo/navBarMemo/demo9")}}},[a("v-uni-image",{attrs:{src:n("694e").replace(/^\./,""),mode:"aspectFit"}}),a("v-uni-text",[e._v("动态改变标题、字体颜色、背景颜色")])],1)],1)},o=[]},"3d0f":function(e,t,n){"use strict";n.r(t);var a=n("18a8"),i=n("4dee");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("8723");var s,c=n("f0c5"),v=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"5c0563ea",null,!1,a["a"],s);t["default"]=v.exports},"4dee":function(e,t,n){"use strict";n.r(t);var a=n("0200"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"593b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABp0lEQVRYR+3VvUoDQRSG4e9sGkmRVu9AK7ESG7ETG+3UQkyiiIVl3DkDqdLOGEwaBbGJ/3+dKF6CxDsQbyHeQAg7MrCCWO3MDkmT1Jt9n50zO0sY8Y9G3McYMF4BpxVQSm1JKW9CbtzMABsnomsALWauhUJkBtigUkoQkQZwKYSoEpHJC3EC2JjWeh/AmTHmtVAoVOM47uVBOANSxCaAWwAfxpiqlPLTF+EFSBErKaJHRBUhxLsPwhuQ7okFIroDUAJQYeYXV0QugI01m82ZJEkeAMym47hwQeQGpOOYAvAIYBFAjZlbWRFBADbWaDQmisWiRawC2GHmThZEaIAdxRqADWZ+Ghqg3W5P9vt9G18a+giUUtNEdA9gzhhTllJeZXny32tyjUApNZ/GS1EUbcdx/OYSt9d6A7TWy/YMSJKkF0VRWQjRdY17A7TW6+kB1LXvPjN/+cS9AFrrPQDnAJ4Hg8FuvV7/9o07A7TWMYAjAB0hxO5QP8dKqQMiOjHGHEspD/M89d//Om1Ci5BSnoaKO48gZDjIORAC5DSCEMH/9xgDRr4CP0GtiCEKKiJ5AAAAAElFTkSuQmCC"},"694e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADHElEQVRYR9WWT4hPURTHv+c9isKC/CvEyp8sTFlRk8mOULPAYrJSzORPmvfO/S2wwOJ3z/tNwuRP2YgFFlNG7DRS7MRCYmVCGSMWKDTze0dPv9+vmfd7/35GTe7qde+53/O559x3ziVM86Bp9o//D6BcLh9wXXevqi4GML8WwS9E9LFard4slUpXWolqoQgEQbAoDMMbRLQFwMwcB2Oq+tBxnC7f90fzYHIBrLUXiGg/gFl5YrH1n6p61RhzOGtfJoCI3AOwrUXHcfP7zLw9TSMVQERGAER5/hfjIzMvSRJKBBCRQQA7CngOazZOAdu7zLwzbtcEUKlU2sMwHAJQRPRITfB8AYDQcZwOz/MeTbRtAhCRZwA2FBBshLWFdD1n5rZUgL6+vk3VavVxAecgoj2+79+ObIMg2K2qt4rsc113c29v75O67aQIiMglAAfzhFR12BizaqKdtfYNEa3M2wvgMjN3pwG8A7AsQeQXgM8A3gJ4GYbhtVKpNCmX5XK53XXdfQDWquoKAAsAzE7Qes/My9MAfsQLjuM4Gz3Pe1rgZE0mQRB0qer1eIFi5gZYPAXRbxW/mJOIWwERkaSIKjM3/rA4gKY4aBkixfkfeWZu+I0DjAGYMVWILOcAxpm50dDiAF8BzM0Ic24kcpxH0t+YeV7iJQyCYEhVo5abNl4z85qseyAirwCsTrMhooe+73ckAlhrDxHRhQwHg8y8KwfgDoCmml/fo6qHjTH9iQDRpLX2GxHNSXFygpnP1NestT3RtzHmYn1ORI4DOJ20X1W/G2MmpbipF9QeIIeSBOpl1FrbSURR1VxUsxtV1W5jzEBWOVfV/vgDJa0dfwDQ1L9V9RgRHQWQVnKHVfUcEZ1NOMAIMy+Nz6cBRN0w6or/crQx8/NCAJGRiEQNo5HbKZL0MHOUsqaR+SasVCrrwjB8kJSOgkAjjuNs9TzvZepvWURIRAZqT7S0KhmXGQcQPcE68/Rzn+V1gVo0TgFoB7AwRfgTgEeO45zMOvXEvYUB4g5FZAMRrY/mVfVF0gXLO320/tcARcSL2Ew7wG8R4ikwIjilWwAAAABJRU5ErkJggg=="},7577:function(e,t,n){var a=n("24fb"),i=n("1de5"),o=n("593b");t=a(!1);var s=i(o);t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.nav_list[data-v-5c0563ea]{background-color:#fff;padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;margin-bottom:%?10?%}.nav_list[data-v-5c0563ea]:active{background-color:#f5f5f5}.nav_list uni-image[data-v-5c0563ea]{width:%?40?%;height:%?40?%}.nav_list uni-text[data-v-5c0563ea]{font-size:%?28?%;color:#333;margin-left:%?30?%}.nav_list[data-v-5c0563ea]::after{content:"";position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?40?%;height:%?40?%;background-image:url('+s+");background-position:50%;background-repeat:no-repeat;background-size:cover}",""]),e.exports=t},8723:function(e,t,n){"use strict";var a=n("916b"),i=n.n(a);i.a},"916b":function(e,t,n){var a=n("7577");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("7f260204",a,!0,{sourceMap:!1,shadowMode:!1})}}]);