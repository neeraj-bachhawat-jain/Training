function getNumber(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(5)
        }, 5000);
    })
}

async function doubleNumber() {
    try {
        const num = await getNumber()
        const doubled = num * 2
        console.log(`The doubled number is: ${doubled}`);
        return doubled
    } catch (error) {
        console.log("Error: ", error)        
    }   
}

doubleNumber()
console.log("wait...")