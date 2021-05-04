class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.name = "四邊形"
    }
    //屬性
    get area(){
        return this.height * this.width;
    }
    Introduce(){
        console.log("我是:"+this.name);
    }

}

//建立個方形物件
var r = new Rectangle(6,3);
console.log(r);
console.log(r.area);//使用屬性
r.Introduce();//呼叫類別方法