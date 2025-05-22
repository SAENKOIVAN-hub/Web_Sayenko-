// Завдання 1
// document.querySelectorAll("img").forEach(img =>{
//     img.onclick = function(){
//         console.log(img.width)
//     }
// })


// Завдання 2
// document.querySelectorAll("a").forEach(a => {
//     function titleAdd() {
//         a.title = a.href
//     }

//     function removeTitle() {
//         a.removeAttribute("title");
//     }

//     a.addEventListener("mousemove", titleAdd);
//     a.removeEventListener("mouseleave", removeTitle)
// })


// Завдання 3
// document.querySelectorAll("input").forEach(input =>{
//         const demo = document.getElementById("demo")
//         input.addEventListener("click", function(){
//             demo.innerText = input.value
//         })
//     }
// )


// Завдання 4
// document.querySelectorAll("input").forEach(input =>{
//     let check = false
//     input.addEventListener("click", function(){
//         if(check){
//             alert(input.value)
//         }else{
//             check = true
//             console.log(input.value)
//         }
//     })
// })


// Завдання 5
// const numberWords ={
//     "Один": 1,
//     "Два": 2,
//     "Три": 3,
//     "Чотири": 4,
//     "П'ять": 5,
//     "Шість": 6,
//     "Сім": 7,
//     "Вісім": 8,
//     "Дев'ять": 9,
//     "Десять": 10
// }

// document.querySelectorAll("p").forEach(p =>{
//     p.addEventListener("click", function(){
//         let number = numberWords[p.innerText]
//         p.innerText = number * number
//     })
// })


// Завдання 6
// document.querySelectorAll("div").forEach(div =>{
//     function red(){
//         div.style.backgroundColor = "red"
//     }

//     function green(){
//         div.style.backgroundColor = "green"
//     }

//     div.addEventListener("click", function(){
//         if(div.style.backgroundColor === "red"){
//             green()
//         }else{
//             red()
//         }
//     })
// })