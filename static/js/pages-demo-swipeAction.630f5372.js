(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-swipeAction"],{"1d07":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("nav-bar",{attrs:{title:"滑动操作"}}),i("public-module"),i("v-uni-view",{staticClass:"table_box"},[i("v-uni-view",{staticClass:"table_head"},[i("v-uni-text",[t._v("组件参数")]),i("v-uni-text",[t._v("类型")]),i("v-uni-text",[t._v("描述")])],1),i("v-uni-view",{staticClass:"table_content"},[i("v-uni-text",[t._v("options")]),i("v-uni-text",[t._v("Array")]),i("v-uni-text",[t._v("[{\n\t\t\t\ttext: '删除',\n\t\t\t\tstyle: {\n\t\t\t\t\tbackgroundColor: '#dd524d'\n\t\t\t\t}}]")])],1),i("v-uni-view",{staticClass:"table_content"},[i("v-uni-text",[t._v("disabled")]),i("v-uni-text",[t._v("Boolean")]),i("v-uni-text",[t._v("默认false ，是否禁止滑动")])],1),i("v-uni-view",{staticClass:"table_content"},[i("v-uni-text",[t._v("show")]),i("v-uni-text",[t._v("Boolean")]),i("v-uni-text",[t._v("默认false ，是否打开")])],1),i("v-uni-view",{staticClass:"table_content"},[i("v-uni-text",[t._v("autoClose")]),i("v-uni-text",[t._v("Boolean")]),i("v-uni-text",[t._v("默认true ，是否自动关闭")])],1),i("v-uni-view",{staticClass:"table_content"},[i("v-uni-text",[t._v("index")]),i("v-uni-text",[t._v("Number")]),i("v-uni-text",[t._v("默认0 ，索引值，通过@button传递出去")])],1),i("v-uni-view",{staticClass:"table_content"},[i("v-uni-text",[t._v("@button")]),i("v-uni-text",[t._v("function")]),i("v-uni-text",[t._v("左滑按钮点击事件")])],1)],1),i("v-uni-view",{staticClass:"swipe_action_list"},[i("swipe-action",{attrs:{options:t.options,show:t.show}},[i("v-uni-view",{staticClass:"swipe_action"},[t._v("滑动")])],1)],1),i("v-uni-view",{staticClass:"swipe_action_list"},[i("swipe-action",{attrs:{options:t.options2,disabled:!0}},[i("v-uni-view",{staticClass:"swipe_action"},[t._v("禁止滑动")])],1)],1),t._l(3,(function(n,e){return i("v-uni-view",{key:e,staticClass:"swipe_action_list"},[i("swipe-action",{attrs:{options:t.options3,index:e},on:{button:function(n){arguments[0]=n=t.$handleEvent(n),t.onButton.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClock(e)}}},[i("v-uni-view",{staticClass:"swipe_action"},[t._v("滑动列表"+t._s(e+1))])],1)],1)}))],2)},o=[]},"24b2":function(t,n,i){var e=i("7c6a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("676fb3f1",e,!0,{sourceMap:!1,shadowMode:!1})},"3f5b":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"swipe_action_box",on:{touchstart:function(n){arguments[0]=n=t.$handleEvent(n),t.onTouchstart.apply(void 0,arguments)},touchmove:function(n){arguments[0]=n=t.$handleEvent(n),t.onTouchmove.apply(void 0,arguments)},touchcancel:function(n){arguments[0]=n=t.$handleEvent(n),t.onTouchcancel.apply(void 0,arguments)},touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.onTouchend.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"swipe_action_item",style:{width:t.screenWidth+t.maxWidth+"px",transform:"translateX("+t.translateX+"px)",transition:"transform "+t.animationTime+"ms cubic-bezier(.165, .84, .44, 1)"}},[i("v-uni-view",{staticClass:"swipe_action_content",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2),i("v-uni-view",{ref:"swipeActionBtnBox",staticClass:"swipe_action_btn_box"},t._l(t.options,(function(n,e){return i("v-uni-view",{key:e,staticClass:"swipe_action_btn",style:{backgroundColor:n.style&&n.style.backgroundColor?n.style.backgroundColor:"#C7C6CD"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.onBtn(e,n)}}},[i("v-uni-text",{style:{fontSize:n.style&&n.style.fontSize?n.style.fontSize:"14px",color:n.style&&n.style.color?n.style.color:"#FFFFFF"}},[t._v(t._s(n.text))])],1)})),1)],1)],1)},o=[]},"4d77":function(t,n,i){var e=i("dc7d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("c4375776",e,!0,{sourceMap:!1,shadowMode:!1})},"699b":function(t,n,i){"use strict";i("a9e3"),i("ac1f"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=0,a={props:{options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},show:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},index:{type:Number,default:0}},data:function(){return{startTime:0,touchStartX:0,maxWidth:58,translateX:0,animationTime:0,currentX:0,screenWidth:0}},watch:{show:function(t){t?(this.animationTime=350,this.translateX=-this.maxWidth):(this.animationTime=350,this.translateX=0)}},created:function(){var t=uni.getSystemInfoSync();this.screenWidth=t.screenWidth},mounted:function(){var t=this,n=this;setTimeout((function(){uni.createSelectorQuery().in(t).selectAll(".swipe_action_btn_box").boundingClientRect((function(t){n.maxWidth=t[0].width,n.show&&(n.animationTime=350,n.translateX=-t[0].width)})).exec()}),500)},methods:{onClick:function(t){this.$emit("click",t)},onBtn:function(t,n){this.$emit("button",{content:n,index:this.index,buttonIndex:t}),this.autoClose&&(this.animationTime=350,this.translateX=0)},onTouchstart:function(t){if(!this.disabled){this.touchStartX=t.changedTouches[0].clientX;var n=(new Date).getTime();this.startTime=n,e=n,this.currentX=this.translateX}},onTouchmove:function(t){if(!this.disabled){var n=t.changedTouches[0].clientX,i=this.touchStartX-n,a=(new Date).getTime();if(i>0){var o=this.currentX-Math.abs(i);this.maxWidth<Math.abs(o)?(this.animationTime=(a-e)/1e3,this.translateX=-this.maxWidth):(this.animationTime=(a-e)/1e3,this.translateX=o)}else{var s=this.currentX+Math.abs(i);0<s?(this.animationTime=(a-e)/1e3,this.translateX=0):(this.animationTime=(a-e)/1e3,this.translateX=s)}e=a}},onTouchcancel:function(t){this.disabled||this.finallySlide(t.changedTouches[0].clientX)},onTouchend:function(t){this.disabled||this.finallySlide(t.changedTouches[0].clientX)},finallySlide:function(t){var n=(new Date).getTime(),i=n-this.startTime,e=this.touchStartX-t;e>0?Math.abs(this.translateX)>this.maxWidth/2||i<300&&e>this.maxWidth/4?(this.animationTime=350,this.translateX=-this.maxWidth):(this.animationTime=350,this.translateX=0):e<0&&(Math.abs(this.translateX)<this.maxWidth/2||i<300&&Math.abs(e)>this.maxWidth/4?(this.animationTime=350,this.translateX=0):(this.animationTime=350,this.translateX=-this.maxWidth))}}};n.default=a},"70fd":function(t,n,i){"use strict";var e=i("4d77"),a=i.n(e);a.a},"7c6a":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".swipe_action_box[data-v-1a0fd6f2]{overflow:hidden;width:%?750?%}.swipe_action_item[data-v-1a0fd6f2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.swipe_action_content[data-v-1a0fd6f2]{width:%?750?%;\r\n-webkit-flex-shrink:0;flex-shrink:0\n}.swipe_action_btn_box[data-v-1a0fd6f2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.swipe_action_btn[data-v-1a0fd6f2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?30?%}",""]),t.exports=n},8007:function(t,n,i){"use strict";i.r(n);var e=i("1d07"),a=i("f1f3");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("70fd");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"aaf852a8",null,!1,e["a"],s);n["default"]=r.exports},b61d:function(t,n,i){"use strict";var e=i("24b2"),a=i.n(e);a.a},dc7d:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".swipe_action_list[data-v-aaf852a8]{border-bottom-width:%?2?%;border-bottom-color:#eee;border-bottom-style:solid}.swipe_action[data-v-aaf852a8]{background-color:#fff;padding:%?50?% %?30?%}",""]),t.exports=n},e779:function(t,n,i){"use strict";(function(t){var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("f4db")),o=e(i("4685")),s={components:{swipeAction:a.default,navBar:o.default},data:function(){return{options:[{text:"删除",style:{backgroundColor:"#dd524d"}},{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#dd524d"}}],options2:[{text:"删除",style:{backgroundColor:"#dd524d"}}],options3:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#dd524d"}}],show:!0}},onLoad:function(t){var n=this;setInterval((function(){n.show=!n.show}),5e3)},onShow:function(){},methods:{onPageJump:function(t){uni.navigateTo({url:t})},onButton:function(t){uni.showToast({title:"您点击了滑动列表"+(t.index+1)+"的第"+(t.buttonIndex+1)+"个按钮，按钮为‘"+t.content.text+"’",icon:"none"})},onClock:function(n){t.log(n)}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(t){return this.wxShare()}};n.default=s}).call(this,i("5a52")["default"])},f1f3:function(t,n,i){"use strict";i.r(n);var e=i("e779"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},f4db:function(t,n,i){"use strict";i.r(n);var e=i("3f5b"),a=i("fc49");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("b61d");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"1a0fd6f2",null,!1,e["a"],s);n["default"]=r.exports},fc49:function(t,n,i){"use strict";i.r(n);var e=i("699b"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a}}]);