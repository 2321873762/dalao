(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-editInfo"],{"0bf1":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return p})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"page"},[o("nav-bar",{attrs:{title:"个人信息",bgColor:"#F5f5f5"}}),o("v-uni-view",{staticClass:"cell_list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onUnloadImg.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"cell_left txt"},[t._v("头像")]),o("v-uni-view",{staticClass:"cell_right"},[o("v-uni-image",{attrs:{src:t.avatar,mode:"aspectFill"}})],1)],1),o("z-prompt",{attrs:{value:t.nickname,text:"请输入昵称",options:t.popupOptions},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onNameChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"cell_list"},[o("v-uni-view",{staticClass:"cell_left txt"},[t._v("昵称")]),o("v-uni-view",{staticClass:"cell_right arrow"},[t._v(t._s(t.nickname))])],1)],1),o("z-prompt",{attrs:{value:t.phone,text:"请输入手机号",options:t.popupOptions},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onPhoneChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"cell_list"},[o("v-uni-view",{staticClass:"cell_left txt"},[t._v("手机号")]),o("v-uni-view",{staticClass:"cell_right arrow"},[t._v(t._s(t.phone))])],1)],1),o("v-uni-view",{staticClass:"form_but"},[o("v-uni-button",{staticClass:"active",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSubmit.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)},p=[]},"0e0a":function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{value:{type:String,default:function(){return""}},options:{type:Object,default:function(){return{}}}},data:function(){return{popupConfig:{title:"操作",tips:"请输入",confirmText:"确认",placeholder:"",password:!1,inputType:"text",maxlength:140,confirmType:"done"},popupInput:"",popupShow:!1}},created:function(){this.value&&(this.popupInput=this.value),this.options&&"object"==typeof this.options&&(this.popupConfig=Object.assign(this.popupConfig,this.options))},watch:{value:function(t){this.popupInput=t},options:function(t){t&&"object"==typeof t&&(this.popupConfig=Object.assign(this.popupConfig,t))}},methods:{onPopupShow:function(t,n){t&&(this.popupInput=t),n&&"object"==typeof n&&(this.popupConfig=Object.assign(this.popupConfig,n)),this.popupShow=!0},onPopupHide:function(){this.popupShow=!1},onConfirm:function(){var t=this;""!=this.popupInput?this.$emit("confirm",{close:function(){t.popupShow=!1},value:this.popupInput}):uni.showToast({title:"请输入",icon:"none"})}}};n.default=e},1837:function(t,n,o){"use strict";var e=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(o("5530")),p=e(o("a28f")),a=o("2f62"),u={components:{zPrompt:p.default},data:function(){return{popupOptions:{placeholder:""},avatar:"",nickname:"",phone:""}},computed:(0,i.default)({},(0,a.mapState)(["userInfo"])),onLoad:function(t){this.avatar=this.userInfo.avatar||"",this.nickname=this.userInfo.nickname||"",this.phone=this.userInfo.phone||""},onShow:function(){},methods:(0,i.default)((0,i.default)({},(0,a.mapMutations)(["setUserInfo"])),{},{onNameChange:function(t){this.nickname=t.value,t.close()},onPhoneChange:function(t){this.$base.phoneRegular.test(t.value)?(this.phone=t.value,t.close()):uni.showToast({title:"请输入正确的手机号",icon:"none"})},onUnloadImg:function(){var t=this;this.$http.urlImgUpload("api/common/v1/upload_image",{count:1}).then((function(n){t.avatar=n[0].url}))},onSubmit:function(){var t=this;if(""!=this.avatar)if(""!=this.nickname){var n={nickname:this.nickname,avatar:this.avatar};if(this.phone){if(!this.$base.phoneRegular.test(this.phone))return void uni.showToast({title:"请输入正确的手机号",icon:"none"});this.phone!=this.userInfo.phone&&(n.phone=this.phone)}this.$http.post("api/common/v1/edit_user_info",n).then((function(n){t.setUserInfo({nickname:t.nickname,avatar:t.avatar,phone:t.phone||t.userInfo.phone}),uni.showToast({title:"修改成功！"})}))}else uni.showToast({title:"请输入昵称",icon:"none"});else uni.showToast({title:"请上传头像",icon:"none"})}}),onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(t){return this.wxShare()}};n.default=u},"43c0":function(t,n,o){var e=o("d854");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("4f06").default;i("a81d8ad0",e,!0,{sourceMap:!1,shadowMode:!1})},"846f":function(t,n,o){"use strict";o.r(n);var e=o("1837"),i=o.n(e);for(var p in e)"default"!==p&&function(t){o.d(n,t,(function(){return e[t]}))}(p);n["default"]=i.a},"9cd1":function(t,n,o){"use strict";var e=o("c4d2"),i=o.n(e);i.a},a28f:function(t,n,o){"use strict";o.r(n);var e=o("d94a"),i=o("e736");for(var p in i)"default"!==p&&function(t){o.d(n,t,(function(){return i[t]}))}(p);o("d508");var a,u=o("f0c5"),s=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"57cdf699",null,!1,e["a"],a);n["default"]=s.exports},c4d2:function(t,n,o){var e=o("eeec");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("4f06").default;i("4bbcbbd6",e,!0,{sourceMap:!1,shadowMode:!1})},c805:function(t,n,o){"use strict";o.r(n);var e=o("0bf1"),i=o("846f");for(var p in i)"default"!==p&&function(t){o.d(n,t,(function(){return i[t]}))}(p);o("9cd1");var a,u=o("f0c5"),s=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"e098b398",null,!1,e["a"],a);n["default"]=s.exports},d508:function(t,n,o){"use strict";var e=o("43c0"),i=o.n(e);i.a},d854:function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.popupMask[data-v-57cdf699]{position:fixed;top:%?0?%;left:%?0?%;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:510;-webkit-animation:popupMask-data-v-57cdf699 .4s;animation:popupMask-data-v-57cdf699 .4s}.popupContentBox[data-v-57cdf699]{position:fixed;top:30%;left:10%;width:80%;-webkit-transform:translateY(-50%);transform:translateY(-50%);background-color:#fff;z-index:511;-webkit-animation:popupContentBox-data-v-57cdf699 .4s;animation:popupContentBox-data-v-57cdf699 .4s}.popupContentBox .close[data-v-57cdf699]{position:absolute;top:%?10?%;right:%?15?%;color:#999;font-size:%?42?%;line-height:%?40?%}.popupContentBox .title[data-v-57cdf699]{text-align:center;height:%?80?%;line-height:%?80?%;font-size:%?34?%;color:#666}.popupContentBox .popupContent[data-v-57cdf699]{padding:%?30?% %?40?%}.popupContentBox .popupContent .input[data-v-57cdf699]{width:100%;border-radius:%?10?%;border:1px solid #eee;height:%?80?%;font-size:%?30?%;padding:0 %?20?%;box-sizing:border-box}.popupContentBox .popupContent .introduce[data-v-57cdf699]{font-size:%?28?%;color:#999;padding-bottom:%?10?%}.popupContentBox .popupBut[data-v-57cdf699]{padding:%?20?% %?20?% %?20?% %?20?%}.popupContentBox .popupBut uni-button[data-v-57cdf699]{background-color:#ea552d;color:#fff}@-webkit-keyframes popupMask-data-v-57cdf699{0%{opacity:0}100%{opacity:1}}@keyframes popupMask-data-v-57cdf699{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes popupContentBox-data-v-57cdf699{0%{opacity:0;-webkit-transform:translateY(-60%);transform:translateY(-60%)}100%{opacity:1;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}@keyframes popupContentBox-data-v-57cdf699{0%{opacity:0;-webkit-transform:translateY(-60%);transform:translateY(-60%)}100%{opacity:1;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}',""]),t.exports=n},d94a:function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return p})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",[o("v-uni-view",{staticClass:"popupClick",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onPopupShow()}}},[t._t("default")],2),t.popupShow?o("v-uni-view",{staticClass:"popupMask",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onPopupHide.apply(void 0,arguments)}}}):t._e(),t.popupShow?o("v-uni-view",{staticClass:"popupContentBox"},[o("v-uni-view",{staticClass:"close",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onPopupHide.apply(void 0,arguments)}}},[t._v("×")]),o("v-uni-view",{staticClass:"title"},[t._v(t._s(t.popupConfig.title))]),o("v-uni-view",{staticClass:"popupContent"},[o("v-uni-view",{staticClass:"introduce"},[t._v(t._s(t.popupConfig.tips))]),"checkbox"===t.popupConfig.inputType?o("v-uni-input",{staticClass:"input",attrs:{"adjust-position":"true",password:t.popupConfig.password,placeholder:t.popupConfig.placeholder,maxlength:t.popupConfig.maxlength,focus:"true","placeholder-style":"color:#999","confirm-type":t.popupConfig.confirmType,type:"checkbox"},model:{value:t.popupInput,callback:function(n){t.popupInput=n},expression:"popupInput"}}):"radio"===t.popupConfig.inputType?o("input",{directives:[{name:"model",rawName:"v-model",value:t.popupInput,expression:"popupInput"}],staticClass:"input",attrs:{"adjust-position":"true",password:t.popupConfig.password,placeholder:t.popupConfig.placeholder,maxlength:t.popupConfig.maxlength,focus:"true","placeholder-style":"color:#999","confirm-type":t.popupConfig.confirmType,type:"radio"},domProps:{checked:t._q(t.popupInput,null)},on:{change:function(n){t.popupInput=null}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:t.popupInput,expression:"popupInput"}],staticClass:"input",attrs:{"adjust-position":"true",password:t.popupConfig.password,placeholder:t.popupConfig.placeholder,maxlength:t.popupConfig.maxlength,focus:"true","placeholder-style":"color:#999","confirm-type":t.popupConfig.confirmType,type:t.popupConfig.inputType},domProps:{value:t.popupInput},on:{input:function(n){n.target.composing||(t.popupInput=n.target.value)}}})],1),o("v-uni-view",{staticClass:"popupBut"},[o("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirm.apply(void 0,arguments)}}},[t._v(t._s(t.popupConfig.confirmText))])],1)],1):t._e()],1)},p=[]},e736:function(t,n,o){"use strict";o.r(n);var e=o("0e0a"),i=o.n(e);for(var p in e)"default"!==p&&function(t){o.d(n,t,(function(){return e[t]}))}(p);n["default"]=i.a},eeec:function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cell_list[data-v-e098b398]{padding:%?30?% %?30?%;margin:%?20?% %?30?% 0 %?30?%;border-radius:%?8?%}.cell_right uni-image[data-v-e098b398]{width:%?140?%;height:%?140?%;border-radius:50%}',""]),t.exports=n}}]);