const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("成功執行會呼叫resolve方法");
    },3000);
});

promise1
    .then(result =>{
        console.log(result);
    })
    .catch(ex =>{
        console.log('error :' + ex);
    })
    .finally(()=>{
        console.log("Promise finally done");
    });


    const promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("成功執行會呼叫resolve方法");
        },3000);
    });
    
    promise2
        .then(result =>{
            console.log(result);
        })
        .catch(ex =>{
            console.log('error :' + ex);
        })
        .finally(()=>{
            console.log("Promise finally done");
        });
    

    const Promise3 = new Promise((resolve,reject) => {
        resolve("成功")
    })

    Promise3.then(function(result){
        console.log("成功的回傳值：" + result);
    },function(ex){
        console.log("失敗原因：" + ex)
    })

    console.log(Promise3);