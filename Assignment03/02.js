const EligibleOrNot = (age) =>{
    return new Promise((resolve, reject)=>{
        if(age >= 18){
            resolve("Eligible")
        }else{
            reject('Not Eligible')
        }
    })
}

const age = 20
EligibleOrNot(age)
.then(result => console.log(result))
.catch(error => console.log(error))