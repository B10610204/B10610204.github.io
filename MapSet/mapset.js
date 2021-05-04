var taiwanArray = ["台灣",41,1,12];
var chinaArray = ["中國",80134,2914,44595];
var americaArray = ["美國",9665,146,694];

var map = new Map();

map.set("taiwan",taiwanArray);
map.set("china",chinaArray);
map.set("america",americaArray);
 
console.log(map.get("china"));


map.delete("china");
console.log(map);


//全部清除
// map.clear();
// console.log(map);


for(let [key,value] of map)
{
    console.log(`${key}:${value}`);
}