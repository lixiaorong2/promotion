/**cookie工具包*/
var logHost = 'http://ad.sunlands.com';
var cookieUtil = {

		/**设置cookie*/
		setCookie: function (c_name, value, expiredays) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + expiredays)
			document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
		},

		/**获取cookie*/
		getCookie: function (c_name) {
			if (document.cookie.length > 0) {
				var c_start = document.cookie.indexOf(c_name + "=");
				if (c_start > -1) {
					c_start = c_start + c_name.length + 1
					var c_end = document.cookie.indexOf(";", c_start)
					if (c_end == -1) {
						c_end = document.cookie.length
					}
					return unescape(document.cookie.substring(c_start, c_end))
				}
			}
			return ""
		},
		/**检查是否存在cookie*/
		checkCookie: function (name) {
			var cookieName = this.getCookie(name);
			return cookieName != null && cookieName != "";
		}
	}

	;
(function () {
	/**userIdentifyKey业务相关cookie对象*/
	var userIdentifyKeyCookie = {
		/**添加请求图片*/
		addRequestImg: function (index) {
			var img = new Image();
			switch (index) {
				case 1:
					//打点
					img.src = logHost+'/advertise-servers/dataservice/cookieimage.jpg?uid=' + cookieUtil.getCookie('userIdentify') + '&url=' + encodeURIComponent(window.location.href) + '&siteId=' + (window.NTKF_PARAM ? window.NTKF_PARAM.settingid.split('_')[2] : '') + "&ntfkUid=" + (window.NTKF ? window.NTKF.user.id : '') + '&pvId=' + window.pvid;
					break;
				case 2:
					var iframe;
					try {
						iframe = document.createElement('<iframe name="ifr" style="display:none;" src="http://ad.sunlands.com/landpage-sv-war/template/cookie.jsp?domain=' + encodeURI(document.domain) + '&url=' + encodeURIComponent(window.location.href) + '&siteId=' + (window.NTKF_PARAM ? window.NTKF_PARAM.settingid.split('_')[2] : '') + "&ntfkUid=" + (window.NTKF ? window.NTKF.user.id : '') + '&pvId=' + window.pvid + '"></iframe>');
					} catch (e) {
						iframe = document.createElement('iframe');
						iframe.setAttribute('src', 'http://ad.sunlands.com/landpage-sv-war/template/cookie.jsp?domain=' + encodeURI(document.domain) + '&url=' + encodeURIComponent(window.location.href) + '&siteId=' + (window.NTKF_PARAM ? window.NTKF_PARAM.settingid.split('_')[2] : '') + "&ntfkUid=" + (window.NTKF ? window.NTKF.user.id : '') + '&pvId=' + window.pvid);
						iframe.style.display = "none";
					}
					document.body.appendChild(iframe);
					break;
				default:
			}
		},
		/**根据相应的业务逻辑操作cookie*/
		operationCookie: function () {
			if (cookieUtil.checkCookie('userIdentify')) {
				//存在cookie  打点
				this.addRequestImg(1);
			} else {
				//不存在cookie 发种cookie请求
				this.addRequestImg(2);
			}
		},
		init: function () {
			this.operationCookie();
		}
	}

	userIdentifyKeyCookie.init();

})();

var util = {
	objectSeris: function (obj) {
		var temp = []
		for (var i in obj) {
			temp.push(i + '=' + obj[i]);
		}
		return temp.join('&')
	}
}
//时间相关打点
var timeLog = {
	init: function () {
		var start = (new Date()).getTime();
		var body = document.getElementsByTagName('body')[0];
		$(window).load(function () {
			var end = (new Date()).getTime();
			var config = {
				uid: cookieUtil.getCookie('userIdentify'),
				ntfkUid: (window.NTKF ? window.NTKF.user.id : ''),
				pvId: window.pvid,
				siteId: (window.NTKF_PARAM ? window.NTKF_PARAM.settingid.split('_')[2] : ''),
				url: encodeURIComponent(location.href),
				pageId: window.pageId,
				cost: end - start
			}
			var img = new Image();
			img.src = logHost+'/advertise-servers/dataservice/timecostimage.jpg?' + util.objectSeris(config)
		});
		this.startTimeLoop();
	},
	startTimeLoop: function () {
		var timeArr = [1, 3, 5, 10, 20, 30, 40, 50, 60];
		timeArr.forEach(function (item) {
			setTimeout(function () {
				var config = {
					uid: cookieUtil.getCookie('userIdentify'),
					ntfkUid: (window.NTKF ? window.NTKF.user.id : ''),
					pvId: window.pvid,
					siteId: (window.NTKF_PARAM ? window.NTKF_PARAM.settingid.split('_')[2] : ''),
					url: encodeURIComponent(location.href),
					pageId: window.pageId,
					stayTime: item
				}
				var img = new Image();
				img.src = logHost+'/advertise-servers/dataservice/timeimage.jpg?' + util.objectSeris(config)
			}, item * 1000)
		});
	}
}
timeLog.init()
