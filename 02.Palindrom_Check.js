const Palindrom_Check = (n) =>{
    num_str = String(n)
    num_rev = num_str.split('').reverse().join('')
    if(n == num_rev){
        return "Yes, it is a palindrom number: " + n
    }else{
        return "It is not a palindrom number: " + n
    } 
}

console.log(Palindrom_Check(4554))