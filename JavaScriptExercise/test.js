let name = "Mary" //gobal變數
// let name = "test"  let無法重複宣告
{
    let name = "Kevin" //local變數
    //let設定的變數只能在這個區塊(block-scoped)裡用
    console.log(name)
    //kevin
}
console.log(name)
//mary



var name = "Mary"
{
    var name = "Kevin"
    console.log(name)
    //kevin
}
console.log(name)
//kevin

