const MulAndSum = (num) =>{
    return new Promise((resolve, reject)=>{
        resolve(num)
    })   
}
const a = 10
MulAndSum(a)
.then((n)=>{
    return num = n * 2 
})
.then((n)=>{
    console.log(n+5)
})