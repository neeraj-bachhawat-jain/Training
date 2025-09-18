const FactorialOfNumber = (n) =>{
    if(n === 0){
        return 1;
    }
    let fact = 1
    for(let i=1; i<=n; i++){
        fact *= i
    }
    return fact
}

console.log(FactorialOfNumber(5))

// Another Method to find a Factorial of a number using recursion
const factorial = (n) =>{
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1)
}

console.log(factorial(5))