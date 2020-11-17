const catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好！欢迎访问我的主页asimok.site!',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"/images/b1.jpg",
			"/images/b2.jpg",
			"/images/b3.jpg",
			"/images/b4.jpg",
			"/images/深度学习.jpg",
			"/images/硬件.jpg",
			"/images/论文.jpg",
			"/images/软件.jpg",
		],
		//这里是磁贴描述信息
		describe:[
			"自然语言处理",
			"Pytorch学习记录",
			"常用小工具",
			"一些教程",
			"自然语言处理",
			"Pytorch学习记录",
			"常用小工具",
			"一些教程",
		],
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
let linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");