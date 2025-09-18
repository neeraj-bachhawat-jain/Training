function FirstPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 1")
        }, 4000);
    })
}

function SecondPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 2")
        }, 1000);
    })
}

async function gettingSteps() {
    const firstStep = await FirstPromise()
    console.log(firstStep)
    const secondStep = await SecondPromise()
    console.log(secondStep)
}

gettingSteps()