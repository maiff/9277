

//响应式设计但是会出现闪屏的现象
//  var browser={
//     versions:function(){
//            var u = navigator.userAgent, app = navigator.appVersion;
//            return {//移动终端浏览器版本信息
//                 trident: u.indexOf('Trident') > -1, //IE内核
//                 presto: u.indexOf('Presto') > -1, //opera内核
//                 webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//                 gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//                 mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
//                 ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//                 android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
//                 iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
//                 iPad: u.indexOf('iPad') > -1, //是否iPad
//                 webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
//             };
//          }(),
//          language:(navigator.browserLanguage || navigator.language).toLowerCase()
// }

//divObj.setAttribute('id','topAlert');

// document.writeln("语言版本: "+browser.language);
// document.writeln(" 是否为移动终端: "+browser.versions.mobile);
// document.writeln(" ios终端: "+browser.versions.ios);
// document.writeln(" android终端: "+browser.versions.android);
// document.writeln(" 是否为iPhone: "+browser.versions.iPhone);
// document.writeln(" 是否iPad: "+browser.versions.iPad);
// document.writeln(navigator.userAgent);

// if (browser.versions.ios||browser.versions.android) {
//     window.onload=function(){
//     every=document.getElementById('every');
//     var random=Date.parse(new Date());
//     every.style.background='no-repeat url(./img/every1.png?'+random+')';
//     var first=document.body.firstChild;
// //得到页面的第一个元素
// document.body.insertBefore(webcss,first);//在得到的第一个元素之前插入
// }
//     var webcss=document.createElement('link');
// //divObj.setAttribute('id','topAlert');
// webcss.rel='stylesheet';
// webcss.type='text/css';
// webcss.href='css/webmain.css';

   
// };


/*跨年准备*/
// var time =new Date();
// var year=time.getUTCFullYear();
// if(year==2016){
//     location.href="http://chuye.cloud7.com.cn/15968384";
// }