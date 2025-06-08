function startTimer() {
    let timeLeft = 60
    const timerEl = document.getElementById('timer')
    timerEl.innerText = `Залишилося: ${timeLeft}`
    
    const interval = setInterval(() => {
        timeLeft--
        timerEl.innerText = `Залишилося: ${timeLeft}`
        if (timeLeft === 0) {
            clearInterval(interval)
            alert("Програли!")
        }
    }, 1000)

    return interval
}

function createBlock(num, onClick) {
    const div = document.createElement("div")
    div.className = "block"

    const p = document.createElement("p")
    p.innerText = num
    p.style.fontSize = ["20px", "16px", "22px", "28px", "24px"][Math.floor(Math.random() * 5)]
    p.style.color = ["green", "purple", "orange", "teal", "magenta"][Math.floor(Math.random() * 5)]

    div.appendChild(p)
    div.addEventListener("click", () => onClick(div, num))

    return div
}

function startGame() {
    const gameContainer = document.getElementById("game")

    const numbers = []
    for (let i = 1; i <= 25; i++) {
        numbers.push(i)
    }
    numbers.sort(() => Math.random() - 0.5)

    let current = 1
    const timerId = startTimer()

    numbers.forEach(num => {
        const block = createBlock(num, (div, value) => {
            if (value === current) {
                div.style.background = "green"
                current++
                if (value === 25) {
                    clearInterval(timerId)
                    const remaining = parseInt(document.getElementById("timer").innerText.split(": ")[1])
                    const used = 60 - remaining
                    localStorage.setItem(`Гра: ${localStorage.length + 1}`, used)

                    if (confirm("Ви перемогли!\nХочете зіграти ще раз?")) {
                        location.reload()
                    } else {
                        location.href = "/"
                    }
                }
            } else {
                alert(`Це не те число!\nШукайте: ${current}`)
            }
        })
        gameContainer.appendChild(block)
    })
}

function renderResults() {
    const tbody = document.getElementById("tbody")
    const records = Object.entries(localStorage).reverse()

    let minTime = Infinity
    for (let i = 0; i < records.length; i++) {
        const time = Number(records[i][1])
        if (time < minTime) {
            minTime = time
        }
    }

    records.forEach(([key, time]) => {
        const tr = document.createElement("tr")
        if (Number(time) === minTime) {
            tr.style.backgroundColor = "#d4edda"
            tr.style.fontWeight = "bold"
        }

        const tdKey = document.createElement("td")
        tdKey.innerText = key

        const tdTime = document.createElement("td")
        tdTime.innerText = time

        tr.append(tdKey, tdTime)
        tbody.appendChild(tr)
    })
}

document.querySelector("button").addEventListener("click", () => location.reload())
startGame()
renderResults()