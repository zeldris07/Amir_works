// Навигация в DOM
// let p = document.querySelector('p')

// // p.children // все дети
// // p.children[0] // ребенок
// // p.firstElementChild // первый ребенок
// // p.lastElementChild // последний ребенок
// // p.parentNode // Родитель
// // p.previousElementSibling // Брат выше
// // p.nextElementSibling // Брат ниже

// p.parentNode.style.backgroundColor = 'red'

// let buttons = document.querySelectorAll('button')


let tr = document.querySelectorAll('tr')

for(let item of tr) {
    let total = 0

    for(let td of item.children) {
        total += +td.children[0].getAttribute('value')
    }

    item.lastElementChild.children[0].setAttribute('value', )
}
