$(function () {
    //2017年的时间已更新
    //倒计时js开始
   // 周一周二看到的日期是周三，周三周四看到的日期是周五，周五周六周日看到的日期是周日
    var mydate = new Date();
    $(".month").html(mydate.getMonth() + 1)
    $(".day").html(mydate.getDate())
    $(".month02").html(mydate.getMonth() + 1)
    $(".day02").html(mydate.getDate() - 2)
    //  .month02 、day02代表的是两天前的日期
   //如果是星期一
    if (mydate.getDay() == "1") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate() + 2)
        //如果是1月  month02  day02是前边的日期 是当前日期
        if (mydate.getMonth() == 0 && mydate.getDate() == 30) {
            $(".month").html(2);
            $(".day").html(1);
        }
        //如果是2月
        if (mydate.getMonth() == 1 && mydate.getDate() == 27) {
            $(".month").html(3);
            $(".day").html(1);
        }
        //如果是7月
        if (mydate.getMonth() == 6 && mydate.getDate() == 31) {
            $(".month").html(8);
            $(".day").html(2);
        }
        //如果是10月
        if (mydate.getMonth() == 9 && mydate.getDate() == 30) {
            $(".month").html(11);
            $(".day").html(1);
        }      
    } else if (mydate.getDay() == "2") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate() + 1)
        //如果是1月  month02  day02是前边的日期 是当前日期
        if (mydate.getMonth() == 0 && mydate.getDate() == 31) {
            $(".month").html(2);
            $(".day").html(1);
        }
        //如果是2月
        if (mydate.getMonth() == 1 && mydate.getDate() == 28) {
            $(".month").html(3);
            $(".day").html(1);
        }
        //如果是10月
        if (mydate.getMonth() == 9 && mydate.getDate() == 31) {
            $(".month").html(11);
            $(".day").html(1);
        }
    } else if (mydate.getDay() == "3") {
   $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate())
    }
    else if (mydate.getDay() == "4") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate() + 1)

        //如果是8月
        if (mydate.getMonth() == 7 && mydate.getDate() == 31) {
            $(".month").html(9);
            $(".day").html(1);
        }
        //如果是11月
        if (mydate.getMonth() == 10 && mydate.getDate() == 30) {
            $(".month").html(12);
            $(".day").html(1);
        }
    }
    else if (mydate.getDay() == "5") {
       $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate())
    }
    else if (mydate.getDay() == "6") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate() + 1)
        //如果是9月
        if (mydate.getMonth() == 8 && mydate.getDate() == 30) {
            $(".month").html(10);
            $(".day").html(1);
        }
        //如果是12月
        if (mydate.getMonth() == 11 && mydate.getDate() == 31) {
            $(".month").html(1);
            $(".day").html(1);
        }
    }
    else if (mydate.getDay() == "7") {
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate())
    }



 //  以下是对两天前的特殊日期的判断
    if (mydate.getDate() == 1) {
        //假如是1月1号
        if (mydate.getMonth() == 0) {
            $(".month02").html(12);
            $(".day02").html(30);
        }
        //假如是2月1号
        if (mydate.getMonth() == 1) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是3月1号
        if (mydate.getMonth() == 2) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(28);
        }
        //假如是4月1号
        if (mydate.getMonth() == 3) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是5月1号
        if (mydate.getMonth() == 4) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(29);
        }
        //假如是6月1号
        if (mydate.getMonth() == 5) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是7月1号
        if (mydate.getMonth() == 6) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(29);
        }
        //假如是8月1号
        if (mydate.getMonth() == 7) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是9月1号
        if (mydate.getMonth() == 8) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是10月1号
        if (mydate.getMonth() == 9) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(29);
        }
        //假如是11月1号
        if (mydate.getMonth() == 10) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是12月1号
        if (mydate.getMonth() == 11) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(29);
        }
    } else if (mydate.getDate() == 2) {
        //假如是1月2号
        if (mydate.getMonth() == 0) {
            $(".month02").html(12);
            $(".day02").html(31);
        }
        //假如是2月2号
        if (mydate.getMonth() == 1) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(31);
        }
        //假如是3月2号
        if (mydate.getMonth() == 2) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(29);
        }
        //假如是4月2号
        if (mydate.getMonth() == 3) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(31);
        }
        //假如是5月2号
        if (mydate.getMonth() == 4) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是6月2号
        if (mydate.getMonth() == 5) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(31);
        }
        //假如是7月2号
        if (mydate.getMonth() == 6) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是8月2号
        if (mydate.getMonth() == 7) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(31);
        }
        //假如是9月2号
        if (mydate.getMonth() == 8) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(31);
        }
        //假如是10月2号
        if (mydate.getMonth() == 9) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
        //假如是11月2号
        if (mydate.getMonth() == 10) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(31);
        }
        //假如是12月2号
        if (mydate.getMonth() == 11) {
            $(".month02").html(mydate.getMonth());
            $(".day02").html(30);
        }
    }
});