(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghu-add-or-update"],{"04b3":function(e,t,r){"use strict";r.r(t);var i=r("825a"),n=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},1054:function(e,t,r){"use strict";var i,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#C6EBF130",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户账号")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(t){e.$set(e.ruleForm,"yonghuzhanghao",t)},expression:"ruleForm.yonghuzhanghao"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#C6EBF130",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户密码")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghumima,placeholder:"用户密码"},model:{value:e.ruleForm.yonghumima,callback:function(t){e.$set(e.ruleForm,"yonghumima",t)},expression:"ruleForm.yonghumima"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#C6EBF130",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户姓名")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(t){e.$set(e.ruleForm,"yonghuxingming",t)},expression:"ruleForm.yonghuxingming"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#C6EBF130",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.touxiangTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("头像")]),e.ruleForm.touxiang?r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.touxiang.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{staticClass:"select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#C6EBF130",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("性别")]),r("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.xingbieChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666666"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#C6EBF130",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("手机号码")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.shoujihaoma,placeholder:"手机号码"},model:{value:e.ruleForm.shoujihaoma,callback:function(t){e.$set(e.ruleForm,"shoujihaoma",t)},expression:"ruleForm.shoujihaoma"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#333",borderRadius:"8rpx",background:"#C6EBF1",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},o=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}))},"6e35":function(e,t,r){"use strict";r.r(t);var i=r("1054"),n=r("04b3");for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);r("70f8");var a,u=r("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"19aadd10",null,!1,i["a"],a);t["default"]=s.exports},"70f8":function(e,t,r){"use strict";var i=r("a8b5"),n=r.n(i);n.a},"825a":function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("456d"),r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),o=i(r("e2b1")),a=i(r("064f")),u=i(r("bd56")),s={data:function(){return{cross:"",ruleForm:{yonghuzhanghao:"",yonghumima:"",yonghuxingming:"",touxiang:"",xingbie:"男",shoujihaoma:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuzhanghao:!1,yonghumima:!1,yonghuxingming:!1,touxiang:!1,xingbie:!1,shoujihaoma:!1}}},components:{wPicker:o.default,xiaEditor:a.default,multipleSelect:u.default},watch:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(i=e.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(this.cross=t.cross,!t.cross){e.next=46;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=46;break}if(o=e.t1.value,"yonghuzhanghao"!=o){e.next=24;break}return this.ruleForm.yonghuzhanghao=n[o],this.ro.yonghuzhanghao=!0,e.abrupt("continue",18);case 24:if("yonghumima"!=o){e.next=28;break}return this.ruleForm.yonghumima=n[o],this.ro.yonghumima=!0,e.abrupt("continue",18);case 28:if("yonghuxingming"!=o){e.next=32;break}return this.ruleForm.yonghuxingming=n[o],this.ro.yonghuxingming=!0,e.abrupt("continue",18);case 32:if("touxiang"!=o){e.next=36;break}return this.ruleForm.touxiang=n[o].split(",")[0],this.ro.touxiang=!0,e.abrupt("continue",18);case 36:if("xingbie"!=o){e.next=40;break}return this.ruleForm.xingbie=n[o],this.ro.xingbie=!0,e.abrupt("continue",18);case 40:if("shoujihaoma"!=o){e.next=44;break}return this.ruleForm.shoujihaoma=n[o],this.ro.shoujihaoma=!0,e.abrupt("continue",18);case 44:e.next=18;break;case 46:this.styleChange(),this.$forceUpdate();case 48:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var t={color:"#666666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var t={color:"#00babd"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var t={color:"#666666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var t={color:"#00babd"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #00babd",borderRadius:"100%",background:"#19d2d5"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #00babd",color:"#ffffff",borderRadius:"100%",background:"#19d2d5"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))}))}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="file/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r,i,n,o,a,u,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yonghuzhanghao){e.next=3;break}return this.$utils.msg("用户账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.yonghumima){e.next=6;break}return this.$utils.msg("用户密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.yonghuxingming){e.next=9;break}return this.$utils.msg("用户姓名不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){e.next=12;break}return this.$utils.msg("手机号码应输入手机格式"),e.abrupt("return");case 12:if(!this.cross){e.next=29;break}if(uni.setStorageSync("crossCleanType",!0),o=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==o){e.next=29;break}if(t||(t=uni.getStorageSync("crossObj")),o.startsWith("[")){e.next=25;break}for(u in t)u==o&&(t[u]=a);return s=uni.getStorageSync("crossTable"),e.next=23,this.$api.update("".concat(s),t);case 23:e.next=29;break;case 25:r=Number(uni.getStorageSync("userid")),i=t["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 29:if(!i||!r){e.next=52;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,c={page:1,limit:10,crossuserid:r,crossrefid:i},e.next=35,this.$api.list("yonghu",c);case 35:if(l=e.sent,!(l.data.total>=n)){e.next=42;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 42:if(!this.ruleForm.id){e.next=47;break}return e.next=45,this.$api.update("yonghu",this.ruleForm);case 45:e.next=49;break;case 47:return e.next=49,this.$api.add("yonghu",this.ruleForm);case 49:this.$utils.msgBack("提交成功");case 50:e.next=60;break;case 52:if(!this.ruleForm.id){e.next=57;break}return e.next=55,this.$api.update("yonghu",this.ruleForm);case 55:e.next=59;break;case 57:return e.next=59,this.$api.add("yonghu",this.ruleForm);case 59:this.$utils.msgBack("提交成功");case 60:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s},a8b5:function(e,t,r){var i=r("df78");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("560a7822",i,!0,{sourceMap:!1,shadowMode:!1})},df78:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-19aadd10]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t}}]);