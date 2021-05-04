//建立一個時間
let date = new Date();

//取得今年是幾年
let year = date.getFullYear()
// console.log(year);
//取得當年月份
let month = date.getMonth();
//取得今天日期
let day = date.getDay();

//取得當前小時
let h = date.getHours();
//取得當前分鐘
let m = date.getMinutes();
//取的當前秒
let s = date.getSeconds();

console.log(`${year}/${month}/${day} ${h}:${m}:${s}`);