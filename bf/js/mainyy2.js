$(document).ready(function(){
	//提交手机号码
    $('.btn-phone-submit').click(function(){
    	var _this = $(this);
    	var phone = _this.parent().prev('input[name="phone"]').val();
		console.log(phone);
    	if (phone == '') {
    		alert('请填写手机号码');
    		return false;
    	}
    	if(!(/^1[34578]\d{9}$/.test(phone))){ 
	        alert("手机号码格式有误");  
	        return false; 
	    } 
	    if(!_this.attr('data-disabled')){
	    	_this.attr('data-disabled','true');
	    	var url = "https://manage.yyxueche.com/gather.php";
	    	var data = {
	    		"phone":phone,
	    		"from":"刘光亮-百度移动新",
				"xms_flag":1
	    	}
		    $.ajax({
	           	url:url,       //跨域到http://www.wp.com，另，http://test.com也算跨域
	        	type:'GET',                                //jsonp 类型下只能使用GET,不能用POST,这里不写默认为GET
	        	dataType:'jsonp',                          //指定为jsonp类型
	       	 	data:data,                //数据参数
	        	jsonp:'callback',                          //服务器端获取回调函数名的key，对应后台有$_GET['callback']='getName';callback是默认值
	        	jsonpCallback:'ajaxSendCode',                   //回调函数名
	            success: function(res){  
	            	if(res.error == 0){
	                	if (_this.hasClass('btn-receive-package')) {
	                		if (_this.parent().parent().hasClass('wrapper-box')) {
		            	    	$('.wrapper').addClass('fadeOut hide').removeClass('fadeIn');
		            	    }
	                		alert('预约成功！请保持手机畅通');
	                	}else{
	                		if (_this.parent().parent().hasClass('wrapper-box')) {
		            	    	$('.wrapper').addClass('fadeOut hide').removeClass('fadeIn');
		            	    }
	                		alert('领取成功！有效期7天');
	                	}
	                }else{
	                	alert(res.content);
	                }
	            },
	            error:function(res) {
	            },
	            complete: function(XMLHttpRequest,status){
	            	_this.removeAttr('data-disabled');

	                if(status=='timeout'){
	                    alert('连接超时，请重试！');
	                }
	            }  
	        });
	    }
    });
    //点击出现弹窗
    $('.btn-bomb').click(function(){
    	$('.wrapper').addClass('fadeIn').removeClass('fadeOut hide');
    	$('.wrapper-box input[name="phone"]').val('');
    });
    $('.wrapper').click(function(){
    	$('.wrapper').addClass('fadeOut hide').removeClass('fadeIn');
    	$('.wrapper-box input[name="phone"]').val('');
    });
    $('.wrapper .btn-cancel').click(function(event){
    	$('.wrapper').addClass('fadeOut hide').removeClass('fadeIn');
    	$('.wrapper-box input[name="phone"]').val('');
    	event.stopPropagation();
    });
    $('.wrapper-box').click(function(event){
    	$('.wrapper').addClass('fadeIn').removeClass('fadeOut hide');
    	$('.wrapper-box input[name="phone"]').val('');
    	event.stopPropagation();
    });

    // $('.page1 input').focus(function(){
    // 	$('.copyright').addClass('hide');
    // 	$('.page1 .center-box').css('margin-top','0.3rem');
    // });
    // $('.page1 input').blur(function(){
    // 	$('.copyright').removeClass('hide');
    // 	$('.page1 .center-box').css('margin-top','0.3rem');
    // });
    var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

	if (isiOS) {
	    $('.page6 input').focus(function(){
	    	$('.page6 .form-control').css('margin-top','-3rem');
	    });
	    $('.page6 input').blur(function(){
	    	$('.page6 .form-control').css('margin-top','0.3rem');
	    });
	}
	if (isAndroid) {
		$('.page1 input').focus(function(){
	    	$('.copyright').addClass('hide');
	    	$('.fix-bottom').addClass('hide');
	    });
	    $('.page1 input').blur(function(){
	    	$('.copyright').removeClass('hide');
	    	$('.fix-bottom').removeClass('hide');
	    });
	}
});
//红包弹窗

    /*$('.close-btn').click(function(){
    	$('.popup').addClass('fadeOut hide').removeClass('fadeIn');
    	setTimeout(function(){
    		$('.popup').removeClass('fadeOut hide').addClass('fadeIn');
    	},50000);
    });*/