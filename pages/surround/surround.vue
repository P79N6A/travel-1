<template>
	<view class="body">
		<view class="search_box">
			<view class="container">
				<view class="back_butn" @click="back">
					<image src="../../static/image/back.png"></image>
				</view>
			    <view class="parent">
			        <input type="text" class="search" placeholder="搜索电影/美食/天气/火车票/打车.." />
					<button class="btn" :style="'backgroundImage:url('+topbarSrc+')'"></button>
			    </view>
			</view>
		</view>
		<view class="top">
			<image src="../../static/image/surround.jpg" mode="widthFix" class="top_img"></image>
		</view>
		<view class="neck_box">
			<view class="neck_item" v-for="(item,index) in neckList" :key="index" @click="linkPage(item)" >
				<image :src="item.src" class="neck_img"></image>
				<text class="neck_text">{{item.text}}</text>
			</view>
		</view>
		<view class="body_list_box">
			<view class="body_list" v-for="(item,index) in bodyList" :key="index" @click="linkPage(item)">
				<view class="body_list_text">
					<text>{{item.text}}</text>
				</view>
				<image class="body_list_img" :src="item.src" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topbarSrc:"../../static/image/topbar.png",
				neckList:[
					{text:"美食",src:"../../static/image/surround1.png",url:"https://i.meituan.com"},
					{text:"天气",src:"../../static/image/surround2.png",url:"https://i.meituan.com"},
					{text:"停车场",src:"../../static/image/surround3.png",url:"https://www.amap.com/search?query=停车场"},
					{text:"医院",src:"../../static/image/surround4.png",url:"https://www.amap.com/search?query=医院"},
					{text:"银行",src:"../../static/image/surround5.png",url:"https://www.amap.com/search?query=银行"},
					{text:"厕所",src:"../../static/image/surround6.png",url:"https://www.amap.com/search?query=厕所"},
					{text:"打车",src:"../../static/image/surround7.png",url:"https://common.diditaxi.com.cn/general/webEntry?wx=true"},
					{text:"电影",src:"../../static/image/surround8.png",url:"https://i.meituan.com"},
					{text:"火车票",src:"../../static/image/surround9.png",url:"https://m.ctrip.com/webapp/train/v2/index"},
					{text:"加油站",src:"../../static/image/surround10.png",url:"https://www.amap.com/search?query=加油站"},
					{text:"公交车",src:"../../static/image/surround11.png",url:"https://www.amap.com/search?query=公交车站"},
					{text:"空气质量",src:"../../static/image/surround12.png",url:"http://m.pm25.com/"}
				],
				bodyList:[
					{text:"火车票",src:"../../static/image/surround_body1.jpg",url:"https://m.ctrip.com/webapp/train/v2/index"},
					{text:"天气",src:"../../static/image/surround_body2.jpg",url:"https://i.meituan.com"},
					{text:"空气质量",src:"../../static/image/surround_body3.jpg",url:"http://m.pm25.com/"},
					{text:"银行",src:"../../static/image/surround_body4.jpg",url:"https://www.amap.com/search?query=银行"},
					{text:"停车场",src:"../../static/image/surround_body5.jpg",url:"https://www.amap.com/search?query=停车场"}
				]
			}
		},
		methods: {
			back(){
				uni.navigateBack();
			},
			linkPage(item){
				location.href=item.url;
			}
		}
	}
</script>

<style>
	view, image, input{
		box-sizing: border-box;
	}
	.body{
		height: 100%;
		width: 100%;
	}
	.top_img{
		width: 750rpx;
	}
	.search_box{
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #81b3f6;
	}
	.container {
	    width: 700rpx;
	    margin:0 auto;
		border-radius: 12rpx;
		display: flex;
	}
	.parent {
	    display: flex;
		flex: 5;
		width: 100%;
		position: relative;
		border: 1px solid #ccc;
		border-bottom-right-radius: 12rpx;
		border-top-right-radius: 12rpx;
		background: #ffffff;
	}
	.back_butn{
		width: 48rpx;
		height: 62rpx;
		background: #007AFF;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom-left-radius: 10rpx;
		border-top-left-radius: 10rpx;
	}
	.back_butn image{
		width: 20rpx;
		height: 50rpx;
	}
	.search {
	    flex: 5;
	    height: 60rpx;
	    outline: none;
	    padding-left: 20rpx;
	}
	.btn {
	    height: 60rpx;
	    width: 70rpx;
	    background-repeat: no-repeat;
		background-size: 70%;
		background-position: 30%;
	    border: none;
	    outline: none;
	    cursor: pointer;
		position: absolute;
		right: 0;
		top: 0;
	}
	.neck_box{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.neck_item{
		width: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 6rpx 0;
	}
	.neck_img{
		width: 90rpx;
		height: 90rpx;
	}
	.neck_text{
		font-size: 20rpx;
	}
	.body_list_text{
		text-align: center;
		font-size: 28rpx;
		font-weight: 600;
		line-height: 40rpx;
	}
	.body_list_img{
		width: 750rpx;
	}
</style>
