<template>
	<view class="content">
		<view :style='{"width":"100%","padding":"24rpx","position":"relative","background":"#ffffff","height":"100%"}'>
			<view v-if="user&&user.id" :style='{"border":"2rpx solid #C6EBF190","padding":"0 24rpx 0 24rpx","margin":"0px 0 20rpx 0","borderRadius":"16rpx","background":"#C6EBF150","display":"flex","width":"100%","height":"280rpx"}' class="header" v-bind:class="{'status':isH5Plus}" @tap="onPageTap2('../user-info/user-info',1)">
				<view :style='{"width":"calc(100% - 112rpx)","alignItems":"center","display":"flex","height":"100%"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"width":"108rpx","padding":"0 0 0 0","margin":"0 20rpx 0 0","borderRadius":"8rpx","height":"108rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"100%","flex":"1","flexDirection":"column","justifyContent":"center","display":"flex","height":"100%"}' class="info">
						<view :style='{"width":"100%","lineHeight":"36rpx","fontSize":"28rpx","color":"#666666"}'>{{user.yonghuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"border":"0px solid #eeeeee","width":"72rpx","alignItems":"center","justifyContent":"center","display":"flex","height":"100%"}' class="setting">
					<view :style='{"border":"0px solid #eeeeee","width":"72rpx","lineHeight":"72rpx","fontSize":"72rpx","color":"#666666","borderRadius":"0px"}' class="iconfont icon-shezhi1"></view>
				</view>
			</view>
			<view v-else :style='{"border":"2rpx solid #C6EBF190","padding":"0 24rpx 0 24rpx","margin":"0px 0 20rpx 0","borderRadius":"16rpx","background":"#C6EBF150","display":"flex","width":"100%","height":"280rpx"}' class="header" v-bind:class="{'status':isH5Plus}" @tap="onPageTap2('../user-info/user-info',1)">
				<view :style='{"alignItems":"center","textAlign":"center","display":"flex","width":"100%","fontSize":"40rpx","justifyContent":"center","height":"100%"}'>登录/注册</view>
			</view>
			<view :style='{"padding":"0 20rpx","margin":"40rpx 0 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="list">
				<block v-for="(item,index) in menuList" v-bind:key="item.roleName" >
					<block v-if="item.child.length>1">
						<view @tap="secondClick(index)" :style='{"border":"2rpx solid #C6EBF190","padding":"8rpx 20rpx","margin":"0 0 40rpx 0","alignItems":"center","textAlign":"center","display":"flex","justifyContent":"center","borderRadius":"16rpx","flexWrap":"wrap","background":"#C6EBF130","width":"48%","position":"relative","height":"136rpx"}'
							class="li" hover-class="hover">
							<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","color":"#00babd"}' :class="item.fontClass"></view>
							<view :style='{"width":"100%","padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333"}' class="text">{{item.menu}}</view>
							<view v-if="true" :style='{"color":"#999999","top":"52rpx","width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","position":"absolute","right":"20rpx"}' class="iconfont icon-gengduo2"></view>
						</view>
						<uni-transition :style='{"width":"55%","padding":"0px","margin":"0 0 24rpx 0"}' :mode-class="['fade']" :duration="500"
							:show="secondIndex==index?true:false">
							<block v-bind:key="sort" v-for=" (child,sort) in item.child">
								<view :style='{"borderColor":"#eeeeee","margin":"0 0 0 0","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"90%","borderStyle":"solid","height":"auto"}'
									v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan'  && child.tableName!='examquestion' "
									@tap="onPageTap(child.tableName,child.menuJump)"
									class="li" hover-class="hover">
									<view :style='{"width":"100%","padding":"0 20rpx 0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333333","flex":"1"}' class="text">{{child.menu}}</view>
									<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999999"}' class="iconfont icon-gengduo2"></view>
								</view>
							</block>
						</uni-transition>
					</block>
					<block v-else>
						<view :style='{"border":"2rpx solid #C6EBF190","padding":"8rpx 20rpx","margin":"0 0 40rpx 0","alignItems":"center","textAlign":"center","display":"flex","justifyContent":"center","borderRadius":"16rpx","flexWrap":"wrap","background":"#C6EBF130","width":"48%","position":"relative","height":"136rpx"}' @tap="onPageTap(item.child[0].tableName,item.child[0].menuJump)"
							class="li" hover-class="hover">
							<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","color":"#00babd"}' :class="item.fontClass"></view>
							<view :style='{"width":"100%","padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333"}' class="text">{{item.child[0].menu}}</view>
							<view v-if="true" :style='{"color":"#999999","top":"52rpx","width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","position":"absolute","right":"20rpx"}' class="iconfont icon-gengduo2"></view>
						</view>
					</block>
				</block>

				<view v-if="user&&user.id" @tap="passwordShow()" :style='{"border":"2rpx solid #C6EBF190","padding":"8rpx 20rpx","margin":"0 0 40rpx 0","alignItems":"center","textAlign":"center","display":"flex","justifyContent":"center","borderRadius":"16rpx","flexWrap":"wrap","background":"#C6EBF130","width":"48%","position":"relative","height":"136rpx"}' class="li" hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","color":"#00babd"}' class="iconfont $template2.front.me.list.img.updatepasswod"></view>
					<view class="text" :style='{"width":"100%","padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333333"}'>修改密码</view>
					<view v-if="true" :style='{"color":"#999999","top":"52rpx","width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","position":"absolute","right":"20rpx"}' class="iconfont icon-gengduo2"></view>
				</view>
			</view>
		</view>
		<uni-popup class="popup-content" ref="passwordPopup" type="bottom">
			<view class="passwordForm">
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.mima" placeholder="原密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima" placeholder="新密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima1" placeholder="确认密码" />
				</view>
				<view class="passwordBtnView">
					<button class="passwordBtn" @click="updatePassword">更新</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
				secondIndex: -1,
				orderList: [{
						name: '全部',
						icon: 'icon-dingdan1'
					},
					{
						name: '未支付',
						icon: 'icon-dingdan2'
					},
					{
						name: '已支付',
						icon: 'icon-dingdan3'
					},
					{
						name: '已完成',
						icon: 'icon-dingdan4'
					},
					{
						name: '已取消',
						icon: 'icon-dingdan5'
					},
				],
				passwordForm: {
					mima: '',
					newmima: '',
					newmima1: '',
				},
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("appRole");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			for (let x in menus) {
				if (menus[x].tableName == this.tableName) {
					this.menuList = menus[x].backMenu
					break
				}
			}
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("appRole");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			for (let x in menus) {
				if (menus[x].tableName == this.tableName) {
					this.menuList = menus[x].backMenu
					break
				}
			}
		},
		methods: {
			async getSession(){
				let table = uni.getStorageSync("nowTable");
				let res = await this.$api.session(table);
				this.user = res.data;
				this.$forceUpdate()
			},
			secondClick(index) {
				if (this.secondIndex == index) {
					this.secondIndex = -1
					return false
				}
				this.secondIndex = index
			},
			onPageTap(tableName,menuJump) {
                uni.setStorageSync("useridTag",1);
				if(tableName=='exampaper'){
					this.onPageTap2('../exampaperlist/list')
					return false
				}
				if(tableName=='examrecord'&&menuJump=='22'){
					this.onPageTap2('../examfailrecord/list',2)
					return false
				}
				if(tableName=='storeup'){
					this.onPageTap2('../storeup/list?userid=' + this.user.id + '&menuJump=' + menuJump ,1)
					return false
				}
				this.onPageTap2(`../${tableName}/list`,2)
			},
			onPageTap2 (url,type=1){
				if(!this.user){
					uni.navigateTo({
						url:'/pages/login/login'
					})
					return false
				}
				let that = this
				uni.navigateTo({
					url: url + (type==2?`?userid=${that.user.id}`:''),
					fail: function() {
						uni.switchTab({
							url: url + (type==2?`?userid=${that.user.id}`:'')
						});
					}
				});
			},
			passwordShow() {
				this.passwordForm = {
					mima: '',
					newmima: '',
					newmima1: '',
				}
				this.$forceUpdate()
				this.$refs.passwordPopup.open()
			},
			async updatePassword() {
				if (this.passwordForm.mima == ''){
					this.$utils.msg('原密码不能为空')
					return false
				}
				if (this.passwordForm.newmima == ''){
					this.$utils.msg('新密码不能为空')
					return false
				}
				if (this.passwordForm.newmima1 == ''){
					this.$utils.msg('确认密码不能为空')
					return false
				}
				let password = ''
				if (this.tableName=='yonghu') {
					password = this.user.yonghumima;
				}
				let newpassword = this.passwordForm.mima
				if(password != newpassword){
					this.$utils.msg('原密码不正确')
					return false
				}
				if (this.passwordForm.newmima != this.passwordForm.newmima1){
					this.$utils.msg('两次密码不一致')
					return false
				}
				if (this.tableName == 'yonghu') {
				}
				if (this.tableName=='yonghu') {
					this.user.yonghumima = this.passwordForm.newmima
				}
				await this.$api.update(this.tableName,this.user)
				this.$utils.msg('修改密码成功,下次登录系统生效')
				this.$refs.passwordPopup.close()
				this.getSession()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
	.passwordForm {
		width: 100%;
		padding: 10px 20px 60px;
		background: #fff;
	
		.passwordInput {
			background: #eee;
			margin: 0 0 10px;
			padding: 0 10px;
	
			input {
				height: 36px;
				line-height: 36px;
				font-size: 14px;
			}
		}
	
		.passwordBtnView {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10px 0;
	
			.passwordBtn {
				padding: 0 20px;
				width: auto;
				height: 20px;
				line-height: 20px;
				font-size: 14px;
				color: #fff;
				background: #007aff;
				border: none;
				border-radius: 5px;
	
			}
		}
	}
</style>
