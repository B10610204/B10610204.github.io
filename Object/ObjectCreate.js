var person = { 
    name:"Emily", height:152,weight:65,age:82
};

console.log(person);
console.log(person.name);
console.log(person.height);
console.log(person.weight);
console.log(person.age);

console.log("==".repeat(60));
console.log(person["name"]);
console.log(person["height"]);
console.log(person["weight"]);
console.log(person["age"]);

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys);
console.log(values);

keys.forEach((item,index) =>{
    console.log(item+":"+person[item]);
});

let people = [
    { name:"Emily", height:152,weight:65,age:82},
    { name:"victor", height:172,weight:59,age:23},
    { name:"Re", height:162,weight:65,age:89},
];

people.forEach((item,index) =>{
    console.log(item);
});


console.log("==".repeat(60));
people.forEach((item,index) =>{
    let keys = Object.keys(item);
    let msg = index + ". ";
    keys.forEach((key,index) => {
        msg += key + ":" + item[key] +",";
    });
    console.log(msg);
});

console.log("==".repeat(60));


var person = {
    name:"Victor",
    age:23,
    height:173,
    weight:59,
    bmi: function(){
        return this.weight/((this.height/100)**2);
    }
}
console.log(person);
console.log(person.bmi());