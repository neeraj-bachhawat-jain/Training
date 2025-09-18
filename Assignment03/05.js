const LowercaseToUppercase = (str) => {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        const upperStr = str.toUpperCase();
        resolve(upperStr);
      } else {
        reject("ERROR: Something went wrong");
      }
    }, 5000);
  });
};

LowercaseToUppercase("Neeraj").then((result) => {
  console.log(result);
})
.catch((err)=>{
    console.log(err)
})
console.log("wait....")
