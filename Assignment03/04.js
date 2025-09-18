new Promise((resolve, reject)=>{
    let error = true;
    if(!error){
        resolve("Error is not found!")
    } else {
        reject("ERROR: Something went wrong")
    }
})
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})