const main = document.createElement("div")
main.classList.add("main")
document.body.append(main)

const display = document.createElement("p")
display.classList.add("display")
display.addEventListener("click", function(){
    let lastNum = display.textContent.slice(-1)
    display.textContent = display.textContent.slice(0, -1)
    if(lastNum === "."){
        point = false
    }
})

const containerButton = document.createElement("div")
containerButton.classList.add("containerButton")
main.append(display, containerButton)

function calculator(){
    let point = false
    let firstNumber = null
    let secondNumber = null
    const buttons = [ "AC", "+-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "=" ]
    
    for(let nameButton of buttons){
        const button = document.createElement("input")
        button.classList.add("button")
        button.type = "button"
        button.value = nameButton
        
        if(typeof nameButton === "number" || nameButton === "."){
            button.classList.add("darkGray")
            if(nameButton === 0){
                button.classList.add("buttonZero")
            }
            button.addEventListener("click", function(){
                if(nameButton === "."){
                    if(!point && display.textContent.length !== 0){
                        display.textContent += nameButton
                        point = true
                    }
                }else if(display.textContent.length < 12){
                    display.textContent += nameButton
                }
            })
        }else if(nameButton === "AC" || nameButton === "+-" || nameButton === "%"){
            button.classList.add("gray")
            button.addEventListener("click", function(){
                if(nameButton === "AC"){
                    display.textContent = ""
                    firstNumber = null
                    secondNumber = null
                    point = false
                }else if(nameButton === "+-"){
                    if (display.textContent.length !== 0) {
                        if (display.textContent.startsWith("-")) {
                            display.textContent = display.textContent.slice(1)
                        } else {
                            display.textContent = "-" + display.textContent
                        }
                    } else if(firstNumber !== null && secondNumber === null) {
                        firstNumber = -firstNumber
                        display.textContent = firstNumber.toString()
                    } else if(secondNumber !== null) {
                        secondNumber = -secondNumber
                        display.textContent = secondNumber.toString()
                    }
                }else if(display.textContent.length !== 0 && !firstNumber){
                    firstNumber = display.textContent
                    currentOp = nameButton
                    display.textContent = ""
                    point = false
                }
            })
        }else{
            button.classList.add("orange")
            button.addEventListener("click", function(){
                if(nameButton === "="){
                    if(firstNumber === null) {
                        firstNumber = display.textContent
                    } else if(secondNumber === null) {
                        secondNumber = display.textContent
                    }
                    if (firstNumber !== null && secondNumber !== null) {
                        display.textContent = eval(firstNumber + ' ' + currentOp + ' ' + secondNumber)
                        firstNumber = null
                        secondNumber = null
                        point = false
                    }
                }else if(display.textContent.length !== 0 && !firstNumber){
                    firstNumber = display.textContent
                    currentOp = nameButton
                    display.textContent = ""
                    point = false
                }
            })
        }
        containerButton.append(button)
    }
}

calculator()