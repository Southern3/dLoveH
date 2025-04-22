
function lovetime() {
    window.setTimeout("lovetime()", 1000);
    // var seconds = 1000
    // var minutes = seconds * 60
    // var hours = minutes * 60
    // var days = hours * 24
    // var years = days * 365
    // var today = new Date()
    // var todayYear = today.getFullYear()
    // var todayMonth = today.getMonth()
    // var todayDate = today.getDate()
    // var todayHour = today.getHours()
    // var todayMinute = today.getMinutes()
    // var todaySecond = today.getSeconds()
    // // 修改这里时间即可 我的是2021.05.04
    // var t1 = Date.UTC(2024, 07, 07, 00, 00, 00)
    // var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
    // var diff = t2 - t1
    // var diffYears = Math.floor(diff / years)
    // var diffDays = Math.floor((diff / days) - diffYears * 365)
    // var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
    // var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
    // var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes *
    //     minutes) / seconds)


    // 定义目标日期
    const targetDate = new Date('2024-07-07');
    // 获取当前日期
    const currentDate = new Date();

    // 计算时间差（毫秒）
    const timeDifference = currentDate - targetDate;

    // 计算年
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const yearsPassed = Math.floor(timeDifference / oneYear);

    // 计算剩余的毫秒数
    let remainingMs = timeDifference % oneYear;

    // 计算天
    const oneDay = 24 * 60 * 60 * 1000;
    const daysPassed = Math.floor(remainingMs / oneDay);

    // 计算剩余的毫秒数
    remainingMs = remainingMs % oneDay;

    // 计算小时
    const oneHour = 60 * 60 * 1000;
    const hoursPassed = Math.floor(remainingMs / oneHour);

    // 计算剩余的毫秒数
    remainingMs = remainingMs % oneHour;

    // 计算分钟
    const oneMinute = 60 * 1000;
    const minutesPassed = Math.floor(remainingMs / oneMinute);

    // 计算秒
    const secondsPassed = Math.floor((remainingMs % oneMinute) / 1000);


    document.getElementById("lovetime").innerHTML = "我们已经在一起 " + yearsPassed + "年" + daysPassed + "天" +
        hoursPassed + "小时" + minutesPassed + "分钟" + secondsPassed + "秒啦"
}
lovetime()
