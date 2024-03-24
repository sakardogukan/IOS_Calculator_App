const screen = document.querySelector(".screen")
const result = document.querySelector(".result")
const keys = document.querySelector(".keys")

const ac = document.querySelector(".c1")
const numSign = document.querySelector(".c2")
const percent = document.querySelector(".c3")
const div = document.querySelector(".c4")
const multiply = document.querySelector(".c8")
const minus = document.querySelector(".c12")
const plus = document.querySelector(".c16")
const dot = document.querySelector(".c18")
const equals = document.querySelector(".c19")

const numArr = [percent.innerText, div.innerText, multiply.innerText, minus.innerText, plus.innerText, dot.innerText, equals.innerText]
console.log(numArr)

localStorage.setItem("src1", 0)
localStorage.setItem("src2", 0)

console.log(ac.className)
console.log(dot)
console.log(ac.innerText)

let process1 = 0
let process2 = 0

keys.addEventListener("click", (e) => {
    console.log(e)
    ac.addEventListener("click", (e) => {
        localStorage.setItem("src1", "")
        localStorage.setItem("src2", "")
        screen.innerText = ""
        result.innerText = ""
    })

    if (e.target.id && localStorage.getItem("src1").length <= 9) {
        console.log(e.target.textContent)
        screen.innerText += e.target.textContent
        localStorage.setItem("src1", Number(screen.innerText))
    }
    numArr.forEach((p) => {
        if (e.target.innerText == p) {
            console.log(e.target.innerText)
            process1 = Number(localStorage.getItem("src1"))
            process2 += process1
            result.innerText += process2
            // plusProcess()

        }
    })


})

// function plusProcess() {
//     result.innerText = process2
// }