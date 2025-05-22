// Завдання 1
// function seconds(total){
//     return (total % 60)
// }
// console.log(seconds(100))


// Завдання 2
// function perimeter(side, count){
//     return side * count
// }
// console.log(4 * 8)


// Завдання 3
// function number(n){
//     for(let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("fizzbuzz")
//         }else if(i % 3 === 0){
//             console.log("fizz")
//         }else if(i % 5 === 0){
//             console.log("buzz")
//         }else{
//             console.log(i)
//         }
//     }
// }
// number(15)


// Завдання 4
// function calculate(a, b, c){
//     return (a + b + c) / 3
// }
// console.log(calculate(2,6,7))


// Завдання 5
// function isDivisible(n, x, y){
//     if(n < 0 || x < 0 || y < 0){
//         return "Число менше 0"
//     }else if(n % x === 0 && n % y === 0){
//         return `Число ділиться на ${x} та ${y}!`
//     }else{
//         return "Число не ділиться"
//     }
// }
// console.log(isDivisible(8,4,2))

// function isDivisible(n, x, y){
//     return n % x === 0 && n % y === 0 ? `Число ділиться на ${x} та ${y}!` : "Число не ділиться"
// }
// console.log(isDivisible(8,4,2))

// function isDivisible(n, x, y){
//     return (n % x === 0 && n % y === 0 && `Число ділиться на ${x} та ${y}!`) || "Число не ділиться" 
// }
// console.log(isDivisible(8,4,2))


// Завдання 6
// const arr = [4,6,23,12,4,3,12,54,32,52,5,2,1]
// const max = arr.reduce((max, num) => max > num ? max : num)
// console.log(max)
// const min = arr.reduce((min, num) => min < num ? min : num)
// console.log(min)
// const sum = arr.reduce((sum, num) => sum + num)
// console.log(sum)
// let average = arr.reduce((ave, num) => ave + num)
// average = average / arr.length
// console.log(average)
// let couples = arr.filter(num => num % 2 !== 0)
// console.log(couples)


// Завдання 7
// let arr = [
//     [-5, 8, 7, 1, 0],
//     [9, 9, -3, -6, -7],
//     [-4, -8, -7, 9, 10],
//     [3, 1, 10, 0, -7],
//     [3, -9, 7, -2, -3]
// ]
// for(let i = 0; i < 5; i++){
//     if(arr[i][i] > 0){
//         arr[i][i] = 1
//     }else if(arr[i][i] < 0){
//         arr[i][i] = 0
//     }
// }
// console.log(arr)


// Завдання 8
// function add(num1, num2){
//     return num1 + num2
// }
// console.log(add(2,8))

// function sub(num1, num2){
//     return num1 - num2
// }
// console.log(sub(2,8))

// function mul(num1, num2){
//     return num1 * num2
// }
// console.log(add(2,8))

// function div(num1, num2){
//     if(num1 !== 0 && num2 !== 0){
//         return num1 / num2
//     }
// }
// console.log(div(5,15))


// Завдання 9
// function numberCheck(num){
//     const arr = [2,5,3,6,9]
//     num > 0 ? console.log("Число позитивне") : console.log("Число негативне")
//     num > 0 && num % num ? console.log("Число просте число") : console.log("Число не просте число")
//     arr.forEach(el =>{
//         num % el === 0 ? console.log(`Число ділиться на ${el} без залишку`) : console.log(`Число не ділиться на ${el} без залишку`)
//     })
// }
// numberCheck(15)


// Завдання 10
// const arr = ["laba4/10",2,5,3,6,9]
// function transformArr(arr){
//     return arr = arr.map(num => typeof num === "number" ? num * num : num)
// }
// console.log(transformArr(arr))


// Завдання 11
// const arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
// function checkArr(arr){
//     return arr = arr.filter((num, index) => {
//         return arr.indexOf(num) === index
//     })
// }
// console.log(checkArr(arr))