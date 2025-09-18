async function testAwaitOnValue() {
    const result = await 10;
    console.log(result);
}

testAwaitOnValue()