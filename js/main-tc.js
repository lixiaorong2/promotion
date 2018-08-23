$(document).ready(function () {
  //提交手机号码
  $('.btn-phone-submit').click(function () {
    var _this = $(this);
    var phone = _this.parent().find('input[name="phone"]').val();
    console.log(phone);
    if (phone == '') {
      alert('请填写手机号码');
      return false;
    }
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      alert("手机号码格式有误");
      return false;
    }
    if (!_this.attr('data-disabled')) {
      _this.attr('data-disabled', 'true');
      var url = "https://manage.yyxueche.com/gather.php";
      var data = {
        "phone": phone,
        "from": "XM-GDT-ZX",
        "xms_flag": 1
      }
      $.ajax({
        url: url, //跨域到http://www.wp.com，另，http://test.com也算跨域
        type: 'GET', //jsonp 类型下只能使用GET,不能用POST,这里不写默认为GET
        dataType: 'jsonp', //指定为jsonp类型
        data: data, //数据参数
        jsonp: 'callback', //服务器端获取回调函数名的key，对应后台有$_GET['callback']='getName';callback是默认值
        jsonpCallback: 'ajaxSendCode', //回调函数名
        success: function (res) {
          if (res.error == 0) {
            if (_this.hasClass('btn-receive-package')) {
              if (_this.parent().parent().hasClass('wrapper-box')) {
                $('.wrapper').addClass('fadeOut hide').removeClass('fadeIn');
              }
              alert('预约成功！请保持手机畅通');
            } else {
              if (_this.parent().parent().hasClass('wrapper-box')) {
                $('.wrapper').addClass('fadeOut hide').removeClass('fadeIn');
              }
              alert('领取成功！有效期7天');
            }
          } else {
            alert(res.content);
          }

          $('input[name="ok10"]').each(function () {
            if (this.checked == true) {
              switch (this.value) {
                case '1':
                  $(".article").find('strong').html('您是一个平时做事就是兢兢业业的人，车子虽然是交通工具，但也不例外，开车的时候，规规矩矩，完全执行交通规则，因为你懂得对别人负责也是对自己负责。相信，只要您熟稔驾驶技能和考试准则，一次性通过全部考试不成问题。鉴于此，建议您尽快报考驾驶证考试，在2017年底取得驾驶证。2017年10月份，国家公布了新的驾考改革细则，科目二和科目三增加了时间限制，难度提升30%以上。广州地区预计2018年开始正式实施。');
                  break;
                case '2':
                  $(".article").find('strong').html('你是一个天性乐观的人，凡事总是往好的方向想。做事情的时候你比较容易分心，就像开车，你会一边看风景，一边找乐趣，至于安全的问题，很少进入你的考虑范围之内。同时，聪明和机智也是你的特点，学东西一学就会，但是想要精通，却很难。学驾驶也是一样，一次性通过考试相信对你来说很容易，但是要想在马路上游刃有余，却需要不断的去练习。鉴于此，建议您尽快报考驾驶证考试，在2017年底取得驾驶证。2017年10月份，国家公布了新的驾考改革细则，科目二和科目三增加了时间限制，难度提升30%以上。广州地区预计2018年开始正式实施。');
                  break;
                case '3':
                  $(".article").find('strong').html('你是一个可以一心二用的人，能同时兼顾两件事情，可以一边开车一边听音乐，一边开车一边欣赏美景。拥有驾驶证，可以让你的生活品质进一步提升。考驾照，也是一件需要一心二用的事情，需要一边控制车辆，一边听指挥完成规定的技术动作，所以这对您来说是手到擒来的事情，所需要的，就是花时间去学习。鉴于此，建议您尽快报考驾驶证考试，在2017年底取得驾驶证。2017年10月份，国家公布了新的驾考改革细则，科目二和科目三增加了时间限制，难度提升30%以上。广州地区预计2018年开始正式实施。');
                  break;
              }
            }
          });

          $(".article").show();
        },
        error: function (res) {},
        complete: function (XMLHttpRequest, status) {
          _this.removeAttr('data-disabled');

          if (status == 'timeout') {
            alert('连接超时，请重试！');
          }
        }
      });
    }
  });

  //点击出现弹窗
  $('.btn-bomb').click(function () {
    $('.wrapper').addClass('fadeIn').removeClass('fadeOut hide');
    $('.wrapper-box input[name="phone"]').val('');
  });
  $('.wrapper').click(function () {
    $('.wrapper').addClass('fadeOut hide').removeClass('fadeIn');
    $('.wrapper-box input[name="phone"]').val('');
  });
  $('.wrapper .btn-cancel').click(function (event) {
    $('.wrapper').addClass('fadeOut hide').removeClass('fadeIn');
    $('.wrapper-box input[name="phone"]').val('');
    event.stopPropagation();
  });
  $('.wrapper-box').click(function (event) {
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
    $('.page6 input').focus(function () {
      $('.page6 .form-control').css('margin-top', '-3rem');
    });
    $('.page6 input').blur(function () {
      $('.page6 .form-control').css('margin-top', '0.3rem');
    });
  }
  if (isAndroid) {
    $('.page1 input').focus(function () {
      $('.copyright').addClass('hide');
      $('.fix-bottom').addClass('hide');
    });
    $('.page1 input').blur(function () {
      $('.copyright').removeClass('hide');
      $('.fix-bottom').removeClass('hide');
    });
  }
});
