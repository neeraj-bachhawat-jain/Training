const PrimeNumber = (num) =>{
    if(num <= 1 ){
        return "Not a Prime number"
    }
    for(let i=2; i<num; i++){
        if(num % 2 === 0){
            return "Not a Prime number"
        }else{
            return "Prime Number"
        }
    } 
}

console.log(PrimeNumber(5))