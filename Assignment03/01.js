console.log("Task Start")
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Task Completed")
    }, 2000)
})
.then((result)=>{
    console.log(result)
})

