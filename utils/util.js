const formatTime = time => {
  console.log(new Date(time))
  let LTMinute = 1000 * 60; // 小于一分钟
  let LTHuor = 1000 * 60 * 60; // 小于一小时
  let LTDay = 1000 * 60 * 60 * 24; // 小于一天
  let LTMonth = 1000 * 60 * 60 * 24 * 30; // 小于一个月
  let LTYear = 1000 * 60 * 60 * 24 * 30 * 12; // 小于一年
  let currentTime = new Date().getTime();
  time = parseInt(time);
  let Difference = currentTime - time;
  console.log(currentTime)
  if (Difference <= LTMinute) {
    return '刚刚';
  }
  if (Difference > LTMinute && Difference <= LTHuor) {
    return Math.floor(Difference / LTMinute) + '分钟前';
  }
  if (Difference > LTHuor && Difference <= LTDay) {
    return Math.floor(Difference / LTHuor) + '小时前';
  }
  if (Difference > LTDay && Difference <= LTMonth) {
    return Math.floor(Difference / LTDay) + '天前';
  }
  if (Difference > LTMonth && Difference <= LTYear) {
    return Math.floor(Difference / LTMonth) + '月前';
  }
  if (Difference > LTYear) {
    return Math.floor(Difference / LTYear) + '年前';
  }
}

export {
  formatTime
}