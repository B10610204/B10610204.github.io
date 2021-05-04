var Cars = ['BMW', 'Benz', 'Audi', 'Lexus']; 
var Prices = [280, 320, 250, 210]; 


// map()⽅法是對每⼀個陣列元素作運算，並將結果回傳⾄新陣列
//加0.5%價格
var NewPrices = Prices.map(x => x * 1.05);
console.log(NewPrices);

var New = Cars.map(x => {if(x!='BMW'){return x} else{} }
);
console.log(New);
