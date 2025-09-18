const CountVowels = (str) =>{
    let l = str.length
    let count = 0
    for(let i=0; i<l; i++){
        let letter = str[i]
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
            count++
        }
    }
    return "Total vowels in " + str + " is " + count
}

console.log(CountVowels("neeraj"))

