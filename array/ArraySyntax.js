const title = function(title){
    console.log("");
    console.log(`------------------${title}----------------`);
}


title("一維陣列");
//js變數會先處裡
// 陣列初始
let array1 = [];
let array2 = new Array();
let array3 = new Array(10);

//Array literal 字面值，直接給值
let Computer = ["cpu","dram","ssd","mouse"];

for(let i = 0;i<Computer.length;i++)
{
    console.log(Computer[i]);
}

Computer.forEach(function(item,index){
    console.log(`${index}. ${item}`);
});

Computer.forEach((item,index) => {
    console.log(`${index}. ${item}`);
})






console.log(typeof Computer); 
//判斷是否為Array實例 - 精準
console.log(Computer instanceof Array); 
console.log(Array.isArray(Computer)); 

