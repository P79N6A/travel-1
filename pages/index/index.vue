<script>
	import bwSwiper from '@/wxcomponents/bw-swiper/bw-swiper.vue'
	export default {
		components: {
			bwSwiper
		},
		data() {
			return {
				serverImg: getApp().globalData.serverUrl+"/test/image/",
				swiperList: [{
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
				}, {
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
				}, {
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
				}, {
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
				}],
				neckList: [{
					title: "旅游资源",
					img: "travel_resources.png",
					url: ""
				}, {
					title: "山居民宿",
					img: "homestay.png",
					url: ""
				}, {
					title: "预定商品",
					img: "product.png",
					url: ""
				}, {
					title: "周边服务",
					img: "peripheral.png",
					url: ""
				}, {
					title: "招商中心",
					img: "Investment.png",
					url: ""
				}, {
					title: "查询投诉",
					img: "complaint.png",
					url: ""
				}],
				recommendList: [{
						src: "1.png",
						title1: "历史文化村落",
						title2: "焕发新活力的历史文化村落"
					},
					{
						src: "2.png",
						title1: "历史文化村落",
						title2: "焕发新活力的历史文化村落"
					},
					{
						src: "3.png",
						title1: "历史文化村落",
						title2: "焕发新活力的历史文化村落"
					},
					{
						src: "1.png",
						title1: "历史文化村落",
						title2: "焕发新活力的历史文化村落"
					},
					{
						src: "2.png",
						title1: "历史文化村落",
						title2: "焕发新活力的历史文化村落"
					},
					{
						src: "3.png",
						title1: "历史文化村落",
						title2: "焕发新活力的历史文化村落"
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			clickItem: function(e) {
				console.log(e)
			},
			linkPage:function(item){
				console.log(item);
			}
		}
	}
</script>
<template>
	<view class="body">
		<view class="content">
			<bw-swiper :swiperList="swiperList" indicatorActiveColor="#ff0000" @clickItem="clickItem" style="width:100%"
			 :textTip="true">
			</bw-swiper>
		</view>
		<view class="neck">
			<view class="neck_item" v-for="(item,index) in neckList" :key="index" @tap="linkPage(item)">
				<image :src="serverImg+item.img" class="neck_img"></image>
				<view class="neck_title">{{item.title}}</view>
			</view>
		</view>
		<view class="recommend">
			<image class="recommend_img" :src="serverImg+'recommend1.gif'" mode="widthFix"></image>
		</view>
		<view class="recommend">
			<image class="recommend_img" :src="serverImg+'recommend2.png'" mode="widthFix"></image>
		</view>
		<view class="recommend_box">
			<view class="recommend_item" v-for="(item,index) in recommendList" :key="index">
				<image :src="serverImg+item.src" class="recommend_item_img" mode="widthFix"></image>
				<view class="recommend_item_title1">{{item.title1}}</view>
				<view class="recommend_item_title2">{{item.title2}}</view>
			</view>
		</view>
		<view class="recommend2">
			<view class="recommend2_text">智慧三农</view>
			<image class="recommend_img2" :src="serverImg+'recommend3.png'" mode="widthFix"></image>
		</view>
	</view>
</template>
<style>
	page {
		width: 100%;
		height: 100%;
		background: linear-gradient(#ffffff, #94bff8);
		overflow: hidden;
	}

	view, text {
		box-sizing: border-box;
	}

	.body {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		padding-bottom: 20rpx;
		overflow-x: hidden;
	}

	.body::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.neck {
		width: 700rpx;
		margin: 15rpx auto;
		padding: 10rpx 15rpx;
		flex-wrap: wrap;
		display: flex;
		border: #529ced solid 1px;
		border-radius: 10rpx;
		justify-content: space-between;
	}

	.neck_item {
		display: flex;
		flex-direction: column;
		width: 220rpx;
		justify-content: center;
		align-items: center;
		margin-bottom: 6rpx;
	}

	.neck_img {
		width: 100rpx;
		height: 100rpx;
	}

	.neck_title {
		font-size: 20rpx;
		text-align: center;
	}

	.recommend {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10rpx;
	}

	.recommend_img {
		width: 700rpx;
		margin: 0 auto;
	}

	.recommend2 {
		width: 700rpx;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
	}

	.recommend2_text {
		writing-mode: tb-rl;
		width: 60rpx;
		text-align: center;
		font-size: 30rpx;
		line-height: 60rpx;
	}

	.recommend_img2 {
		flex: 5;
	}

	.recommend_box {
		width: 100%;
		padding: 25rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: center;
		justify-content: space-between;
	}

	.recommend_item {
		width: 340rpx;
		display: flex;
		flex-direction: column;
		margin-bottom: 10rpx;
		background: #88bcf3;
		padding-bottom: 8rpx;
	}

	.recommend_item_img {
		width: 100%;
	}

	.recommend_item_title1 {
		font-size: 30rpx;
		color: #ffffff;
		text-align: center;
	}

	.recommend_item_title2 {
		font-size: 20rpx;
		color: #ffffff;
		text-align: center;
	}
</style>
