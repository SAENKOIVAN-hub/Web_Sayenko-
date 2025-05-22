function date(){
    const months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", 
        "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота"]
    const dateNow = new Date()
    return `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}, ${days[dateNow.getDay()]}, ${dateNow.getDate()} ${months[dateNow.getMonth() - 1]} ${dateNow.getFullYear()} року`
}
// console.log(date())

function game(){
    let start = confirm("Чи хочете почати гру?")
    while(start){
        let random = Math.floor(Math.random() * 51)
        let count = 0

        while (start){
            let userNum = +prompt("Введіть число від 0 до 50")
            if(typeof userNum === "number" && userNum >= 0 && userNum <= 50){
                count++
                if(userNum === random){
                    alert(`За ${count} спроб ви вгадали число ${userNum}`)
                    break
                }else{
                    let resultNum = Math.abs(random - userNum)
                    if(resultNum > 9){
                        console.log(`${date()} Спроба ${count}: число ${userNum} - не вірно`)
                        if(!confirm("Ще - холодно до числа. Спробуєте знову?")){
                            break
                        }
                    }else if(resultNum > 4 && resultNum <= 9){
                        console.log(`${date()} Спроба ${count}: число ${userNum} - не вірно`)
                        if(!confirm("Ще - тепліше до числа. Спробуєте знову?")){
                            break
                        }
                    }else if(resultNum > 0 && resultNum <= 4){
                        console.log(`${date()} Спроба ${count}: число ${userNum} - не вірно`)
                        if(!confirm("Гаряче до числа. Спробуєте знову?")){
                            break
                        }
                    }
                }
            }else{
                alert("Неправильні дані")
            }
        }
        let restartGame = confirm("Чи хочете зіграти ще раз?")
        if(!restartGame){
            break
        }
    }
}
game()