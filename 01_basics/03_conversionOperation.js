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