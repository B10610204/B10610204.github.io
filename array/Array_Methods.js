let Computer = ['CPU', 'DRAM' , 'SSD', 'Mouse']; 
let comp = new Array('CPU', 'DRAM' , 'SSD', 
 'Mouse');
var Cars = ['BMW', 'Benz', 'Audi', 'Lexus']; 
var Prices = [280, 320, 250, 210]; 
let Fruits = ['Apple', 'Banana', 'Cherry']; 
let Person = ['John', 35, 'john@gmail.com'];


let friend = ["David","Mary","Victor"];
console.log(friend);
console.log(friend.length);



friend=[]; //重新指派⼀個空陣列
friend.length=0; //將length設為0
friend.splice(0, friend.length); //從0開始，移除N個陣列元素
console.log(friend);
console.log(friend.length);

// let msg ="";

// Fruits.forEach((item,index)=>{
    
//     msg = msg + item;  
// })
// console.log(msg);
console.log(Fruits.join(""));
console.log(Fruits.join());
console.log(Fruits.join(","));
console.log(Fruits.join("-"));

//push
let friends = [];
friends.push("朋友1","測試");
friends.push("朋友2");
friends.push("朋友3");

console.log(friends);

friends.pop();
console.log(friends);

//合併concat

let array1 = ["a","b","c"];
let array2 = ["d","e","f"];
let array3 = array1.concat(array2);

console.log(array3);

let array4 = [...array1,...array2];
console.log(array4);


console.log(Cars);
console.log(Cars.sort());
console.log(Cars.reverse());


console.log(Cars);
let car = Cars.find(x => x=="Benz");
console.log(car);
let index = Cars.indexOf("Audi");
console.log(index);
let idx = Cars.findIndex(x => x=="Benz");
console.log(idx);


var Prices = [280, 320, 250, 210]; 
console.log(Prices.findIndex(p => p > 250)); 
//找到第一個符合條件的位置
console.log(Prices.filter(p => p > 250)); 

var Cars = ['BMW', 'Benz', 'Audi', 'Lexus']; 
Prices.filter(function(item, index){ 
    if(item > 250){ 
        console.log(Cars[index] + "'s price is " + item + ", it's larger 250." );
    } 
});