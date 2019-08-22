<template>
	<view class="body">
		<view class="title">旅游攻略集</view>
		<view class="content">
			<view class="list" v-for="(item,index) in list" :key="index">
				<view class="list_title">{{item.title}}</view>
				<image class="list_img" :src="serverImg+item.src" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				serverImg: getApp().globalData.serverUrl+"/test/image/",
				list:[
					{src:"raiders_1.png",title:"华山之旅"},
					{src:"raiders_2.png",title:"大理之旅"},
					{src:"raiders_1.png",title:"江南之旅"},
					{src:"raiders_2.png",title:"新疆之旅"},
					{src:"raiders_1.png",title:"华山之旅"},
					{src:"raiders_2.png",title:"大理之旅"},
					{src:"raiders_1.png",title:"江南之旅"},
					{src:"raiders_2.png",title:"新疆之旅"},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.list_img{
		width: 100%;
	}
	.list_title{
		position: absolute;
		top: 30rpx;
		left: 40rpx;
		font-size: 40rpx;
		color: #ffffff;
		z-index: 10;
	}
	.list{
		width: 700rpx;
		border-radius: 20rpx;
		position: relative;
	}
	.title{
		font-size: 40rpx;
		margin-left: 25rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
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
</style>
