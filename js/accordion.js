//1.grab items
const questions = document.querySelectorAll(".question")
const summary = document.querySelectorAll(".summary")
const items = document.querySelectorAll(".divider")

//2.add eventListener to the items
items.forEach((item) => {
    item.addEventListener(("click"), () => {
        item.classList.toggle("active")
    })
})





