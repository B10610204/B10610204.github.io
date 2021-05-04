// reduce()⽅法是對所有陣列元素作加總

var num = [1,2,3,4,5];
let total = num.reduce((total,currentnum) =>{
    return total + currentnum;
})
console.log(total);