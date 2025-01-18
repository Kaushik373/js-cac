let score = "3a"

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/*
- conversions: Number(variable)
    - number to number
    - “string” to NaN (NaN - not a number)
    - null to zero
    - true to 1 and false to 0
    - undefined to NaN
- conversions happen with Boolean() :
    - 1 - true
    - 0 - false
    - “” - false
    - “something” - true
- conversion for string is String()
*/

//**************Operations***************************
console.log("\nOperations")
let val = 3
let negVal = -val
console.log(negVal)

// let str1 = "hello"
// let str2 = " world"
// console.log(str1+str2)

console.log(2+2+"1"+2+2);

// ***********Arrays
const heros = ["kaushik","adima","sriyansh"];
let myObj = {
    name: "Kaushik",
    age: 21
}
const myFunc = function(){
    console.log("Hello world!")
}

console.log("------"+typeof(heros));
