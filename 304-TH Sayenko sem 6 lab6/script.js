const langChoice = {
    ua: {
        days: ["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота", "Неділя"],
        numDay: "Введіть номер дня неділі від 1 до 7",
        invalid: "Невірне число!",
    },
    en: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        numDay: "Enter the day number of the week (from 1 to 7)",
        invalid: "Invalid number!",
    }
}

while (true) {
    let lang = prompt("Оберіть мову ua або en").toLowerCase()
    if(langChoice[lang]){
        while(true){
            let numUser = +prompt(langChoice[lang].numDay)
            if(typeof numUser === "number" && numUser >= 1 && numUser <= 7){
                console.log(langChoice[lang].days[numUser - 1])
                break
            }else{
                alert(langChoice[lang].invalid)
            }
        }
        break
    }else{
        alert("Неправильно, введіть ua або en")
    }
}

class PowerPlant {
    constructor(power) {
      this.power = power
    }
  
    getDayPower() {
      return this.power
    }
    getNightPower() {
      return this.power
    }
  }
  
  class SolarPanel {
    constructor(power) {
      this.power = power
    }
  
    getDayPower() {
      return this.power
    }
    getNightPower() {
      return 0;
    }
  }
  
  class ResidentialBuilding {
    constructor(apartments) {
      this.apartments = apartments
    }
  
    getDayPower() {
      return -(this.apartments * 4 / 1000)
    }
    getNightPower() {
      return -(this.apartments * 1 / 1000);
    }
  }
  
  class PowerLine {
    constructor(capacity, price) {
      this.capacity = capacity
      this.price = price
    }
  }
  
  class ElectricityNetwork {
    constructor() {
      this.elements = []
      this.powerLines = []
    }
  
    addElement(element) {
      if (element instanceof PowerLine) {
        this.powerLines.push(element)
      } else {
        this.elements.push(element)
      }
    }
  
    calculateBalance(isDay) {
      let total = 0;
      for (let element of this.elements) {
        total += isDay ? element.getDayPower() : element.getNightPower()
      }
      return total
    }
  
    tradeEnergy(balance) {
      let cost = 0;
      if (balance < 0) {
        cost = Math.abs(balance) * 100
      } else if (balance > 0) {
        cost = -balance * 80
      }
      return cost
    }
  }
  
  let network = new ElectricityNetwork()
  
  network.addElement(new PowerPlant(50))
  network.addElement(new SolarPanel(3))
  network.addElement(new ResidentialBuilding(100))
  network.addElement(new PowerLine(30, 100))
  
  let dayBalance = network.calculateBalance(true)
  let dayCost = network.tradeEnergy(dayBalance)
  
  console.log(`День: баланс = ${dayBalance} МВт, ${dayBalance > 0 ? 'прибуток' : 'витрати'} = ${Math.abs(dayCost)} грн`)
  
  let nightBalance = network.calculateBalance(false)
  let nightCost = network.tradeEnergy(nightBalance)
  
  console.log(`Ніч: баланс = ${nightBalance} МВт, ${nightBalance > 0 ? 'прибуток' : 'витрати'} = ${Math.abs(nightCost)} грн`)