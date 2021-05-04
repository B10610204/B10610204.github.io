const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve和reject只能選一個執行
    resolve("成功的話，會呼叫resolve方法！");
    reject("失敗的話，會呼叫resolve方法！");
    }, 3000);
});

console.log(promise1); 
promise1
    .then(result => {
        console.log("成功的回傳值：" + result);
        console.log(promise1);
    })
    .catch(ex => {
        console.log("失敗原因 : " + ex);
        console.log(promise1);
    })
    .finally(() => {
        console.log("Promise finally 完成");
        console.log(promise1);
    });

console.log(promise1);


let p1 = Promise.resolve(35)
//回傳promise物件
console.log(p1);

p1.then(function(value){
    console.log(value);
})


//帶入p1物件
let p2 = Promise.resolve(p1)
p2.then(function(value){
    console.log(value);
})