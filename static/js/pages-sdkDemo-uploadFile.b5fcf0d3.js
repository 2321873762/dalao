(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sdkDemo-uploadFile"],{"431f":function(i,n,t){"use strict";t.r(n);var e=t("abd0"),o=t("eed9");for(var a in o)"default"!==a&&function(i){t.d(n,i,(function(){return o[i]}))}(a);t("c192");var l,s=t("f0c5"),u=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"18084933",null,!1,e["a"],l);n["default"]=u.exports},abd0:function(i,n,t){"use strict";var e;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return e}));var o=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("v-uni-view",[t("nav-bar",{attrs:{title:"服务器图片上传/文件上传"}}),t("public-module"),t("v-uni-view",{staticClass:"table_box"},[t("v-uni-view",{staticClass:"table_title"},[i._v("提醒：不要上传自己隐私照片，例如：身份证照片等")]),t("v-uni-view",{staticClass:"table_title"},[i._v("此图片可在后台管理（群公告有地址）预览")]),t("v-uni-view",{staticClass:"table_title"},[i._v("被拿人滥用本作者概不负责")])],1),t("v-uni-view",{staticClass:"input_form_box"},[t("v-uni-view",{staticClass:"input_box"},[t("v-uni-view",{staticClass:"name"},[i._v("上传图片")]),t("v-uni-view",{staticClass:"upload_info"},[i._l(i.imgs,(function(n,e){return t("v-uni-view",{key:e,staticClass:"upload_img"},[t("v-uni-image",{attrs:{src:n.url,mode:"aspectFill"}}),t("v-uni-text",{staticClass:"delete",on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.onDeleteImg(e)}}})],1)})),i.imgs.length<9?t("v-uni-view",{staticClass:"upload_img upload",on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.onImgsUpload.apply(void 0,arguments)}}}):i._e()],2)],1),t("v-uni-view",{staticClass:"input_form_box"},[t("v-uni-view",{staticClass:"input_box"},[t("v-uni-view",{staticClass:"name"},[i._v("上传视频")]),t("v-uni-view",{staticClass:"upload_info"},[i._l(i.videos,(function(n,e){return t("v-uni-view",{key:e,staticClass:"upload_img"},[t("v-uni-video",{attrs:{src:n.url,controls:!0}}),t("v-uni-text",{staticClass:"delete",on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.onDeleteVideo(e)}}})],1)})),i.videos.length<9?t("v-uni-view",{staticClass:"upload_img upload",on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.onVideosUpload.apply(void 0,arguments)}}}):i._e()],2)],1)],1),t("v-uni-view",{staticClass:"input_box"},[t("v-uni-view",{staticClass:"name"},[i._v("上传文件")]),t("v-uni-view",{staticClass:"upload_file_info"},[i._l(i.files,(function(n,e){return t("v-uni-view",{key:e,staticClass:"upload_file"},[t("v-uni-view",{staticClass:"upload_url"},[i._v(i._s(n.url))]),t("v-uni-text",{staticClass:"delete",on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.onDeleteFiles(e)}}},[i._v("删除")])],1)})),i.files.length<9?t("v-uni-button",{staticClass:"upload_file_btn",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.onFilesUpload.apply(void 0,arguments)}}},[i._v("上传文件")]):i._e()],2)],1)],1)],1)},a=[]},c192:function(i,n,t){"use strict";var e=t("cf75"),o=t.n(e);o.a},c1f3:function(i,n,t){"use strict";(function(i){t("99af"),t("a434"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{imgs:[],files:[],videos:[]}},onLoad:function(i){},onShow:function(){},methods:{onPageJump:function(i){uni.navigateTo({url:i})},onImgsUpload:function(){var n=this,t=9-this.imgs.length;this.$http.urlImgUpload({count:t,onEachUpdate:function(n){i.log("单张上传成功返回：",n)},onProgressUpdate:function(n){i.log("上传进度返回：",n)}}).then((function(i){n.imgs=n.imgs.concat(i)}))},onDeleteImg:function(i){this.imgs.splice(i,1)},onVideosUpload:function(){var n=this;this.$http.urlVideoUpload("api/common/v1/upload_file",{onEachUpdate:function(n){i.log("单张上传成功返回：",n)},onProgressUpdate:function(n){i.log("上传进度返回：",n)}}).then((function(i){n.videos=n.videos.concat(i)}))},onDeleteVideo:function(i){this.videos.splice(i,1)},onFilesUpload:function(){var n=this,t=9-this.files.length;uni.chooseImage({count:t,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){n.$http.urlFileUpload("api/common/v1/upload_file",{files:t.tempFiles},{onEachUpdate:function(n){i.log("单张上传成功返回：",n)},onProgressUpdate:function(n){i.log("上传进度返回：",n)}}).then((function(i){n.files=n.files.concat(i)}))}})},onDeleteFiles:function(i){this.files.splice(i,1)}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(i){return this.wxShare()}};n.default=e}).call(this,t("5a52")["default"])},cf75:function(i,n,t){var e=t("fa64");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var o=t("4f06").default;o("afdcadaa",e,!0,{sourceMap:!1,shadowMode:!1})},eed9:function(i,n,t){"use strict";t.r(n);var e=t("c1f3"),o=t.n(e);for(var a in e)"default"!==a&&function(i){t.d(n,i,(function(){return e[i]}))}(a);n["default"]=o.a},fa64:function(i,n,t){var e=t("24fb");n=e(!1),n.push([i.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.upload_file_info[data-v-18084933]{width:100%}.upload_file_info .upload_file[data-v-18084933]{border:%?2?% dashed #ccc;padding:%?30?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;margin-bottom:%?20?%}.upload_file_info .upload_file .upload_url[data-v-18084933]{font-size:%?28?%}.upload_file_info .upload_file .delete[data-v-18084933]{font-size:%?26?%;color:#fff;background-color:red;height:%?30?%;line-height:%?30?%;padding:0 %?15?%;border-radius:%?10?%;-webkit-flex-shrink:0;flex-shrink:0}.upload_file_btn[data-v-18084933]{height:%?88?%;background-color:#ea552d;color:#fff;margin-bottom:%?40?%}',""]),i.exports=n}}]);