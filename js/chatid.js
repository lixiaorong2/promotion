var pv = {
  url:'http://mobile.sunland.org.cn/activity/mlink/getExtentionPage?channel=xiaonengtanchuang&scene=landingpage&pageDetail=homepage&configUser=xcy&siteId='+(window.NTKF_PARAM ? window.NTKF_PARAM.settingid.split('_')[2] : ''),
  generatePvid:function(){
    var _this = this;
	
    var rand = "";
	for(var i = 0; i < 3; i++){
		var r = Math.floor(Math.random() * 10);
		rand += r;
	}
	window.pvid = (new Date()).getTime() + rand;
	
    if (window.NTKF_PARAM) {
            window.NTKF_PARAM.callbacks = [
                ['SessionStart', function (data) {
                  console.log('获取到的小能资讯为',data)
                  var imgVar = new Image();
                  imgVar.src = 'http://ad.sunlands.com/advertise-servers/dataservice/chatimage.jpg?ntfkUid='+(window.NTKF ?window.NTKF.user.id : '')+'&chatId='+data.sessionid+'&pvId='+window.pvid+'&url='+encodeURIComponent(window.location.href);
					     }],
               ['CloseChatWindow', function () {
                if(navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('Android') > -1){
                  //ocation.href=_this.url;
                }else{
                  //window.open(_this.url);
                }
              }]
				    ]
		}
	}
}
pv.generatePvid();