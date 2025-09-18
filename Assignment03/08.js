const myPromise = new Promise((resolve, reject)=>{
    const error = true;
    if(!error){
        resolve("Hello Acync");
    } else {
        reject("Error: Someting went wrong");
    }
})

async function myPromiseConsumed() {
    try {
        const response = await myPromise
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

myPromiseConsumed()
