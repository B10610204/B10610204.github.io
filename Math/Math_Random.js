console.log(Math.random());


//捨去小數點
console.log(Math.floor(3.1415926));
console.log(Math.floor(-3.1415926));


function getrandom(min,max){
    return Math.floor(Math.random() * max + min)
}

//定義1~100陣列
let array100 = [...Array(100).keys()];
console.log(array100);
array100 = array100.map(x => x+1);
console.log(array100);

array100.forEach((item,index) => {
    console.log(getrandom(1,100));
})

console.log(getrandom(1,20))

