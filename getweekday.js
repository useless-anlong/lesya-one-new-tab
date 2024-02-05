//GET DATE
const birthday = new Date();
const Xmas95 = new Date();
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6
var options = { weekday: "long" };
document.write(new Intl.DateTimeFormat("zh-CN", options).format(Xmas95));