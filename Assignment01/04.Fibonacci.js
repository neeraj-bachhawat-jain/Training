const FabonacciSequence = (n) =>{
    arr = [0,1]
    for(let i=2; i<=n; i++){
        arr[i] = arr[i-2] + arr[i-1] 
    }
    arr.forEach(element => {
        console.log(element)    
    });
}

FabonacciSequence(10)