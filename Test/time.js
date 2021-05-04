function displaytime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    console.log(`${h}:${m}:${s}`);
}

displaytime();
