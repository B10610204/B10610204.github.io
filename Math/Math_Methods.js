console.log(Math.max(1,3,5,7,8,9));
console.log(Math.min(-1,-3,-5,-7,9));

//四捨五入
console.log(Math.round(3.1415962,4));


//絕對值
console.log(Math.abs(-3.1415926));

var array1 = [1, 3, 5, 7, 9]; 
console.log(Math.max(array1));
//NaN表示不是個數值(NOT-A-NUMBER)
//相等於Math.max([1,3,5,67,9])
console.log(Math.max(...array1));
console.log(Math.min(...array1));