var taiwanArray = ["台灣",41,1,12];
var chinaArray = ["中國",80134,2914,44595];
var americaArray = ["美國",9665,146,694];

// Map 是保存了鍵值對（key-value pairs）的物件。任何值（包括物件及基本型別（primitive）值）都可以作為鍵或值
//很信字典

var map = new Map();

// 設定Map
map.set("taiwan",taiwanArray);
map.set("測試","測試亂碼oejtw[qjti'43qjy'3j");
map.set("china",chinaArray);
map.set("america",americaArray);

console.log(map.get("china"));
console.log(map.get("測試"));

//清除
map.delete("測試");
console.log(map);

//全部清除
//map.clear();


//利用for of取出全部值
for(let [key,value] of map)
{
    console.log(`${key}: ${value}`);
}