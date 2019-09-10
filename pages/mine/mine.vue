<template>
	<view class="body">
		<view class="top"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

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
</style>
