// Завдання 1
let num = -100

while(num <= 100){
    if(num > 0){
        console.log(num)
    }
    num++
}


// Завдання 2
let num2 = 0

do {
    if(num2 % 2 === 0){
        console.log(num2)
    }
    num2++
} while (num2 <= 100);


// Завдання 3
let b = 1000
let count = 0

while (b >= 5){
    b = b / 3
    count++
}

let res = b
console.log(`Result: ${res}, Count: ${count}`)


// Завдання 4
let sm = prompt("Введіть довжину у сантиметрах")
alert(`Дюйми: ${sm / 2.54}`)


// Завдання 5
let day = prompt("Уведіть день місяця від 1 до 31")

if(day >= 1 && day <= 31){
    let dayNumber = (day + 3) % 7 // Бо березень розпочинається з суботи

    if(dayNumber === 1){
        alert("Понеділок")
    } else if(dayNumber === 2){
        alert("Вівторок")
    } else if(dayNumber === 3){
        alert("Середа")
    } else if(dayNumber === 4){
        alert("Четверг")
    } else if(dayNumber === 5){
        alert("П'ятниця")
    } else if(dayNumber === 6){
        alert("Субота")
    } else if(dayNumber === 0){
        alert("Неділя")
    }
}