var person = { 
    name:"Emily", height:152,weight:65,age:82
};
var person = { 
    name:"victor", height:173,weight:59,age:23
};

console.log(person);
console.log("物件是:" + person);
//輸出:物件是:[object Object] ，因為person是物件不是字串
console.log("物件是: %o",person);
//代參數
console.log("物件是:" + JSON.stringify(person));

console.log("==".repeat(60));

var jsonText = JSON.stringify(person)
console.log(typeof jsonText);

var p = JSON.parse(jsonText);
console.log(p);
console.log(typeof p);