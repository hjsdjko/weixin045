<template>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view :style='{"width":"100%","padding":"0 0 0 0","position":"relative","background":"#ffffff","height":"100%"}'>
			<view :style='{"minHeight":"100rpx","width":"100%","position":"relative","alignItems":"center","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"backgroundColor":"#f5f5f5","margin":"0 30rpx 0 30rpx","color":"#333333","alignItems":"center","borderRadius":"40rpx","flex":"1","display":"flex","lineHeight":"64rpx","fontSize":"24rpx","height":"64rpx"}'>
					<text class="iconfont icon-sousuo1" :style='{"margin":"0 16rpx 0 16rpx"}'></text>
					<input v-model="searchForm.caipinmingcheng" type="text" placeholder="菜品名称" :style='{"background":"transparent","height":"100%"}'></input>
				</view>
				<button @tap="search" :style='{"border":"0px","padding":"0 40rpx 0 40rpx","margin":"0 20rpx 0 0px","borderRadius":"40rpx","background":"#f0f0f0","fontSize":"28rpx","lineHeight":"64rpx","height":"64rpx"}'>搜索</button>
			</view>
			<view :style='{"width":"100%","flexWrap":"wrap","background":"#ffffff","justifyContent":"space-between","display":"flex","height":"auto"}'>
				<scroll-view scroll-x="true" class="category-one" :style='{"padding":"0px","margin":"20rpx 0 20rpx 0","whiteSpace":"nowrap","background":"none","display":"flex","width":"100%","height":"80rpx"}'>
					<view :class='categoryName === item.caipinfenlei ? "active" : ""' class="tab" v-for="(item,index) in categoryList" :key="index" @tap="categoryClick(item.caipinfenlei)">{{item.caipinfenlei}}</view>
				</scroll-view>

			
			
			<!-- 样式3 -->
			<view v-if="lists.length" class="list-box4" :style='{"width":"calc(100% - 220rpx)","padding":"24rpx 24rpx 24rpx 24rpx","margin":"0px 0 0 0","flex":"1","height":"auto"}'>
				<block v-for="(list,index) in lists" :key="index">
				<view v-if="list.length>0" @tap="onDetailTap(list[0])" class="list-item" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","position":"relative","height":"auto"}'>
				  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"270rpx"}' mode="aspectFill" v-if="preHttp(list[0].caipintupian)" :src="list[0].caipintupian"></image>
				  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"270rpx"}' mode="aspectFill" v-else :src="list[0].caipintupian?baseUrl+list[0].caipintupian.split(',')[0]:''"></image>
					<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">{{list[0].caipinmingcheng}}</view>
					<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">菜品分类:{{list[0].caipinfenlei}}</view>
				  <view :style='{"width":"100%","padding":"40rpx 20rpx 40rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
				  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','修改')) || (!userid && isAuthFront('caipinxinxi','修改'))" @click.stop="onUpdateTap(list[0].id)">
				  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}' class="iconfont icon-xiugai1"></text>
				  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}'>修改</text>
				  	</view>
				  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','删除')) || (!userid && isAuthFront('caipinxinxi','删除'))" @click.stop="onDeleteTap(list[0].id)">
				  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}' class="iconfont icon-shanchu1"></text>
				  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}'>删除</text>
				  	</view>
				  </view>
				</view>
				<view v-if="list.length>1" class="list-item-body" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view v-if="list.length>1" @tap="onDetailTap(list[1])" :style='{"width":"48%","padding":"0 0 0 0","margin":"0 0 0 0","position":"relative","height":"auto"}'>
					  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" v-if="preHttp(list[1].caipintupian)" :src="list[1].caipintupian"></image>
					  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" v-else :src="list[1].caipintupian?baseUrl+list[1].caipintupian.split(',')[0]:''"></image>
						<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">{{list[1].caipinmingcheng}}</view>
						<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">菜品分类:{{list[1].caipinfenlei}}</view>
					  
					  <view :style='{"width":"100%","padding":"40rpx 20rpx 40rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','修改')) || (!userid && isAuthFront('caipinxinxi','修改'))" @click.stop="onUpdateTap(list[1].id)">
					  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}' class="iconfont icon-xiugai1"></text>
					  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}'>修改</text>
					  	</view>
					  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','删除')) || (!userid && isAuthFront('caipinxinxi','删除'))" @click.stop="onDeleteTap(list[1].id)">
					  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}' class="iconfont icon-shanchu1"></text>
					  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}'>删除</text>
					  	</view>
					  </view>
					</view>
					<view v-if="list.length>2" @tap="onDetailTap(list[2])" :style='{"width":"48%","padding":"0 0 0 0","margin":"0 0 0 0","position":"relative","height":"auto"}'>
					  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" v-if="preHttp(list[2].caipintupian)" :src="list[2].caipintupian"></image>
					  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" v-else :src="list[2].caipintupian?baseUrl+list[2].caipintupian.split(',')[0]:''"></image>
						<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">{{list[2].caipinmingcheng}}</view>
						<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">菜品分类:{{list[2].caipinfenlei}}</view>
					  
					  <view :style='{"width":"100%","padding":"40rpx 20rpx 40rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','修改')) || (!userid && isAuthFront('caipinxinxi','修改'))" @click.stop="onUpdateTap(list[2].id)">
					  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}' class="iconfont icon-xiugai1"></text>
					  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}'>修改</text>
					  	</view>
					  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','删除')) || (!userid && isAuthFront('caipinxinxi','删除'))" @click.stop="onDeleteTap(list[2].id)">
					  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}' class="iconfont icon-shanchu1"></text>
					  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}'>删除</text>
					  	</view>
					  </view>
					</view>
				</view>
				
				<view v-if="list.length>3" @tap="onDetailTap(list[3])" class="list-item" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","position":"relative","height":"auto"}'>
				  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"270rpx"}' mode="aspectFill" v-if="preHttp(list[3].caipintupian)" :src="list[3].caipintupian"></image>
				  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"270rpx"}' mode="aspectFill" v-else :src="list[3].caipintupian?baseUrl+list[3].caipintupian.split(',')[0]:''"></image>
					<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">{{list[3].caipinmingcheng}}</view>
					<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">菜品分类:{{list[3].caipinfenlei}}</view>
				  <view :style='{"width":"100%","padding":"40rpx 20rpx 40rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
				  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','修改')) || (!userid && isAuthFront('caipinxinxi','修改'))" @click.stop="onUpdateTap(list[3].id)">
				  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}' class="iconfont icon-xiugai1"></text>
				  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}'>修改</text>
				  	</view>
				  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','删除')) || (!userid && isAuthFront('caipinxinxi','删除'))" @click.stop="onDeleteTap(list[3].id)">
				  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}' class="iconfont icon-shanchu1"></text>
				  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}'>删除</text>
				  	</view>
				  </view>
				</view>
				<view v-if="list.length>4" class="list-item-body" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 0 0","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view v-if="list.length>4" @tap="onDetailTap(list[4])" :style='{"width":"48%","padding":"0 0 0 0","margin":"0 0 0 0","position":"relative","height":"auto"}'>
					  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" v-if="preHttp(list[4].caipintupian)" :src="list[4].caipintupian"></image>
					  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" v-else :src="list[4].caipintupian?baseUrl+list[4].caipintupian.split(',')[0]:''"></image>
						<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">{{list[4].caipinmingcheng}}</view>
						<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">菜品分类:{{list[4].caipinfenlei}}</view>
					  
					  <view :style='{"width":"100%","padding":"40rpx 20rpx 40rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','修改')) || (!userid && isAuthFront('caipinxinxi','修改'))" @click.stop="onUpdateTap(list[4].id)">
					  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}' class="iconfont icon-xiugai1"></text>
					  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}'>修改</text>
					  	</view>
					  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','删除')) || (!userid && isAuthFront('caipinxinxi','删除'))" @click.stop="onDeleteTap(list[4].id)">
					  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}' class="iconfont icon-shanchu1"></text>
					  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}'>删除</text>
					  	</view>
					  </view>
					</view>
					<view v-if="list.length>5" @tap="onDetailTap(list[5])" :style='{"width":"48%","padding":"0 0 0 0","margin":"0 0 0 0","position":"relative","height":"auto"}'>
					  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" v-if="preHttp(list[5].caipintupian)" :src="list[5].caipintupian"></image>
					  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" v-else :src="list[5].caipintupian?baseUrl+list[5].caipintupian.split(',')[0]:''"></image>
						<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">{{list[5].caipinmingcheng}}</view>
						<view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 12rpx","backgroundColor":"#C6EBF130","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title">菜品分类:{{list[5].caipinfenlei}}</view>
					  
					  <view :style='{"width":"100%","padding":"40rpx 20rpx 40rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','修改')) || (!userid && isAuthFront('caipinxinxi','修改'))" @click.stop="onUpdateTap(list[5].id)">
					  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}' class="iconfont icon-xiugai1"></text>
					  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#069888","display":"inline-block"}'>修改</text>
					  	</view>
					  	<view :style='{"display":"flex"}' v-if="(userid && isAuth('caipinxinxi','删除')) || (!userid && isAuthFront('caipinxinxi','删除'))" @click.stop="onDeleteTap(list[5].id)">
					  		<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}' class="iconfont icon-shanchu1"></text>
					  		<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#cc0000","display":"inline-block"}'>删除</text>
					  	</view>
					  </view>
					</view>
				</view>
				</block>
			</view>
			
			
			

			</view>
			
			
			
		</view>
		<button :style='{"margin":"0 2% 0 2%","borderRadius":"0px","textAlign":"center","background":"#eeeeee","width":"96%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' class="add-btn" @click="screenBoxShow=true">筛选</button>
		<button :style='{"border":"0","boxShadow":"0 2rpx 12rpx #cccccc","color":"#333333","bottom":"120rpx","right":"120rpx","outline":"none","borderRadius":"100%","background":"#75ebde","width":"80rpx","lineHeight":"80rpx","fontSize":"28rpx","position":"fixed","height":"80rpx","zIndex":"999"}' v-if="userid && isAuth('caipinxinxi','新增')" class="add-btn" @click="onAddTap()">新增</button>
		<button :style='{"border":"0","boxShadow":"0 2rpx 12rpx #cccccc","color":"#333333","bottom":"120rpx","right":"120rpx","outline":"none","borderRadius":"100%","background":"#75ebde","width":"80rpx","lineHeight":"80rpx","fontSize":"28rpx","position":"fixed","height":"80rpx","zIndex":"999"}' v-if="!userid && isAuthFront('caipinxinxi','新增')" class="add-btn" @click="onAddTap()">新增</button>
	</view>
	<view class="screenBoxBG" v-if="screenBoxShow" @click="screenBoxShow=false"></view>
	<view :style='{"width":"80%","padding":"120rpx 20rpx 40rpx","background":"#d1f1ed"}' class="screenBox" :class="screenBoxShow?'screenBoxActive':''">
		<view :style='{"width":"100%","padding":"20rpx 0 20rpx 0"}'>
			<view :style='{"width":"100%","padding":"0 0 20rpx 20rpx","fontSize":"24rpx"}'>菜品分类</view>
			<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"space-around","display":"flex"}'>
				<view @click="caipinfenleiChange(item)" v-for="(item,index) in caipinfenleiOptions" :key="index" class="screenTab" :class="searchForm.caipinfenlei==item?'screenTabActive':''">{{item}}</view>
			</view>
		</view>
		<view :style='{"width":"100%","padding":"0 24rpx 0 24rpx","margin":"110rpx 0 0 0","alignItems":"center","justifyContent":"flex-start","display":"flex"}'>
			<button :style='{"margin":"0 20rpx 0 0","color":"#888888","borderRadius":"60rpx","textAlign":"center","background":"#ffffff","width":"30%","lineHeight":"60rpx","height":"60rpx","order":"2"}' @click="screenReset">重置</button>
			<button :style='{"margin":"0 20rpx 0 0","color":"#333333","borderRadius":"60rpx","textAlign":"center","background":"#75ebde","width":"30%","lineHeight":"60rpx","height":"60rpx","order":"1"}' @click="search">确定</button>
		</view>
	</view>
</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				caipinfenleiOptions:[],
				list: [],
				lists: [],
                userid: '',
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm:{},
				categoryList:[],
				categoryName :'全部',
				CustomBar: '0',
				screenBoxShow:false
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onShow() {
            if(uni.getStorageSync("useridTag")==1){
                this.userid=uni.getStorageSync("useridTag");
                uni.removeStorageSync("useridTag");
            } else {
                this.userid = "";
            }
			this.btnColor = this.btnColor.sort(()=> {
                                return (0.5-Math.random());
                        });
            let res = {};
            if(this.userid) {
                res = await this.$api.page('caipinfenlei', {page:1,limit:100});
            } else {
                res = await this.$api.list('caipinfenlei', {page:1,limit:100});
            }
			res.data.list.splice(0,0,{id:0,caipinfenlei:'全部'})
			this.categoryList = res.data.list;
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		async onLoad(options) {
            if(uni.getStorageSync("useridTag")==1){
                this.userid=uni.getStorageSync("useridTag");
                uni.removeStorageSync("useridTag");
            } else {
                this.userid = "";
            }
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
			let res = {};
			//caipinfenlei筛选
			res = await this.$api.option(`caipinfenlei`,`caipinfenlei`,{});
			this.caipinfenleiOptions = res.data;
		},
		methods: {
			
			caipinfenleiChange(e){
				this.searchForm.caipinfenlei = e
				this.$forceUpdate()
			},
			screenReset(){
				this.searchForm = {}
				this.$forceUpdate()
			},
            priceChange(price) {
                return Number(price).toFixed(2);
            },
            preHttp(str) {
                return str && str.substr(0,4)=='http';
            },
			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.caipinmingcheng="";
				this.searchForm.caipinfenlei="";
			},
			//类别搜索
			categoryClick(categoryName){
				this.categoryName = categoryName;
				this.mescroll.resetUpScroll();
			},
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: 6
				}

				if(this.categoryName!='全部'){
					params.caipinfenlei = '%' + this.categoryName + '%'
				}

				if(this.searchForm.caipinmingcheng){
					params['caipinmingcheng'] = '%' + this.searchForm.caipinmingcheng + '%'
				}
				if(this.searchForm.caipinfenlei){
					params['caipinfenlei'] = '%' + this.searchForm.caipinfenlei + '%'
				}



                let res = {}
                if(this.userid) {
                    res = await this.$api.page(`caipinxinxi`, params);
                } else {
                    res = await this.$api.list(`caipinxinxi`, params);
                }
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			// 详情
			onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
			},
			// 修改
			onUpdateTap(id){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update?id=${id}`)
			},
			// 添加
			onAddTap(){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update`)
			},
			onDeleteTap(id){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('caipinxinxi', JSON.stringify([id]));
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.mescroll.resetUpScroll()
						}
					}
				});
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: 6
				}
				if(this.searchForm.caipinmingcheng){
					searchForm['caipinmingcheng'] = '%' + this.searchForm.caipinmingcheng + '%'
				}
				if(this.searchForm.caipinfenlei){
					searchForm['caipinfenlei'] = this.searchForm.caipinfenlei
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`caipinxinxi`, searchForm);
                } else {
                    res = await this.$api.list(`caipinxinxi`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
				this.screenBoxShow = false
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.category-one .tab {
		cursor: pointer;
		padding: 0 20rpx 0 20rpx;
		margin: 0 8rpx;
		color: #333333;
		background: #C6EBF1;
		display: inline-block;
		width: auto;
		font-size: 28rpx;
		line-height: 80rpx;
		height: 80rpx;
	}
	
	.category-one .tab.active {
		cursor: pointer;
		padding: 0 20rpx 0 20rpx;
		margin: 0 8rpx;
		color: #ffffff;
		background: #3691a0;
		display: inline-block;
		width: auto;
		font-size: 28rpx;
		line-height: 80rpx;
	}
	
	.category-two .tab {
		cursor: pointer;
		padding: 0 0 0 0;
		margin: 0 0 24rpx;
		color: #333;
		background: url(http://chy2.gdnxeco.com/20230914/9a307f891d964f0cb446d562b4d23d72.png) no-repeat right center,#06988830;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
		height: 80rpx;
	}
	
	.category-two .tab.active {
		cursor: pointer;
		padding: 0 0 0 0;
		margin: 0 0 24rpx;
		color: #fff;
		background: url(http://chy2.gdnxeco.com/20230914/9a307f891d964f0cb446d562b4d23d72.png) no-repeat right center,#069888;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-three .tab {
		cursor: pointer;
		padding: 0 20rpx;
		margin: 0 0 24rpx;
		color: #333;
		background: #06988830;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
		height: 80rpx;
	}
	
	.category-three .tab.active {
		cursor: pointer;
		padding: 0 20rpx;
		margin: 0 0 24rpx;
		color: #fff;
		background: #069888;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	.screenBoxBG {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 665;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .3);
	}
	
	.screenBox {
		width: 80%;
		position: fixed;
		height: 100%;
		right: 0;
		top: 0;
		z-index: 666;
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
		transition: transform .3s;
		overflow-y: scroll;
		.screenTab{
			border-radius: 40rpx;
			margin: 10rpx 0 10rpx 0;
			color: #666666;
			background: #ffffff;
			width: calc(100% / 3 - 24rpx);
			line-height: 72rpx;
			text-align: center;
		}
		.screenTabActive{
			border-radius: 40rpx;
			margin: 10rpx 0 10rpx 0;
			color: #333333;
			background: #75ebde;
			width: calc(100% / 3 - 20rpx);
			line-height: 72rpx;
			text-align: center;
		}
	}
	
	.screenBoxActive {
		-webkit-transform: translate3d(0%, 0, 0);
		transform: translate3d(0%, 0, 0);
	}
</style>
